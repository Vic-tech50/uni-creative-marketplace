<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\PasswordResetResponse as PasswordResetResponseContract;

class PasswordResetResponse implements PasswordResetResponseContract
{
    public function toResponse($request)
    {
        return redirect()->route('login')
            ->with('status', 'Password reset successfully. Please login.');
    }
}

// class PasswordResetResponse
// {
//     /**
//      * Create a new class instance.
//      */
//     public function __construct()
//     {
//         //
//     }
// }
