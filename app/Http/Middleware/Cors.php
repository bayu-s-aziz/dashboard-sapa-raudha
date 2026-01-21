<?php
namespace App\Http\Middleware;
use Closure;
class Cors {
  public function handle($req, Closure $next) {
    $origin = $req->headers->get('Origin');
    
    // Allow localhost on any port (for Flutter dev), production domain, and env-configured origins
    $allowedOrigins = [
      env('APP_URL', 'https://sapa.ra-alislam.sch.id'),
    ];
    
    // Add environment-configured origins
    $envOrigins = env('CORS_ALLOWED_ORIGINS', '');
    if ($envOrigins) {
      $allowedOrigins = array_merge($allowedOrigins, array_map('trim', explode(',', $envOrigins)));
    }
    
    // Check if origin matches
    $isAllowed = false;
    if ($origin) {
      // Allow any localhost port (0.0.0.0, 127.0.0.1, or localhost)
      if (preg_match('/^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/', $origin)) {
        $isAllowed = true;
      }
      // Check exact matches
      elseif (in_array($origin, $allowedOrigins)) {
        $isAllowed = true;
      }
    }
    
    if (!$isAllowed) {
      $origin = env('APP_URL', 'https://sapa.ra-alislam.sch.id');
    }
    
    $headers = [
      'Access-Control-Allow-Origin' => $origin,
      'Access-Control-Allow-Methods' => 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers' => 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
      'Access-Control-Allow-Credentials' => 'true',
    ];
    
    if ($req->getMethod() === 'OPTIONS') return response()->json('OK', 200, $headers);
    
    $res = $next($req);
    foreach ($headers as $k=>$v) $res->headers->set($k, $v);
    return $res;
  }
}