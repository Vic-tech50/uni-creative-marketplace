<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');


Route::post('/login', [AuthController::class, 'store']);

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::inertia('dashboard', 'dashboard')->name('dashboard');
// });

Route::middleware(['auth', 'verified', 'user-access:student'])->group(function () {

    Route::get('/dashboard', [HomeController::class, 'student'])->name('dashboard');
});


Route::middleware(['auth', 'user-access:admin'])->group(function () {

    Route::get('/admin/dashboard', [HomeController::class, 'admin'])->name('admin.dashboard');
});


Route::middleware(['auth', 'user-access:photograph'])->group(function () {

    Route::get('/photographer/dashboard', [HomeController::class, 'photographer'])->name('photograph.dashboard');
});

require __DIR__ . '/settings.php';
