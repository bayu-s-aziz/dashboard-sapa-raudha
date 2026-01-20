import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Mail, User as UserIcon, Calendar, Shield } from 'lucide-react';
import { useEffect } from 'react';

import Heading from '@/components/heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

interface User {
    id: number;
    name: string;
    email: string;
    userable_type: string;
    userable?: {
        nik?: string;
        phone?: string;
        role?: string;
        address?: string;
        father_name?: string;
        mother_name?: string;
        guardian_name?: string;
        father_phone?: string;
        mother_phone?: string;
        guardian_phone?: string;
        photo_url?: string;
    };
    created_at: string;
}

interface Props {
    user: User;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Manajemen Pengguna',
        href: '/users',
    },
    {
        title: 'Detail',
        href: '#',
    },
];

export default function UsersShow({ user }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

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
    const getUserType = (user: User) => {
        if (user.userable_type === 'App\\Models\\Guru') {
            return user.userable?.role === 'admin' ? 'Admin' : 'Guru';
        }
        return 'Orang Tua';
    };

    const getUserTypeBadge = (user: User) => {
        const userType = getUserType(user);
        const variants: Record<
            string,
            'default' | 'secondary' | 'destructive' | 'outline'
        > = {
            Admin: 'destructive',
            Guru: 'default',
            'Orang Tua': 'secondary',
        };
        return (
            <Badge variant={variants[userType] || 'default'}>{userType}</Badge>
        );
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
            <Head title={`Detail ${user.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Detail Pengguna"
                        description="Informasi lengkap pengguna"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href="/users">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={`/users/${user.id}/edit`}>
                                Edit
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="md:col-span-1">
                        <CardHeader>
                            <CardTitle>Profil</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage
                                        src={user.userable?.photo_url || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                                    />
                                    <AvatarFallback>
                                        {getInitials(user.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold">
                                        {user.name}
                                    </h3>
                                    <div className="mt-2">
                                        {getUserTypeBadge(user)}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Informasi Pengguna</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <UserIcon className="h-4 w-4" />
                                        <span>Nama Lengkap</span>
                                    </div>
                                    <p className="font-medium">{user.name}</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>Email</span>
                                    </div>
                                    <p className="font-medium">
                                        {user.email || '-'}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Shield className="h-4 w-4" />
                                        <span>Tipe Pengguna</span>
                                    </div>
                                    <p className="font-medium">
                                        {getUserType(user)}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>Bergabung</span>
                                    </div>
                                    <p className="font-medium">
                                        {new Date(
                                            user.created_at,
                                        ).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>

                                {user.userable?.nik && (
                                    <div className="space-y-2">
                                        <div className="text-sm text-muted-foreground">
                                            NIK
                                        </div>
                                        <p className="font-medium">
                                            {user.userable.nik}
                                        </p>
                                    </div>
                                )}

                                {user.userable?.phone && (
                                    <div className="space-y-2">
                                        <div className="text-sm text-muted-foreground">
                                            Telepon
                                        </div>
                                        <p className="font-medium">
                                            {user.userable.phone}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {user.userable_type ===
                                'App\\Models\\ParentModel' && (
                                <div className="mt-6 space-y-4 border-t pt-4">
                                    <h4 className="font-semibold">
                                        Informasi Keluarga
                                    </h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {user.userable?.father_name && (
                                            <div className="space-y-2">
                                                <div className="text-sm text-muted-foreground">
                                                    Nama Ayah
                                                </div>
                                                <p className="font-medium">
                                                    {user.userable.father_name}
                                                </p>
                                                {user.userable
                                                    ?.father_phone && (
                                                    <p className="text-sm text-muted-foreground">
                                                        {
                                                            user.userable
                                                                .father_phone
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {user.userable?.mother_name && (
                                            <div className="space-y-2">
                                                <div className="text-sm text-muted-foreground">
                                                    Nama Ibu
                                                </div>
                                                <p className="font-medium">
                                                    {user.userable.mother_name}
                                                </p>
                                                {user.userable
                                                    ?.mother_phone && (
                                                    <p className="text-sm text-muted-foreground">
                                                        {
                                                            user.userable
                                                                .mother_phone
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {user.userable?.guardian_name && (
                                            <div className="space-y-2">
                                                <div className="text-sm text-muted-foreground">
                                                    Nama Wali
                                                </div>
                                                <p className="font-medium">
                                                    {
                                                        user.userable
                                                            .guardian_name
                                                    }
                                                </p>
                                                {user.userable
                                                    ?.guardian_phone && (
                                                    <p className="text-sm text-muted-foreground">
                                                        {
                                                            user.userable
                                                                .guardian_phone
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        )}
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
