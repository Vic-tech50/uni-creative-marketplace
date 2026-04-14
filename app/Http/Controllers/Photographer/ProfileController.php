<?php

namespace App\Http\Controllers\Photographer;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhotographerProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('photographer/portfolio');
    }

    // public function update_photographer(PhotographerProfileRequest $request)
    // {

    //     $validated = $request->validated();
    //     // $userid = Auth::id();
    //     // $user = Auth::user();
    //     // return dd($validated);
    //     $user = User::findOrFail($request->id);


    //     $user->update($validated);

    //     return "True";

    //     // Handle thumbnail upload (OPTIONAL)
    //     if ($request->hasFile('profile_picture')) {
    //         $thumbnailPath = $request->file('profile_picture')->store('profile', 'public');
    //         $validated['profile_picture'] = $thumbnailPath;
    //     } else {
    //         // Keep old thumbnail
    //         unset($validated['profile_picture']);
    //     }

    //     // Handle multiple images upload (OPTIONAL)
    //     if ($request->hasFile('images')) {
    //         $imagePaths = [];
    //         foreach ($request->file('images') as $image) {
    //             $imagePaths[] = $image->store('images', 'public');
    //         }

    //         $validated['images'] = json_encode($imagePaths);
    //     } else {
    //         // Keep old images
    //         unset($validated['images']);
    //     }





    //     // return redirect()
    //     //     ->back()
    //     //     ->with('success', 'Profile Saved successfully.');
    // }

    public function update_photographer(PhotographerProfileRequest $request)
    {

        $validated = $request->validated();


        // Handle thumbnail upload (OPTIONAL)
        if ($request->hasFile('profile_picture')) {
            $thumbnailPath = $request->file('profile_picture')->store('profile', 'public');
            $validated['profile_picture'] = $thumbnailPath;
        }

        // Handle multiple images upload (OPTIONAL)
        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('images', 'public');
            }

            $validated['images'] = json_encode($imagePaths);
        }
        // $user = User::find($request->id);
        $user = Auth::user();

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->bio = $validated['bio'];
        $user->hourlyrate = $validated['hourlyrate'];
        $user->profile_picture = $validated['profile_picture'];
        $user->images = $validated['images'];
        $user->equipment = $validated['equipment'];
        $user->university = $validated['university'];
        $user->save();

        // $user->update([
        //     'name'      => $validated['name'],
        //     'email'     => $validated['email'],
        //     'bio'   => $validated['bio'] ?? null,
        //     'hourlyrate'     => $validated['hourlyrate'],
        //     'profile_picture'     => $validated['profile_picture'],
        //     'images'     => $validated['images'] ?? null,
        //     'equipment'     => $validated['equipment'] ?? null,
        //     'university'  => $validated['university'] ?? null,

        // ]);

        return redirect()
            ->back()
            ->with('success', 'Profile Saved successfully.');
    }
}
