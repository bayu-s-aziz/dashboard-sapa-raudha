<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('group');
            $table->unsignedBigInteger('homeroom_teacher_id')->nullable();
            $table->string('academic_year', 20)->default('2025/2026');
            $table->timestamp('created_at')->useCurrent();

            $table->index('group');
            $table->index('homeroom_teacher_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
