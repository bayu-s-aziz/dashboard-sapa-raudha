import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { useEffect, type FormEvent, useState } from 'react';

import Heading from '@/components/heading';
import PhotoUpload from '@/components/photo-upload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
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
    photo_url?: string | null;
}

interface Props {
    student: Siswa;
    classes: Kelas[];
}

export default function StudentEdit({ student, classes }: Props) {
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);

    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Siswa', href: '/students' },
        { title: student.name, href: `/students/${student.id}` },
        { title: 'Edit', href: `/students/${student.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm({
        nisn: student.nisn,
        nis: student.nis,
        name: student.name,
        class_id: student.class_id.toString(),
        gender: student.gender,
        birth_place: student.birth_place || '',
        birth_date: student.birth_date || '',
        religion: student.religion || '',
        address: student.address || '',
    });

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put(`/students/${student.id}`, {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Data siswa berhasil diperbarui',
                    variant: 'success',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat menyimpan data',
                    variant: 'destructive',
                });
            },
        });
    };

    const handlePhotoUpload = async () => {
        if (!photoFile) return;

        setUploadingPhoto(true);
        try {
            const formData = new FormData();
            formData.append('photo', photoFile);

            const response = await fetch(`/api/students/${student.id}/upload-photo`, {
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
            <Head title={`Edit Siswa - ${student.name}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Edit Data Siswa"
                        description="Perbarui informasi siswa"
                    />
                    <Button variant="outline" asChild>
                        <Link href="/students">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Siswa</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Photo Upload Section */}
                            <PhotoUpload
                                currentPhoto={student.avatar}
                                onPhotoChange={setPhotoFile}
                                label="Foto Siswa"
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

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="nisn">
                                        NISN{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="nisn"
                                        value={data.nisn}
                                        onChange={(e) =>
                                            setData('nisn', e.target.value)
                                        }
                                        placeholder="Masukkan NISN"
                                        required
                                    />
                                    {errors.nisn && (
                                        <p className="text-sm text-destructive">
                                            {errors.nisn}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="nis">
                                        NIS{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="nis"
                                        value={data.nis}
                                        onChange={(e) =>
                                            setData('nis', e.target.value)
                                        }
                                        placeholder="Masukkan NIS"
                                        required
                                    />
                                    {errors.nis && (
                                        <p className="text-sm text-destructive">
                                            {errors.nis}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="name">
                                        Nama Lengkap{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="class_id">
                                        Kelas{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Select
                                        value={data.class_id}
                                        onValueChange={(value) =>
                                            setData('class_id', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih kelas" />
                                        </SelectTrigger>
                                        <SelectContent>
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
                                    {errors.class_id && (
                                        <p className="text-sm text-destructive">
                                            {errors.class_id}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="gender">
                                        Jenis Kelamin{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Select
                                        value={data.gender}
                                        onValueChange={(value: 'L' | 'P') =>
                                            setData('gender', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih jenis kelamin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="L">
                                                Laki-laki
                                            </SelectItem>
                                            <SelectItem value="P">
                                                Perempuan
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.gender && (
                                        <p className="text-sm text-destructive">
                                            {errors.gender}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="birth_place">
                                        Tempat Lahir
                                    </Label>
                                    <Input
                                        id="birth_place"
                                        value={data.birth_place}
                                        onChange={(e) =>
                                            setData(
                                                'birth_place',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Masukkan tempat lahir"
                                    />
                                    {errors.birth_place && (
                                        <p className="text-sm text-destructive">
                                            {errors.birth_place}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="birth_date">
                                        Tanggal Lahir
                                    </Label>
                                    <Input
                                        id="birth_date"
                                        type="date"
                                        value={data.birth_date}
                                        onChange={(e) =>
                                            setData('birth_date', e.target.value)
                                        }
                                    />
                                    {errors.birth_date && (
                                        <p className="text-sm text-destructive">
                                            {errors.birth_date}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="religion">Agama</Label>
                                    <Select
                                        value={data.religion}
                                        onValueChange={(value) =>
                                            setData('religion', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih agama" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Islam">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="Kristen">
                                                Kristen
                                            </SelectItem>
                                            <SelectItem value="Katolik">
                                                Katolik
                                            </SelectItem>
                                            <SelectItem value="Hindu">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="Buddha">
                                                Buddha
                                            </SelectItem>
                                            <SelectItem value="Konghucu">
                                                Konghucu
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.religion && (
                                        <p className="text-sm text-destructive">
                                            {errors.religion}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="address">Alamat</Label>
                                    <Textarea
                                        id="address"
                                        value={data.address}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                            setData('address', e.target.value)
                                        }
                                        placeholder="Masukkan alamat lengkap"
                                        rows={3}
                                    />
                                    {errors.address && (
                                        <p className="text-sm text-destructive">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 border-t pt-4">
                                <Button variant="outline" asChild>
                                    <Link href="/students">Batal</Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    <Save className="mr-2 h-4 w-4" />
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
