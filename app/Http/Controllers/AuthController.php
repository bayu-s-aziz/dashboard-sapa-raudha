<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'device_name' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Revoke existing tokens for this device
        $user->tokens()->where('name', $request->device_name)->delete();

        $token = $user->createToken($request->device_name)->plainTextToken;

        // Load relasi untuk orang tua
        if ($user->isParent()) {
            $user->load('userable.student');
        }

        return response()->json([
            'success' => true,
            'data' => [
                'token' => $token,
                'user' => $user,
            ],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        // Load base relation
        $user->load('userable');

        // If parent, eager load student relation (wrapped in try to be defensive)
        try {
            if (method_exists($user, 'isParent') && $user->isParent()) {
                $user->load('userable.student');
            }
        } catch (\Exception $e) {
            // ignore to avoid throwing 500 when relation loading fails
        }

        return response()->json([
            'user' => $user,
        ]);
    }
}