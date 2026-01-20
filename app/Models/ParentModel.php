<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentModel extends Model
{
    use HasFactory;

    protected $table = 'parents';

    protected $fillable = [
        'student_id',
        'father_name',
        'father_job',
        'father_phone',
        'mother_name',
        'mother_job',
        'mother_phone',
        'guardian_name',
        'guardian_job',
        'guardian_phone',
        'photo_url',
        'password_hash',
        'active_parent_type',
    ];

    protected $hidden = [
        'password_hash',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user record associated with the parent.
     */
    public function user()
    {
        return $this->morphOne(User::class, 'userable');
    }

    /**
     * Get the student associated with this parent.
     */
    public function student()
    {
        return $this->belongsTo(Siswa::class, 'student_id');
    }

    /**
     * Get the primary contact name (father, mother, or guardian).
     */
    public function getPrimaryContactNameAttribute()
    {
        return $this->father_name ?? $this->mother_name ?? $this->guardian_name;
    }

    /**
     * Get the primary contact phone (father, mother, or guardian).
     */
    public function getPrimaryContactPhoneAttribute()
    {
        return $this->father_phone ?? $this->mother_phone ?? $this->guardian_phone;
    }

    /**
     * Get the active parent name based on active_parent_type.
     */
    public function getActiveParentNameAttribute()
    {
        switch ($this->active_parent_type) {
            case 'father':
                return $this->father_name;
            case 'mother':
                return $this->mother_name;
            case 'guardian':
                return $this->guardian_name;
            default:
                return $this->father_name ?? $this->mother_name ?? $this->guardian_name;
        }
    }

    /**
     * Get the active parent phone based on active_parent_type.
     */
    public function getActiveParentPhoneAttribute()
    {
        switch ($this->active_parent_type) {
            case 'father':
                return $this->father_phone;
            case 'mother':
                return $this->mother_phone;
            case 'guardian':
                return $this->guardian_phone;
            default:
                return $this->father_phone ?? $this->mother_phone ?? $this->guardian_phone;
        }
    }

    /**
     * Switch the active parent type.
     */
    public function switchActiveParent(string $parentType)
    {
        if (!in_array($parentType, ['father', 'mother', 'guardian'])) {
            throw new \InvalidArgumentException('Invalid parent type');
        }

        $this->active_parent_type = $parentType;
        $this->save();

        // Update the associated user name if exists
        if ($this->user) {
            $this->user->update([
                'name' => $this->active_parent_name ?? "Orang Tua " . $this->student->name,
            ]);
        }

        return $this;
    }

    /**
     * Get available parent types that have data.
     */
    public function getAvailableParentTypes()
    {
        $types = [];

        if ($this->father_name) {
            $types[] = ['type' => 'father', 'name' => $this->father_name, 'phone' => $this->father_phone];
        }

        if ($this->mother_name) {
            $types[] = ['type' => 'mother', 'name' => $this->mother_name, 'phone' => $this->mother_phone];
        }

        if ($this->guardian_name) {
            $types[] = ['type' => 'guardian', 'name' => $this->guardian_name, 'phone' => $this->guardian_phone];
        }

        return $types;
    }
}
