import { Head, Link, router, usePage } from '@inertiajs/react';
import { Edit, Eye, MoreHorizontal, Search, Trash2, Plus } from 'lucide-react';
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
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    author: Guru;
    target_audience: 'all' | 'parents' | 'teachers' | 'class';
    targetClass?: Kelas;
    created_at: string;
    updated_at: string;
}

interface PaginatedAnnouncements {
    data: Announcement[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    announcements: PaginatedAnnouncements;
    audiences: string[];
    classes: Kelas[];
    filters: {
        search?: string;
        audience?: string;
        class_id?: string;
    };
}

export default function AnnouncementsIndex({ announcements, audiences, classes, filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const [search, setSearch] = useState(filters.search || '');
    const [audienceFilter, setAudienceFilter] = useState(filters.audience || 'all');
    const [classFilter, setClassFilter] = useState(filters.class_id || 'all');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [announcementToDelete, setAnnouncementToDelete] = useState<Announcement | null>(null);

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

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Pengumuman', href: '/announcements' },
    ];

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.get(
            '/announcements',
            {
                search: search || undefined,
                audience: audienceFilter !== 'all' ? audienceFilter : undefined,
                class_id: classFilter !== 'all' ? classFilter : undefined,
            },
            { preserveState: true },
        );
    };

    const handleDelete = (announcement: Announcement) => {
        setAnnouncementToDelete(announcement);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (announcementToDelete) {
            router.delete(`/announcements/${announcementToDelete.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        title: 'Berhasil',
                        description: 'Pengumuman berhasil dihapus',
                        variant: 'success',
                    });
                    setDeleteDialogOpen(false);
                    setAnnouncementToDelete(null);
                },
                onError: () => {
                    toast({
                        title: 'Gagal',
                        description: 'Terjadi kesalahan saat menghapus pengumuman',
                        variant: 'destructive',
                    });
                },
            });
        }
    };

    const getAudienceLabel = (audience: string) => {
        switch (audience) {
            case 'all':
                return 'Semua';
            case 'parents':
                return 'Orang Tua';
            case 'teachers':
                return 'Guru';
            case 'class':
                return 'Kelas Tertentu';
            default:
                return audience;
        }
    };

    const getAudienceBadgeVariant = (audience: string) => {
        switch (audience) {
            case 'all':
                return 'default';
            case 'parents':
                return 'secondary';
            case 'teachers':
                return 'outline';
            case 'class':
                return 'destructive';
            default:
                return 'default';
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Pengumuman" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manajemen Pengumuman"
                        description="Kelola pengumuman untuk siswa, orang tua, dan guru"
                    />
                    <Button asChild>
                        <Link href="/announcements/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Buat Pengumuman
                        </Link>
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <form onSubmit={handleSearch} className="space-y-4">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            placeholder="Cari judul atau isi pengumuman..."
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <Select
                                    value={audienceFilter}
                                    onValueChange={setAudienceFilter}
                                >
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Semua Audiens" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-audiences" value="all">
                                            Semua Audiens
                                        </SelectItem>
                                        {audiences.map((audience) => (
                                            <SelectItem key={audience} value={audience}>
                                                {getAudienceLabel(audience)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select
                                    value={classFilter}
                                    onValueChange={setClassFilter}
                                >
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Semua Kelas" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-classes-announcements" value="all">
                                            Semua Kelas
                                        </SelectItem>
                                        {classes.map((kelas) => (
                                            <SelectItem key={kelas.id} value={kelas.id.toString()}>
                                                Kelompok {kelas.group}
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
                                    <TableHead>Judul</TableHead>
                                    <TableHead>Audiens</TableHead>
                                    <TableHead>Kelas</TableHead>
                                    <TableHead>Pembuat</TableHead>
                                    <TableHead>Tanggal</TableHead>
                                    <TableHead className="text-right">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {announcements.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={6}
                                            className="text-center text-muted-foreground"
                                        >
                                            Tidak ada data pengumuman
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    announcements.data.map((announcement) => (
                                        <TableRow key={announcement.id}>
                                            <TableCell className="font-medium max-w-xs">
                                                <div className="truncate" title={announcement.title}>
                                                    {announcement.title}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={getAudienceBadgeVariant(announcement.target_audience)}>
                                                    {getAudienceLabel(announcement.target_audience)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {announcement.targetClass ? (
                                                    <Badge variant="outline">
                                                        Kelompok {announcement.targetClass.group}
                                                    </Badge>
                                                ) : (
                                                    '-'
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {announcement.author?.name || '-'}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(announcement.created_at).toLocaleDateString('id-ID')}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
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
                                                        <DropdownMenuItem asChild>
                                                            <Link
                                                                href={`/announcements/${announcement.id}`}
                                                            >
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                Lihat
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem asChild>
                                                            <Link
                                                                href={`/announcements/${announcement.id}/edit`}
                                                            >
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            onClick={() => handleDelete(announcement)}
                                                            className="text-destructive focus:text-destructive"
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

                {/* Pagination */}
                {announcements.last_page > 1 && (
                    <div className="flex justify-center">
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                disabled={announcements.current_page === 1}
                                onClick={() =>
                                    router.get('/announcements', {
                                        page: announcements.current_page - 1,
                                        search: search || undefined,
                                        audience: audienceFilter !== 'all' ? audienceFilter : undefined,
                                        class_id: classFilter !== 'all' ? classFilter : undefined,
                                    })
                                }
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                disabled={
                                    announcements.current_page === announcements.last_page
                                }
                                onClick={() =>
                                    router.get('/announcements', {
                                        page: announcements.current_page + 1,
                                        search: search || undefined,
                                        audience: audienceFilter !== 'all' ? audienceFilter : undefined,
                                        class_id: classFilter !== 'all' ? classFilter : undefined,
                                    })
                                }
                            >
                                Selanjutnya
                            </Button>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Dialog */}
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Hapus Pengumuman</DialogTitle>
                            <DialogDescription>
                                Apakah Anda yakin ingin menghapus pengumuman "{announcementToDelete?.title}"?
                                Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setDeleteDialogOpen(false)}
                            >
                                Batal
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={confirmDelete}
                            >
                                Hapus
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
