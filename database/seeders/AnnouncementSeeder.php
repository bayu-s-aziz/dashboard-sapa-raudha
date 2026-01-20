<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $announcements = [
            [
                'title' => 'KBM Semester Genap',
                'content' => 'Kegiatan belajar mengajar semester genap mulai kembali pada tanggal 5 Januari 2026.',
                'author_id' => 1,
                'author_type' => 'guru',
                'target_audience' => 'all',
                'target_class_id' => null,
                'created_at' => '2026-01-09 15:39:50',
                'updated_at' => '2026-01-09 15:39:50',
            ],
            [
                'title' => 'MBG Dilanjutkan',
                'content' => 'Untuk Semester genap MBG akan diberikan pada minggu ke-2 tepatnya tanggal 12 Januari 2026.',
                'author_id' => 1,
                'author_type' => 'guru',
                'target_audience' => 'all',
                'target_class_id' => null,
                'created_at' => '2026-01-09 15:41:58',
                'updated_at' => '2026-01-09 15:41:58',
            ],
        ];

        foreach ($announcements as $announcement) {
            \DB::table('announcements')->updateOrInsert(
                ['title' => $announcement['title'], 'created_at' => $announcement['created_at']],
                $announcement
            );
        }
    }
}
