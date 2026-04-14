<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PhotographerListController extends Controller
{
    public function index()
    {
        return Inertia::render('student/photographerlist');
    }

    public function show()
    {
        return Inertia::render('student/viewphotographer');
    }
}
