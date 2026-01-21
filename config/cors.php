<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS", which determines what cross-origin operations may execute
    | in web browsers. These settings are used by the Fruitcake CORS package
    | or Laravel's built-in CORS handling.
    |
    */

    // You can set allowed origins in your .env using comma-separated values.
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    // Default uses env('CORS_ALLOWED_ORIGINS', ''). If empty, set to allow all.
    'allowed_origins' => array_filter(array_map('trim', explode(',', env('CORS_ALLOWED_ORIGINS', env('APP_URL', ''))))),

    // If you set allowed_origins to empty array, fallback to allow all origins.
    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    // Whether to allow cookies / credentials. For mobile Bearer tokens this can be false.
    'supports_credentials' => env('CORS_SUPPORTS_CREDENTIALS', false),

    // Preflight cache duration (seconds)
    'max_age' => 0,
];
