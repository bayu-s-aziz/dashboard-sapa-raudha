<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LeaveRequestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $leaveRequests = [
            [
                'student_id' => 1,
                'request_date' => '2026-01-05',
                'reason' => 'Sakit, Izn Liburan',
                'attachment_path' => null,
                'status' => 'approved',
                'submitted_at' => '2026-01-10 03:38:03',
                'reviewed_by' => 2,
                'reviewed_at' => '2026-01-10 03:39:05',
                'review_notes' => 'Disetujui',
            ],
            [
                'student_id' => 1,
                'request_date' => '2026-01-07',
                'reason' => 'izizniznzinzinz',
                'attachment_path' => '/uploads/1768270472584-23028734.png',
                'status' => 'approved',
                'submitted_at' => '2026-01-13 02:14:32',
                'reviewed_by' => 2,
                'reviewed_at' => '2026-01-13 02:14:47',
                'review_notes' => 'Disetujui',
            ],
        ];

        foreach ($leaveRequests as $leaveRequest) {
            \DB::table('leave_requests')->updateOrInsert(
                ['student_id' => $leaveRequest['student_id'], 'submitted_at' => $leaveRequest['submitted_at']],
                $leaveRequest
            );
        }
    }
}
