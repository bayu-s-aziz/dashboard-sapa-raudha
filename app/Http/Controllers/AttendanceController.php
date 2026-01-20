<?php

namespace App\Http\Controllers;

use App\Models\Kehadiran;
use App\Models\Siswa;
use App\Models\Guru;
use App\Models\Kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    /**
     * Display a listing of attendance records
     */
    public function index(Request $request)
    {
        $query = Kehadiran::with('student', 'scanner');

        // Filter by student
        if ($request->has('student_id') && !empty($request->student_id)) {
            $query->where('student_id', $request->student_id);
        }

        // Filter by status
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }

        // Filter by date range
        if ($request->has('start_date') && !empty($request->start_date)) {
            $query->whereDate('date', '>=', $request->start_date);
        }

        if ($request->has('end_date') && !empty($request->end_date)) {
            $query->whereDate('date', '<=', $request->end_date);
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $attendance = $query->orderBy('date', 'desc')->paginate($perPage);

        return response()->json($attendance);
    }

    /**
     * Store a newly created attendance record
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'student_id' => 'required|exists:students,id',
            'date' => 'required|date',
            'status' => 'required|in:hadir,sakit,izin,alpa',
            'check_in' => 'nullable|regex:/^(\d{2}:\d{2})?$/',
            'check_out' => 'nullable|regex:/^(\d{2}:\d{2})?$/',
            'notes' => 'nullable|string',
            'scanned_by' => 'nullable|exists:gurus,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            // Check if attendance for this student and date already exists
            $existing = Kehadiran::where('student_id', $request->student_id)
                ->where('date', $request->date)
                ->first();

            if ($existing) {
                return response()->json([
                    'message' => 'Presensi untuk siswa dan tanggal ini sudah ada',
                ], 409);
            }

            $attendance = Kehadiran::create($request->only([
                'student_id', 'date', 'status', 'check_in', 'check_out', 'notes', 'scanned_by'
            ]));

            $attendance->load('student', 'scanner');

            return response()->json([
                'message' => 'Presensi berhasil dibuat',
                'data' => $attendance,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified attendance record
     */
    public function show($id)
    {
        $attendance = Kehadiran::with('student', 'scanner')->find($id);

        if (!$attendance) {
            return response()->json([
                'message' => 'Presensi tidak ditemukan',
            ], 404);
        }

        return response()->json($attendance);
    }

    /**
     * Update the specified attendance record
     */
    public function update(Request $request, $id)
    {
        $attendance = Kehadiran::find($id);

        if (!$attendance) {
            return response()->json([
                'message' => 'Presensi tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'sometimes|in:hadir,sakit,izin,alpa',
            'check_in' => 'sometimes|nullable|date_format:H:i:s',
            'check_out' => 'sometimes|nullable|date_format:H:i:s',
            'notes' => 'sometimes|nullable|string',
            'scanned_by' => 'sometimes|nullable|exists:gurus,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $attendance->update($request->only([
                'status', 'check_in', 'check_out', 'notes', 'scanned_by'
            ]));

            $attendance->load('student', 'scanner');

            return response()->json([
                'message' => 'Presensi berhasil diperbarui',
                'data' => $attendance,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified attendance record
     */
    public function destroy($id)
    {
        $attendance = Kehadiran::find($id);

        if (!$attendance) {
            return response()->json([
                'message' => 'Presensi tidak ditemukan',
            ], 404);
        }

        try {
            $attendance->delete();

            return response()->json([
                'message' => 'Presensi berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get attendance report for a student
     */
    public function getStudentReport($studentId, Request $request)
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
            $date = Carbon::createFromFormat('Y-m', $request->month);
            $query->whereMonth('date', $date->month)
                  ->whereYear('date', $date->year);
        }

        $attendance = $query->orderBy('date')->get();

        // Calculate statistics
        $totalDays = $attendance->count();
        $presentDays = $attendance->where('status', 'hadir')->count();
        $sickDays = $attendance->where('status', 'sakit')->count();
        $permittedDays = $attendance->where('status', 'izin')->count();
        $absentDays = $attendance->where('status', 'alpa')->count();

        return response()->json([
            'student' => $student,
            'attendance_records' => $attendance,
            'statistics' => [
                'total_days' => $totalDays,
                'present_days' => $presentDays,
                'sick_days' => $sickDays,
                'permitted_days' => $permittedDays,
                'absent_days' => $absentDays,
                'attendance_percentage' => $totalDays > 0 ? ($presentDays / $totalDays) * 100 : 0,
            ],
        ]);
    }

    /**
     * Bulk update attendance for a class on a specific date
     */
    public function bulkUpdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'class_id' => 'required|exists:classes,id',
            'date' => 'required|date',
            'records' => 'required|array',
            'records.*.student_id' => 'required|exists:students,id',
            'records.*.status' => 'required|in:hadir,sakit,izin,alpa',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $created = 0;
            $updated = 0;

            foreach ($request->records as $record) {
                $attendance = Kehadiran::firstOrCreate(
                    [
                        'student_id' => $record['student_id'],
                        'date' => $request->date,
                    ],
                    [
                        'status' => $record['status'],
                        'notes' => $record['notes'] ?? null,
                        'scanned_by' => $record['scanned_by'] ?? null,
                    ]
                );

                if ($attendance->wasRecentlyCreated) {
                    $created++;
                } else {
                    $attendance->update([
                        'status' => $record['status'],
                        'notes' => $record['notes'] ?? $attendance->notes,
                    ]);
                    $updated++;
                }
            }

            return response()->json([
                'message' => 'Presensi berhasil diperbarui',
                'created' => $created,
                'updated' => $updated,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error update presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get attendance summary by class and date
     */
    public function getClassSummary(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'class_id' => 'required|exists:classes,id',
            'date' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $attendance = Kehadiran::whereDate('date', $request->date)
            ->whereHas('student', function ($query) use ($request) {
                $query->where('class_id', $request->class_id);
            })
            ->with('student')
            ->get();

        $summary = [
            'total_students' => Siswa::where('class_id', $request->class_id)->count(),
            'present' => $attendance->where('status', 'hadir')->count(),
            'sick' => $attendance->where('status', 'sakit')->count(),
            'permitted' => $attendance->where('status', 'izin')->count(),
            'absent' => $attendance->where('status', 'alpa')->count(),
            'not_recorded' => Siswa::where('class_id', $request->class_id)->count() - $attendance->count(),
            'records' => $attendance,
        ];

        return response()->json($summary);
    }

    /**
     * Get attendance statistics
     */
    public function getStatistics(Request $request)
    {
        $query = Kehadiran::query();

        if ($request->has('class_id') && !empty($request->class_id)) {
            $query->whereHas('student', function ($q) use ($request) {
                $q->where('class_id', $request->class_id);
            });
        }

        $total = $query->count();
        $present = (clone $query)->where('status', 'hadir')->count();
        $sick = (clone $query)->where('status', 'sakit')->count();
        $permitted = (clone $query)->where('status', 'izin')->count();
        $absent = (clone $query)->where('status', 'alpa')->count();

        return response()->json([
            'total_records' => $total,
            'present' => $present,
            'sick' => $sick,
            'permitted' => $permitted,
            'absent' => $absent,
            'present_percentage' => $total > 0 ? ($present / $total) * 100 : 0,
        ]);
    }

    /**
     * Display attendance records (Inertia version)
     */
    public function indexInertia(Request $request)
    {
        $query = Kehadiran::with('student', 'scanner');

        // Filter by student
        if ($request->has('student_id') && !empty($request->student_id)) {
            $query->where('student_id', $request->student_id);
        }

        // Filter by status
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }

        // Filter by date range
        if ($request->has('start_date') && !empty($request->start_date)) {
            $query->whereDate('date', '>=', $request->start_date);
        }

        if ($request->has('end_date') && !empty($request->end_date)) {
            $query->whereDate('date', '<=', $request->end_date);
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $attendance = $query->orderBy('date', 'desc')->paginate($perPage);

        // Get filter options
        $students = Siswa::orderBy('name')->get();
        $statuses = ['hadir', 'sakit', 'izin', 'alpa'];

        return Inertia::render('attendance/index', [
            'attendance' => $attendance,
            'students' => $students,
            'statuses' => $statuses,
            'filters' => $request->only(['student_id', 'status', 'start_date', 'end_date']),
        ]);
    }

    /**
     * Display attendance reports (Inertia version)
     */
    public function reports(Request $request)
    {
        $periodType = $request->get('period_type', 'weekly');
        $periodDate = $request->get('period_date', now()->toDateString());
        $classId = $request->get('class_id');

        // Calculate period range based on type
        if ($periodType === 'weekly') {
            $startDate = Carbon::parse($periodDate)->startOfWeek();
            $endDate = Carbon::parse($periodDate)->endOfWeek();
            $period = $startDate->format('Y-\WW');
        } else { // monthly
            $startDate = Carbon::parse($periodDate)->startOfMonth();
            $endDate = Carbon::parse($periodDate)->endOfMonth();
            $period = $startDate->format('Y-m');
        }

        // Get students - filter by class if specified
        $studentsQuery = Siswa::with('kelas');
        if ($classId && $classId !== 'all') {
            $studentsQuery->where('class_id', $classId);
        }
        $students = $studentsQuery->get();

        $summary = [];

        foreach ($students as $student) {
            // Get attendance data for this student within the period
            $attendanceData = Kehadiran::where('student_id', $student->id)
                ->whereBetween('date', [$startDate, $endDate])
                ->get();

            $statusCounts = [
                'hadir' => 0,
                'sakit' => 0,
                'izin' => 0,
                'alpa' => 0,
            ];

            // Count attendance by status
            foreach ($attendanceData as $record) {
                if (isset($statusCounts[$record->status])) {
                    $statusCounts[$record->status]++;
                }
            }

            $summary[] = [
                'student' => [
                    'id' => $student->id,
                    'name' => $student->name,
                    'nis' => $student->nis,
                ],
                'period' => $period,
                'period_type' => $periodType,
                'hadir' => $statusCounts['hadir'],
                'sakit' => $statusCounts['sakit'],
                'izin' => $statusCounts['izin'],
                'alpa' => $statusCounts['alpa'],
            ];
        }

        // Sort by student name
        usort($summary, function($a, $b) {
            return strcmp($a['student']['name'], $b['student']['name']);
        });

        // Get filter options
        $classes = Kelas::with('homeroomTeacher')->orderBy('name')->get();

        return Inertia::render('attendance/reports', [
            'attendance_summary' => $summary,
            'classes' => $classes,
            'filters' => $request->only(['period_type', 'period_date', 'class_id']),
        ]);
    }

    /**
     * Export attendance reports data (JSON API)
     */
    public function exportReports(Request $request)
    {
        $periodType = $request->get('period_type', 'weekly');
        $periodDate = $request->get('period_date', now()->toDateString());
        $classId = $request->get('class_id');

        // Calculate period range based on type
        if ($periodType === 'weekly') {
            $startDate = Carbon::parse($periodDate)->startOfWeek();
            $endDate = Carbon::parse($periodDate)->endOfWeek();
            $period = $startDate->format('Y-\WW');
        } else { // monthly
            $startDate = Carbon::parse($periodDate)->startOfMonth();
            $endDate = Carbon::parse($periodDate)->endOfMonth();
            $period = $startDate->format('Y-m');
        }

        // Get students - filter by class if specified
        $studentsQuery = Siswa::with('kelas');
        if ($classId && $classId !== 'all') {
            $studentsQuery->where('class_id', $classId);
        }
        $students = $studentsQuery->get();

        $summary = [];

        foreach ($students as $student) {
            // Get attendance data for this student within the period
            $attendanceData = Kehadiran::where('student_id', $student->id)
                ->whereBetween('date', [$startDate, $endDate])
                ->get();

            $statusCounts = [
                'hadir' => 0,
                'sakit' => 0,
                'izin' => 0,
                'alpa' => 0,
            ];

            // Count attendance by status
            foreach ($attendanceData as $record) {
                if (isset($statusCounts[$record->status])) {
                    $statusCounts[$record->status]++;
                }
            }

            $summary[] = [
                'student' => [
                    'id' => $student->id,
                    'name' => $student->name,
                    'nis' => $student->nis,
                ],
                'period' => $period,
                'period_type' => $periodType,
                'hadir' => $statusCounts['hadir'],
                'sakit' => $statusCounts['sakit'],
                'izin' => $statusCounts['izin'],
                'alpa' => $statusCounts['alpa'],
            ];
        }

        // Sort by student name
        usort($summary, function($a, $b) {
            return strcmp($a['student']['name'], $b['student']['name']);
        });

        // Get filter options
        $classes = Kelas::with('homeroomTeacher')->orderBy('name')->get();

        return response()->json([
            'attendance_summary' => $summary,
            'classes' => $classes,
            'filters' => $request->only(['period_type', 'period_date', 'class_id']),
        ]);
    }

    /**
    private function indexSummary(Request $request)
    {
        $periodType = $request->get('period_type', 'weekly');
        $periodDate = $request->get('period_date', now()->toDateString());
        $classId = $request->get('class_id');

        // Calculate period range based on type
        if ($periodType === 'weekly') {
            $startDate = Carbon::parse($periodDate)->startOfWeek();
            $endDate = Carbon::parse($periodDate)->endOfWeek();
            $period = $startDate->format('Y-\WW');
        } else { // monthly
            $startDate = Carbon::parse($periodDate)->startOfMonth();
            $endDate = Carbon::parse($periodDate)->endOfMonth();
            $period = $startDate->format('Y-m');
        }

        // Get students - filter by class if specified
        $studentsQuery = Siswa::with('kelas');
        if ($classId && $classId !== 'all') {
            $studentsQuery->where('class_id', $classId);
        }
        $students = $studentsQuery->get();

        $summary = [];

        foreach ($students as $student) {
            // Get attendance data for this student within the period
            $attendanceData = Kehadiran::where('student_id', $student->id)
                ->whereBetween('date', [$startDate, $endDate])
                ->get();

            $statusCounts = [
                'hadir' => 0,
                'sakit' => 0,
                'izin' => 0,
                'alpa' => 0,
            ];

            // Count attendance by status
            foreach ($attendanceData as $record) {
                if (isset($statusCounts[$record->status])) {
                    $statusCounts[$record->status]++;
                }
            }

            $summary[] = [
                'student' => [
                    'id' => $student->id,
                    'name' => $student->name,
                    'nis' => $student->nis,
                ],
                'period' => $period,
                'period_type' => $periodType,
                'hadir' => $statusCounts['hadir'],
                'sakit' => $statusCounts['sakit'],
                'izin' => $statusCounts['izin'],
                'alpa' => $statusCounts['alpa'],
            ];
        }

        // Sort by student name
        usort($summary, function($a, $b) {
            return strcmp($a['student']['name'], $b['student']['name']);
        });

        // Get filter options
        $studentsList = Siswa::orderBy('name')->get();
        $classes = Kelas::orderBy('name')->get();
        $statuses = ['hadir', 'sakit', 'izin', 'alpa'];

        return Inertia::render('attendance/index', [
            'attendance' => (object)['data' => []], // Empty paginated object for detail view
            'attendance_summary' => $summary,
            'students' => $studentsList,
            'classes' => $classes,
            'statuses' => $statuses,
            'filters' => $request->only(['student_id', 'status', 'start_date', 'end_date', 'view_mode', 'period_type', 'period_date', 'class_id']),
        ]);
    }

    /**
     * Show form for creating attendance (Inertia version)
     */
    public function create()
    {
        $students = Siswa::orderBy('name')->get();
        $gurus = Guru::orderBy('name')->get();

        return Inertia::render('attendance/create', [
            'students' => $students,
            'gurus' => $gurus,
        ]);
    }

    /**
     * Store attendance record (Inertia version)
     */
    public function storeInertia(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'student_id' => 'required|exists:students,id',
            'date' => 'required|date',
            'status' => 'required|in:hadir,sakit,izin,alpa',
            'check_in' => 'nullable|regex:/^(\d{2}:\d{2})?$/',
            'check_out' => 'nullable|regex:/^(\d{2}:\d{2})?$/',
            'notes' => 'nullable|string',
            'scanned_by' => 'nullable|exists:gurus,id',
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            return response()->json($validator->errors(), 422);
        }

        try {
            // Check if attendance for this student and date already exists
            $existing = Kehadiran::where('student_id', $request->student_id)
                ->where('date', $request->date)
                ->first();

            if ($existing) {
                if ($request->header('X-Inertia')) {
                    return redirect()->back()->withErrors(['date' => 'Presensi untuk siswa dan tanggal ini sudah ada'])->withInput();
                }
                return response()->json([
                    'message' => 'Presensi untuk siswa dan tanggal ini sudah ada',
                ], 409);
            }

            $data = $request->only([
                'student_id', 'date', 'status', 'check_in', 'check_out', 'notes', 'scanned_by'
            ]);

            // Convert string IDs to integers
            $data['student_id'] = (int) $data['student_id'];
            if ($data['scanned_by']) {
                $data['scanned_by'] = (int) $data['scanned_by'];
            }

            // Convert empty strings to null for time fields
            $data['check_in'] = $data['check_in'] ?: null;
            $data['check_out'] = $data['check_out'] ?: null;
            $data['scanned_by'] = $data['scanned_by'] ?: null;

            $attendance = Kehadiran::create($data);

            if ($request->header('X-Inertia')) {
                return redirect()->route('attendance.show', $attendance)->with('success', 'Presensi berhasil dibuat');
            }

            return response()->json([
                'message' => 'Presensi berhasil dibuat',
                'data' => $attendance,
            ], 201);
        } catch (\Exception $e) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error membuat presensi: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error membuat presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display attendance record (Inertia version)
     */
    public function showInertia(Kehadiran $kehadiran)
    {
        $kehadiran->load(['student', 'scanner']);

        if (request()->wantsJson()) {
            return response()->json($kehadiran);
        }

        return Inertia::render('attendance/show', [
            'attendance' => $kehadiran,
        ]);
    }

    /**
     * Show form for editing attendance (Inertia version)
     */
    public function edit(Kehadiran $kehadiran)
    {
        $kehadiran->load('student', 'scanner');
        $students = Siswa::orderBy('name')->get();
        $gurus = Guru::orderBy('name')->get();

        return Inertia::render('attendance/edit', [
            'attendance' => $kehadiran,
            'students' => $students,
            'gurus' => $gurus,
        ]);
    }

    /**
     * Update attendance record (Inertia version)
     */
    public function updateInertia(Request $request, Kehadiran $kehadiran)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'sometimes|in:hadir,sakit,izin,alpa',
            'check_in' => 'sometimes|nullable|date_format:H:i:s',
            'check_out' => 'sometimes|nullable|date_format:H:i:s',
            'notes' => 'sometimes|nullable|string',
            'scanned_by' => 'sometimes|nullable|exists:gurus,id',
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            return response()->json($validator->errors(), 422);
        }

        try {
            $kehadiran->update($request->only([
                'status', 'check_in', 'check_out', 'notes', 'scanned_by'
            ]));

            $kehadiran->load('student', 'scanner');

            if ($request->header('X-Inertia')) {
                return redirect()->route('attendance.show', $kehadiran)->with('success', 'Presensi berhasil diperbarui');
            }

            return response()->json([
                'message' => 'Presensi berhasil diperbarui',
                'data' => $kehadiran,
            ]);
        } catch (\Exception $e) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error memperbarui presensi: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error memperbarui presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete attendance record (Inertia version)
     */
    public function destroyInertia(Kehadiran $kehadiran)
    {
        try {
            $kehadiran->delete();

            if (request()->header('X-Inertia')) {
                return redirect()->route('attendance.index')->with('success', 'Presensi berhasil dihapus');
            }

            return response()->json([
                'message' => 'Presensi berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            if (request()->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Error menghapus presensi: ' . $e->getMessage());
            }

            return response()->json([
                'message' => 'Error menghapus presensi',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show daily attendance form for a class
     */
    public function dailyClassAttendance($classId)
    {
        $class = Kelas::with('students')->findOrFail($classId);
        $today = Carbon::today()->toDateString();

        // Get existing attendance for today
        $existingAttendance = Kehadiran::whereDate('date', $today)
            ->whereHas('student', function ($query) use ($classId) {
                $query->where('class_id', $classId);
            })
            ->with('student')
            ->get()
            ->keyBy('student_id');

        $gurus = Guru::orderBy('name')->get();

        return Inertia::render('attendance/daily-class', [
            'class' => $class,
            'date' => $today,
            'existingAttendance' => $existingAttendance,
            'gurus' => $gurus,
        ]);
    }
}
