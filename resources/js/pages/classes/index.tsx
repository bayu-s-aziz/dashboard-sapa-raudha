import { Head, Link, router, usePage } from '@inertiajs/react';
import { Edit, Eye, MoreHorizontal, Search, Trash2 } from 'lucide-react';
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
    filters: {
        search?: string;
        group?: string;
    };
}

export default function ClassesIndex({ classes, groups, filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const [search, setSearch] = useState(filters.search || '');
    const [groupFilter, setGroupFilter] = useState(filters.group || 'all');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [classToDelete, setClassToDelete] = useState<Kelas | null>(null);

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

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kelas', href: '/classes' },
    ];

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.get(
            '/classes',
            {
                search: search || undefined,
                group: groupFilter !== 'all' ? groupFilter : undefined,
            },
            { preserveState: true },
        );
    };

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
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Kelas" />

            <div className="space-y-6 p-6">
                <Heading
                    title="Manajemen Kelas"
                    description="Kelola data kelas di sistem SAPA Raudha"
                />

                <Card>
                    <CardHeader>
                        <form onSubmit={handleSearch} className="space-y-4">
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
                                        <SelectItem value="all">
                                            Semua Kelompok
                                        </SelectItem>
                                        {groups.map((group) => (
                                            <SelectItem key={group} value={group}>
                                                Kelompok {group}
                                            </SelectItem>
                                        ))}
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
        </AppLayout>
    );
}
