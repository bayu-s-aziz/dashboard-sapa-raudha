<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AcademicYearSeeder::class,
            GuruSeeder::class,
            ClassSeeder::class,
            StudentSeeder::class,
            ParentSeeder::class,
            UserSeeder::class,
            AnnouncementSeeder::class,
            AttendanceSeeder::class,
            LeaveRequestSeeder::class,
        ]);
    }
}
