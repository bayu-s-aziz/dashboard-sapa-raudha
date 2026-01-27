<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use App\Models\Kelas;
use App\Models\ParentModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of students
     */
    public function index(Request $request)
    {
        $query = Siswa::with('kelas', 'parent.user');

        // Filter by class group (Kelompok A/B)
        if ($request->has('group') && !empty($request->group)) {
            $groups = array_map('trim', explode(',', $request->group));
            $query->whereHas('kelas', function ($q) use ($groups) {
                $q->whereIn('group', $groups);
            });
        }

        // Filter by class
        if ($request->has('class_id') && !empty($request->class_id)) {
            $query->where('class_id', $request->class_id);
        }

        // Filter by gender
        if ($request->has('gender') && !empty($request->gender)) {
            $query->where('gender', $request->gender);
        }

        // Search by name or NISN
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('nisn', 'like', "%$search%")
                  ->orWhere('nis', 'like', "%$search%");
            });
        }

        // Get students with today's attendance status
        $students = $query->orderBy('name')->get()->map(function ($student) {
            $today = now()->toDateString();
            $attendance = $student->attendance()->where('date', $today)->first();
            $student->daily_status = $attendance ? $attendance->status : null;
            // Attach class_name and nis for API consumers
            $student->class_name = $student->kelas ? $student->kelas->name : null;
            $student->nis = $student->nis ?? null;
            return $student;
        });

        // Manual pagination since we modified the collection
        $perPage = $request->input('per_page', 15);
        $page = $request->input('page', 1);
        $paginated = new \Illuminate\Pagination\LengthAwarePaginator(
            $students->forPage($page, $perPage),
            $students->count(),
            $perPage,
            $page,
            ['path' => $request->url(), 'pageName' => 'page']
        );

        return response()->json($paginated);
    }

    /**
     * Store a newly created student in storage
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nisn' => 'required|unique:students,nisn|string|max:20',
            'nis' => 'nullable|string|max:20',
            'name' => 'required|string|max:100',
            'class_id' => 'required|exists:classes,id',
            'gender' => 'required|in:L,P',
            'birth_place' => 'nullable|string|max:100',
            'birth_date' => 'nullable|date',
            'religion' => 'nullable|string|max:50',
            'address' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $student = Siswa::create($request->only([
                'nisn', 'nis', 'name', 'class_id', 'gender',
                'birth_place', 'birth_date', 'religion', 'address'
            ]));

            // Load relationships
            // Normalize relationships to use correct names and include parent.user for API
            $student->load('kelas', 'parent', 'parent.user');

            return response()->json([
                'message' => 'Siswa berhasil dibuat',
                'data' => $student,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat siswa',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified student
     */
    public function show($id)
    {
        $student = Siswa::with('kelas', 'parent.user', 'attendance', 'leaveRequests')
            ->find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        // Add class_name for API consumers
        $student->class_name = $student->kelas ? $student->kelas->name : null;

        return response()->json($student);
    }

    /**
     * Update the specified student in storage
     */
    public function update(Request $request, $id)
    {
        $student = Siswa::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nisn' => 'sometimes|unique:students,nisn,' . $id . '|string|max:20',
            'nis' => 'sometimes|nullable|string|max:20',
            'name' => 'sometimes|string|max:100',
            'class_id' => 'sometimes|exists:classes,id',
            'gender' => 'sometimes|in:L,P',
            'birth_place' => 'sometimes|nullable|string|max:100',
            'birth_date' => 'sometimes|nullable|date',
            'religion' => 'sometimes|nullable|string|max:50',
            'address' => 'sometimes|nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $student->update($request->only([
                'nisn', 'nis', 'name', 'class_id', 'gender',
                'birth_place', 'birth_date', 'religion', 'address'
            ]));

            // Normalize relationships to use correct names and include parent.user for API
            $student->load('kelas', 'parent', 'parent.user');

            return response()->json([
                'message' => 'Siswa berhasil diperbarui',
                'data' => $student,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui siswa',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified student from storage
     */
    public function destroy($id)
    {
        $student = Siswa::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        try {
            $student->delete();

            return response()->json([
                'message' => 'Siswa berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus siswa',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get students by class
     */
    public function getByClass($classId)
    {
        $class = Kelas::find($classId);

        if (!$class) {
            return response()->json([
                'message' => 'Kelas tidak ditemukan',
            ], 404);
        }

        $students = $class->students()->orderBy('name')->get();

        return response()->json($students);
    }

    /**
     * Get student statistics
     */
    public function getStatistics()
    {
        return response()->json([
            'total_students' => Siswa::count(),
            'male_students' => Siswa::where('gender', 'L')->count(),
            'female_students' => Siswa::where('gender', 'P')->count(),
            'students_by_class' => Kelas::with('students')->get()->map(function ($class) {
                return [
                    'class_id' => $class->id,
                    'class_name' => $class->name,
                    'count' => $class->students()->count(),
                ];
            }),
        ]);
    }

    /**
     * Get student by NISN
     */
    public function getByNisn($nisn)
    {
        $student = Siswa::with('kelas', 'parent.user', 'attendance', 'leaveRequests')
            ->where('nisn', $nisn)
            ->first();

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        // Add class_name for API consumers
        $student->class_name = $student->kelas ? $student->kelas->name : null;

        return response()->json($student);
    }

    /**
     * Get student attendance record
     */
    public function getAttendance($studentId, Request $request)
    {
        $student = Siswa::find($studentId);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        $query = $student->attendance();

        // Filter by month
        if ($request->has('month') && !empty($request->month)) {
            $month = $request->month;
            $query->whereMonth('date', date('m', strtotime($month . '-01')))
                  ->whereYear('date', date('Y', strtotime($month . '-01')));
        }

        $attendance = $query->orderBy('date', 'desc')->get();

        return response()->json([
            'student' => $student,
            'attendance' => $attendance,
            'attendance_percentage' => $student->getAttendancePercentage(),
        ]);
    }

    /**
     * Upload student photo
     */
    public function uploadPhoto(Request $request, $id)
    {
        $student = Siswa::find($id);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            if ($request->hasFile('photo')) {
                $file = $request->file('photo');
                $filename = 'student_' . $id . '_' . time() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('photos/students', $filename, 'public');

                // Store relative path without /storage/ prefix
                $student->update(['photo_url' => $path]);
            }

            return response()->json([
                'message' => 'Foto berhasil diupload',
                'data' => $student,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error upload foto',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
