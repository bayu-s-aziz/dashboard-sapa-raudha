import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Users } from 'lucide-react';
import { useEffect } from 'react';

import Heading from '@/components/heading';
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

interface Siswa {
    id: number;
    nisn: string;
    name: string;
    gender: 'L' | 'P';
}

interface Kelas {
    id: number;
    name: string;
    group: string;
    academic_year: string;
    homeroom_teacher_id: number | null;
    homeroom_teacher: Guru | null;
    students: Siswa[];
}

interface Props {
    class: Kelas;
}

export default function ClassShow({ class: kelas }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kelas', href: '/classes' },
        { title: 'Detail', href: '#' },
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

    const maleStudents = kelas.students.filter(
        (s) => s.gender === 'L',
    ).length;
    const femaleStudents = kelas.students.filter(
        (s) => s.gender === 'P',
    ).length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Kelas" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Detail Kelas"
                        description="Informasi lengkap data kelas"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/classes">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={`/classes/${kelas.id}/edit`}>
                                Edit
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">
                                Informasi Kelas
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="text-sm text-muted-foreground">
                                    Kelompok
                                </div>
                                <div className="mt-1">
                                    <Badge variant="outline">
                                        Kelompok {kelas.group}
                                    </Badge>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm text-muted-foreground">
                                    Tahun Akademik
                                </div>
                                <div className="font-medium">
                                    {kelas.academic_year}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">
                                Wali Kelas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {kelas.homeroom_teacher ? (
                                <div className="text-lg font-semibold">
                                    {kelas.homeroom_teacher.name}
                                </div>
                            ) : (
                                <div className="text-muted-foreground">
                                    Belum ditentukan
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">
                                Statistik Siswa
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Total
                                </span>
                                <span className="text-xl font-bold">
                                    {kelas.students.length}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Laki-laki
                                </span>
                                <span className="font-medium">
                                    {maleStudents}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Perempuan
                                </span>
                                <span className="font-medium">
                                    {femaleStudents}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            Daftar Siswa ({kelas.students.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {kelas.students.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                Tidak ada siswa di kelas ini
                            </div>
                        ) : (
                            <div className="space-y-2 max-h-96 overflow-y-auto">
                                {kelas.students.map((siswa) => (
                                    <div
                                        key={siswa.id}
                                        className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50"
                                    >
                                        <div>
                                            <div className="font-medium">
                                                {siswa.name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {siswa.nisn}
                                            </div>
                                        </div>
                                        <Badge
                                            variant={
                                                siswa.gender === 'L'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {siswa.gender === 'L'
                                                ? 'Laki-laki'
                                                : 'Perempuan'}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
