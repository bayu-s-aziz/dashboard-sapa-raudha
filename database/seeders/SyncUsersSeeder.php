<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Guru;
use App\Models\ParentModel;
use App\Models\User;

class SyncUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * This will create User records for existing Gurus and Parents
     */
    public function run(): void
    {
        // Sync Gurus to Users table
        $gurus = Guru::all();

        foreach ($gurus as $guru) {
            // Check if user already exists for this guru
            $existingUser = User::where('userable_type', Guru::class)
                ->where('userable_id', $guru->id)
                ->first();

            if (!$existingUser && $guru->email) {
                // Check if email is already in use
                $emailInUse = User::where('email', $guru->email)->exists();

                if (!$emailInUse) {
                    User::create([
                        'name' => $guru->name,
                        'email' => $guru->email,
                        'password' => Hash::make($guru->password_hash ?: '123456'),
                        'userable_type' => Guru::class,
                        'userable_id' => $guru->id,
                    ]);

                    echo "Created user for Guru: {$guru->name}\n";
                } else {
                    echo "Skipped Guru {$guru->name} - email already in use\n";
                }
            }
        }

        // Sync Parents to Users table
        $parents = ParentModel::with('student')->get();

        foreach ($parents as $parent) {
            // Skip if user already exists
            $existingUser = User::where('userable_type', ParentModel::class)
                ->where('userable_id', $parent->id)
                ->first();

            if (!$existingUser && $parent->student) {
                // Create email from student NISN if parent doesn't have email
                $email = "parent{$parent->student->nisn}@ra-alislam.sch.id";

                // Check if email already exists
                $emailExists = User::where('email', $email)->exists();
                if ($emailExists) {
                    $email = "parent{$parent->id}_{$parent->student->nisn}@ra-alislam.sch.id";
                }

                User::create([
                    'name' => $parent->primary_contact_name ?? "Orang Tua " . $parent->student->name,
                    'email' => $email,
                    'password' => Hash::make($parent->password_hash ?: 'ortu123'),
                    'userable_type' => ParentModel::class,
                    'userable_id' => $parent->id,
                ]);

                echo "Created user for Parent: {$parent->primary_contact_name} (Student: {$parent->student->name})\n";
            }
        }

        echo "\nSync completed!\n";
    }
}
