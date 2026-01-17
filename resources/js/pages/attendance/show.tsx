import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, Clock, User, UserCheck } from 'lucide-react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface Student {
    id: number;
    name: string;
    nis: string;
}

interface Guru {
    id: number;
    name: string;
}

interface Attendance {
    id: number;
    student_id: number;
    date: string;
    status: 'hadir' | 'sakit' | 'izin' | 'alpa';
    check_in?: string;
    check_out?: string;
    notes?: string;
    scanned_by?: number;
    student: Student;
    scanner?: Guru;
}

interface Props {
    attendance: Attendance;
}

export default function AttendanceShow({ attendance }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
        { title: 'Detail Presensi', href: '#' },
    ];

    const getStatusBadge = (status: string) => {
        const variants = {
            hadir: 'default',
            sakit: 'destructive',
            izin: 'secondary',
            alpa: 'outline',
        } as const;

        const labels = {
            hadir: 'Hadir',
            sakit: 'Sakit',
            izin: 'Izin',
            alpa: 'Alpa',
        };

        return (
            <Badge variant={variants[status as keyof typeof variants]} className="text-lg px-3 py-1">
                {labels[status as keyof typeof labels]}
            </Badge>
        );
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (time?: string) => {
        if (!time) return null;
        return new Date(`1970-01-01T${time}`).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Presensi - ${attendance.student.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Detail Presensi"
                        description={`Presensi ${attendance.student.name} pada ${formatDate(attendance.date)}`}
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/attendance/${attendance.id}/edit`}>
                                Edit Presensi
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/attendance">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Student Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Informasi Siswa
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Nama Siswa
                                </label>
                                <p className="text-lg font-semibold">{attendance.student.name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    NIS
                                </label>
                                <p className="text-lg">{attendance.student.nis}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Attendance Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <UserCheck className="h-5 w-5" />
                                Informasi Presensi
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Tanggal
                                </label>
                                <p className="text-lg flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(attendance.date)}
                                </p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Status
                                </label>
                                <div className="mt-1">
                                    {getStatusBadge(attendance.status)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Time Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            Waktu Kehadiran
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Waktu Masuk (Check In)
                                </label>
                                <p className="text-2xl font-mono">
                                    {formatTime(attendance.check_in) || 'Belum tercatat'}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Waktu Keluar (Check Out)
                                </label>
                                <p className="text-2xl font-mono">
                                    {formatTime(attendance.check_out) || 'Belum tercatat'}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Tambahan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {attendance.notes && (
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">
                                    Catatan
                                </label>
                                <p className="mt-1 p-3 bg-muted rounded-md">
                                    {attendance.notes}
                                </p>
                            </div>
                        )}

                        {attendance.scanner && (
                            <>
                                <Separator />
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Dicatat Oleh
                                    </label>
                                    <p className="text-lg mt-1">{attendance.scanner.name}</p>
                                </div>
                            </>
                        )}

                        <Separator />

                        <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
                            <div>
                                <span className="font-medium">ID Presensi:</span> {attendance.id}
                            </div>
                            <div>
                                <span className="font-medium">ID Siswa:</span> {attendance.student_id}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
