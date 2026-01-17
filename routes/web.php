<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AttendanceController;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/{id}', [UserController::class, 'show'])->name('users.show');
    Route::get('users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::get('students', [SiswaController::class, 'index'])->name('students.index');
    Route::get('students/{siswa}', [SiswaController::class, 'show'])->name('students.show');
    Route::get('students/{siswa}/edit', [SiswaController::class, 'edit'])->name('students.edit');
    Route::put('students/{siswa}', [SiswaController::class, 'update'])->name('students.update');
    Route::delete('students/{siswa}', [SiswaController::class, 'destroy'])->name('students.destroy');

    Route::get('classes', [KelasController::class, 'index'])->name('classes.index');
    Route::get('classes/{kelas}', [KelasController::class, 'show'])->name('classes.show');
    Route::get('classes/{kelas}/edit', [KelasController::class, 'edit'])->name('classes.edit');
    Route::put('classes/{kelas}', [KelasController::class, 'update'])->name('classes.update');
    Route::delete('classes/{kelas}', [KelasController::class, 'destroy'])->name('classes.destroy');

    Route::get('announcements', [AnnouncementController::class, 'index'])->name('announcements.index');
    Route::get('announcements/create', [AnnouncementController::class, 'create'])->name('announcements.create');
    Route::post('announcements', [AnnouncementController::class, 'store'])->name('announcements.store');
    Route::get('announcements/{pengumuman}', [AnnouncementController::class, 'showInertia'])->name('announcements.show');
    Route::get('announcements/{pengumuman}/edit', [AnnouncementController::class, 'edit'])->name('announcements.edit');
    Route::put('announcements/{pengumuman}', [AnnouncementController::class, 'updateInertia'])->name('announcements.update');
    Route::delete('announcements/{pengumuman}', [AnnouncementController::class, 'destroyInertia'])->name('announcements.destroy');

    Route::get('attendance', [AttendanceController::class, 'indexInertia'])->name('attendance.index');
    Route::get('attendance/create', [AttendanceController::class, 'create'])->name('attendance.create');
    Route::post('attendance', [AttendanceController::class, 'storeInertia'])->name('attendance.store');
    Route::get('attendance/{kehadiran}', [AttendanceController::class, 'showInertia'])->name('attendance.show');
    Route::get('attendance/{kehadiran}/edit', [AttendanceController::class, 'edit'])->name('attendance.edit');
    Route::put('attendance/{kehadiran}', [AttendanceController::class, 'updateInertia'])->name('attendance.update');
    Route::delete('attendance/{kehadiran}', [AttendanceController::class, 'destroyInertia'])->name('attendance.destroy');
    Route::get('attendance/class/{classId}/daily', [AttendanceController::class, 'dailyClassAttendance'])->name('attendance.class.daily');
});

require __DIR__.'/settings.php';
