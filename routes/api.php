<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\LeaveRequestController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\AuthController;

// Public authentication routes for Flutter / mobile clients
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::get('/auth/logout', [AuthController::class, 'logout']);

// Protect API routes with token-based authentication (Sanctum)
// Move public endpoints outside this group if needed.
Route::middleware([
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum',
])->group(function () {
    Route::get('/user', [AuthController::class, 'user']);

    // User Management Routes
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/statistics', [UserController::class, 'getStatistics']);
        Route::get('/by-role/{role}', [UserController::class, 'getByRole']);
        Route::get('/{id}', [UserController::class, 'show']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::post('/{id}/upload-photo', [UserController::class, 'uploadPhoto']);
    });

    // Student Management Routes
    Route::prefix('students')->group(function () {
        Route::get('/', [StudentController::class, 'index']);
        Route::post('/', [StudentController::class, 'store']);
        Route::get('/statistics', [StudentController::class, 'getStatistics']);
        Route::get('/class/{classId}', [StudentController::class, 'getByClass']);
        // Lookup by NISN (used by mobile clients)
        Route::get('/nisn/{nisn}', [StudentController::class, 'getByNisn']);
        Route::get('/{id}', [StudentController::class, 'show']);
        Route::put('/{id}', [StudentController::class, 'update']);
        Route::delete('/{id}', [StudentController::class, 'destroy']);
        Route::get('/{studentId}/attendance', [StudentController::class, 'getAttendance']);
        Route::post('/{id}/upload-photo', [StudentController::class, 'uploadPhoto']);
    });

    // Teacher Management Routes
    Route::prefix('teachers')->group(function () {
        Route::get('/', [GuruController::class, 'index']);
        Route::post('/', [GuruController::class, 'store']);
        Route::get('/{id}', [GuruController::class, 'show']);
        Route::put('/{id}', [GuruController::class, 'update']);
        Route::delete('/{id}', [GuruController::class, 'destroy']);
        Route::post('/{id}/upload-photo', [GuruController::class, 'uploadPhoto']);
    });

    // Parent Management Routes
    Route::prefix('parents')->group(function () {
        Route::get('/', [ParentController::class, 'index']);
        Route::post('/', [ParentController::class, 'store']);
        Route::get('/{id}', [ParentController::class, 'show']);
        Route::put('/{id}', [ParentController::class, 'update']);
        Route::delete('/{id}', [ParentController::class, 'destroy']);
        Route::post('/{id}/upload-photo', [ParentController::class, 'uploadPhoto']);
        Route::post('/{id}/switch-active-parent', [ParentController::class, 'switchActiveParent']);
    });

    // Announcement Management Routes
    Route::prefix('announcements')->group(function () {
        Route::get('/', [AnnouncementController::class, 'index']);
        Route::post('/', [AnnouncementController::class, 'store']);
        Route::get('/statistics', [AnnouncementController::class, 'getStatistics']);
        Route::get('/class/{classId}', [AnnouncementController::class, 'getByClass']);
        Route::get('/{id}', [AnnouncementController::class, 'show']);
        Route::put('/{id}', [AnnouncementController::class, 'update']);
        Route::delete('/{id}', [AnnouncementController::class, 'destroy']);
        Route::post('/{announcementId}/upload-attachment', [AnnouncementController::class, 'uploadAttachment']);
        Route::delete('/attachments/{attachmentId}', [AnnouncementController::class, 'deleteAttachment']);
    });

    // Attendance Management Routes
    Route::prefix('attendance')->group(function () {
        Route::get('/', [AttendanceController::class, 'index']);
        Route::post('/', [AttendanceController::class, 'store']);
        Route::get('/statistics', [AttendanceController::class, 'getStatistics']);
        Route::post('/bulk-update', [AttendanceController::class, 'bulkUpdate']);
        Route::get('/class-summary', [AttendanceController::class, 'getClassSummary']);
        Route::get('/student/{studentId}/report', [AttendanceController::class, 'getStudentReport']);
        Route::get('/available-students', [AttendanceController::class, 'getAvailableStudents']);
        Route::get('/{id}', [AttendanceController::class, 'show']);
        Route::put('/{id}', [AttendanceController::class, 'update']);
        Route::delete('/{id}', [AttendanceController::class, 'destroy']);
    });

    // Leave Request Management Routes
    Route::prefix('leave-requests')->group(function () {
        Route::get('/', [LeaveRequestController::class, 'index']);
        Route::post('/', [LeaveRequestController::class, 'store']);
        Route::get('/statistics', [LeaveRequestController::class, 'getStatistics']);
        Route::get('/pending', [LeaveRequestController::class, 'getPending']);
        Route::get('/student/{studentId}', [LeaveRequestController::class, 'getByStudent']);
        Route::post('/bulk-approve', [LeaveRequestController::class, 'bulkApprove']);
        Route::post('/bulk-reject', [LeaveRequestController::class, 'bulkReject']);
        Route::get('/{id}', [LeaveRequestController::class, 'show']);
        Route::put('/{id}', [LeaveRequestController::class, 'update']);
        Route::delete('/{id}', [LeaveRequestController::class, 'destroy']);
        Route::post('/{id}/approve', [LeaveRequestController::class, 'approve']);
        Route::post('/{id}/reject', [LeaveRequestController::class, 'reject']);
        Route::post('/{leaveRequestId}/upload-attachment', [LeaveRequestController::class, 'uploadAttachment']);
    });
});
