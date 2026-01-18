<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Kehadiran;
use App\Models\Kelas;
use App\Models\Pengumuman;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get current date
        $today = Carbon::today();

        // Basic counts
        $totalStudents = Siswa::count();
        $totalTeachers = Guru::count();
        $totalClasses = Kelas::count();

        // Today's attendance summary
        $todayAttendance = Kehadiran::where('date', $today)->get();
        $todayStats = [
            'total' => $todayAttendance->count(),
            'hadir' => $todayAttendance->where('status', 'hadir')->count(),
            'sakit' => $todayAttendance->where('status', 'sakit')->count(),
            'izin' => $todayAttendance->where('status', 'izin')->count(),
            'alpa' => $todayAttendance->where('status', 'alpa')->count(),
        ];

        // Recent announcements (last 5)
        $recentAnnouncements = Pengumuman::with('author')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($announcement) {
                return [
                    'id' => $announcement->id,
                    'title' => $announcement->title,
                    'content' => $announcement->content,
                    'author_name' => $announcement->author?->name ?? 'Unknown',
                    'created_at' => $announcement->created_at->format('d M Y'),
                    'target_audience' => $announcement->target_audience,
                ];
            });

        // Weekly attendance trend (last 7 days)
        $weeklyStats = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $attendance = Kehadiran::where('date', $date)->get();
            $weeklyStats[] = [
                'date' => $date->format('d M'),
                'total' => $attendance->count(),
                'hadir' => $attendance->where('status', 'hadir')->count(),
                'absent' => $attendance->whereIn('status', ['sakit', 'izin', 'alpa'])->count(),
            ];
        }

        // Calculate max total for chart scaling (avoid division by zero)
        $maxTotal = max(array_column($weeklyStats, 'total')) ?: 1;

        // Add percentage calculations for chart
        foreach ($weeklyStats as &$stat) {
            $stat['hadir_percentage'] = $maxTotal > 0 ? ($stat['hadir'] / $maxTotal) * 100 : 0;
            $stat['absent_percentage'] = $maxTotal > 0 ? ($stat['absent'] / $maxTotal) * 100 : 0;
        }

        return Inertia::render('dashboard', [
            'stats' => [
                'total_students' => (int) $totalStudents,
                'total_teachers' => (int) $totalTeachers,
                'total_classes' => (int) $totalClasses,
            ],
            'today_stats' => [
                'total' => (int) $todayStats['total'],
                'hadir' => (int) $todayStats['hadir'],
                'sakit' => (int) $todayStats['sakit'],
                'izin' => (int) $todayStats['izin'],
                'alpa' => (int) $todayStats['alpa'],
            ],
            'recent_announcements' => $recentAnnouncements->toArray(),
            'weekly_stats' => $weeklyStats,
        ]);
    }
}
