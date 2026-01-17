<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    use HasFactory;

    protected $table = 'announcements';

    protected $fillable = [
        'title',
        'content',
        'author_id',
        'author_type',
        'target_audience',
        'target_class_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the author of the announcement (Guru).
     */
    public function author()
    {
        return $this->belongsTo(Guru::class, 'author_id');
    }

    /**
     * Get the target class if announcement is for specific class.
     */
    public function targetClass()
    {
        return $this->belongsTo(Kelas::class, 'target_class_id');
    }

    /**
     * Get the attachments for this announcement.
     */
    public function attachments()
    {
        return $this->hasMany(Attachment::class, 'announcement_id');
    }

    /**
     * Scope to filter by target audience.
     */
    public function scopeForAudience($query, $audience)
    {
        return $query->where('target_audience', $audience);
    }

    /**
     * Scope to filter by class.
     */
    public function scopeForClass($query, $classId)
    {
        return $query->where(function($q) use ($classId) {
            $q->where('target_class_id', $classId)
              ->orWhere('target_audience', 'all');
        });
    }
}
