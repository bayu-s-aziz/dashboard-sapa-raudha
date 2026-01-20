import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';

import Heading from '@/components/heading';
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

interface Guru {
    id: number;
    name: string;
}

interface Kelas {
    id: number;
    name: string;
    group: string;
}

interface Props {
    gurus: Guru[];
    classes: Kelas[];
}

export default function AnnouncementCreate({ gurus, classes }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Pengumuman', href: '/announcements' },
        { title: 'Buat Pengumuman', href: '/announcements/create' },
    ];

    const { data, setData, processing, errors } = useForm({
        title: '',
        content: '',
        author_id: '',
        target_audience: 'all',
        target_class_id: '',
        attachments: [] as File[],
    });

    const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);

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

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('author_id', data.author_id);
        formData.append('target_audience', data.target_audience);

        if (data.target_class_id) {
            formData.append('target_class_id', data.target_class_id);
        }

        // Add attachments
        attachmentFiles.forEach((file, index) => {
            formData.append(`attachments[${index}]`, file);
        });

        router.post('/announcements', formData, {
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Pengumuman berhasil dibuat',
                    variant: 'success',
                });
            },
            onError: () => {
                toast({
                    title: 'Gagal',
                    description: 'Terjadi kesalahan saat membuat pengumuman',
                    variant: 'destructive',
                });
            },
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setAttachmentFiles(files);
        setData('attachments', files);
    };

    const removeAttachment = (index: number) => {
        const newFiles = attachmentFiles.filter((_, i) => i !== index);
        setAttachmentFiles(newFiles);
        setData('attachments', newFiles);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Buat Pengumuman" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Buat Pengumuman"
                        description="Buat pengumuman baru untuk siswa, orang tua, dan guru"
                    />
                    <Button variant="outline" asChild>
                        <Link href="/announcements">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informasi Pengumuman</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="title">
                                        Judul Pengumuman{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                        placeholder="Masukkan judul pengumuman"
                                        required
                                    />
                                    {errors.title && (
                                        <p className="text-sm text-destructive">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="author_id">
                                        Pembuat Pengumuman{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Select
                                        value={data.author_id}
                                        onValueChange={(value) =>
                                            setData('author_id', value)
                                        }
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih guru" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {gurus.map((guru) => (
                                                <SelectItem key={guru.id} value={guru.id.toString()}>
                                                    {guru.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.author_id && (
                                        <p className="text-sm text-destructive">
                                            {errors.author_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">
                                    Isi Pengumuman{' '}
                                    <span className="text-destructive">
                                        *
                                    </span>
                                </Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData('content', e.target.value)
                                    }
                                    placeholder="Masukkan isi pengumuman"
                                    rows={6}
                                    required
                                />
                                {errors.content && (
                                    <p className="text-sm text-destructive">
                                        {errors.content}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="target_audience">
                                        Target Audiens{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Select
                                        value={data.target_audience}
                                        onValueChange={(value) => {
                                            setData('target_audience', value);
                                            // Reset target_class_id if audience is not 'class'
                                            if (value !== 'class') {
                                                setData('target_class_id', '');
                                            }
                                        }}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih target audiens" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem key="all-audience-create" value="all">
                                                Semua (Siswa, Orang Tua, Guru)
                                            </SelectItem>
                                            <SelectItem value="parents">
                                                Orang Tua
                                            </SelectItem>
                                            <SelectItem value="teachers">
                                                Guru
                                            </SelectItem>
                                            <SelectItem value="class">
                                                Kelas Tertentu
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.target_audience && (
                                        <p className="text-sm text-destructive">
                                            {errors.target_audience}
                                        </p>
                                    )}
                                </div>

                                {data.target_audience === 'class' && (
                                    <div className="space-y-2">
                                        <Label htmlFor="target_class_id">
                                            Target Kelas{' '}
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </Label>
                                        <Select
                                            value={data.target_class_id}
                                            onValueChange={(value) =>
                                                setData('target_class_id', value)
                                            }
                                            required
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih kelas" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {classes.map((kelas) => (
                                                    <SelectItem key={kelas.id} value={kelas.id.toString()}>
                                                        Kelompok {kelas.group}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.target_class_id && (
                                            <p className="text-sm text-destructive">
                                                {errors.target_class_id}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="attachments">
                                    Lampiran (Opsional)
                                </Label>
                                <div className="space-y-2">
                                    <Input
                                        id="attachments"
                                        type="file"
                                        multiple
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Pilih file untuk dilampirkan (PDF, DOC, DOCX, JPG, PNG)
                                    </p>
                                </div>

                                {attachmentFiles.length > 0 && (
                                    <div className="space-y-2">
                                        <Label>File yang akan dilampirkan:</Label>
                                        {attachmentFiles.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between p-2 border rounded">
                                                <span className="text-sm">{file.name}</span>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeAttachment(index)}
                                                >
                                                    Hapus
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-6 flex justify-end">
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Menyimpan...' : 'Simpan Pengumuman'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
