<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = [
        'name',
        'group',
        'homeroom_teacher_id',
        'academic_year',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    /**
     * Get the homeroom teacher for this class.
     */
    public function homeroomTeacher()
    {
        return $this->belongsTo(Guru::class, 'homeroom_teacher_id');
    }

    /**
     * Get the students in this class.
     */
    public function students()
    {
        return $this->hasMany(Siswa::class, 'class_id');
    }

    /**
     * Get the academic year for this class.
     */
    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class, 'academic_year', 'year');
    }
}
