<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class KelasController extends Controller
{
    /**
     * Display a listing of classes
     */
    public function index(Request $request)
    {
        $query = Kelas::with('homeroomTeacher', 'students');

        // Filter by group
        if ($request->has('group') && !empty($request->group)) {
            $query->where('group', $request->group);
        }

        // Filter by academic year
        if ($request->has('academic_year') && !empty($request->academic_year)) {
            $query->where('academic_year', $request->academic_year);
        }

        // Search by name
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where('name', 'like', "%$search%");
        }

        $perPage = $request->input('per_page', 15);
        $classes = $query->orderBy('group')->orderBy('name')->paginate($perPage);

        if ($request->wantsJson()) {
            return response()->json($classes);
        }

        // Get unique groups for filter
        $groups = Kelas::select('group')->distinct()->orderBy('group')->pluck('group');

        // Get unique academic years for filter
        $academicYears = Kelas::select('academic_year')->distinct()->orderBy('academic_year', 'desc')->pluck('academic_year');

        return Inertia::render('classes/index', [
            'classes' => $classes,
            'groups' => $groups,
            'academic_years' => $academicYears,
            'filters' => $request->only(['search', 'group', 'academic_year']),
        ]);
    }

    /**
     * Store a newly created class
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'group' => 'required|in:A,B',
            'homeroom_teacher_id' => 'nullable|exists:gurus,id',
            'academic_year' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $kelas = Kelas::create($request->only([
                'name', 'group', 'homeroom_teacher_id', 'academic_year'
            ]));

            $kelas->load('homeroomTeacher');

            return response()->json([
                'message' => 'Kelas berhasil dibuat',
                'data' => $kelas,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat kelas',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified class
     */
    public function show(Kelas $kelas)
    {
        $kelas->load(['homeroomTeacher', 'students.parent']);

        // Ensure the relationships are loaded
        $kelas->homeroomTeacher; // Access to ensure it's loaded
        $kelas->students; // Access to ensure it's loaded

        if (request()->wantsJson()) {
            return response()->json($kelas);
        }

        return Inertia::render('classes/show', [
            'class' => $kelas,
        ]);
    }

    /**
     * Show the form for editing the specified class
     */
    public function edit(Kelas $kelas)
    {
        $kelas->load('homeroomTeacher');
        $gurus = Guru::orderBy('name')->get();

        if (request()->wantsJson()) {
            return response()->json([
                'class' => $kelas,
                'gurus' => $gurus,
            ]);
        }

        return Inertia::render('classes/edit', [
            'class' => $kelas,
            'gurus' => $gurus,
        ]);
    }

    /**
     * Update the specified class
     */
    public function update(Request $request, Kelas $kelas)
    {
        // Convert "none" to null for homeroom_teacher_id
        $data = $request->all();
        if (isset($data['homeroom_teacher_id']) && $data['homeroom_teacher_id'] === 'none') {
            $data['homeroom_teacher_id'] = null;
        }

        $validator = Validator::make($data, [
            'name' => 'sometimes|string|max:50',
            'group' => 'sometimes|in:A,B',
            'homeroom_teacher_id' => 'nullable|exists:gurus,id',
            'academic_year' => 'sometimes|string|max:20',
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                // For Inertia requests, return validation errors as JSON
                return response()->json($validator->errors(), 422);
            }
            return redirect()->back()->withErrors($validator)->withInput();
        }

        try {
            $kelas->update([
                'name' => $data['name'] ?? $kelas->name,
                'group' => $data['group'] ?? $kelas->group,
                'homeroom_teacher_id' => $data['homeroom_teacher_id'],
                'academic_year' => $data['academic_year'] ?? $kelas->academic_year,
            ]);

            $kelas->load('homeroomTeacher');

            if ($request->header('X-Inertia')) {
                // For Inertia requests, redirect to the classes index page with success message
                return redirect()->route('classes.index')->with('success', 'Data kelas berhasil diperbarui');
            }

            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'Kelas berhasil diperbarui',
                    'data' => $kelas,
                ]);
            }

            return redirect()->route('classes.show', $kelas)
                ->with('success', 'Data kelas berhasil diperbarui');
        } catch (\Exception $e) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error memperbarui kelas: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error memperbarui kelas',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified class
     */
    public function destroy(Kelas $kelas)
    {
        $kelas->delete();

        if (request()->wantsJson()) {
            return response()->json([
                'message' => 'Kelas berhasil dihapus',
            ]);
        }

        return redirect()->route('classes.index')
            ->with('success', 'Kelas berhasil dihapus');
    }

    /**
     * Get students in a specific class
     */
    public function getStudents(Kelas $kelas)
    {
        $kelas->load('students.parent');

        return response()->json([
            'kelas' => $kelas->only(['id', 'name', 'group', 'academic_year']),
            'students' => $kelas->students,
            'total_students' => $kelas->students->count(),
        ]);
    }

    /**
     * Get class statistics
     */
    public function getStatistics()
    {
        return response()->json([
            'total_classes' => Kelas::count(),
            'total_students' => Siswa::count(),
            'classes_by_group' => Kelas::selectRaw('group, COUNT(*) as count')
                ->groupBy('group')
                ->orderBy('group')
                ->get(),
        ]);
    }

    /**
     * Add a new academic year
     */
    public function addAcademicYear(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'academic_year' => 'required|string|max:20|regex:/^\d{4}\/\d{4}$/',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Check if academic year already exists
        if (Kelas::where('academic_year', $request->academic_year)->exists()) {
            return back()->withErrors(['academic_year' => 'Tahun ajaran ini sudah ada.'])->withInput();
        }

        return back()->with('success', 'Tahun ajaran baru berhasil ditambahkan. Sekarang Anda dapat membuat kelas untuk tahun ajaran ini.');
    }
}
