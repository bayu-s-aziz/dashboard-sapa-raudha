<?php

namespace App\Http\Controllers;

use App\Models\LeaveRequest;
use App\Models\Siswa;
use App\Models\Guru;
use App\Models\Kehadiran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class LeaveRequestController extends Controller
{
    /**
     * Display a listing of leave requests
     */
    public function index(Request $request)
    {
        $query = LeaveRequest::with('student', 'reviewer');

        // Filter by status
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }

        // Filter by student
        if ($request->has('student_id') && !empty($request->student_id)) {
            $query->where('student_id', $request->student_id);
        }

        // Filter by date range
        if ($request->has('start_date') && !empty($request->start_date)) {
            $query->whereDate('request_date', '>=', $request->start_date);
        }

        if ($request->has('end_date') && !empty($request->end_date)) {
            $query->whereDate('request_date', '<=', $request->end_date);
        }

        // Search by student name or reason
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('reason', 'like', "%$search%")
                  ->orWhereHas('student', function ($q2) use ($search) {
                      $q2->where('name', 'like', "%$search%")
                        ->orWhere('nisn', 'like', "%$search%");
                  });
            });
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $leaveRequests = $query->orderBy('request_date', 'desc')->paginate($perPage);

        return response()->json($leaveRequests);
    }

    /**
     * Store a newly created leave request
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'student_id' => 'required|exists:students,id',
            'request_date' => 'required|date',
            'reason' => 'required|string',
            'attachment_path' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            // Check if leave request for same date already exists
            $existing = LeaveRequest::where('student_id', $request->student_id)
                ->where('request_date', $request->request_date)
                ->first();

            if ($existing) {
                return response()->json([
                    'message' => 'Permintaan izin untuk tanggal ini sudah ada',
                ], 409);
            }

            $leaveRequest = LeaveRequest::create($request->only([
                'student_id', 'request_date', 'reason', 'attachment_path'
            ]));

            $leaveRequest->load('student', 'reviewer');

            return response()->json([
                'message' => 'Permintaan izin berhasil dibuat',
                'data' => $leaveRequest,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat permintaan izin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified leave request
     */
    public function show($id)
    {
        $leaveRequest = LeaveRequest::with('student', 'reviewer')->find($id);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        return response()->json($leaveRequest);
    }

    /**
     * Update the specified leave request
     */
    public function update(Request $request, $id)
    {
        $leaveRequest = LeaveRequest::find($id);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'request_date' => 'sometimes|date',
            'reason' => 'sometimes|string',
            'attachment_path' => 'sometimes|nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $leaveRequest->update($request->only([
                'request_date', 'reason', 'attachment_path'
            ]));

            $leaveRequest->load('student', 'reviewer');

            return response()->json([
                'message' => 'Permintaan izin berhasil diperbarui',
                'data' => $leaveRequest,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui permintaan izin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified leave request
     */
    public function destroy($id)
    {
        $leaveRequest = LeaveRequest::find($id);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        try {
            $leaveRequest->delete();

            return response()->json([
                'message' => 'Permintaan izin berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus permintaan izin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Approve a leave request
     */
    public function approve(Request $request, $id)
    {
        $leaveRequest = LeaveRequest::find($id);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        if ($leaveRequest->status !== 'pending') {
            return response()->json([
                'message' => 'Hanya permintaan yang pending yang dapat disetujui',
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'reviewed_by' => 'required|exists:gurus,id',
            'review_notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $leaveRequest->approve($request->reviewed_by, $request->review_notes ?? null);
            $leaveRequest->load('student', 'reviewer');

            return response()->json([
                'message' => 'Permintaan izin berhasil disetujui',
                'data' => $leaveRequest,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menyetujui permintaan izin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Reject a leave request
     */
    public function reject(Request $request, $id)
    {
        $leaveRequest = LeaveRequest::find($id);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        if ($leaveRequest->status !== 'pending') {
            return response()->json([
                'message' => 'Hanya permintaan yang pending yang dapat ditolak',
            ], 400);
        }

        $validator = Validator::make($request->all(), [
            'reviewed_by' => 'required|exists:gurus,id',
            'review_notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $leaveRequest->reject($request->reviewed_by, $request->review_notes ?? null);
            $leaveRequest->load('student', 'reviewer');

            return response()->json([
                'message' => 'Permintaan izin berhasil ditolak',
                'data' => $leaveRequest,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menolak permintaan izin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get leave requests by student
     */
    public function getByStudent($studentId, Request $request)
    {
        $student = Siswa::find($studentId);

        if (!$student) {
            return response()->json([
                'message' => 'Siswa tidak ditemukan',
            ], 404);
        }

        $query = $student->leaveRequests();

        // Filter by status
        if ($request->has('status') && !empty($request->status)) {
            $query->where('status', $request->status);
        }

        // Filter by date range
        if ($request->has('start_date') && !empty($request->start_date)) {
            $query->whereDate('request_date', '>=', $request->start_date);
        }

        if ($request->has('end_date') && !empty($request->end_date)) {
            $query->whereDate('request_date', '<=', $request->end_date);
        }

        $leaveRequests = $query->with('reviewer')
            ->orderBy('request_date', 'desc')
            ->get();

        return response()->json([
            'student' => $student,
            'leave_requests' => $leaveRequests,
        ]);
    }

    /**
     * Get pending leave requests
     */
    public function getPending(Request $request)
    {
        $query = LeaveRequest::with('student', 'reviewer')
            ->where('status', 'pending');

        // Filter by date range
        if ($request->has('start_date') && !empty($request->start_date)) {
            $query->whereDate('request_date', '>=', $request->start_date);
        }

        if ($request->has('end_date') && !empty($request->end_date)) {
            $query->whereDate('request_date', '<=', $request->end_date);
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $leaveRequests = $query->orderBy('submitted_at', 'desc')->paginate($perPage);

        return response()->json($leaveRequests);
    }

    /**
     * Get leave request statistics
     */
    public function getStatistics(Request $request)
    {
        $query = LeaveRequest::query();

        // Filter by student if provided
        if ($request->has('student_id') && !empty($request->student_id)) {
            $query->where('student_id', $request->student_id);
        }

        $total = $query->count();
        $pending = (clone $query)->where('status', 'pending')->count();
        $approved = (clone $query)->where('status', 'approved')->count();
        $rejected = (clone $query)->where('status', 'rejected')->count();

        // This month
        $thisMonth = (clone $query)->whereMonth('request_date', now()->month)
            ->whereYear('request_date', now()->year)
            ->count();

        return response()->json([
            'total_requests' => $total,
            'pending' => $pending,
            'approved' => $approved,
            'rejected' => $rejected,
            'this_month' => $thisMonth,
            'approval_percentage' => $total > 0 ? ($approved / $total) * 100 : 0,
        ]);
    }

    /**
     * Bulk approve leave requests
     */
    public function bulkApprove(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ids' => 'required|array',
            'ids.*' => 'exists:leave_requests,id',
            'reviewed_by' => 'required|exists:gurus,id',
            'review_notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $updated = 0;
            $failed = 0;

            foreach ($request->ids as $id) {
                $leaveRequest = LeaveRequest::find($id);

                if ($leaveRequest && $leaveRequest->status === 'pending') {
                    $leaveRequest->approve($request->reviewed_by, $request->review_notes ?? null);
                    $updated++;
                } else {
                    $failed++;
                }
            }

            return response()->json([
                'message' => 'Bulk approve selesai',
                'updated' => $updated,
                'failed' => $failed,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error bulk approve',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Bulk reject leave requests
     */
    public function bulkReject(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ids' => 'required|array',
            'ids.*' => 'exists:leave_requests,id',
            'reviewed_by' => 'required|exists:gurus,id',
            'review_notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $updated = 0;
            $failed = 0;

            foreach ($request->ids as $id) {
                $leaveRequest = LeaveRequest::find($id);

                if ($leaveRequest && $leaveRequest->status === 'pending') {
                    $leaveRequest->reject($request->reviewed_by, $request->review_notes ?? null);
                    $updated++;
                } else {
                    $failed++;
                }
            }

            return response()->json([
                'message' => 'Bulk reject selesai',
                'updated' => $updated,
                'failed' => $failed,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error bulk reject',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Upload attachment for leave request
     */
    public function uploadAttachment(Request $request, $leaveRequestId)
    {
        $leaveRequest = LeaveRequest::find($leaveRequestId);

        if (!$leaveRequest) {
            return response()->json([
                'message' => 'Permintaan izin tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'attachment' => 'required|file|max:5120', // 5MB
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            if ($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                $filename = 'leave_' . $leaveRequest->id . '_' . time() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('leave_requests', $filename, 'public');

                $leaveRequest->update(['attachment_path' => '/storage/' . $path]);
            }

            return response()->json([
                'message' => 'File berhasil diupload',
                'data' => $leaveRequest,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error upload file',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
