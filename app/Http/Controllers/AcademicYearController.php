<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AcademicYearController extends Controller
{
    /**
     * Display a listing of academic years
     */
    public function index()
    {
        $academicYears = AcademicYear::orderBy('year', 'desc')->get();

        return Inertia::render('academic-years/index', [
            'academic_years' => $academicYears,
        ]);
    }

    /**
     * Store a newly created academic year
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'year' => 'required|string|max:20|regex:/^\d{4}\/\d{4}$/|unique:academic_years,year',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $academicYear = AcademicYear::create($request->only([
                'year', 'start_date', 'end_date'
            ]));

            return response()->json([
                'message' => 'Tahun ajaran berhasil dibuat',
                'data' => $academicYear,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error membuat tahun ajaran',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Set an academic year as active
     */
    public function setActive(AcademicYear $academicYear)
    {
        try {
            \Log::info('Setting academic year as active', ['id' => $academicYear->id, 'year' => $academicYear->year]);
            $academicYear->setAsActive();

            return redirect()->route('classes.index')->with('success', 'Tahun ajaran aktif berhasil diubah');
        } catch (\Exception $e) {
            \Log::error('Error setting active academic year', ['error' => $e->getMessage()]);
            return redirect()->route('classes.index')->with('error', 'Error mengubah tahun ajaran aktif: ' . $e->getMessage());
        }
    }

    /**
     * Get the current active academic year
     */
    public function getActive()
    {
        $activeYear = AcademicYear::getActive();

        return response()->json([
            'active_academic_year' => $activeYear,
        ]);
    }

    /**
     * Update the specified academic year
     */
    public function update(Request $request, AcademicYear $academicYear)
    {
        $validator = Validator::make($request->all(), [
            'year' => 'sometimes|string|max:20|regex:/^\d{4}\/\d{4}$/|unique:academic_years,year,' . $academicYear->id,
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $academicYear->update($request->only([
                'year', 'start_date', 'end_date'
            ]));

            return response()->json([
                'message' => 'Tahun ajaran berhasil diperbarui',
                'data' => $academicYear,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error memperbarui tahun ajaran',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified academic year
     */
    public function destroy(AcademicYear $academicYear)
    {
        // Check if this academic year has classes
        if ($academicYear->classes()->exists()) {
            return response()->json([
                'message' => 'Tidak dapat menghapus tahun ajaran yang masih memiliki kelas',
            ], 422);
        }

        $academicYear->delete();

        return response()->json([
            'message' => 'Tahun ajaran berhasil dihapus',
        ]);
    }
}
