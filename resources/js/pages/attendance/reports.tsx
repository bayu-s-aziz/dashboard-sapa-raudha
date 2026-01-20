import { Head, router, usePage } from '@inertiajs/react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Download, Search } from 'lucide-react';
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
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

interface Student {
    id: number;
    name: string;
    nis: string;
}

interface Class {
    id: number;
    name: string;
    grade: string;
    group: 'A' | 'B';
    homeroom_teacher?: {
        id: number;
        name: string;
        nik: string;
    };
}

interface AttendanceSummary {
    student: Student;
    period: string;
    period_type: 'weekly' | 'monthly';
    hadir: number;
    sakit: number;
    izin: number;
    alpa: number;
}

interface Props {
    attendance_summary?: AttendanceSummary[];
    students: Student[];
    classes: Class[];
    filters: {
        period_type?: 'weekly' | 'monthly';
        period_date?: string;
        class_id?: string;
    };
}

export default function AttendanceReports({ attendance_summary = [], classes, filters }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Kehadiran', href: '/attendance' },
        { title: 'Laporan Kehadiran', href: '/attendance/reports' },
    ];

    const [searchFilters, setSearchFilters] = useState({
        period_type: filters.period_type || 'weekly',
        period_date: filters.period_date || new Date().toISOString().split('T')[0],
        class_id: filters.class_id || 'all',
    });

    const [exportDialogOpen, setExportDialogOpen] = useState(false);
    const [exportFilters, setExportFilters] = useState({
        period_type: 'weekly' as 'weekly' | 'monthly',
        period_date: new Date().toISOString().split('T')[0],
        class_id: 'all' as string,
    });

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

    const handleFilterChange = (key: string, value: string) => {
        setSearchFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const filtersToSend = { ...searchFilters };
        router.get('/attendance/reports', filtersToSend, {
            preserveState: true,
            replace: true,
        });
    };

    const formatPeriod = (period: string, periodType: 'weekly' | 'monthly') => {
        if (periodType === 'weekly') {
            const [year, week] = period.split('-W');
            return `Minggu ${week}, ${year}`;
        } else {
            const [year, month] = period.split('-');
            const monthNames = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
            ];
            return `${monthNames[parseInt(month) - 1]} ${year}`;
        }
    };

    const exportToPDF = async (exportFilters: { period_type: 'weekly' | 'monthly'; period_date: string; class_id: string }) => {
        try {
            // Fetch data for export
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const response = await fetch(`/attendance/reports/export?period_type=${exportFilters.period_type}&period_date=${exportFilters.period_date}&class_id=${exportFilters.class_id}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
                throw new Error(`Server error: ${response.status} - ${errorData.message || response.statusText}`);
            }

            const data = await response.json();
            const attendance_summary = data.attendance_summary || [];
            const classes = data.classes || [];

            if (attendance_summary.length === 0) {
                toast({
                    title: 'Tidak ada data',
                    description: 'Tidak ada data kehadiran untuk periode dan kelas yang dipilih',
                    variant: 'destructive',
                });
                return;
            }

        const doc = new jsPDF('p', 'mm', 'a4'); // A4 size

        // School header - updated format
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('REKAP KEHADIRAN SISWA', 105, 25, { align: 'center' });

        // Period type
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        const periodTypeText = exportFilters.period_type === 'weekly' ? 'MINGGUAN' : 'BULANAN';
        doc.text(periodTypeText, 105, 35, { align: 'center' });

        // School name
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('RAUDHATUL ATHFAL AL-ISLAM', 105, 45, { align: 'center' });

        // Determine semester and academic year
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // 1-12
        const currentYear = currentDate.getFullYear();

        // Semester: Ganjil (July-Dec), Genap (Jan-June)
        const semester = currentMonth >= 7 ? 'GANJIL' : 'GENAP';
        const academicYear = currentMonth >= 7
            ? `${currentYear}/${currentYear + 1}`
            : `${currentYear - 1}/${currentYear}`;

        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(`SEMESTER ${semester}`, 105, 55, { align: 'center' });
        doc.text(academicYear, 105, 62, { align: 'center' });

        // Class information
        const selectedClass = classes.find((cls: Class) => cls.id.toString() === exportFilters.class_id);
        const classInfo = exportFilters.class_id === 'all'
            ? 'Semua Kelompok'
            : `Kelompok : ${selectedClass?.group}`;
        doc.text(classInfo, 20, 72, { align: 'left' });

        // Period information
        const periodText = `Periode     : ${formatPeriod(attendance_summary[0]?.period || '', exportFilters.period_type)}`;
        doc.text(periodText, 20, 79, { align: 'left' });
        // Add a line under header
        doc.setLineWidth(0.5);
        doc.line(20, 87, 190, 87);

        // Prepare table data
        const tableData = attendance_summary.map((summary: AttendanceSummary) => [
            summary.student.nis,
            summary.student.name,
            summary.hadir.toString(),
            summary.sakit.toString(),
            summary.izin.toString(),
            summary.alpa.toString(),
            (summary.hadir + summary.sakit + summary.izin + summary.alpa).toString()
        ]);

        // Add table with better styling
        autoTable(doc, {
            startY: 100,
            head: [['No', 'NIS', 'Nama Siswa', 'H', 'S', 'I', 'A', 'Total']],
            body: tableData.map((row: string[], index: number) => [(index + 1).toString(), ...row]),
            theme: 'grid',
            styles: {
                fontSize: 10,
                cellPadding: 1,
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [240, 240, 240],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
                halign: 'center',
                valign: 'middle',
            },
            bodyStyles: {
                valign: 'middle',
            },
            alternateRowStyles: {
                fillColor: [250, 250, 250],
            },
            columnStyles: {
                0: { cellWidth: 12, halign: 'center' }, // No
                1: { cellWidth: 22, halign: 'center' }, // NIS
                2: { cellWidth: 70 }, // Nama
                3: { cellWidth: 12, halign: 'center' }, // H
                4: { cellWidth: 12, halign: 'center' }, // S
                5: { cellWidth: 12, halign: 'center' }, // I
                6: { cellWidth: 12, halign: 'center' }, // A
                7: { cellWidth: 15, halign: 'center' }, // Total
            },
            margin: { left: 20, right: 20 },
        });

        // Get the final Y position after the table
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const finalY = (doc as any).lastAutoTable.finalY;

        // Add signature section
        const signatureY = finalY + 20;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');

        // Left signature - Kepala Sekolah
        doc.text('Mengetahui,', 30, signatureY);
        doc.text('Kepala Sekolah', 30, signatureY + 5);
        doc.text('', 30, signatureY + 20);
        doc.text('Lilis Farida, S.Pd.I', 30, signatureY + 30);
        doc.text('NIK.', 30, signatureY + 35);

        // Right signature - Wali Kelas
        doc.text('Sindangkasih, ' + new Date().toLocaleDateString('id-ID'), 140, signatureY);
        doc.text('Wali Kelas', 140, signatureY + 5);

        // Show actual teacher name and NIK if class is selected
        if (exportFilters.class_id !== 'all' && selectedClass?.homeroom_teacher) {
            doc.text('', 140, signatureY + 20);
            doc.text(selectedClass.homeroom_teacher.name, 140, signatureY + 30);
            doc.text(`NIK. ${selectedClass.homeroom_teacher.nik}`, 140, signatureY + 35);
        } else {
            doc.text('', 140, signatureY + 20);
            doc.text('_________________', 140, signatureY + 30);
            doc.text('NIK.', 140, signatureY + 35);
        }

        // Add footer with line
        doc.setLineWidth(0.3);
        doc.line(20, 270, 190, 270);

        // Add footer
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pageCount = (doc as any).internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.text(`Dicetak pada: ${new Date().toLocaleDateString('id-ID')} ${new Date().toLocaleTimeString('id-ID')}`, 20, 275);
            doc.text(`Halaman ${i} dari ${pageCount}`, 180, 275, { align: 'right' });
        }

        // Save the PDF
        const fileName = `rekap-kehadiran-${exportFilters.period_type}-${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);

        setExportDialogOpen(false);
        toast({
            title: 'Berhasil',
            description: 'PDF berhasil diekspor',
            variant: 'default',
        });
        } catch (error) {
            console.error('PDF export error:', error);
            toast({
                title: 'Gagal',
                description: error instanceof Error ? error.message : 'Terjadi kesalahan saat mengekspor PDF',
                variant: 'destructive',
            });
        }
    };

    const handleExportFilterChange = (key: string, value: string) => {
        setExportFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleExport = () => {
        exportToPDF(exportFilters);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Kehadiran" />

            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Laporan Kehadiran"
                        description="Laporan ringkasan kehadiran siswa per periode"
                    />
                </div>

                {/* Filters */}
                <Card>
                    <CardHeader>
                        <CardTitle>Filter Laporan Periode</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Kelas</label>
                                <Select
                                    value={searchFilters.class_id || 'all'}
                                    onValueChange={(value) => handleFilterChange('class_id', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih kelas" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem key="all-classes" value="all">Semua Kelas</SelectItem>
                                        {classes.map((cls) => (
                                            <SelectItem key={cls.id} value={cls.id.toString()}>
                                                {cls.name} ({cls.grade} {cls.group})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Tipe Periode</label>
                                <Select
                                    value={searchFilters.period_type}
                                    onValueChange={(value) => handleFilterChange('period_type', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="weekly">Mingguan</SelectItem>
                                        <SelectItem value="monthly">Bulanan</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    {searchFilters.period_type === 'weekly' ? 'Pilih Minggu' : 'Pilih Bulan'}
                                </label>
                                <Input
                                    type="date"
                                    value={searchFilters.period_date}
                                    onChange={(e) => handleFilterChange('period_date', e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">&nbsp;</label>
                                <div className="flex gap-2">
                                    <Button type="submit" className="flex-1">
                                        <Search className="mr-2 h-4 w-4" />
                                        Tampilkan
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            setSearchFilters({
                                                period_type: 'weekly',
                                                period_date: new Date().toISOString().split('T')[0],
                                                class_id: 'all',
                                            });
                                            router.get('/attendance/reports', {}, { preserveState: true, replace: true });
                                        }}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Summary Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Laporan Kehadiran {searchFilters.period_type === 'weekly' ? 'Mingguan' : 'Bulanan'}</CardTitle>
                                {attendance_summary.length > 0 && (
                                    <p className="text-sm text-muted-foreground">
                                        Periode: {formatPeriod(attendance_summary[0]?.period || '', searchFilters.period_type)}
                                    </p>
                                )}
                            </div>
                            <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Ekspor PDF
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Ekspor Laporan Kehadiran</DialogTitle>
                                        <DialogDescription>
                                            Pilih kelas dan periode yang ingin diekspor ke PDF.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="export-class" className="text-right">
                                                Kelas
                                            </Label>
                                            <Select
                                                value={exportFilters.class_id}
                                                onValueChange={(value) => handleExportFilterChange('class_id', value)}
                                            >
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih kelas" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem key="all-classes-export" value="all">Semua Kelas</SelectItem>
                                                    {classes.map((cls) => (
                                                        <SelectItem key={`export-${cls.id}`} value={cls.id.toString()}>
                                                            {cls.name} ({cls.grade} {cls.group})
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="export-period-type" className="text-right">
                                                Tipe Periode
                                            </Label>
                                            <Select
                                                value={exportFilters.period_type}
                                                onValueChange={(value: 'weekly' | 'monthly') => handleExportFilterChange('period_type', value)}
                                            >
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="weekly">Mingguan</SelectItem>
                                                    <SelectItem value="monthly">Bulanan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="export-period-date" className="text-right">
                                                {exportFilters.period_type === 'weekly' ? 'Pilih Minggu' : 'Pilih Bulan'}
                                            </Label>
                                            <Input
                                                id="export-period-date"
                                                type="date"
                                                value={exportFilters.period_date}
                                                onChange={(e) => handleExportFilterChange('period_date', e.target.value)}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" variant="outline" onClick={() => setExportDialogOpen(false)}>
                                            Batal
                                        </Button>
                                        <Button type="button" onClick={handleExport}>
                                            <Download className="mr-2 h-4 w-4" />
                                            Ekspor PDF
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nama Siswa</TableHead>
                                    <TableHead>NIS</TableHead>
                                    <TableHead className="text-center">Hadir</TableHead>
                                    <TableHead className="text-center">Sakit</TableHead>
                                    <TableHead className="text-center">Izin</TableHead>
                                    <TableHead className="text-center">Alpa</TableHead>
                                    <TableHead className="text-center">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendance_summary.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-8">
                                            Tidak ada data laporan untuk periode ini
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    attendance_summary.map((summary) => {
                                        const total = summary.hadir + summary.sakit + summary.izin + summary.alpa;
                                        return (
                                            <TableRow key={`${summary.student.id}-${summary.period}`}>
                                                <TableCell>
                                                    <div className="font-medium">{summary.student.name}</div>
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {summary.student.nis}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                                        {summary.hadir}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="destructive">
                                                        {summary.sakit}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="secondary">
                                                        {summary.izin}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="outline">
                                                        {summary.alpa}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="outline" className="font-semibold">
                                                        {total}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}