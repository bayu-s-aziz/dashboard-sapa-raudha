import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { type FormEvent, useEffect } from 'react';

import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
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
    gurus: Guru[];
}

export default function AttendanceEdit({ attendance, gurus }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
        { title: 'Edit Presensi', href: '#' },
    ];

    const { data, setData, put, processing, errors } = useForm({
        status: attendance.status,
        check_in: attendance.check_in || '',
        check_out: attendance.check_out || '',
        notes: attendance.notes || '',
        scanned_by: attendance.scanned_by?.toString() || '',
    });

    useEffect(() => {
        const flash = page.props.flash || {};
        if (flash?.success) {
            toast({
                title: 'Berhasil',
                description: flash.success,
                variant: 'default',
            });
        }
        if (flash?.error) {
            toast({
                title: 'Gagal',
                description: flash.error,
                variant: 'destructive',
            });
        }
    }, [page.props.flash]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        put(`/attendance/${attendance.id}`, {
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Presensi berhasil diperbarui',
                    variant: 'default',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat memperbarui presensi',
                    variant: 'destructive',
                });
            },
        });
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Presensi - ${attendance.student.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Edit Presensi"
                        description={`Edit presensi ${attendance.student.name} pada ${formatDate(attendance.date)}`}
                    />
                    <Button variant="outline" asChild>
                        <Link href={`/attendance/${attendance.id}`}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                {/* Read-only attendance info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi Presensi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 text-sm">
                            <div>
                                <label className="font-medium text-muted-foreground">Siswa</label>
                                <p className="text-lg font-semibold mt-1">
                                    {attendance.student.name} ({attendance.student.nis})
                                </p>
                            </div>
                            <div>
                                <label className="font-medium text-muted-foreground">Tanggal</label>
                                <p className="text-lg mt-1">{formatDate(attendance.date)}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Edit Data Presensi</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="status">
                                        Status <span className="text-destructive">*</span>
                                    </Label>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) => setData('status', value as 'hadir' | 'sakit' | 'izin' | 'alpa')}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hadir">Hadir</SelectItem>
                                            <SelectItem value="sakit">Sakit</SelectItem>
                                            <SelectItem value="izin">Izin</SelectItem>
                                            <SelectItem value="alpa">Alpa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.status && (
                                        <p className="text-sm text-destructive">
                                            {errors.status}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="scanned_by">
                                        Dicatat Oleh
                                    </Label>
                                    <Select
                                        value={data.scanned_by}
                                        onValueChange={(value) => setData('scanned_by', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih guru" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {gurus.map((guru) => (
                                                <SelectItem key={guru.id} value={guru.id.toString()}>
                                                    {guru.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.scanned_by && (
                                        <p className="text-sm text-destructive">
                                            {errors.scanned_by}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="check_in">
                                        Waktu Masuk (Check In)
                                    </Label>
                                    <Input
                                        id="check_in"
                                        type="time"
                                        value={data.check_in}
                                        onChange={(e) => setData('check_in', e.target.value)}
                                    />
                                    {errors.check_in && (
                                        <p className="text-sm text-destructive">
                                            {errors.check_in}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="check_out">
                                        Waktu Keluar (Check Out)
                                    </Label>
                                    <Input
                                        id="check_out"
                                        type="time"
                                        value={data.check_out}
                                        onChange={(e) => setData('check_out', e.target.value)}
                                    />
                                    {errors.check_out && (
                                        <p className="text-sm text-destructive">
                                            {errors.check_out}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">
                                    Catatan
                                </Label>
                                <Textarea
                                    id="notes"
                                    value={data.notes}
                                    onChange={(e) => setData('notes', e.target.value)}
                                    placeholder="Tambahkan catatan jika diperlukan"
                                    rows={3}
                                />
                                {errors.notes && (
                                    <p className="text-sm text-destructive">
                                        {errors.notes}
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex justify-end">
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
