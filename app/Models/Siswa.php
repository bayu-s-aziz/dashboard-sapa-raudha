<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'nisn',
        'nis',
        'name',
        'class_id',
        'gender',
        'birth_place',
        'birth_date',
        'religion',
        'address',
        'photo_url',
        'qr_code_path',
    ];

    protected $casts = [
        'birth_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the class this student belongs to.
     */
    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'class_id');
    }

    /**
     * Get the parent record for this student.
     */
    public function parent()
    {
        return $this->hasOne(ParentModel::class, 'student_id');
    }

    /**
     * Get attendance records for this student.
     */
    public function attendance()
    {
        return $this->hasMany(Kehadiran::class, 'student_id');
    }

    /**
     * Get leave requests submitted for this student.
     */
    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class, 'student_id');
    }

    /**
     * Scope to filter by gender.
     */
    public function scopeGender($query, $gender)
    {
        return $query->where('gender', $gender);
    }

    /**
     * Scope to filter by class.
     */
    public function scopeInClass($query, $classId)
    {
        return $query->where('class_id', $classId);
    }
}
