<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    use HasFactory;

    protected $fillable = [
        'year',
        'is_active',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'start_date' => 'date',
        'end_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the classes for this academic year.
     */
    public function classes()
    {
        return $this->hasMany(Kelas::class, 'academic_year', 'year');
    }

    /**
     * Scope to get only active academic year.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get the current active academic year.
     */
    public static function getActive()
    {
        return static::active()->first();
    }

    /**
     * Set this academic year as active (deactivate others).
     */
    public function setAsActive()
    {
        // Deactivate all other academic years
        static::where('id', '!=', $this->id)->update(['is_active' => false]);

        // Activate this one
        $this->update(['is_active' => true]);

        return $this;
    }
}
