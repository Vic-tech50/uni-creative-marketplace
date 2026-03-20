<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function admin()
    {
        return Inertia::render('dashboard');
    }

    public function student()
    {
        return Inertia::render('studentDashboard');
    }

    public function photographer()
    {
        return Inertia::render('photographDashboard');
    }
}
