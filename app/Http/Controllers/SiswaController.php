<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use App\Models\Kelas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
    /**
     * Display a listing of students.
     */
    public function index(Request $request)
    {
        $query = Siswa::with(['kelas', 'parent']);

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('nisn', 'like', "%{$search}%")
                    ->orWhere('nis', 'like', "%{$search}%");
            });
        }

        // Filter by class
        if ($request->filled('class')) {
            $query->where('class_id', $request->class);
        }

        // Filter by gender
        if ($request->filled('gender')) {
            $query->where('gender', $request->gender);
        }

        $students = $query->latest()->paginate(10)->withQueryString();

        $classes = Kelas::orderBy('name')->get();

        if ($request->wantsJson()) {
            return response()->json($students);
        }

        return Inertia::render('students/index', [
            'students' => $students,
            'classes' => $classes,
            'filters' => $request->only(['search', 'class', 'gender']),
        ]);
    }

    /**
     * Display the specified student.
     */
    public function show(Siswa $siswa)
    {
        $siswa->load(['kelas.homeroomTeacher', 'parent']);

        if (request()->wantsJson()) {
            return response()->json($siswa);
        }

        return Inertia::render('students/show', [
            'student' => $siswa,
        ]);
    }

    /**
     * Show the form for editing the specified student.
     */
    public function edit(Siswa $siswa)
    {
        $siswa->load(['kelas', 'parent']);
        $classes = Kelas::orderBy('name')->get();

        if (request()->wantsJson()) {
            return response()->json([
                'student' => $siswa,
                'classes' => $classes,
            ]);
        }

        return Inertia::render('students/edit', [
            'student' => $siswa,
            'classes' => $classes,
        ]);
    }

    /**
     * Update the specified student in storage.
     */
    public function update(Request $request, Siswa $siswa)
    {
        $validated = $request->validate([
            'nisn' => 'required|string|max:20|unique:students,nisn,' . $siswa->id,
            'nis' => 'required|string|max:20|unique:students,nis,' . $siswa->id,
            'name' => 'required|string|max:255',
            'class_id' => 'required|exists:classes,id',
            'gender' => 'required|in:L,P',
            'birth_place' => 'nullable|string|max:255',
            'birth_date' => 'nullable|date',
            'religion' => 'nullable|string|max:50',
            'address' => 'nullable|string',
        ]);

        $siswa->update($validated);

        if ($request->header('X-Inertia')) {
            // For Inertia requests, redirect to the show page with success message
            return redirect()->route('students.show', $siswa)->with('success', 'Data siswa berhasil diperbarui');
        }

        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'Data siswa berhasil diperbarui',
                'student' => $siswa->load(['kelas', 'parent']),
            ]);
        }

        return redirect()->route('students.show', $siswa)
            ->with('success', 'Data siswa berhasil diperbarui');
    }

    /**
     * Remove the specified student from storage.
     */
    public function destroy(Siswa $siswa)
    {
        $siswa->delete();

        if (request()->wantsJson()) {
            return response()->json([
                'message' => 'Siswa berhasil dihapus',
            ]);
        }

        return redirect()->route('students.index')
            ->with('success', 'Siswa berhasil dihapus');
    }
}
