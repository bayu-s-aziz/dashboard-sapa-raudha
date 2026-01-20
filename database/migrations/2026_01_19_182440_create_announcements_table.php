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
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->unsignedBigInteger('author_id');
            $table->enum('author_type', ['guru'])->default('guru');
            $table->enum('target_audience', ['all', 'parents', 'teachers', 'class'])->default('all');
            $table->unsignedBigInteger('target_class_id')->nullable();
            $table->timestamps();

            $table->index('target_class_id');
            $table->index(['created_at'], 'idx_announcements_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('announcements');
    }
};
