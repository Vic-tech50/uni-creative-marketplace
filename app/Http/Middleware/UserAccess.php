<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
     public function handle(Request $request, Closure $next, $userType): Response
    {
        if (Auth::user()->role == $userType) {
            return $next($request);
        }



        return response()->json(['You do not have permission to access for this page.']);
    }
    // public function handle(Request $request, Closure $next): Response
    // {
    //     return $next($request);
    // }
}
