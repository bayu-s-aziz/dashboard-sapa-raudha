import { Head, Link, router, usePage } from '@inertiajs/react';
import {
    Edit,
    MoreHorizontal,
    Search,
    Trash2,
    UserCog,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import Heading from '@/components/heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
// import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

interface User {
    id: number;
    name: string;
    email: string;
    userable_type: string;
    userable?: {
        father_name?: string;
        mother_name?: string;
        father_phone?: string;
        mother_phone?: string;
        address?: string;
        photo_url?: string;
        student?: {
            name: string;
            nis?: string;
            nisn?: string;
        };
    };
    created_at: string;
}

interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    users: {
        data: User[];
    } & PaginationData;
    filters: {
        search?: string;
        type?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Manajemen Pengguna',
        href: '#',
    },
    {
        title: 'Orang Tua',
        href: '#',
    },
];

export default function ParentsIndex({ users, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const { props } = usePage();

    // Debounced search value
    const debouncedSearch = useDebounce(search, 300);

    // Show toast for flash messages
    useEffect(() => {
        const flash = props.flash as { success?: string; error?: string };
        if (flash?.success) {
            toast({
                variant: 'success',
                title: 'Berhasil',
                description: flash.success,
            });
        }
        if (flash?.error) {
            toast({
                variant: 'destructive',
                title: 'Gagal',
                description: flash.error,
            });
        }
    }, [props.flash]);

    // Real-time search effect
    useEffect(() => {
        router.get(
            '/users/parents',
            { search: debouncedSearch || undefined, page: 1 },
            { preserveState: true, preserveScroll: true, replace: true },
        );
    }, [debouncedSearch]);

    // Removed user type badge as table now shows student/parent details

    const handleDelete = (user: User) => {
        setUserToDelete(user);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (userToDelete) {
            router.delete(`/users/${userToDelete.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialogOpen(false);
                    setUserToDelete(null);
                    toast({
                        variant: 'success',
                        title: 'Berhasil',
                        description: 'Pengguna berhasil dihapus.',
                    });
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Orang Tua" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Manajemen Orang Tua"
                        description="Kelola akun orang tua siswa"
                    />
                </div>

                <Card>
                    <CardHeader>
                        <div>
                            <h3 className="text-lg font-medium">Daftar Orang Tua</h3>
                            <p className="text-sm text-muted-foreground">
                                Cari dan kelola data orang tua
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-1 gap-2">
                                <div className="relative flex-1 max-w-sm">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Cari nama atau email..."
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        className="pl-9"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Pengguna</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Siswa</TableHead>
                                    <TableHead>Bergabung</TableHead>
                                    <TableHead className="text-right">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-24 text-center">
                                            Tidak ada data pengguna.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    users.data.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarImage src={user.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                                                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="font-medium">{user.name}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <div className="text-sm">
                                                    {user.userable?.student?.name || '-'}
                                                    {user.userable?.student?.nis && (
                                                        <div className="text-muted-foreground">NIS: {user.userable.student.nis}</div>
                                                    )}
                                                    {user.userable?.student?.nisn && (
                                                        <div className="text-muted-foreground">NISN: {user.userable.student.nisn}</div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {new Date(user.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">Menu aksi</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={`/users/${user.id}`}>
                                                                <UserCog className="mr-2 h-4 w-4" />
                                                                Detail
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem asChild>
                                                            <Link href={`/users/${user.id}/edit`}>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            className="text-destructive focus:text-destructive"
                                                            onClick={() => handleDelete(user)}
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

                {users.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan {(users.current_page - 1) * users.per_page + 1} -{' '}
                            {Math.min(
                                users.current_page * users.per_page,
                                users.total,
                            )}{' '}
                            dari {users.total} pengguna
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                disabled={users.current_page === 1}
                                onClick={() =>
                                    router.get('/users/parents', {
                                        page: users.current_page - 1,
                                        search: search || undefined,
                                    }, {
                                        preserveState: true,
                                        preserveScroll: true,
                                    })
                                }
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                disabled={users.current_page === users.last_page}
                                onClick={() =>
                                    router.get('/users/parents', {
                                        page: users.current_page + 1,
                                        search: search || undefined,
                                    }, {
                                        preserveState: true,
                                        preserveScroll: true,
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
                            Apakah Anda yakin ingin menghapus pengguna{' '}
                            <span className="font-semibold">
                                {userToDelete?.name}
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
