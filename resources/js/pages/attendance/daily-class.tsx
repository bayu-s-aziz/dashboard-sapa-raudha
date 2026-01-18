import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, Save, Users } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
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

interface Kelas {
    id: number;
    name: string;
    group: string;
    students: Student[];
}

interface ExistingAttendance {
    [key: number]: {
        id: number;
        status: 'hadir' | 'sakit' | 'izin' | 'alpa';
        check_in?: string;
        check_out?: string;
        notes?: string;
    };
}

interface Props {
    class: Kelas;
    date: string;
    existingAttendance: ExistingAttendance;
    gurus: Guru[];
}

export default function DailyClassAttendance({ class: classData, date, existingAttendance, gurus }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kelas', href: '/classes' },
        { title: `Kelas ${classData.group}`, href: `/classes/${classData.id}` },
        { title: 'Presensi Harian', href: '#' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        date: date,
        scanned_by: '',
        records: classData.students.map(student => ({
            student_id: student.id,
            status: existingAttendance[student.id]?.status || 'hadir',
            check_in: existingAttendance[student.id]?.check_in || '',
            check_out: existingAttendance[student.id]?.check_out || '',
            notes: existingAttendance[student.id]?.notes || '',
        })),
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

        router.post(`/api/attendance/bulk-update`, {
            class_id: classData.id,
            date: data.date,
            records: data.records,
            scanned_by: data.scanned_by || null,
        }, {
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Presensi berhasil disimpan',
                    variant: 'default',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat menyimpan presensi',
                    variant: 'destructive',
                });
            },
        });
    };

    const updateRecord = (studentId: number, field: string, value: string) => {
        setData('records', data.records.map(record =>
            record.student_id === studentId
                ? { ...record, [field]: value }
                : record
        ));
    };

    const getStatusBadge = (status: string) => {
        const variants = {
            hadir: 'default',
            sakit: 'destructive',
            izin: 'secondary',
            alpa: 'outline',
        } as const;

        return (
            <Badge variant={variants[status as keyof typeof variants]}>
                {status === 'hadir' ? 'Hadir' :
                 status === 'sakit' ? 'Sakit' :
                 status === 'izin' ? 'Izin' : 'Alpa'}
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

    const markAllPresent = () => {
        setData('records', data.records.map(record => ({
            ...record,
            status: 'hadir' as const,
        })));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Presensi Harian - Kelas ${classData.group}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title={`Presensi Harian Kelas ${classData.group}`}
                        description={`Catat presensi siswa pada ${formatDate(date)}`}
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={markAllPresent}>
                            <Users className="mr-2 h-4 w-4" />
                            Tandai Semua Hadir
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href={`/classes/${classData.id}`}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali ke Kelas
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Class Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            Informasi Presensi
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Kelas</label>
                                <p className="text-lg font-semibold">Kelas {classData.group}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Tanggal</label>
                                <p className="text-lg">{formatDate(date)}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Jumlah Siswa</label>
                                <p className="text-lg">{classData.students.length} siswa</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <form onSubmit={handleSubmit}>
                    {/* Recorder Info */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Dicatat Oleh</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="max-w-xs">
                                <Label htmlFor="scanned_by">Pilih Guru yang Mencatat</Label>
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
                            </div>
                        </CardContent>
                    </Card>

                    {/* Attendance Records */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Daftar Presensi Siswa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {classData.students.map((student, index) => {
                                    const record = data.records.find(r => r.student_id === student.id)!;
                                    const isExisting = existingAttendance[student.id];

                                    return (
                                        <div key={student.id} className="border rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold">{student.name}</h4>
                                                    <p className="text-sm text-muted-foreground">NIS: {student.nis}</p>
                                                </div>
                                                {isExisting && (
                                                    <Badge variant="secondary">Sudah tercatat</Badge>
                                                )}
                                            </div>

                                            <div className="grid gap-4 md:grid-cols-4">
                                                <div className="space-y-2">
                                                    <Label>Status</Label>
                                                    <Select
                                                        value={record.status}
                                                        onValueChange={(value) => updateRecord(student.id, 'status', value)}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="hadir">Hadir</SelectItem>
                                                            <SelectItem value="sakit">Sakit</SelectItem>
                                                            <SelectItem value="izin">Izin</SelectItem>
                                                            <SelectItem value="alpa">Alpa</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Waktu Masuk</Label>
                                                    <Input
                                                        type="time"
                                                        value={record.check_in}
                                                        onChange={(e) => updateRecord(student.id, 'check_in', e.target.value)}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Waktu Keluar</Label>
                                                    <Input
                                                        type="time"
                                                        value={record.check_out}
                                                        onChange={(e) => updateRecord(student.id, 'check_out', e.target.value)}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Catatan</Label>
                                                    <Input
                                                        placeholder="Opsional"
                                                        value={record.notes}
                                                        onChange={(e) => updateRecord(student.id, 'notes', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex justify-end">
                        <Button type="submit" disabled={processing} size="lg">
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Menyimpan...' : 'Simpan Semua Presensi'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
