<?php

namespace App\Http\Controllers;

use App\Models\ParentModel;
use App\Models\User;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ParentController extends Controller
{
    /**
     * Display a listing of parents.
     */
    public function index(Request $request)
    {
        $query = ParentModel::with('student', 'user');

        // Search by name or student name
        if ($request->has('search') && !empty($request->search)) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('father_name', 'like', "%$search%")
                  ->orWhere('mother_name', 'like', "%$search%")
                  ->orWhere('guardian_name', 'like', "%$search%")
                  ->orWhereHas('student', function($sq) use ($search) {
                      $sq->where('name', 'like', "%$search%");
                  });
            });
        }

        $perPage = $request->input('per_page', 15);
        $parents = $query->orderBy('created_at', 'desc')->paginate($perPage);

        return response()->json($parents);
    }

    /**
     * Store a newly created parent.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'student_id' => 'required|exists:students,id|unique:parents,student_id',
            'father_name' => 'nullable|string|max:100',
            'father_job' => 'nullable|string|max:100',
            'father_phone' => 'nullable|string|max:20',
            'mother_name' => 'nullable|string|max:100',
            'mother_job' => 'nullable|string|max:100',
            'mother_phone' => 'nullable|string|max:20',
            'guardian_name' => 'nullable|string|max:100',
            'guardian_job' => 'nullable|string|max:100',
            'guardian_phone' => 'nullable|string|max:20',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $student = Siswa::find($request->student_id);

            // Determine default active parent type
            $activeParentType = 'father'; // default
            if ($request->mother_name && !$request->father_name) {
                $activeParentType = 'mother';
            } elseif ($request->guardian_name && !$request->father_name && !$request->mother_name) {
                $activeParentType = 'guardian';
            }

            // Create parent record
            $parent = ParentModel::create([
                'student_id' => $request->student_id,
                'father_name' => $request->father_name,
                'father_job' => $request->father_job,
                'father_phone' => $request->father_phone,
                'mother_name' => $request->mother_name,
                'mother_job' => $request->mother_job,
                'mother_phone' => $request->mother_phone,
                'guardian_name' => $request->guardian_name,
                'guardian_job' => $request->guardian_job,
                'guardian_phone' => $request->guardian_phone,
                'password_hash' => $request->password,
                'active_parent_type' => $activeParentType,
            ]);

            // Create user account for authentication
            $user = User::create([
                'name' => $parent->active_parent_name ?? "Orang Tua " . $student->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'userable_type' => ParentModel::class,
                'userable_id' => $parent->id,
            ]);

            return response()->json([
                'message' => 'Data orang tua berhasil dibuat',
                'data' => $parent->load('user', 'student'),
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat data orang tua',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified parent.
     */
    public function show($id)
    {
        $parent = ParentModel::with('user', 'student')->find($id);

        if (!$parent) {
            return response()->json(['message' => 'Data orang tua tidak ditemukan'], 404);
        }

        return response()->json($parent);
    }

    /**
     * Update the specified parent.
     */
    public function update(Request $request, $id)
    {
        $parent = ParentModel::find($id);

        if (!$parent) {
            return response()->json(['message' => 'Data orang tua tidak ditemukan'], 404);
        }

        $validator = Validator::make($request->all(), [
            'father_name' => 'sometimes|nullable|string|max:100',
            'father_job' => 'sometimes|nullable|string|max:100',
            'father_phone' => 'sometimes|nullable|string|max:20',
            'mother_name' => 'sometimes|nullable|string|max:100',
            'mother_job' => 'sometimes|nullable|string|max:100',
            'mother_phone' => 'sometimes|nullable|string|max:20',
            'guardian_name' => 'sometimes|nullable|string|max:100',
            'guardian_job' => 'sometimes|nullable|string|max:100',
            'guardian_phone' => 'sometimes|nullable|string|max:20',
            'password' => 'sometimes|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $data = $request->only([
                'father_name', 'father_job', 'father_phone',
                'mother_name', 'mother_job', 'mother_phone',
                'guardian_name', 'guardian_job', 'guardian_phone'
            ]);

            if ($request->has('password')) {
                $data['password_hash'] = $request->password;
            }

            $parent->update($data);

            // Update user account if exists and password changed
            if ($parent->user && $request->has('password')) {
                $parent->user->update([
                    'password' => Hash::make($request->password)
                ]);
            }

            return response()->json([
                'message' => 'Data orang tua berhasil diperbarui',
                'data' => $parent->load('user', 'student'),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui data orang tua',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified parent.
     */
    public function destroy($id)
    {
        $parent = ParentModel::find($id);

        if (!$parent) {
            return response()->json(['message' => 'Data orang tua tidak ditemukan'], 404);
        }

        try {
            // Delete associated user account
            if ($parent->user) {
                $parent->user->delete();
            }

            $parent->delete();

            return response()->json(['message' => 'Data orang tua berhasil dihapus']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error menghapus data orang tua',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Upload parent photo
     */
    public function uploadPhoto(Request $request, $id)
    {
        $parent = ParentModel::find($id);

        if (!$parent) {
            return response()->json([
                'message' => 'Data orang tua tidak ditemukan',
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
                $filename = 'parent_' . $id . '_' . time() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('photos/parents', $filename, 'public');

                $parent->update(['photo_url' => '/storage/' . $path]);
            }

            return response()->json([
                'message' => 'Foto berhasil diupload',
                'data' => $parent,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error upload foto',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Switch active parent type
     */
    public function switchActiveParent(Request $request, $id)
    {
        $parent = ParentModel::find($id);

        if (!$parent) {
            return response()->json([
                'message' => 'Data orang tua tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'parent_type' => 'required|in:father,mother,guardian',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $parent->switchActiveParent($request->parent_type);

            return response()->json([
                'message' => 'Pengguna aktif berhasil diganti',
                'data' => $parent->load('user', 'student'),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error mengganti pengguna aktif',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
