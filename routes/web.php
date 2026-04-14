<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Student\PhotographerListController;
use App\Http\Controllers\Student\BookingHistoryController;
use App\Http\Controllers\Photographer\ProfileController;
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
    Route::get('/photographer-list', [PhotographerListController::class, 'index'])->name('photographer.list');
    Route::get('/view-photographer', [PhotographerListController::class, 'show'])->name('view.photographer');
    Route::get('/booking-history', [BookingHistoryController::class, 'index'])->name('booking.history');
});


Route::middleware(['auth', 'user-access:admin'])->group(function () {

    Route::get('/admin/dashboard', [HomeController::class, 'admin'])->name('admin.dashboard');
});


Route::middleware(['auth', 'user-access:photograph'])->group(function () {

    Route::get('/photographer/dashboard', [HomeController::class, 'photographer'])->name('photograph.dashboard');
    Route::get('/photographer-profile', [ProfileController::class, 'index'])->name('photographer.profile');
    // Route::post('/photographer/profile', [ProfileController::class, 'update_photographer']);
    Route::post('/photo', [ProfileController::class, 'update_photographer'])
        ->name('photographer.profile.update');
});

require __DIR__ . '/settings.php';
