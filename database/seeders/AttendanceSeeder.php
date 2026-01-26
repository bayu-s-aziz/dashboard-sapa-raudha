<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data absensi dari rdm_db.sql untuk semester 1 2025
        $absenData = [
            14 => ['s' => 2, 'i' => 0, 'a' => 0],
            15 => ['s' => 8, 'i' => 1, 'a' => 2],
            16 => ['s' => 17, 'i' => 1, 'a' => 8],
            17 => ['s' => 2, 'i' => 0, 'a' => 3],
            18 => ['s' => 9, 'i' => 2, 'a' => 7],
            19 => ['s' => 0, 'i' => 0, 'a' => 0],
            20 => ['s' => 0, 'i' => 9, 'a' => 0],
            21 => ['s' => 14, 'i' => 5, 'a' => 0],
            22 => ['s' => 19, 'i' => 6, 'a' => 9],
            23 => ['s' => 1, 'i' => 5, 'a' => 0],
            24 => ['s' => 5, 'i' => 1, 'a' => 0],
            25 => ['s' => 6, 'i' => 0, 'a' => 0],
            26 => ['s' => 6, 'i' => 0, 'a' => 0],
            27 => ['s' => 6, 'i' => 2, 'a' => 0],
            28 => ['s' => 2, 'i' => 0, 'a' => 0],
            29 => ['s' => 10, 'i' => 1, 'a' => 0],
            30 => ['s' => 13, 'i' => 4, 'a' => 1],
            1 => ['s' => 5, 'i' => 4, 'a' => 1],
            2 => ['s' => 8, 'i' => 4, 'a' => 0],
            3 => ['s' => 1, 'i' => 3, 'a' => 2],
            10 => ['s' => 3, 'i' => 39, 'a' => 6],
            4 => ['s' => 6, 'i' => 2, 'a' => 2],
            5 => ['s' => 8, 'i' => 2, 'a' => 3],
            11 => ['s' => 12, 'i' => 4, 'a' => 3],
            6 => ['s' => 18, 'i' => 4, 'a' => 0],
            7 => ['s' => 7, 'i' => 0, 'a' => 0],
            8 => ['s' => 8, 'i' => 1, 'a' => 6],
            9 => ['s' => 4, 'i' => 5, 'a' => 0],
            12 => ['s' => 3, 'i' => 0, 'a' => 13],
            13 => ['s' => 3, 'i' => 4, 'a' => 0],
        ];

        // Generate working days for semester 1: 2025-07-14 to 2025-12-13, Monday to Saturday
        $startDate = Carbon::create(2025, 7, 14);
        $endDate = Carbon::create(2025, 12, 13);
        $workingDays = [];

        for ($date = $startDate->copy(); $date->lte($endDate); $date->addDay()) {
            if ($date->dayOfWeek != Carbon::SUNDAY) {
                $workingDays[] = $date->toDateString();
            }
        }

        $attendances = [];

        foreach ($absenData as $studentId => $absen) {
            $totalAbsent = $absen['s'] + $absen['i'] + $absen['a'];
            $totalDays = count($workingDays);
            $presentDays = $totalDays - $totalAbsent;

            // Shuffle working days to randomize
            $shuffledDays = $workingDays;
            shuffle($shuffledDays);

            $absentDays = array_slice($shuffledDays, 0, $totalAbsent);
            $presentDaysList = array_slice($shuffledDays, $totalAbsent, $presentDays);

            // Assign statuses to absent days
            $sickDays = array_slice($absentDays, 0, $absen['s']);
            $permissionDays = array_slice($absentDays, $absen['s'], $absen['i']);
            $absentDaysList = array_slice($absentDays, $absen['s'] + $absen['i'], $absen['a']);

            // Add sick records
            foreach ($sickDays as $day) {
                $attendances[] = [
                    'student_id' => $studentId,
                    'date' => $day,
                    'status' => 'sakit',
                    'check_in' => null,
                    'check_out' => null,
                    'notes' => null,
                    'scanned_by' => null,
                    'created_at' => now(),
                ];
            }

            // Add permission records
            foreach ($permissionDays as $day) {
                $attendances[] = [
                    'student_id' => $studentId,
                    'date' => $day,
                    'status' => 'izin',
                    'check_in' => null,
                    'check_out' => null,
                    'notes' => null,
                    'scanned_by' => null,
                    'created_at' => now(),
                ];
            }

            // Add absent records
            foreach ($absentDaysList as $day) {
                $attendances[] = [
                    'student_id' => $studentId,
                    'date' => $day,
                    'status' => 'alpa',
                    'check_in' => null,
                    'check_out' => null,
                    'notes' => null,
                    'scanned_by' => null,
                    'created_at' => now(),
                ];
            }

            // Add present records
            foreach ($presentDaysList as $day) {
                $checkInHour = rand(6, 7);
                $checkInMinute = $checkInHour == 6 ? rand(30, 59) : rand(0, 50);
                $checkIn = sprintf('%02d:%02d:00', $checkInHour, $checkInMinute);

                $checkOutHour = 10;
                $checkOutMinute = rand(30, 35);
                $checkOut = sprintf('%02d:%02d:00', $checkOutHour, $checkOutMinute);

                $attendances[] = [
                    'student_id' => $studentId,
                    'date' => $day,
                    'status' => 'hadir',
                    'check_in' => $checkIn,
                    'check_out' => $checkOut,
                    'notes' => null,
                    'scanned_by' => rand(1, 5), // Assuming some guru ids
                    'created_at' => now(),
                ];
            }
        }

        // Semester 2: 2026-01-05 to 2026-01-26, random data
        $sem2Start = Carbon::create(2026, 1, 5);
        $sem2End = Carbon::create(2026, 1, 26);
        $sem2WorkingDays = [];

        for ($date = $sem2Start->copy(); $date->lte($sem2End); $date->addDay()) {
            if ($date->dayOfWeek >= Carbon::MONDAY && $date->dayOfWeek <= Carbon::FRIDAY) {
                $sem2WorkingDays[] = $date->toDateString();
            }
        }

        // Add January 26, 2026 (Sunday) as a special working day
        $sem2WorkingDays[] = '2026-01-26';

        foreach ($absenData as $studentId => $absen) {
            foreach ($sem2WorkingDays as $day) {
                $status = rand(0, 10);
                if ($status < 8) { // 80% hadir
                    $checkInHour = rand(6, 7);
                    $checkInMinute = $checkInHour == 6 ? rand(30, 59) : rand(0, 45);
                    $checkIn = sprintf('%02d:%02d:00', $checkInHour, $checkInMinute);

                    $checkOutHour = 10;
                    $checkOutMinute = rand(30, 35);
                    $checkOut = sprintf('%02d:%02d:00', $checkOutHour, $checkOutMinute);

                    $attendances[] = [
                        'student_id' => $studentId,
                        'date' => $day,
                        'status' => 'hadir',
                        'check_in' => $checkIn,
                        'check_out' => $checkOut,
                        'notes' => null,
                        'scanned_by' => rand(1, 5),
                        'created_at' => now(),
                    ];
                } elseif ($status < 9) { // 10% sakit
                    $attendances[] = [
                        'student_id' => $studentId,
                        'date' => $day,
                        'status' => 'sakit',
                        'check_in' => null,
                        'check_out' => null,
                        'notes' => null,
                        'scanned_by' => null,
                        'created_at' => now(),
                    ];
                } elseif ($status < 10) { // 10% izin
                    $attendances[] = [
                        'student_id' => $studentId,
                        'date' => $day,
                        'status' => 'izin',
                        'check_in' => null,
                        'check_out' => null,
                        'notes' => null,
                        'scanned_by' => null,
                        'created_at' => now(),
                    ];
                } else { // 10% alpa
                    $attendances[] = [
                        'student_id' => $studentId,
                        'date' => $day,
                        'status' => 'alpa',
                        'check_in' => null,
                        'check_out' => null,
                        'notes' => null,
                        'scanned_by' => null,
                        'created_at' => now(),
                    ];
                }
            }
        }

        // Existing data
        $existingAttendances = [
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

        $attendances = array_merge($attendances, $existingAttendances);

        foreach ($attendances as $attendance) {
            \DB::table('attendance')->updateOrInsert(
                ['student_id' => $attendance['student_id'], 'date' => $attendance['date']],
                $attendance
            );
        }
    }
}
