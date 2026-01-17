<?php

namespace App\Console\Commands;

use App\Models\Guru;
use App\Models\ParentModel;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class SyncUsersFromGurusParents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:users-from-gurus-parents {--fresh : Delete all users before syncing}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync users table from gurus and parents tables';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->option('fresh')) {
            $this->warn('Deleting all existing users...');
            User::query()->delete();
            $this->info('All users deleted.');
        }

        $this->info('Starting sync process...');

        $gurusSynced = 0;
        $parentsSynced = 0;

        // Sync Gurus
        $this->info('Syncing gurus...');
        $gurus = Guru::all();

        foreach ($gurus as $guru) {
            $user = User::where('userable_type', Guru::class)
                ->where('userable_id', $guru->id)
                ->first();

            if (!$user) {
                // Check if email already exists
                $user = User::where('email', $guru->email)->first();

                if ($user) {
                    // Update existing user
                    $user->update([
                        'name' => $guru->name,
                        'userable_type' => Guru::class,
                        'userable_id' => $guru->id,
                    ]);
                } else {
                    // Create new user
                    $user = User::create([
                        'name' => $guru->name,
                        'email' => $guru->email,
                        'password' => Hash::make($guru->password_hash ?? 'password'),
                        'userable_type' => Guru::class,
                        'userable_id' => $guru->id,
                    ]);
                }

                $gurusSynced++;
                $this->line("  - Created/Updated user for guru: {$guru->name}");
            }
        }

        $this->info("Synced {$gurusSynced} gurus.");

        // Sync Parents
        $this->info('Syncing parents...');
        $parents = ParentModel::all();

        foreach ($parents as $parent) {
            $user = User::where('userable_type', ParentModel::class)
                ->where('userable_id', $parent->id)
                ->first();

            if (!$user) {
                // Determine primary name
                $primaryName = $parent->father_name
                    ?? $parent->mother_name
                    ?? $parent->guardian_name
                    ?? 'Orang Tua #' . $parent->id;

                // Generate email from phone or ID
                $primaryPhone = $parent->father_phone
                    ?? $parent->mother_phone
                    ?? $parent->guardian_phone;

                $email = $primaryPhone
                    ? preg_replace('/[^0-9]/', '', $primaryPhone) . '@parent.sapa-raudha.local'
                    : 'parent' . $parent->id . '@sapa-raudha.local';

                // Check if email already exists
                $existingUser = User::where('email', $email)->first();

                if ($existingUser) {
                    // Update existing user
                    $existingUser->update([
                        'name' => $primaryName,
                        'userable_type' => ParentModel::class,
                        'userable_id' => $parent->id,
                    ]);
                    $user = $existingUser;
                } else {
                    // Create new user
                    $user = User::create([
                        'name' => $primaryName,
                        'email' => $email,
                        'password' => Hash::make($parent->password_hash ?? 'password'),
                        'userable_type' => ParentModel::class,
                        'userable_id' => $parent->id,
                    ]);
                }

                $parentsSynced++;
                $this->line("  - Created/Updated user for parent: {$primaryName}");
            }
        }

        $this->info("Synced {$parentsSynced} parents.");
        $this->newLine();
        $this->info('✓ Sync completed successfully!');
        $this->info("Total: {$gurusSynced} gurus + {$parentsSynced} parents synced.");

        return Command::SUCCESS;
    }
}
