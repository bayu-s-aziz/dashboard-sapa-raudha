<?php

namespace App\Console\Commands;

use App\Models\Guru;
use App\Models\ParentModel;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateMissingUserAccounts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-missing-user-accounts {--dry-run : Show what would be created without actually creating}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create User accounts for Guru and ParentModel records that don\'t have them';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dryRun = $this->option('dry-run');

        if ($dryRun) {
            $this->info('DRY RUN MODE - No changes will be made');
        }

        // Find Guru records without user accounts
        $gurusWithoutUsers = Guru::whereDoesntHave('user')->get();
        $this->info("Found {$gurusWithoutUsers->count()} Guru records without user accounts");

        // Find ParentModel records without user accounts
        $parentsWithoutUsers = ParentModel::whereDoesntHave('user')->get();
        $this->info("Found {$parentsWithoutUsers->count()} ParentModel records without user accounts");

        if ($gurusWithoutUsers->count() === 0 && $parentsWithoutUsers->count() === 0) {
            $this->info('No missing user accounts found.');
            return;
        }

        // Create user accounts for Gurus
        foreach ($gurusWithoutUsers as $guru) {
            // Generate email if not present
            $email = $guru->email;
            if (empty($email)) {
                $email = strtolower(str_replace(' ', '.', $guru->name)) . '@guru.local';
            }

            if ($dryRun) {
                $this->line("Would create user for Guru: {$guru->name} ({$email})");
            } else {
                $user = User::create([
                    'name' => $guru->name,
                    'email' => $email,
                    'password' => Hash::make('password'), // Default password
                    'userable_type' => Guru::class,
                    'userable_id' => $guru->id,
                ]);

                $this->info("Created user account for Guru: {$guru->name} (ID: {$user->id})");
            }
        }

        // Create user accounts for Parents
        foreach ($parentsWithoutUsers as $parent) {
            // Use father_name as the primary name, or mother_name if father is empty
            $name = $parent->father_name ?: $parent->mother_name;
            $email = strtolower(str_replace(' ', '.', $name)) . '@parent.local'; // Generate email

            if ($dryRun) {
                $this->line("Would create user for Parent: {$name} ({$email})");
            } else {
                $user = User::create([
                    'name' => $name,
                    'email' => $email,
                    'password' => Hash::make('password'), // Default password
                    'userable_type' => ParentModel::class,
                    'userable_id' => $parent->id,
                ]);

                $this->info("Created user account for Parent: {$name} (ID: {$user->id})");
            }
        }

        if (!$dryRun) {
            $this->info('All missing user accounts have been created.');
            $this->warn('Default password is "password" - users should change this on first login.');
        }
    }
}
