<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'userable_type',
        'userable_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = ['avatar'];

    /**
     * Get the owning userable model (Guru or Parent).
     */
    public function userable()
    {
        return $this->morphTo();
    }

    /**
     * Check if user is a guru (teacher).
     */
    public function isGuru()
    {
        return $this->userable_type === 'App\\Models\\Guru';
    }

    /**
     * Check if user is a parent.
     */
    public function isParent()
    {
        return $this->userable_type === 'App\\Models\\ParentModel';
    }

    /**
     * Get the role of the user.
     */
    public function getRole()
    {
        if ($this->isGuru()) {
            return $this->userable->role ?? 'guru';
        }
        return 'parent';
    }

    /**
     * Get the user's avatar URL.
     */
    public function getAvatarAttribute()
    {
        if ($this->userable && $this->userable->photo_url) {
            // If photo_url already starts with http or /, return as is
            if (str_starts_with($this->userable->photo_url, 'http') || str_starts_with($this->userable->photo_url, '/')) {
                return $this->userable->photo_url;
            }
            // Otherwise, prepend storage path
            return asset('storage/' . $this->userable->photo_url);
        }
        return null;
    }
}
