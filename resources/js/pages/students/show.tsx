import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Calendar, Edit, MapPin, School, User } from 'lucide-react';
import { useEffect } from 'react';

import Heading from '@/components/heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    grade: string;
    homeroom_teacher: Guru | null;
}

interface Parent {
    id: number;
    father_name: string;
    mother_name: string;
    phone: string;
}

interface Siswa {
    id: number;
    nisn: string;
    nis: string;
    name: string;
    avatar?: string;
    class_id: number;
    gender: 'L' | 'P';
    birth_place: string | null;
    birth_date: string | null;
    religion: string | null;
    address: string | null;
    photo_url: string | null;
    kelas: Kelas;
    parent: Parent | null;
}

interface Props {
    student: Siswa;
}

export default function StudentShow({ student }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Siswa', href: '/students' },
        { title: student.name, href: `/students/${student.id}` },
    ];

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

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const formatDate = (date: string | null) => {
        if (!date) return '-';
        return new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Siswa - ${student.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Detail Siswa"
                        description="Informasi lengkap data siswa"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/students">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={`/students/${student.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="md:col-span-1">
                        <CardHeader>
                            <CardTitle>Profil Siswa</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col items-center gap-4">
                                <Avatar className="h-32 w-32">
                                    <AvatarImage
                                        src={student.avatar || undefined}
                                    />
                                    <AvatarFallback className="text-2xl">
                                        {getInitials(student.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold">
                                        {student.name}
                                    </h3>
                                    <Badge
                                        variant={
                                            student.gender === 'L'
                                                ? 'default'
                                                : 'secondary'
                                        }
                                        className="mt-2"
                                    >
                                        {student.gender === 'L'
                                            ? 'Laki-laki'
                                            : 'Perempuan'}
                                    </Badge>
                                </div>
                            </div>

                            <div className="space-y-3 border-t pt-4">
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        NISN
                                    </div>
                                    <div className="font-medium">
                                        {student.nisn}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">
                                        NIS
                                    </div>
                                    <div className="font-medium">
                                        {student.nis}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Informasi Detail</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            Tempat Lahir
                                        </div>
                                        <div className="mt-1 font-medium">
                                            {student.birth_place || '-'}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            Tanggal Lahir
                                        </div>
                                        <div className="mt-1 font-medium">
                                            {formatDate(student.birth_date)}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <User className="h-4 w-4" />
                                            Agama
                                        </div>
                                        <div className="mt-1 font-medium">
                                            {student.religion || '-'}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <School className="h-4 w-4" />
                                            Kelas
                                        </div>
                                        <div className="mt-1 font-medium">
                                            {student.kelas.name}
                                        </div>
                                    </div>
                                    {student.kelas.homeroom_teacher && (
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                Wali Kelas
                                            </div>
                                            <div className="mt-1 font-medium">
                                                {
                                                    student.kelas
                                                        .homeroom_teacher.name
                                                }
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <div className="text-sm text-muted-foreground">
                                    Alamat
                                </div>
                                <div className="mt-1">
                                    {student.address || '-'}
                                </div>
                            </div>

                            {student.parent && (
                                <div className="border-t pt-4">
                                    <h4 className="mb-3 font-semibold">
                                        Data Orang Tua
                                    </h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                Nama Ayah
                                            </div>
                                            <div className="mt-1 font-medium">
                                                {student.parent.father_name ||
                                                    '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                Nama Ibu
                                            </div>
                                            <div className="mt-1 font-medium">
                                                {student.parent.mother_name ||
                                                    '-'}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                No. Telepon
                                            </div>
                                            <div className="mt-1 font-medium">
                                                {student.parent.phone || '-'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
