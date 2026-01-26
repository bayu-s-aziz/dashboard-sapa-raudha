import { Head, Link, useForm, usePage } from '@inertiajs/react';
import axios from 'axios';
import { ArrowLeft, Save } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';

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

interface Props {
    students: Student[];
    gurus: Guru[];
}

export default function AttendanceCreate({ students, gurus }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
        { title: 'Tambah Presensi', href: '/attendance/create' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        student_id: '',
        date: new Date().toISOString().split('T')[0], // Today's date
        status: 'hadir',
        check_in: '',
        check_out: '',
        notes: '',
        scanned_by: '',
    });

    const [availableStudents, setAvailableStudents] = useState<Student[]>(students);

    useEffect(() => {
        const flash = page.props.flash || {};
        if (flash?.success) {
            toast({
                title: 'Berhasil',
                description: flash.success,
                variant: 'success',
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

    useEffect(() => {
        const fetchAvailableStudents = async () => {
            if (!data.date) return;
            try {
                const response = await axios.get('/api/attendance/available-students', {
                    params: { date: data.date },
                    withCredentials: true,
                });
                setAvailableStudents(response.data);
            } catch (error) {
                console.error('Error fetching available students:', error);
                // Fallback: gunakan semua siswa jika gagal
                setAvailableStudents(students);
            }
        };

        fetchAvailableStudents();
    }, [data.date, students]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        post('/attendance', {
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Presensi berhasil dibuat',
                    variant: 'success',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat membuat presensi',
                    variant: 'destructive',
                });
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Presensi" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Tambah Presensi"
                        description="Tambahkan data kehadiran siswa"
                    />
                    <Button variant="outline" asChild>
                        <Link href="/attendance">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Presensi</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="student_id">
                                        Siswa <span className="text-destructive">*</span>
                                    </Label>
                                    <Select
                                        value={data.student_id}
                                        onValueChange={(value) => setData('student_id', value)}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih siswa" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {availableStudents.map((student) => (
                                                <SelectItem key={student.id} value={student.id.toString()}>
                                                    {student.name} ({student.nis})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.student_id && (
                                        <p className="text-sm text-destructive">
                                            {errors.student_id}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="date">
                                        Tanggal <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={data.date}
                                        onChange={(e) => setData('date', e.target.value)}
                                        required
                                    />
                                    {errors.date && (
                                        <p className="text-sm text-destructive">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="status">
                                        Status <span className="text-destructive">*</span>
                                    </Label>
                                    <Select
                                        value={data.status}
                                        onValueChange={(value) => setData('status', value)}
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
                                        Waktu Masuk
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
                                        Waktu Keluar
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

                    <div className="mt-6 flex justify-end gap-2">
                        <Button type="button" variant="outline" asChild>
                            <Link href="/attendance">Batal</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Menyimpan...' : 'Simpan Presensi'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
