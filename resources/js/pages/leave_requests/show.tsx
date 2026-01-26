import { Head, router, usePage, Link } from '@inertiajs/react';
import { ArrowLeft, Download, Eye, FileText, User } from 'lucide-react';
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
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface Student { id: number; name: string; nis?: string }
interface LeaveRequest { id: number; student: Student; request_date: string; reason?: string; status?: string; review_notes?: string; attachment_path?: string | null; reviewer?: { id:number; name:string } }

interface Props { leaveRequest: LeaveRequest }

export default function LeaveRequestShow({ leaveRequest }: Props) {
        const page = usePage<{ flash?: { success?: string; error?: string } }>();

        const [approveOpen, setApproveOpen] = useState(false);
        const [rejectOpen, setRejectOpen] = useState(false);
        const [deleteOpen, setDeleteOpen] = useState(false);
        const [notes, setNotes] = useState('');

        const [previewAttachment, setPreviewAttachment] = useState<string | null>(null);
        const [previewDialogOpen, setPreviewDialogOpen] = useState(false);

        const breadcrumbs: BreadcrumbItem[] = [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Manajemen Kehadiran', href: '/attendance' },
            { title: 'Permohonan Izin', href: '/leave-requests' },
            { title: `#${leaveRequest.id}`, href: `/leave-requests/${leaveRequest.id}` },
        ];

        useEffect(() => {
            const flash = page.props.flash || {};
            if (flash?.success) {
                toast({ title: 'Berhasil', description: flash.success, variant: 'success' });
            }
            if (flash?.error) {
                toast({ title: 'Gagal', description: flash.error, variant: 'destructive' });
            }
        }, [page.props.flash]);

        const confirmApprove = () => {
            router.post(`/leave-requests/${leaveRequest.id}/approve`, {}, {
                onSuccess: () => router.visit('/leave-requests'),
            });
        };

        const confirmReject = () => {
            router.post(`/leave-requests/${leaveRequest.id}/reject`, { review_notes: notes }, {
                onSuccess: () => router.visit('/leave-requests'),
            });
        };

        const confirmDelete = () => {
            router.delete(`/leave-requests/${leaveRequest.id}`, {
                onSuccess: () => router.visit('/leave-requests'),
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

        const formatDateTime = (dateStr?: string) => {
            if (!dateStr) return '-';
            try {
                const d = new Date(dateStr);
                return d.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) + ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            } catch (e) {
                return dateStr;
            }
        };

        const getFileType = (path: string) => {
            const parts = path.split('.');
            return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
        };

        const canPreviewFile = (ext: string) => {
            const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            const documentTypes = ['pdf'];
            return imageTypes.includes(ext) || documentTypes.includes(ext);
        };

        const openPreview = (path: string) => {
            setPreviewAttachment(path);
            setPreviewDialogOpen(true);
        };

        const attachmentUrl = (path?: string | null) => {
            if (!path) return null;
            if (path.startsWith('http') || path.startsWith('/')) return path;
            return `/storage/${path}`;
        };

        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title={`Permohonan Izin #${leaveRequest.id}`} />

                <div className="space-y-6 p-6">
                    <div className="flex items-center justify-between">
                        <Heading title={`Permohonan Izin #${leaveRequest.id}`} description="Rincian permohonan izin" />
                        <div className="flex gap-2">
                            <Button variant="outline" asChild>
                                <Link href="/leave-requests">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Kembali
                                </Link>
                            </Button>
                            {leaveRequest.status === 'pending' && (
                                <>
                                    <Button variant="outline" onClick={() => setApproveOpen(true)}>Setujui</Button>
                                    <Button variant="destructive" onClick={() => setRejectOpen(true)}>Tolak</Button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <FileText className="h-5 w-5" />
                                        Rincian Permohonan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <div className="text-sm text-muted-foreground">Nama Siswa</div>
                                            <div className="font-medium">{leaveRequest.student?.name}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">NIS</div>
                                            <div className="font-medium">{leaveRequest.student?.nis ?? '-'}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Tanggal Permohonan</div>
                                            <div className="font-medium">{formatDateTime(leaveRequest.request_date)}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Status</div>
                                            <div className="font-medium">{statusBadge(leaveRequest.status)}</div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="text-sm text-muted-foreground">Alasan</div>
                                            <div className="font-medium whitespace-pre-wrap">{leaveRequest.reason ?? '-'}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {leaveRequest.attachment_path && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Lampiran</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <p className="text-sm font-medium">{attachmentUrl(leaveRequest.attachment_path)?.split('/').pop()}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {canPreviewFile(getFileType(leaveRequest.attachment_path!)) && (
                                                        <Button variant="outline" size="sm" onClick={() => openPreview(attachmentUrl(leaveRequest.attachment_path!)!)}>
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    <Button variant="outline" size="sm" asChild>
                                                        <a href={attachmentUrl(leaveRequest.attachment_path!) ?? undefined} target="_blank" rel="noopener noreferrer">
                                                            <Download className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="text-sm text-muted-foreground mb-1">Reviewer</div>
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{leaveRequest.reviewer?.name ?? '-'}</span>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <div className="text-sm text-muted-foreground mb-1">Catatan Reviewer</div>
                                        <div className="text-sm">{leaveRequest.review_notes ?? '-'}</div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <div className="text-sm text-muted-foreground mb-1">Tanggal Dibuat</div>
                                        <div className="text-sm">{formatDateTime(leaveRequest.request_date)}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Approve dialog */}
                    <Dialog open={approveOpen} onOpenChange={setApproveOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Konfirmasi Persetujuan</DialogTitle>
                                <DialogDescription>Apakah Anda yakin ingin menyetujui permohonan ini?</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setApproveOpen(false)}>Batal</Button>
                                <Button onClick={confirmApprove}>Setujui</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Reject dialog */}
                    <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Tolak Permohonan</DialogTitle>
                                <DialogDescription>Masukkan catatan penolakan (opsional)</DialogDescription>
                            </DialogHeader>
                            <div className="py-2">
                                <Label>Catatan</Label>
                                <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setRejectOpen(false)}>Batal</Button>
                                <Button variant="destructive" onClick={confirmReject}>Tolak</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Preview Dialog */}
                    <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
                        <DialogContent className="max-w-4xl">
                            <DialogHeader>
                                <DialogTitle>{previewAttachment?.split('/').pop()}</DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                                {previewAttachment?.endsWith('.pdf') ? (
                                    <div className="w-full h-[70vh]"><iframe src={previewAttachment} className="w-full h-full border-0" title="Preview" /></div>
                                ) : (
                                    <div className="flex justify-center"><img src={previewAttachment || undefined} alt="preview" className="max-w-full max-h-[70vh] object-contain" /></div>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </AppLayout>
        );
    }
