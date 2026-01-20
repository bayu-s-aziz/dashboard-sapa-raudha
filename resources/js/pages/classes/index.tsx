import { Head, Link, router, usePage } from '@inertiajs/react';
import { Edit, Eye, MoreHorizontal, Plus, Search, Trash2, Settings } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';

import Heading from '@/components/heading';
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
import { toast } from '@/hooks/use-toast';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useDebounce } from '@/hooks/use-debounce';

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
    homeroom_teacher: Guru | null;
    students_count?: number;
    created_at: string;
}

interface AcademicYear {
    id: number;
    year: string;
    is_active: boolean;
    start_date: string | null;
    end_date: string | null;
    created_at: string;
    updated_at: string;
}

interface PaginatedClasses {
    data: Kelas[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    classes: PaginatedClasses;
    groups: string[];
    academic_years: string[];
    all_academic_years: AcademicYear[];
    active_academic_year: AcademicYear | null;
    filters: {
        search?: string;
        group?: string;
        academic_year?: string;
    };
}

export default function ClassesIndex({ classes, groups, academic_years, all_academic_years, active_academic_year, filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const [search, setSearch] = useState(filters.search || '');
    const [groupFilter, setGroupFilter] = useState(filters.group || 'all');
    const [academicYearFilter, setAcademicYearFilter] = useState(filters.academic_year || 'all');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [classToDelete, setClassToDelete] = useState<Kelas | null>(null);
    const [addYearDialogOpen, setAddYearDialogOpen] = useState(false);
    const [newAcademicYear, setNewAcademicYear] = useState('');
    const [setActiveDialogOpen, setSetActiveDialogOpen] = useState(false);
    const [academicYearsList, setAcademicYearsList] = useState<AcademicYear[]>([]);

    // Debounced search values
    const debouncedSearch = useDebounce(search, 300);
    const debouncedGroupFilter = useDebounce(groupFilter, 300);
    const debouncedAcademicYearFilter = useDebounce(academicYearFilter, 300);

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
        // Set academic years from props
        setAcademicYearsList(all_academic_years || []);
    }, [all_academic_years]);

    // Real-time search effect
    useEffect(() => {
        router.get(
            '/classes',
            {
                search: debouncedSearch || undefined,
                group: debouncedGroupFilter !== 'all' ? debouncedGroupFilter : undefined,
                academic_year: debouncedAcademicYearFilter !== 'all' ? debouncedAcademicYearFilter : undefined,
            },
            { preserveState: true, preserveScroll: true },
        );
    }, [debouncedSearch, debouncedGroupFilter, debouncedAcademicYearFilter]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kelas', href: '/classes' },
    ];

    const handleDelete = (kelas: Kelas) => {
        setClassToDelete(kelas);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (classToDelete) {
            router.delete(`/classes/${classToDelete.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialogOpen(false);
                    setClassToDelete(null);
                    toast({
                        variant: 'success',
                        title: 'Berhasil',
                        description: 'Kelas berhasil dihapus.',
                    });
                },
            });
        }
    };

    const handleAddAcademicYear = (e: FormEvent) => {
        e.preventDefault();
        router.post('/classes/add-academic-year', {
            academic_year: newAcademicYear,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                setAddYearDialogOpen(false);
                setNewAcademicYear('');
                toast({
                    variant: 'success',
                    title: 'Berhasil',
                    description: 'Tahun ajaran baru berhasil ditambahkan.',
                });
            },
            onError: (errors) => {
                toast({
                    variant: 'destructive',
                    title: 'Gagal',
                    description: errors.academic_year || 'Terjadi kesalahan.',
                });
            },
        });
    };

    const handleSetActiveAcademicYear = (academicYear: AcademicYear) => {
        router.put(`/academic-years/${academicYear.id}/set-active`, {}, {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Kelas" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manajemen Kelas"
                        description="Kelola data kelas di sistem SAPA Raudha"
                    />
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setSetActiveDialogOpen(true)}
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Atur Tahun Ajaran Aktif
                        </Button>
                        <Button onClick={() => setAddYearDialogOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Tahun Ajaran
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium">Daftar Kelas</h3>
                                <p className="text-sm text-muted-foreground">
                                    Cari dan kelola data kelas
                                </p>
                                {active_academic_year && (
                                    <p className="text-sm text-green-600 mt-1">
                                        Tahun Ajaran Aktif: <span className="font-semibold">{active_academic_year.year}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            placeholder="Cari kelas..."
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <Select
                                    value={groupFilter}
                                    onValueChange={setGroupFilter}
                                >
                                    <SelectTrigger className="w-full md:w-45">
                                        <SelectValue placeholder="Semua Kelompok" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-groups" value="all">
                                            Semua Kelompok
                                        </SelectItem>
                                        {groups.map((group) => (
                                            <SelectItem key={group} value={group}>
                                                Kelompok {group}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select
                                    value={academicYearFilter}
                                    onValueChange={setAcademicYearFilter}
                                >
                                    <SelectTrigger className="w-full md:w-45">
                                        <SelectValue placeholder="Semua Tahun Ajaran" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-academic-years" value="all">
                                            Semua Tahun Ajaran
                                        </SelectItem>
                                        {academic_years.map((year) => (
                                            <SelectItem key={year} value={year}>
                                                {year}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Kelompok</TableHead>
                                    <TableHead>Tahun Akademik</TableHead>
                                    <TableHead>Wali Kelas</TableHead>
                                    <TableHead className="text-right">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {classes.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className="text-center text-muted-foreground"
                                        >
                                            Tidak ada data kelas
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    classes.data.map((kelas) => (
                                        <TableRow key={kelas.id}>
                                            <TableCell>
                                                <Badge variant="outline">
                                                    Kelompok {kelas.group}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {kelas.academic_year}
                                            </TableCell>
                                            <TableCell>
                                                {kelas.homeroom_teacher?.name ||
                                                    '-'}
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
                                                                href={`/classes/${kelas.id}`}
                                                            >
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                Detail
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            asChild
                                                        >
                                                            <Link
                                                                href={`/classes/${kelas.id}/edit`}
                                                            >
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            className="text-destructive focus:text-destructive"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    kelas,
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

                {classes.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan{' '}
                            {(classes.current_page - 1) * classes.per_page +
                                1}{' '}
                            -{' '}
                            {Math.min(
                                classes.current_page * classes.per_page,
                                classes.total,
                            )}{' '}
                            dari {classes.total} kelas
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                disabled={classes.current_page === 1}
                                onClick={() =>
                                    router.get('/classes', {
                                        page: classes.current_page - 1,
                                        search: search || undefined,
                                        group:
                                            groupFilter !== 'all'
                                                ? groupFilter
                                                : undefined,
                                        academic_year:
                                            academicYearFilter !== 'all'
                                                ? academicYearFilter
                                                : undefined,
                                    })
                                }
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                disabled={
                                    classes.current_page === classes.last_page
                                }
                                onClick={() =>
                                    router.get('/classes', {
                                        page: classes.current_page + 1,
                                        search: search || undefined,
                                        group:
                                            groupFilter !== 'all'
                                                ? groupFilter
                                                : undefined,
                                        academic_year:
                                            academicYearFilter !== 'all'
                                                ? academicYearFilter
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
                            Apakah Anda yakin ingin menghapus kelas{' '}
                            <span className="font-semibold">
                                {classToDelete?.name}
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

            <Dialog open={addYearDialogOpen} onOpenChange={setAddYearDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tambah Tahun Ajaran Baru</DialogTitle>
                        <DialogDescription>
                            Masukkan tahun ajaran baru dalam format YYYY/YYYY
                            (contoh: 2025/2026).
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddAcademicYear}>
                        <div className="space-y-4 py-4">
                            <div>
                                <label
                                    htmlFor="academic_year"
                                    className="text-sm font-medium"
                                >
                                    Tahun Ajaran
                                </label>
                                <Input
                                    id="academic_year"
                                    value={newAcademicYear}
                                    onChange={(e) =>
                                        setNewAcademicYear(e.target.value)
                                    }
                                    placeholder="2025/2026"
                                    required
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setAddYearDialogOpen(false);
                                    setNewAcademicYear('');
                                }}
                            >
                                Batal
                            </Button>
                            <Button type="submit">Tambah</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={setActiveDialogOpen} onOpenChange={setSetActiveDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Atur Tahun Ajaran Aktif</DialogTitle>
                        <DialogDescription>
                            Pilih tahun ajaran yang akan diaktifkan. Tahun ajaran aktif akan digunakan sebagai default untuk operasi sistem.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        {academicYearsList.length === 0 ? (
                            <p className="text-sm text-muted-foreground">Tidak ada tahun ajaran tersedia.</p>
                        ) : (
                            <div className="space-y-2">
                                {academicYearsList.map((year) => (
                                    <div
                                        key={year.id}
                                        className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                                            year.is_active ? 'border-green-500 bg-green-50' : ''
                                        }`}
                                        onClick={() => handleSetActiveAcademicYear(year)}
                                    >
                                        <div>
                                            <p className="font-medium">{year.year}</p>
                                            {year.start_date && year.end_date && (
                                                <p className="text-sm text-muted-foreground">
                                                    {new Date(year.start_date).toLocaleDateString('id-ID')} - {new Date(year.end_date).toLocaleDateString('id-ID')}
                                                </p>
                                            )}
                                        </div>
                                        {year.is_active && (
                                            <Badge variant="default" className="bg-green-500">
                                                Aktif
                                            </Badge>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setSetActiveDialogOpen(false)}
                        >
                            Tutup
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
