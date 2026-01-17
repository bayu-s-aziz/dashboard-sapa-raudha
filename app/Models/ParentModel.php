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
}
