<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    use HasFactory;

    protected $table = 'gurus';

    protected $fillable = [
        'nik',
        'name',
        'email',
        'phone',
        'role',
        'subject',
        'password_hash',
        'photo_url',
    ];

    protected $hidden = [
        'password_hash',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user record associated with the guru.
     */
    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    /**
     * Get the classes where this guru is the homeroom teacher.
     */
    public function homeroomClasses()
    {
        return $this->hasMany(Kelas::class, 'homeroom_teacher_id');
    }

    /**
     * Get announcements created by this guru.
     */
    public function announcements()
    {
        return $this->hasMany(Pengumuman::class, 'author_id')->where('author_type', 'guru');
    }

    /**
     * Get attendance records scanned by this guru.
     */
    public function scannedAttendance()
    {
        return $this->hasMany(Kehadiran::class, 'scanned_by');
    }

    /**
     * Get leave requests reviewed by this guru.
     */
    public function reviewedLeaveRequests()
    {
        return $this->hasMany(LeaveRequest::class, 'reviewed_by');
    }

    /**
     * Get password reset requests processed by this guru.
     */
    public function processedPasswordResets()
    {
        return $this->hasMany(PasswordResetRequest::class, 'processed_by');
    }

    // Scopes
    public function scopeAdmin($query)
    {
        return $query->where('role', 'admin');
    }

    public function scopeTeacher($query)
    {
        return $query->where('role', 'guru');
    }

    public function scopeHeadmaster($query)
    {
        return $query->where('role', 'kepsek');
    }

    // Helper methods
    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    public function isTeacher()
    {
        return $this->role === 'guru';
    }

    public function isHeadmaster()
    {
        return $this->role === 'kepsek';
    }
}
