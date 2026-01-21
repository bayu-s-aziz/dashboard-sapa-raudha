import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Upload } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';

import Heading from '@/components/heading';
import PhotoUpload from '@/components/photo-upload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
        photo_url?: string;
    };
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
        title: 'Edit',
        href: '#',
    },
];

export default function UsersEdit({ user }: Props) {
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });
    const { props } = usePage();

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put(`/users/${user.id}`, {
            preserveScroll: true,
        });
    };

    const handlePhotoUpload = async () => {
        if (!photoFile) return;

        setUploadingPhoto(true);
        try {
            const formData = new FormData();
            formData.append('photo', photoFile);

            const response = await fetch(`/api/users/${user.id}/upload-photo`, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: 'Berhasil',
                    description: 'Foto berhasil diupload',
                    variant: 'success',
                });
                // Reload page to show updated photo
                window.location.reload();
            } else {
                toast({
                    title: 'Gagal',
                    description: result.message || 'Terjadi kesalahan saat upload foto',
                    variant: 'destructive',
                });
            }
        } catch {
            toast({
                title: 'Gagal',
                description: 'Terjadi kesalahan saat upload foto',
                variant: 'destructive',
            });
        } finally {
            setUploadingPhoto(false);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${user.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Edit Pengguna"
                        description="Ubah informasi pengguna"
                    />
                    <Button variant="outline" asChild>
                        <Link href="/users">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <Card className="mx-auto max-w-2xl">
                    <CardHeader>
                        <CardTitle>Informasi Pengguna</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Photo Upload Section */}
                            <PhotoUpload
                                currentPhoto={user.avatar}
                                onPhotoChange={setPhotoFile}
                                label="Foto Profil"
                            />

                            {photoFile && (
                                <div className="flex justify-end">
                                    <Button
                                        type="button"
                                        onClick={handlePhotoUpload}
                                        disabled={uploadingPhoto}
                                        className="bg-green-600 hover:bg-green-700"
                                    >
                                        <Upload className="mr-2 h-4 w-4" />
                                        {uploadingPhoto ? 'Mengupload...' : 'Upload Foto'}
                                    </Button>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className={errors.name ? 'border-red-500' : ''}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className={
                                        errors.email ? 'border-red-500' : ''
                                    }
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {user.userable?.nik && (
                                <div className="space-y-2">
                                    <Label>NIK</Label>
                                    <Input
                                        value={user.userable.nik}
                                        disabled
                                        className="bg-muted"
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        NIK tidak dapat diubah
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-end gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    asChild
                                >
                                    <Link href="/users">Batal</Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
