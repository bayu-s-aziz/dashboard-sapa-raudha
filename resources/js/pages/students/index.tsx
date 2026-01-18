import { Head, Link, router } from '@inertiajs/react';
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';

import Heading from '@/components/heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface Kelas {
    id: number;
    name: string;
    grade: string;
}

interface Siswa {
    id: number;
    nisn: string;
    nis: string;
    name: string;
    class_id: number;
    gender: 'L' | 'P';
    birth_place: string | null;
    birth_date: string | null;
    religion: string | null;
    address: string | null;
    photo_url: string | null;
    kelas: Kelas;
}

interface PaginatedStudents {
    data: Siswa[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    students: PaginatedStudents;
    classes: Kelas[];
    filters: {
        search?: string;
        class?: string;
        gender?: string;
    };
}

export default function StudentsIndex({ students, classes, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [classFilter, setClassFilter] = useState(filters.class || 'all');
    const [genderFilter, setGenderFilter] = useState(filters.gender || 'all');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<Siswa | null>(null);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Siswa', href: '/students' },
    ];

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.get(
            '/students',
            {
                search: search || undefined,
                class: classFilter !== 'all' ? classFilter : undefined,
                gender: genderFilter !== 'all' ? genderFilter : undefined,
            },
            { preserveState: true },
        );
    };

    const handleDelete = (student: Siswa) => {
        setStudentToDelete(student);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (studentToDelete) {
            router.delete(`/students/${studentToDelete.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialogOpen(false);
                    setStudentToDelete(null);
                },
            });
        }
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const getGenderBadge = (gender: 'L' | 'P') => {
        return gender === 'L' ? (
            <Badge variant="default">Laki-laki</Badge>
        ) : (
            <Badge variant="secondary">Perempuan</Badge>
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Siswa" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manajemen Siswa"
                        description="Kelola data siswa di sistem SAPA Raudha"
                    />
                    <Button asChild>
                        <Link href="/students/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Siswa
                        </Link>
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <div>
                            <h3 className="text-lg font-medium">Daftar Siswa</h3>
                            <p className="text-sm text-muted-foreground">
                                Cari dan kelola data siswa
                            </p>
                        </div>
                        <form onSubmit={handleSearch} className="space-y-4">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            placeholder="Cari nama, NISN, atau NIS..."
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <Select
                                    value={classFilter}
                                    onValueChange={setClassFilter}
                                >
                                    <SelectTrigger className="w-full md:w-45">
                                        <SelectValue placeholder="Semua Kelas" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            Semua Kelas
                                        </SelectItem>
                                        {classes.map((kelas) => (
                                            <SelectItem
                                                key={kelas.id}
                                                value={kelas.id.toString()}
                                            >
                                                {kelas.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select
                                    value={genderFilter}
                                    onValueChange={setGenderFilter}
                                >
                                    <SelectTrigger className="w-full md:w-45">
                                        <SelectValue placeholder="Semua Jenis Kelamin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            Semua Jenis Kelamin
                                        </SelectItem>
                                        <SelectItem value="L">
                                            Laki-laki
                                        </SelectItem>
                                        <SelectItem value="P">
                                            Perempuan
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button type="submit">Cari</Button>
                            </div>
                        </form>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Siswa</TableHead>
                                    <TableHead>NISN/NIS</TableHead>
                                    <TableHead>Kelas</TableHead>
                                    <TableHead>Jenis Kelamin</TableHead>
                                    <TableHead className="text-right">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="text-center text-muted-foreground"
                                        >
                                            Tidak ada data siswa
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    students.data.map((student) => (
                                        <TableRow key={student.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarImage
                                                            src={
                                                                student.photo_url ||
                                                                undefined
                                                            }
                                                        />
                                                        <AvatarFallback>
                                                            {getInitials(
                                                                student.name,
                                                            )}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">
                                                            {student.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm">
                                                    <div>{student.nisn}</div>
                                                    <div className="text-muted-foreground">
                                                        {student.nis}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {student.kelas.name}
                                            </TableCell>
                                            <TableCell>
                                                {getGenderBadge(student.gender)}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>
                                                            Aksi
                                                        </DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            asChild
                                                        >
                                                            <Link
                                                                href={`/students/${student.id}`}
                                                            >
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                Detail
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            asChild
                                                        >
                                                            <Link
                                                                href={`/students/${student.id}/edit`}
                                                            >
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="text-destructive focus:text-destructive"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    student,
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Hapus
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {students.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan{' '}
                            {(students.current_page - 1) * students.per_page +
                                1}{' '}
                            -{' '}
                            {Math.min(
                                students.current_page * students.per_page,
                                students.total,
                            )}{' '}
                            dari {students.total} siswa
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                disabled={students.current_page === 1}
                                onClick={() =>
                                    router.get('/students', {
                                        page: students.current_page - 1,
                                        search: search || undefined,
                                        class:
                                            classFilter !== 'all'
                                                ? classFilter
                                                : undefined,
                                        gender:
                                            genderFilter !== 'all'
                                                ? genderFilter
                                                : undefined,
                                    })
                                }
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                disabled={
                                    students.current_page === students.last_page
                                }
                                onClick={() =>
                                    router.get('/students', {
                                        page: students.current_page + 1,
                                        search: search || undefined,
                                        class:
                                            classFilter !== 'all'
                                                ? classFilter
                                                : undefined,
                                        gender:
                                            genderFilter !== 'all'
                                                ? genderFilter
                                                : undefined,
                                    })
                                }
                            >
                                Selanjutnya
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Konfirmasi Hapus</DialogTitle>
                        <DialogDescription>
                            Apakah Anda yakin ingin menghapus siswa{' '}
                            <span className="font-semibold">
                                {studentToDelete?.name}
                            </span>
                            ? Tindakan ini tidak dapat dibatalkan.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setDeleteDialogOpen(false)}
                        >
                            Batal
                        </Button>
                        <Button variant="destructive" onClick={confirmDelete}>
                            Hapus
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
