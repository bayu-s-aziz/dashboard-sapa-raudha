<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classes = [
            [
                'name' => 'Kelompok A',
                'group' => 'A',
                'homeroom_teacher_id' => 3,
                'academic_year' => '2025/2026',
                'created_at' => '2026-01-09 12:06:47',
            ],
            [
                'name' => 'Kelompok B',
                'group' => 'B',
                'homeroom_teacher_id' => 2,
                'academic_year' => '2025/2026',
                'created_at' => '2026-01-09 12:06:47',
            ],
        ];

        foreach ($classes as $class) {
            \DB::table('classes')->updateOrInsert(
                ['name' => $class['name'], 'academic_year' => $class['academic_year']],
                $class
            );
        }
    }
}
