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
        Schema::table('users', function (Blueprint $table) {
            $table->text('bio')->nullable();
            $table->string('hourlyrate')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('availability')->nullable();
            $table->string('equipment')->nullable();
            $table->string('university')->nullable();
            $table->string('availability')->nullable();
            $table->json('images')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
