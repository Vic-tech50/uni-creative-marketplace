<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function store(LoginRequest $request): RedirectResponse
    {
        $user = $request->validateCredentials();

        if (Features::enabled(Features::twoFactorAuthentication()) && $user->hasEnabledTwoFactorAuthentication()) {
            $request->session()->put([
                'login.id' => $user->getKey(),
                'login.remember' => $request->boolean('remember'),
            ]);

            return to_route('two-factor.login');
        }

        Auth::login($user, $request->boolean('remember'));

        $request->session()->regenerate();

        if (Auth::user()->role == 'admin') {
            return redirect()->intended(route('admin.dashboard', absolute: false));
        } else if (Auth::user()->role == 'student') {
            $user = Auth::user();
            if ($user->last_seen_at === null || Carbon::parse($user->last_seen_at)->diffInMinutes(now()) >= 1) {
                $user->update(['last_seen_at' => Carbon::now()]);
            }
            return redirect()->intended(route('dashboard', absolute: false));
        } else {
            return redirect()->intended(route('photograph.dashboard', absolute: false));
        }
    }
}
