<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GuruSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gurus = [
            [
                'nik' => '1234567890',
                'name' => 'Administrator',
                'email' => 'admin@ra-alislam.sch.id',
                'phone' => null,
                'role' => 'admin',
                'subject' => null,
                'password_hash' => 'admin123',
                'photo_url' => null,
                'created_at' => '2026-01-09 11:42:43',
                'updated_at' => '2026-01-09 11:48:09',
            ],
            [
                'nik' => '1234567891',
                'name' => 'Eulis Sukmayati',
                'email' => 'eulis-sukmayati@ra-alislam.sch.id',
                'phone' => '081234567890',
                'role' => 'guru',
                'subject' => '',
                'password_hash' => 'Alislam123',
                'photo_url' => null,
                'created_at' => '2026-01-09 11:53:27',
                'updated_at' => '2026-01-09 11:53:27',
            ],
            [
                'nik' => '1234567892',
                'name' => 'Elis Nurjanah',
                'email' => 'elis-nurjanah@ra-alislam.sch.id',
                'phone' => '082123123123',
                'role' => 'guru',
                'subject' => '',
                'password_hash' => 'Alislam123',
                'photo_url' => null,
                'created_at' => '2026-01-09 11:54:01',
                'updated_at' => '2026-01-09 11:54:01',
            ],
            [
                'nik' => '1234567893',
                'name' => 'Ecin Nurbayanti',
                'email' => 'ecin-nurbayanti@ra-alislam.sch.id',
                'phone' => '083073084000',
                'role' => 'guru',
                'subject' => '',
                'password_hash' => '123456',
                'photo_url' => null,
                'created_at' => '2026-01-09 11:55:03',
                'updated_at' => '2026-01-09 11:55:03',
            ],
            [
                'nik' => '1234567894',
                'name' => 'Lilis Farida',
                'email' => 'lilis-farida@ra-alislam.sch.id',
                'phone' => '082134395867',
                'role' => 'guru',
                'subject' => '',
                'password_hash' => 'Alislam123',
                'photo_url' => null,
                'created_at' => '2026-01-09 11:55:47',
                'updated_at' => '2026-01-09 11:55:47',
            ],
        ];

        foreach ($gurus as $guru) {
            \DB::table('gurus')->updateOrInsert(
                ['nik' => $guru['nik']],
                $guru
            );
        }
    }
}
