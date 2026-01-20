<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $attendances = [
            [
                'student_id' => 1,
                'date' => '2026-01-05',
                'status' => 'izin',
                'check_in' => null,
                'check_out' => null,
                'notes' => 'Sakit, Izn Liburan',
                'scanned_by' => null,
                'created_at' => '2026-01-10 03:38:03',
            ],
            [
                'student_id' => 1,
                'date' => '2026-01-11',
                'status' => 'hadir',
                'check_in' => null,
                'check_out' => null,
                'notes' => null,
                'scanned_by' => 2,
                'created_at' => '2026-01-11 16:00:31',
            ],
            [
                'student_id' => 2,
                'date' => '2026-01-11',
                'status' => 'hadir',
                'check_in' => null,
                'check_out' => null,
                'notes' => null,
                'scanned_by' => 2,
                'created_at' => '2026-01-11 16:00:45',
            ],
        ];

        foreach ($attendances as $attendance) {
            \DB::table('attendance')->updateOrInsert(
                ['student_id' => $attendance['student_id'], 'date' => $attendance['date']],
                $attendance
            );
        }
    }
}
