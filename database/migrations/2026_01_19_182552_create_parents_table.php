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
        Schema::create('parents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->string('father_name', 100)->nullable();
            $table->string('father_job', 100)->nullable();
            $table->string('father_phone', 20)->nullable();
            $table->string('mother_name', 100)->nullable();
            $table->string('mother_job', 100)->nullable();
            $table->string('mother_phone', 20)->nullable();
            $table->string('guardian_name', 100)->nullable();
            $table->string('guardian_job', 100)->nullable();
            $table->string('guardian_phone', 20)->nullable();
            $table->string('photo_url')->nullable();
            $table->string('password_hash');
            $table->timestamps();

            $table->unique('student_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parents');
    }
};
