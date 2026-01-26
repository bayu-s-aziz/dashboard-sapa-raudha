import { Head, Link, router, usePage } from '@inertiajs/react';
import { CheckCircle, Eye, MoreHorizontal, Search, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useDebounce } from '@/hooks/use-debounce';
import { toast } from '@/hooks/use-toast';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface Student { id: number; name: string; nis?: string }
interface LeaveRequest { id: number; student: Student; request_date: string; reason?: string; status?: string; review_notes?: string; attachment_path?: string }

interface Props {
    leaveRequests: any;
    classes?: { id: number; name: string }[];
    filters: Record<string, any>;
}

export default function LeaveRequestsIndex({ leaveRequests, classes = [], filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
        { title: 'Permohonan Izin', href: '/leave-requests' },
    ];

    const [items, setItems] = useState<LeaveRequest[]>(leaveRequests?.data || []);
    const [approveDialogOpen, setApproveDialogOpen] = useState(false);
    const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [rejectNotes, setRejectNotes] = useState<string>('');
    const [search, setSearch] = useState(filters.search || '');
    const [classFilter, setClassFilter] = useState(filters.class_id || 'all');

    const debouncedFilters = useDebounce({ search, class_id: classFilter }, 300);

    useEffect(() => {
        setItems(leaveRequests?.data || []);
    }, [leaveRequests]);

    // Real-time search / class filter
    useEffect(() => {
        const toSend: Record<string, any> = {};
        if (debouncedFilters.search) toSend.search = debouncedFilters.search;
        if (debouncedFilters.class_id && debouncedFilters.class_id !== 'all') toSend.class_id = debouncedFilters.class_id;
        router.get('/leave-requests', toSend, { preserveState: true, preserveScroll: true, replace: true });
    }, [debouncedFilters]);

    useEffect(() => {
        const flash = page.props.flash || {};
        if (flash?.success) {
            toast({ title: 'Berhasil', description: flash.success, variant: 'success' });
        }
        if (flash?.error) {
            toast({ title: 'Gagal', description: flash.error, variant: 'destructive' });
        }
    }, [page.props.flash]);

    const openApproveDialog = (id: number) => {
        setSelectedId(id);
        setApproveDialogOpen(true);
    };

    const confirmApprove = () => {
        if (!selectedId) return;
        router.post(`/leave-requests/${selectedId}/approve`, {}, {
            onSuccess: () => {
                setApproveDialogOpen(false);
                toast({ title: 'Berhasil', description: 'Permohonan disetujui', variant: 'success' });
                router.reload();
            },
            onError: () => {
                toast({ title: 'Gagal', description: 'Gagal menyetujui permohonan', variant: 'destructive' });
            }
        });
    };

    const openRejectDialog = (id: number) => {
        setSelectedId(id);
        setRejectNotes('');
        setRejectDialogOpen(true);
    };

    const confirmReject = () => {
        if (!selectedId) return;
        router.post(`/leave-requests/${selectedId}/reject`, { review_notes: rejectNotes }, {
            onSuccess: () => {
                setRejectDialogOpen(false);
                toast({ title: 'Berhasil', description: 'Permohonan ditolak', variant: 'success' });
                router.reload();
            },
            onError: () => {
                toast({ title: 'Gagal', description: 'Gagal menolak permohonan', variant: 'destructive' });
            }
        });
    };

    const openDeleteDialog = (id: number) => {
        setSelectedId(id);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedId) return;
        router.delete(`/leave-requests/${selectedId}`, {
            onSuccess: () => {
                setDeleteDialogOpen(false);
                toast({ title: 'Berhasil', description: 'Permohonan dihapus', variant: 'success' });
                router.reload();
            },
            onError: () => {
                toast({ title: 'Gagal', description: 'Gagal menghapus permohonan', variant: 'destructive' });
            }
        });
    };

    const statusBadge = (status?: string) => {
        switch (status) {
            case 'approved':
                return <Badge className="bg-green-100 text-green-800">Disetujui</Badge>;
            case 'rejected':
                return <Badge className="bg-red-100 text-red-800">Ditolak</Badge>;
            default:
                return <Badge className="bg-yellow-100 text-yellow-800">Menunggu</Badge>;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Permohonan Izin" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading title="Permohonan Izin" description="Daftar permohonan izin siswa" />
                </div>

                <Card>
                    <CardHeader>
                        <div>
                            <h3 className="text-lg font-medium">Daftar Permohonan</h3>
                            <p className="text-sm text-muted-foreground">Daftar permohonan izin siswa</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            placeholder="Cari nama siswa atau alasan..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <Select value={classFilter} onValueChange={setClassFilter}>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Semua Kelas" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-classes-leave" value="all">Semua Kelas</SelectItem>
                                        {classes.map((kelas) => (
                                            <SelectItem key={kelas.id} value={kelas.id.toString()}>
                                                {kelas.name}
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
                                    <TableHead>Nama Siswa</TableHead>
                                    <TableHead>NIS</TableHead>
                                    <TableHead>Tanggal</TableHead>
                                    <TableHead>Alasan</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-8">Tidak ada permohonan</TableCell>
                                    </TableRow>
                                ) : (
                                    items.map((req) => (
                                        <TableRow key={req.id}>
                                            <TableCell>
                                                <div className="font-medium">{req.student?.name}</div>
                                            </TableCell>
                                            <TableCell className="text-sm text-muted-foreground">{req.student?.nis}</TableCell>
                                            <TableCell className="text-sm text-muted-foreground">{new Date(req.request_date).toLocaleDateString('id-ID')}</TableCell>
                                            <TableCell className="text-sm text-muted-foreground">{req.reason ?? '-'}</TableCell>
                                            <TableCell>{statusBadge(req.status)}</TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={`/leave-requests/${req.id}`}>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                Lihat
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        {req.status === 'pending' && (
                                                            <>
                                                                <DropdownMenuItem onClick={() => openApproveDialog(req.id)}>
                                                                    <CheckCircle className="mr-2 h-4 w-4" />
                                                                    Setujui
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => openRejectDialog(req.id)}>
                                                                    <XCircle className="mr-2 h-4 w-4" />
                                                                    Tolak
                                                                </DropdownMenuItem>
                                                            </>
                                                        )}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>

                        {/* Simple pagination controls if available */}
                        {leaveRequests?.links && (
                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">Halaman {leaveRequests.current_page} dari {leaveRequests.last_page}</div>
                                <div className="flex gap-2">
                                    {leaveRequests.prev_page_url && (
                                        <Button variant="outline" onClick={() => router.visit(leaveRequests.prev_page_url)}>Sebelumnya</Button>
                                    )}
                                    {leaveRequests.next_page_url && (
                                        <Button variant="outline" onClick={() => router.visit(leaveRequests.next_page_url)}>Berikutnya</Button>
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Approve dialog */}
                <Dialog open={approveDialogOpen} onOpenChange={setApproveDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Konfirmasi Persetujuan</DialogTitle>
                            <DialogDescription>Apakah Anda yakin ingin menyetujui permohonan ini?</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setApproveDialogOpen(false)}>Batal</Button>
                            <Button onClick={confirmApprove}>Setujui</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Reject dialog */}
                <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Tolak Permohonan</DialogTitle>
                            <DialogDescription>Masukkan catatan penolakan (opsional)</DialogDescription>
                        </DialogHeader>
                        <div className="py-2">
                            <Label>Catatan</Label>
                            <Textarea value={rejectNotes} onChange={(e) => setRejectNotes(e.target.value)} />
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setRejectDialogOpen(false)}>Batal</Button>
                            <Button variant="destructive" onClick={confirmReject}>Tolak</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Delete dialog */}
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Hapus Permohonan</DialogTitle>
                            <DialogDescription>Tindakan ini tidak dapat dibatalkan. Hapus permohonan?</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Batal</Button>
                            <Button variant="destructive" onClick={confirmDelete}>Hapus</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
