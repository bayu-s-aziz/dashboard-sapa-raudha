<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Guru;
use App\Models\ParentModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of users
     */
    public function index(Request $request)
    {
        $query = User::with('userable');

        $type = $request->input('type');

        // Filter by user type
        if (!empty($type)) {
            if ($type === 'admin') {
                $query->where('userable_type', Guru::class)
                    ->whereHasMorph('userable', [Guru::class], function ($q) {
                        $q->where('role', 'admin');
                    });
            } elseif ($type === 'guru') {
                $query->where('userable_type', Guru::class)
                    ->whereHasMorph('userable', [Guru::class], function ($q) {
                        $q->where('role', 'guru');
                    });
            } elseif ($type === 'parent') {
                $query->where('userable_type', ParentModel::class);
            }
        }

        // Search by name or email
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%")
                  ->orWhereHasMorph('userable', [Guru::class], function ($q) use ($search) {
                      $q->where('nik', 'like', "%$search%")
                        ->orWhere('phone', 'like', "%$search%");
                  })
                  ->orWhereHasMorph('userable', [ParentModel::class], function ($q) use ($search) {
                      $q->where('father_name', 'like', "%$search%")
                        ->orWhere('mother_name', 'like', "%$search%")
                        ->orWhere('father_phone', 'like', "%$search%")
                        ->orWhere('mother_phone', 'like', "%$search%");
                  });
            });
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $users = $query->orderBy('created_at', 'desc')
            ->paginate($perPage)
            ->appends($request->only(['search', 'type', 'page', 'per_page']));
        return Inertia::render('users/index', [
            'users' => $users,
            'filters' => [
                'search' => $request->input('search', ''),
                'type' => $type ?? '',
            ],
        ]);
    }

    /**
     * Display a listing of teachers (admin, guru, kepala sekolah)
     */
    public function teachers(Request $request)
    {
        $query = User::with('userable')
            ->where('userable_type', Guru::class)
            ->whereHasMorph('userable', [Guru::class], function ($q) {
                $q->whereIn('role', ['admin', 'guru', 'kepsek']);
            });

        // Search by name or email
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%")
                  ->orWhereHasMorph('userable', [Guru::class], function ($q) use ($search) {
                      $q->where('nik', 'like', "%$search%")
                        ->orWhere('phone', 'like', "%$search%");
                  });
            });
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $users = $query->orderBy('created_at', 'desc')
            ->paginate($perPage)
            ->appends($request->only(['search', 'page', 'per_page']));

        return Inertia::render('users/teachers', [
            'users' => $users,
            'filters' => [
                'search' => $request->input('search', ''),
            ],
        ]);
    }

    /**
     * Display a listing of parents
     */
    public function parents(Request $request)
    {
        $query = User::with(['userable', 'userable.student'])
            ->where('userable_type', ParentModel::class);

        // Search by name or email
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
                        $query->where(function ($q) use ($search) {
                                $q->where('name', 'like', "%$search%")
                                    ->orWhere('email', 'like', "%$search%")
                                    ->orWhereHasMorph('userable', [ParentModel::class], function ($q) use ($search) {
                                            $q->where('father_name', 'like', "%$search%")
                                                ->orWhere('mother_name', 'like', "%$search%")
                                                ->orWhere('father_phone', 'like', "%$search%")
                                                ->orWhere('mother_phone', 'like', "%$search%")
                                                ->orWhereHas('student', function ($qs) use ($search) {
                                                        $qs->where('name', 'like', "%$search%")
                                                             ->orWhere('nis', 'like', "%$search%")
                                                             ->orWhere('nisn', 'like', "%$search%");
                                                });
                                    });
                        });
        }

        // Pagination
        $perPage = $request->input('per_page', 15);
        $users = $query->orderBy('created_at', 'desc')
            ->paginate($perPage)
            ->appends($request->only(['search', 'page', 'per_page']));

        return Inertia::render('users/parents', [
            'users' => $users,
            'filters' => [
                'search' => $request->input('search', ''),
            ],
        ]);
    }

    /**
     * Display the specified user
     */
    public function show($id)
    {
        $user = User::with('userable')->find($id);

        if (!$user) {
            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'User tidak ditemukan',
                ], 404);
            }
            abort(404, 'User tidak ditemukan');
        }

        // Load student relationship for parents
        if ($user->userable_type === 'App\\Models\\ParentModel') {
            $user->load('userable.student');
        }

        if (request()->wantsJson() || request()->is('api/*')) {
            return response()->json($user);
        }

        return Inertia::render('users/show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified user
     */
    public function edit($id)
    {
        $user = User::with('userable')->find($id);

        if (!$user) {
            abort(404, 'User tidak ditemukan');
        }

        return Inertia::render('users/edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified user
     */
    public function update(Request $request, $id)
    {
        $user = User::with('userable')->find($id);

        if (!$user) {
            if (request()->header('X-Inertia')) {
                return redirect()->route('users.index')->with('error', 'User tidak ditemukan');
            }

            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'User tidak ditemukan',
                ], 404);
            }
            return back()->with('error', 'User tidak ditemukan');
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        if ($validator->fails()) {
            if (request()->header('X-Inertia') || request()->wantsJson() || request()->is('api/*')) {
                return response()->json($validator->errors(), 422);
            }
            return back()->withErrors($validator)->withInput();
        }

        try {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            // Update userable data
            if ($user->userable) {
                if ($user->userable instanceof Guru) {
                    $user->userable->update([
                        'name' => $request->name,
                        'email' => $request->email,
                    ]);
                }
            }

            if (request()->header('X-Inertia')) {
                // For Inertia requests, redirect to the show page with success message
                return redirect()->route('users.show', $user)->with('success', 'Data pengguna berhasil diperbarui');
            }

            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'User berhasil diperbarui',
                    'user' => $user->fresh('userable'),
                ]);
            }

            return redirect()->route('users.index')
                ->with('success', 'Data pengguna berhasil diperbarui');
        } catch (\Exception $e) {
            if (request()->header('X-Inertia')) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat memperbarui data: ' . $e->getMessage());
            }

            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'Error memperbarui user',
                    'error' => $e->getMessage(),
                ], 500);
            }
            return back()->with('error', 'Terjadi kesalahan saat memperbarui data');
        }
    }

    /**
     * Update user password
     */
    public function updatePassword(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'message' => 'User tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => 'Password lama tidak sesuai',
            ], 422);
        }

        try {
            $user->update([
                'password' => Hash::make($request->new_password)
            ]);

            // Update password hash di tabel guru/parent juga
            if ($user->userable) {
                $user->userable->update([
                    'password_hash' => $request->new_password
                ]);
            }

            return response()->json([
                'message' => 'Password berhasil diperbarui',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui password',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete user account
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'User tidak ditemukan',
                ], 404);
            }
            return back()->with('error', 'User tidak ditemukan');
        }

        try {
            $user->delete();

            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'User berhasil dihapus',
                ]);
            }

            return redirect()->route('users.index')
                ->with('success', 'Data pengguna berhasil dihapus');
        } catch (\Exception $e) {
            if (request()->wantsJson() || request()->is('api/*')) {
                return response()->json([
                    'message' => 'Error menghapus user',
                    'error' => $e->getMessage(),
                ], 500);
            }
            return back()->with('error', 'Terjadi kesalahan saat menghapus data');
        }
    }

    /**
     * Get current authenticated user
     */
    public function me(Request $request)
    {
        $user = $request->user()->load('userable');

        return response()->json([
            'user' => $user,
            'role' => $user->getRole(),
            'is_guru' => $user->isGuru(),
            'is_parent' => $user->isParent(),
        ]);
    }

    /**
     * Get statistics
     */
    public function getStatistics()
    {
        return response()->json([
            'total_users' => User::count(),
            'total_gurus' => User::where('userable_type', Guru::class)->count(),
            'total_parents' => User::where('userable_type', ParentModel::class)->count(),
        ]);
    }

    /**
     * Upload user photo
     */
    public function uploadPhoto(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'message' => 'User tidak ditemukan',
            ], 404);
        }

        // Authorization: only the owner or an admin guru may upload/change the photo
        $authUser = $request->user();
        if ($authUser->id !== $user->id) {
            $isAdmin = false;
            if ($authUser->isGuru() && $authUser->userable) {
                $isAdmin = method_exists($authUser->userable, 'isAdmin') && $authUser->userable->isAdmin();
            }
            if (!$isAdmin) {
                return response()->json([
                    'message' => 'Tidak diizinkan untuk mengubah foto pengguna ini',
                ], 403);
            }
        }

        $validator = Validator::make($request->all(), [
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            if ($request->hasFile('photo')) {
                $file = $request->file('photo');
                $filename = 'user_' . $id . '_' . time() . '.' . $file->getClientOriginalExtension();
                
                // Delete old photo if exists
                if ($user->userable_type === Guru::class && $user->userable && $user->userable->photo_url) {
                    \Storage::disk('public')->delete($user->userable->photo_url);
                } elseif ($user->userable_type === ParentModel::class && $user->userable && $user->userable->photo_url) {
                    \Storage::disk('public')->delete($user->userable->photo_url);
                }
                
                $path = $file->storeAs('photos/users', $filename, 'public');
                
                if (!$path) {
                    return response()->json([
                        'message' => 'Gagal menyimpan file',
                    ], 500);
                }

                // Update photo_url based on userable type
                // Store relative path without /storage/ prefix - the Avatar accessor handles URL construction
                if ($user->userable_type === Guru::class) {
                    $user->userable->update(['photo_url' => $path]);
                } elseif ($user->userable_type === ParentModel::class) {
                    $user->userable->update(['photo_url' => $path]);
                }
            }

            return response()->json([
                'message' => 'Foto berhasil diupload',
                'data' => $user->load('userable'),
            ]);
        } catch (\Exception $e) {
            \Log::error('Photo upload error for user ' . $id . ': ' . $e->getMessage());
            return response()->json([
                'message' => 'Error upload foto',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
