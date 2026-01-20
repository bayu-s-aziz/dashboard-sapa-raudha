import { Head, Link, router, usePage } from '@inertiajs/react';
import { CalendarDays, Edit, Eye, Plus, Search, Trash2, UserCheck, BarChart3 } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';

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
import { useDebounce } from '@/hooks/use-debounce';
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

interface Attendance {
    id: number;
    student_id: number;
    date: string;
    status: 'hadir' | 'sakit' | 'izin' | 'alpa';
    check_in?: string;
    check_out?: string;
    notes?: string;
    scanned_by?: number;
    student: Student;
    scanner?: Guru;
}

interface Props {
    attendance: {
        data: Attendance[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    students: Student[];
    statuses: string[];
    filters: {
        student_id?: string;
        status?: string;
        start_date?: string;
        end_date?: string;
    };
}

export default function AttendanceIndex({ attendance, students, statuses, filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
    ];

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [attendanceToDelete, setAttendanceToDelete] = useState<Attendance | null>(null);
    const [searchFilters, setSearchFilters] = useState({
        student_id: filters.student_id || 'all',
        status: filters.status || 'all',
        start_date: filters.start_date || '',
        end_date: filters.end_date || '',
    });

    // Debounced filter values
    const debouncedFilters = useDebounce(searchFilters, 300);

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

    // Real-time search effect
    useEffect(() => {
        const filtersToSend = { ...debouncedFilters };
        if (filtersToSend.student_id === 'all') filtersToSend.student_id = '';
        if (filtersToSend.status === 'all') filtersToSend.status = '';
        router.get('/attendance', filtersToSend, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    }, [debouncedFilters]);

    const handleFilterChange = (key: string, value: string) => {
        setSearchFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleDelete = (attendance: Attendance) => {
        setAttendanceToDelete(attendance);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (attendanceToDelete) {
            router.delete(`/attendance/${attendanceToDelete.id}`, {
                onSuccess: () => {
                    setDeleteDialogOpen(false);
                    setAttendanceToDelete(null);
                    toast({
                        title: 'Berhasil',
                        description: 'Presensi berhasil dihapus',
                        variant: 'success',
                    });
                },
                onError: () => {
                    toast({
                        title: 'Gagal',
                        description: 'Terjadi kesalahan saat menghapus presensi',
                        variant: 'destructive',
                    });
                },
            });
        }
    };

    const getStatusBadge = (status: string) => {
        const variants = {
            hadir: 'default',
            sakit: 'destructive',
            izin: 'secondary',
            alpa: 'outline',
        } as const;

        const labels = {
            hadir: 'Hadir',
            sakit: 'Sakit',
            izin: 'Izin',
            alpa: 'Alpa',
        };

        return (
            <Badge variant={variants[status as keyof typeof variants]}>
                {labels[status as keyof typeof labels]}
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

    const formatTime = (time?: string) => {
        if (!time) return '-';
        return new Date(`1970-01-01T${time}`).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Kehadiran" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manajemen Kehadiran"
                        description="Kelola data kehadiran siswa"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/attendance/create">
                                <Plus className="mr-2 h-4 w-4" />
                                Tambah Presensi
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/attendance/reports">
                                <BarChart3 className="mr-2 h-4 w-4" />
                                Laporan Kehadiran
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/classes">
                                <UserCheck className="mr-2 h-4 w-4" />
                                Presensi Harian Kelas
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Detail View Filters */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Filter Data Detail</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Siswa</label>
                                        <Select
                                            value={searchFilters.student_id || 'all'}
                                            onValueChange={(value) => handleFilterChange('student_id', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih siswa" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem key="all-students" value="all">Semua Siswa</SelectItem>
                                                {students.map((student) => (
                                                    <SelectItem key={student.id} value={student.id.toString()}>
                                                        {student.name} ({student.nis})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Status</label>
                                        <Select
                                            value={searchFilters.status || 'all'}
                                            onValueChange={(value) => handleFilterChange('status', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem key="all-statuses" value="all">Semua Status</SelectItem>
                                                {statuses.map((status) => (
                                                    <SelectItem key={status} value={status}>
                                                        {status === 'hadir' ? 'Hadir' :
                                                         status === 'sakit' ? 'Sakit' :
                                                         status === 'izin' ? 'Izin' : 'Alpa'}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Tanggal Mulai</label>
                                        <Input
                                            type="date"
                                            value={searchFilters.start_date || ''}
                                            onChange={(e) => handleFilterChange('start_date', e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Tanggal Akhir</label>
                                        <Input
                                            type="date"
                                            value={searchFilters.end_date || ''}
                                            onChange={(e) => handleFilterChange('end_date', e.target.value)}
                                        />
                                    </div>

                                    <div className="flex gap-2 md:col-span-2 lg:col-span-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => {
                                                setSearchFilters({
                                                    student_id: 'all',
                                                    status: 'all',
                                                    start_date: '',
                                                    end_date: '',
                                                });
                                                router.get('/attendance', {}, { preserveState: true, replace: true });
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Attendance Table */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Data Kehadiran</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Tanggal</TableHead>
                                            <TableHead>Siswa</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Check In</TableHead>
                                            <TableHead>Check Out</TableHead>
                                            <TableHead>Catatan</TableHead>
                                            <TableHead>Aksi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attendance.data.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={7} className="text-center py-8">
                                                    Tidak ada data kehadiran
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            attendance.data.map((record) => (
                                                <TableRow key={record.id}>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <CalendarDays className="h-4 w-4" />
                                                            {formatDate(record.date)}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <div className="font-medium">{record.student.name}</div>
                                                            <div className="text-sm text-muted-foreground">
                                                                NIS: {record.student.nis}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                                                    <TableCell>{formatTime(record.check_in)}</TableCell>
                                                    <TableCell>{formatTime(record.check_out)}</TableCell>
                                                    <TableCell>
                                                        {record.notes || '-'}
                                                        {record.scanner && (
                                                            <div className="text-xs text-muted-foreground mt-1">
                                                                Oleh: {record.scanner.name}
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex gap-2">
                                                            <Button variant="outline" size="sm" asChild>
                                                                <Link href={`/attendance/${record.id}`}>
                                                                    <Eye className="h-4 w-4" />
                                                                </Link>
                                                            </Button>
                                                            <Button variant="outline" size="sm" asChild>
                                                                <Link href={`/attendance/${record.id}/edit`}>
                                                                    <Edit className="h-4 w-4" />
                                                                </Link>
                                                            </Button>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => handleDelete(record)}
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>

                                {/* Pagination would go here if needed */}
                            </CardContent>
                        </Card>

                {/* Delete Confirmation Dialog */}
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Hapus Presensi</DialogTitle>
                            <DialogDescription>
                                Apakah Anda yakin ingin menghapus presensi{' '}
                                {attendanceToDelete?.student.name} pada tanggal{' '}
                                {attendanceToDelete ? formatDate(attendanceToDelete.date) : ''}?
                                Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                                Batal
                            </Button>
                            <Button variant="destructive" onClick={confirmDelete}>
                                Hapus
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AppLayout>
    );
}
