<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
{
    public function toResponse($request)
    {
        return redirect()->route('login')->with('status', 'Registration successfull. Please login.');;
    }
}

// namespace App\Http\Responses;

// class RegisterResponse
// {
//     /**
//      * Create a new class instance.
//      */
//     public function __construct()
//     {
//         //
//     }
// }
