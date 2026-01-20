<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseBackupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder restores data from JSON backup files.
     * Use this to restore the database if it gets lost.
     */
    public function run(): void
    {
        $dataPath = database_path('seeders/data');

        // Disable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // Restore Classes
        if (File::exists($dataPath . '/classes_backup.json')) {
            $classes = json_decode(File::get($dataPath . '/classes_backup.json'), true);
            DB::table('classes')->truncate();
            foreach ($classes as $class) {
                DB::table('classes')->insert($class);
            }
            $this->command->info('✓ Restored ' . count($classes) . ' classes');
        }

        // Restore Gurus
        if (File::exists($dataPath . '/gurus_backup.json')) {
            $gurus = json_decode(File::get($dataPath . '/gurus_backup.json'), true);
            DB::table('gurus')->truncate();
            foreach ($gurus as $guru) {
                DB::table('gurus')->insert($guru);
            }
            $this->command->info('✓ Restored ' . count($gurus) . ' gurus');
        }

        // Restore Students
        if (File::exists($dataPath . '/students_backup.json')) {
            $students = json_decode(File::get($dataPath . '/students_backup.json'), true);
            DB::table('students')->truncate();
            foreach ($students as $student) {
                DB::table('students')->insert($student);
            }
            $this->command->info('✓ Restored ' . count($students) . ' students');
        }

        // Restore Parents
        if (File::exists($dataPath . '/parents_backup.json')) {
            $parents = json_decode(File::get($dataPath . '/parents_backup.json'), true);
            DB::table('parents')->truncate();
            foreach ($parents as $parent) {
                DB::table('parents')->insert($parent);
            }
            $this->command->info('✓ Restored ' . count($parents) . ' parents');
        }

        // Restore Users
        if (File::exists($dataPath . '/users_backup.json')) {
            $users = json_decode(File::get($dataPath . '/users_backup.json'), true);
            DB::table('users')->truncate();
            foreach ($users as $user) {
                DB::table('users')->insert($user);
            }
            $this->command->info('✓ Restored ' . count($users) . ' users');
        }

        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $this->command->info('');
        $this->command->info('✅ Database restored successfully from backup files!');
        $this->command->info('📁 Backup location: database/seeders/data/');
    }
}
