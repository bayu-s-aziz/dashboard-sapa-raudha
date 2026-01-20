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
import { toast } from '@/hooks/use-toast';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface Guru {
    id: number;
    name: string;
}

interface Kelas {
    id: number;
    name: string;
    group: string;
    academic_year: string;
    homeroom_teacher_id: number | null;
}

interface Props {
    class: Kelas;
    gurus: Guru[];
}

export default function ClassEdit({ class: kelas, gurus }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kelas', href: '/classes' },
        { title: 'Edit', href: '#' },
    ];

    const { data, setData, put, processing, errors } = useForm({
        name: kelas.name,
        group: kelas.group,
        homeroom_teacher_id: kelas.homeroom_teacher_id?.toString() || 'none',
        academic_year: kelas.academic_year,
    });

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put(`/classes/${kelas.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Data kelas berhasil diperbarui',
                    variant: 'success',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat menyimpan data',
                    variant: 'destructive',
                });
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Kelas" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Edit Data Kelas"
                        description="Perbarui informasi kelas"
                    />
                    <Button variant="outline" asChild>
                        <Link href="/classes">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Kelas</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">
                                        Nama Kelas{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Masukkan nama kelas"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="group">
                                        Kelompok{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Select
                                        value={data.group}
                                        onValueChange={(value) =>
                                            setData('group', value)
                                        }
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih kelompok" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">
                                                Kelompok A (Siswa Baru)
                                            </SelectItem>
                                            <SelectItem value="B">
                                                Kelompok B (Siswa Lama)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.group && (
                                        <p className="text-sm text-destructive">
                                            {errors.group}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="academic_year">
                                        Tahun Akademik{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="academic_year"
                                        value={data.academic_year}
                                        onChange={(e) =>
                                            setData(
                                                'academic_year',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Contoh: 2024/2025"
                                        required
                                    />
                                    {errors.academic_year && (
                                        <p className="text-sm text-destructive">
                                            {errors.academic_year}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="homeroom_teacher_id">
                                        Wali Kelas
                                    </Label>
                                    <Select
                                        value={data.homeroom_teacher_id}
                                        onValueChange={(value) =>
                                            setData(
                                                'homeroom_teacher_id',
                                                value,
                                            )
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih wali kelas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">
                                                Tidak ada wali kelas
                                            </SelectItem>
                                            {gurus.map((guru) => (
                                                <SelectItem
                                                    key={guru.id}
                                                    value={guru.id.toString()}
                                                >
                                                    {guru.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.homeroom_teacher_id && (
                                        <p className="text-sm text-destructive">
                                            {errors.homeroom_teacher_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 border-t pt-4">
                                <Button variant="outline" asChild>
                                    <Link href="/classes">Batal</Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    <Save className="mr-2 h-4 w-4" />
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
