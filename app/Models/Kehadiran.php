<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kehadiran extends Model
{
    use HasFactory;

    protected $table = 'attendance';

    public $timestamps = false;

    protected $fillable = [
        'student_id',
        'date',
        'status',
        'check_in',
        'check_out',
        'notes',
        'scanned_by',
    ];

    protected $casts = [
        'date' => 'date',
        'created_at' => 'datetime',
    ];

    /**
     * Get the student for this attendance record.
     */
    public function student()
    {
        return $this->belongsTo(Siswa::class, 'student_id');
    }

    /**
     * Get the guru who scanned this attendance.
     */
    public function scanner()
    {
        return $this->belongsTo(Guru::class, 'scanned_by');
    }

    /**
     * Scope to filter by date.
     */
    public function scopeOnDate($query, $date)
    {
        return $query->whereDate('date', $date);
    }

    /**
     * Scope to filter by status.
     */
    public function scopeWithStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to filter by date range.
     */
    public function scopeDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('date', [$startDate, $endDate]);
    }
}
