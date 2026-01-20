<?php

namespace App\Console\Commands;

use App\Models\ParentModel;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportParentsFromSql extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:import-parents-from-sql {--file= : Path to SQL file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import parent data from SQL file';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $filePath = $this->option('file') ?: base_path('alislam_sapa_raudha.sql');

        if (!file_exists($filePath)) {
            $this->error("SQL file not found: {$filePath}");
            return 1;
        }

        $this->info("Reading SQL file: {$filePath}");

        $sqlContent = file_get_contents($filePath);

        // Extract parents INSERT statement
        preg_match('/INSERT INTO `parents`.*?\((.*?)\) VALUES(.*?);/s', $sqlContent, $matches);

        if (!$matches) {
            $this->error('Could not find parents INSERT statement in SQL file');
            return 1;
        }

        $columns = $matches[1];
        $values = $matches[2];

        $this->info("Found parents INSERT statement");
        $this->info("Current parents in database: " . ParentModel::count());

        // Use INSERT IGNORE to handle duplicates
        try {
            $insertSql = "INSERT IGNORE INTO `parents` ({$columns}) VALUES{$values}";
            DB::statement($insertSql);

            $this->info("Import completed successfully!");
            $this->info("- Total parents in database: " . ParentModel::count());

        } catch (\Exception $e) {
            $this->error("Import failed: " . $e->getMessage());
            return 1;
        }

        return 0;
    }
}
