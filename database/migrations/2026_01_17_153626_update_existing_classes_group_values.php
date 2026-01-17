<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Update classes with "A" in the name to group A
        DB::statement("UPDATE classes SET `group` = 'A' WHERE name LIKE '%A%'");

        // Update classes with "B" in the name to group B
        DB::statement("UPDATE classes SET `group` = 'B' WHERE name LIKE '%B%'");

        // For any remaining classes that don't match, set them to group A by default
        DB::statement("UPDATE classes SET `group` = 'A' WHERE `group` NOT IN ('A', 'B')");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Reset all groups back to '1' (the original value)
        DB::statement("UPDATE classes SET `group` = '1'");
    }
};
