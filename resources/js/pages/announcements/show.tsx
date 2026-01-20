import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Download, Edit, Eye, FileText, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
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

interface Attachment {
    id: number;
    filename: string;
    file_path: string;
    file_type: string;
    file_size: number;
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    author: Guru;
    target_audience: 'all' | 'parents' | 'teachers' | 'class';
    targetClass?: Kelas;
    attachments: Attachment[];
    created_at: string;
    updated_at: string;
}

interface Props {
    announcement: Announcement;
}

export default function AnnouncementShow({ announcement }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

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
        { title: 'Detail Pengumuman', href: '#' },
    ];

    const getAudienceLabel = (audience: string) => {
        switch (audience) {
            case 'all':
                return 'Semua (Siswa, Orang Tua, Guru)';
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

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Preview functionality
    const [previewAttachment, setPreviewAttachment] = useState<Attachment | null>(null);
    const [previewDialogOpen, setPreviewDialogOpen] = useState(false);

    const canPreviewFile = (fileType: string) => {
        const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        const documentTypes = ['pdf'];
        return imageTypes.includes(fileType.toLowerCase()) || documentTypes.includes(fileType.toLowerCase());
    };

    const openPreview = (attachment: Attachment) => {
        setPreviewAttachment(attachment);
        setPreviewDialogOpen(true);
    };

    const closePreview = () => {
        setPreviewAttachment(null);
        setPreviewDialogOpen(false);
    };

    const renderPreviewContent = () => {
        if (!previewAttachment) return null;

        const fileUrl = `/storage/${previewAttachment.file_path}`;
        const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(previewAttachment.file_type.toLowerCase());
        const isPdf = previewAttachment.file_type.toLowerCase() === 'pdf';

        if (isImage) {
            return (
                <div className="flex justify-center">
                    <img
                        src={fileUrl}
                        alt={previewAttachment.filename}
                        className="max-w-full max-h-[70vh] object-contain"
                    />
                </div>
            );
        }

        if (isPdf) {
            return (
                <div className="w-full h-[70vh]">
                    <iframe
                        src={fileUrl}
                        className="w-full h-full border-0"
                        title={`Preview ${previewAttachment.filename}`}
                    />
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center py-8 text-center">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                    File ini tidak dapat dipreview. Silakan download untuk melihat.
                </p>
            </div>
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Detail Pengumuman - ${announcement.title}`} />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Detail Pengumuman"
                        description="Informasi lengkap pengumuman"
                    />
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/announcements/${announcement.id}/edit`}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/announcements">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    {announcement.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose max-w-none">
                                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                        {announcement.content}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Attachments */}
                        {announcement.attachments && announcement.attachments.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Lampiran</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {announcement.attachments.map((attachment) => (
                                            <div key={attachment.id} className="flex items-center justify-between p-3 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <p className="text-sm font-medium">{attachment.filename}</p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {formatFileSize(attachment.file_size)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {canPreviewFile(attachment.file_type) && (
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => openPreview(attachment)}
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    <Button variant="outline" size="sm" asChild>
                                                        <a
                                                            href={`/storage/${attachment.file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Download className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Informasi</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                        Target Audiens
                                    </div>
                                    <Badge variant={getAudienceBadgeVariant(announcement.target_audience)}>
                                        {getAudienceLabel(announcement.target_audience)}
                                    </Badge>
                                </div>

                                {announcement.targetClass && (
                                    <>
                                        <Separator />
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">
                                                Target Kelas
                                            </div>
                                            <Badge variant="outline">
                                                Kelompok {announcement.targetClass.group}
                                            </Badge>
                                        </div>
                                    </>
                                )}

                                <Separator />

                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                        Pembuat
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">{announcement.author?.name || '-'}</span>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                        Tanggal Dibuat
                                    </div>
                                    <div className="text-sm">
                                        {new Date(announcement.created_at).toLocaleDateString('id-ID', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </div>
                                </div>

                                {announcement.updated_at !== announcement.created_at && (
                                    <>
                                        <Separator />
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">
                                                Terakhir Diubah
                                            </div>
                                            <div className="text-sm">
                                                {new Date(announcement.updated_at).toLocaleDateString('id-ID', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Preview Dialog */}
            <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>
                            {previewAttachment?.filename}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        {renderPreviewContent()}
                    </div>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}
