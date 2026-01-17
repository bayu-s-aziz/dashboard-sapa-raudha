<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordResetRequest extends Model
{
    use HasFactory;

    protected $table = 'password_reset_requests';

    public $timestamps = false;

    protected $fillable = [
        'identifier',
        'name',
        'user_type',
        'phone_number',
        'status',
        'processed_by',
        'processed_at',
        'notes',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'processed_at' => 'datetime',
    ];

    /**
     * Get the guru who processed this request.
     */
    public function processor()
    {
        return $this->belongsTo(Guru::class, 'processed_by');
    }

    /**
     * Scope to filter by status.
     */
    public function scopeWithStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to get pending requests.
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
