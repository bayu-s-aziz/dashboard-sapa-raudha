<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First convert existing integer grades to strings
        DB::statement("UPDATE classes SET grade = CAST(grade AS CHAR)");

        Schema::table('classes', function (Blueprint $table) {
            $table->string('grade')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('classes', function (Blueprint $table) {
            $table->integer('grade')->change();
        });
    }
};
