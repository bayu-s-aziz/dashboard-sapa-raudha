<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AcademicYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $academicYears = [
            [
                'year' => '2024/2025',
                'is_active' => false,
                'start_date' => '2024-07-01',
                'end_date' => '2025-06-30',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2025/2026',
                'is_active' => true, // Set as active
                'start_date' => '2025-07-01',
                'end_date' => '2026-06-30',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2026/2027',
                'is_active' => false,
                'start_date' => '2026-07-01',
                'end_date' => '2027-06-30',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($academicYears as $year) {
            \DB::table('academic_years')->updateOrInsert(
                ['year' => $year['year']],
                $year
            );
        }
    }
}
