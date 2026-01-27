<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    use HasFactory;

    // This model uses custom timestamps `submitted_at` and `reviewed_at`.
    // Disable default Eloquent timestamps to avoid inserting created_at/updated_at.
    public $timestamps = false;

    protected $table = 'leave_requests';

    protected $fillable = [
        'student_id',
        'request_date',
        'reason',
        'attachment_path',
        'status',
        'reviewed_by',
        'review_notes',
    ];

    protected $casts = [
        'request_date' => 'date',
        'submitted_at' => 'datetime',
        'reviewed_at' => 'datetime',
    ];

    // Relationships
    public function student()
    {
        return $this->belongsTo(Siswa::class, 'student_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(Guru::class, 'reviewed_by');
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    public function scopeRejected($query)
    {
        return $query->where('status', 'rejected');
    }

    public function scopeByStudent($query, $studentId)
    {
        return $query->where('student_id', $studentId);
    }

    // Methods
    public function getStatusLabel()
    {
        $labels = [
            'pending' => 'Menunggu',
            'approved' => 'Disetujui',
            'rejected' => 'Ditolak',
        ];
        return $labels[$this->status] ?? $this->status;
    }

    public function getStatusColor()
    {
        $colors = [
            'pending' => 'warning',
            'approved' => 'success',
            'rejected' => 'danger',
        ];
        return $colors[$this->status] ?? 'secondary';
    }

    public function approve($adminId, $notes = null)
    {
        $this->update([
            'status' => 'approved',
            'reviewed_by' => $adminId,
            'reviewed_at' => now(),
            'review_notes' => $notes,
        ]);
    }

    public function reject($adminId, $notes = null)
    {
        $this->update([
            'status' => 'rejected',
            'reviewed_by' => $adminId,
            'reviewed_at' => now(),
            'review_notes' => $notes,
        ]);
    }
}
