import { Head, Link } from '@inertiajs/react';
import { CalendarDays, Users, GraduationCap, BookOpen, TrendingUp, Bell } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
// import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

interface DashboardProps {
    stats?: {
        total_students: number;
        total_teachers: number;
        total_classes: number;
    };
    today_stats?: {
        total: number;
        hadir: number;
        sakit: number;
        izin: number;
        alpa: number;
    };
    recent_announcements?: Array<{
        id: number;
        title: string;
        content: string;
        author_name: string;
        created_at: string;
        target_audience: string;
    }>;
    weekly_stats?: Array<{
        date: string;
        total: number;
        hadir: number;
        absent: number;
        hadir_percentage: number;
        absent_percentage: number;
    }>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard(props: DashboardProps) {
    const stats = props.stats || { total_students: 0, total_teachers: 0, total_classes: 0 };
    const today_stats = props.today_stats || { total: 0, hadir: 0, sakit: 0, izin: 0, alpa: 0 };
    const recent_announcements = props.recent_announcements || [];
    const weekly_stats = props.weekly_stats || [];

    const attendancePercentage = today_stats.total > 0 ? Math.round((today_stats.hadir / today_stats.total) * 100) : 0;

    const formatAudience = (audience: string) => {
        switch (audience.toLowerCase()) {
            case 'all':
                return 'Semua Audiens';
            case 'guru':
                return 'Guru';
            case 'orang_tua':
            case 'orang tua':
                return 'Orang Tua';
            case 'siswa':
                return 'Siswa';
            default:
                return audience;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 lg:gap-6 overflow-x-auto p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_students}</div>
                            <p className="text-xs text-muted-foreground">Siswa terdaftar</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Guru</CardTitle>
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_teachers}</div>
                            <p className="text-xs text-muted-foreground">Pengajar aktif</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Kelas</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_classes}</div>
                            <p className="text-xs text-muted-foreground">Kelas tersedia</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Kehadiran Hari Ini</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{attendancePercentage}%</div>
                            <p className="text-xs text-muted-foreground">
                                {today_stats.hadir} dari {today_stats.total} siswa hadir
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
                    {/* Today's Attendance Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CalendarDays className="h-5 w-5" />
                                Kehadiran Hari Ini
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Hadir</span>
                                <Badge variant="default" className="bg-green-500">
                                    {today_stats.hadir}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Sakit</span>
                                <Badge variant="secondary">
                                    {today_stats.sakit}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Izin</span>
                                <Badge variant="secondary">
                                    {today_stats.izin}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Alpa</span>
                                <Badge variant="destructive">
                                    {today_stats.alpa}
                                </Badge>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between font-medium">
                                <span>Total</span>
                                <span>{today_stats.total}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Announcements */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5" />
                                Pengumuman Terbaru
                            </CardTitle>
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/announcements">Lihat Semua</Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            {recent_announcements.length > 0 ? (
                                <div className="space-y-4">
                                    {recent_announcements.slice(0, 3).map((announcement) => (
                                        <div key={announcement.id} className="space-y-2">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                                <h4 className="font-medium text-sm leading-tight">{announcement.title}</h4>
                                                <Badge variant="outline" className="text-xs self-start">
                                                    {formatAudience(announcement.target_audience)}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {announcement.content.length > 100
                                                    ? `${announcement.content.substring(0, 100)}...`
                                                    : announcement.content
                                                }
                                            </p>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-muted-foreground">
                                                <span className="font-medium">{announcement.author_name}</span>
                                                <span>{new Date(announcement.created_at).toLocaleDateString('id-ID')}</span>
                                            </div>
                                            {announcement !== recent_announcements.slice(0, 3)[recent_announcements.slice(0, 3).length - 1] && (
                                                <Separator />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center py-8 text-muted-foreground">
                                    <div className="text-center">
                                        <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">Belum ada pengumuman</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Weekly Attendance Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Trend Kehadiran Minggu Ini</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {weekly_stats.length > 0 ? (
                            <>
                                <div className="flex items-end justify-between h-40 gap-1 sm:gap-2">
                                    {weekly_stats.map((stat, index) => (
                                        <div key={index} className="flex flex-col items-center flex-1 min-w-0">
                                            <div className="flex flex-col items-center space-y-1 flex-1 justify-end w-full max-w-8">
                                                <div
                                                    className="bg-green-500 rounded-t w-full transition-all duration-300 hover:bg-green-600"
                                                    style={{
                                                        height: `${Math.max(stat.hadir_percentage * 0.8, 4)}px`,
                                                        minHeight: '4px',
                                                    }}
                                                    title={`Hadir: ${stat.hadir} (${stat.hadir_percentage}%)`}
                                                />
                                                <div
                                                    className="bg-red-500 rounded-t w-full transition-all duration-300 hover:bg-red-600"
                                                    style={{
                                                        height: `${Math.max(stat.absent_percentage * 0.8, 4)}px`,
                                                        minHeight: '4px',
                                                    }}
                                                    title={`Tidak Hadir: ${stat.absent} (${stat.absent_percentage}%)`}
                                                />
                                            </div>
                                            <div className="text-center mt-2">
                                                <span className="text-xs text-muted-foreground block">
                                                    {(() => {
                                                        try {
                                                            const date = new Date(stat.date);
                                                            if (isNaN(date.getTime())) {
                                                                // Fallback: extract date from string if it's in YYYY-MM-DD format
                                                                const dateParts = stat.date.split('-');
                                                                if (dateParts.length === 3) {
                                                                    return new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]))
                                                                        .toLocaleDateString('id-ID', { weekday: 'short' });
                                                                }
                                                                return stat.date; // fallback to original string
                                                            }
                                                            return date.toLocaleDateString('id-ID', { weekday: 'short' });
                                                        } catch {
                                                            return stat.date; // fallback to original string
                                                        }
                                                    })()}
                                                </span>
                                                <span className="text-xs font-medium block">{stat.total}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-green-500 rounded" />
                                        <span>Hadir</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-red-500 rounded" />
                                        <span>Tidak Hadir</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-40 text-muted-foreground">
                                <div className="text-center">
                                    <CalendarDays className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                    <p>Data kehadiran minggu ini belum tersedia</p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
