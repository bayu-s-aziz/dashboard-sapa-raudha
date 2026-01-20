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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

                <div className="grid gap-6 md:grid-cols-2">
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
                                    {recent_announcements.map((announcement) => (
                                        <div key={announcement.id} className="space-y-2">
                                            <div className="flex items-start justify-between">
                                                <h4 className="font-medium text-sm">{announcement.title}</h4>
                                                <Badge variant="outline" className="text-xs">
                                                    {announcement.target_audience}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {announcement.content}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span>{announcement.author_name}</span>
                                                <span>{announcement.created_at}</span>
                                            </div>
                                            {announcement !== recent_announcements[recent_announcements.length - 1] && (
                                                <Separator />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-muted-foreground">Belum ada pengumuman</p>
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
                        <div className="flex items-end justify-between h-32 gap-2">
                            {weekly_stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center flex-1">
                                    <div className="flex flex-col items-center space-y-1 flex-1 justify-end w-full">
                                        <div
                                            className="bg-green-500 rounded-t w-full min-h-1"
                                            style={{
                                                height: `${stat.hadir_percentage}%`,
                                            }}
                                        />
                                        <div
                                            className="bg-red-500 rounded-t w-full"
                                            style={{
                                                height: `${stat.absent_percentage}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs text-muted-foreground mt-2">{stat.date}</span>
                                    <span className="text-xs font-medium">{stat.total}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded" />
                                <span>Hadir</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded" />
                                <span>Tidak Hadir</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
