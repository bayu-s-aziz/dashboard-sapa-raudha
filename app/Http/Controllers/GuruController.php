<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class GuruController extends Controller
{
    /**
     * Display a listing of gurus.
     */
    public function index(Request $request)
    {
        $query = Guru::query();

        // Filter by role
        if ($request->has('role') && $request->role !== 'all') {
            $query->where('role', $request->role);
        }

        // Search by name or NIK
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('nik', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            });
        }

        $perPage = $request->input('per_page', 15);
        $gurus = $query->with('user')->orderBy('created_at', 'desc')->paginate($perPage);

        return response()->json($gurus);
    }

    /**
     * Store a newly created guru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nik' => 'required|unique:gurus,nik|string|max:20',
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:100|unique:gurus,email|unique:users,email',
            'phone' => 'nullable|string|max:20',
            'role' => 'required|in:guru,admin,kepsek',
            'subject' => 'nullable|string|max:100',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            // Create guru record
            $guru = Guru::create([
                'nik' => $request->nik,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'role' => $request->role,
                'subject' => $request->subject,
                'password_hash' => $request->password, // Store plain for legacy
            ]);

            // Create user account for authentication
            $user = User::create([
                'name' => $guru->name,
                'email' => $guru->email,
                'password' => Hash::make($request->password),
                'userable_type' => Guru::class,
                'userable_id' => $guru->id,
            ]);

            return response()->json([
                'message' => 'Guru berhasil dibuat',
                'data' => $guru->load('user'),
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat guru',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified guru.
     */
    public function show($id)
    {
        $guru = Guru::with('user', 'homeroomClasses')->find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru tidak ditemukan'], 404);
        }

        return response()->json($guru);
    }

    /**
     * Update the specified guru.
     */
    public function update(Request $request, $id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru tidak ditemukan'], 404);
        }

        $validator = Validator::make($request->all(), [
            'nik' => 'sometimes|unique:gurus,nik,' . $id . '|string|max:20',
            'name' => 'sometimes|string|max:100',
            'email' => 'sometimes|email|max:100|unique:gurus,email,' . $id,
            'phone' => 'sometimes|string|max:20',
            'role' => 'sometimes|in:guru,admin,kepsek',
            'subject' => 'sometimes|nullable|string|max:100',
            'password' => 'sometimes|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $data = $request->only(['nik', 'name', 'email', 'phone', 'role', 'subject']);

            if ($request->has('password')) {
                $data['password_hash'] = $request->password;
            }

            $guru->update($data);

            // Update user account if exists
            if ($guru->user) {
                $userData = ['name' => $guru->name, 'email' => $guru->email];
                if ($request->has('password')) {
                    $userData['password'] = Hash::make($request->password);
                }
                $guru->user->update($userData);
            }

            return response()->json([
                'message' => 'Guru berhasil diperbarui',
                'data' => $guru->load('user'),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui guru',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified guru.
     */
    public function destroy($id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json(['message' => 'Guru tidak ditemukan'], 404);
        }

        try {
            // Delete associated user account
            if ($guru->user) {
                $guru->user->delete();
            }

            $guru->delete();

            return response()->json(['message' => 'Guru berhasil dihapus']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus guru',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Upload guru photo
     */
    public function uploadPhoto(Request $request, $id)
    {
        $guru = Guru::find($id);

        if (!$guru) {
            return response()->json([
                'message' => 'Guru tidak ditemukan',
            ], 404);
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
                $filename = 'guru_' . $id . '_' . time() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('photos/gurus', $filename, 'public');

                $guru->update(['photo_url' => '/storage/' . $path]);
            }

            return response()->json([
                'message' => 'Foto berhasil diupload',
                'data' => $guru,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error upload foto',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
