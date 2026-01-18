import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { useEffect, type FormEvent } from 'react';

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

interface Kelas {
    id: number;
    name: string;
    grade: string;
}

interface Props {
    classes: Kelas[];
}

export default function StudentCreate({ classes }: Props) {
    const page = usePage<{ flash?: { success?: string; error?: string } }>();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Manajemen Siswa', href: '/students' },
        { title: 'Tambah Siswa', href: '/students/create' },
    ];

    const { data, setData, post, processing, errors } = useForm({
        nisn: '',
        nis: '',
        name: '',
        class_id: '',
        gender: '',
        birth_place: '',
        birth_date: '',
        religion: '',
        address: '',
        // Parent data
        father_name: '',
        father_job: '',
        father_phone: '',
        mother_name: '',
        mother_job: '',
        mother_phone: '',
        guardian_name: '',
        guardian_job: '',
        guardian_phone: '',
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/students', {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'Berhasil',
                    description: 'Siswa berhasil ditambahkan',
                    variant: 'default',
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Siswa" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <Heading title="Tambah Siswa" description="Tambahkan data siswa baru ke dalam sistem" />
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
                        <CardContent>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="nisn">NISN</Label>
                                    <Input
                                        id="nisn"
                                        type="text"
                                        value={data.nisn}
                                        onChange={(e) => setData('nisn', e.target.value)}
                                        placeholder="Masukkan NISN"
                                    />
                                    {errors.nisn && <p className="text-sm text-destructive">{errors.nisn}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="nis">NIS</Label>
                                    <Input
                                        id="nis"
                                        type="text"
                                        value={data.nis}
                                        onChange={(e) => setData('nis', e.target.value)}
                                        placeholder="Masukkan NIS"
                                    />
                                    {errors.nis && <p className="text-sm text-destructive">{errors.nis}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Nama Lengkap</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Masukkan nama lengkap"
                                    />
                                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="class_id">Kelas</Label>
                                    <Select value={data.class_id} onValueChange={(value) => setData('class_id', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih kelas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {classes.map((kelas) => (
                                                <SelectItem key={kelas.id} value={kelas.id.toString()}>
                                                    {kelas.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.class_id && <p className="text-sm text-destructive">{errors.class_id}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="gender">Jenis Kelamin</Label>
                                    <Select value={data.gender} onValueChange={(value) => setData('gender', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih jenis kelamin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="L">Laki-laki</SelectItem>
                                            <SelectItem value="P">Perempuan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="birth_place">Tempat Lahir</Label>
                                    <Input
                                        id="birth_place"
                                        type="text"
                                        value={data.birth_place}
                                        onChange={(e) => setData('birth_place', e.target.value)}
                                        placeholder="Masukkan tempat lahir"
                                    />
                                    {errors.birth_place && <p className="text-sm text-destructive">{errors.birth_place}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="birth_date">Tanggal Lahir</Label>
                                    <Input
                                        id="birth_date"
                                        type="date"
                                        value={data.birth_date}
                                        onChange={(e) => setData('birth_date', e.target.value)}
                                    />
                                    {errors.birth_date && <p className="text-sm text-destructive">{errors.birth_date}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="religion">Agama</Label>
                                    <Select value={data.religion} onValueChange={(value) => setData('religion', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih agama" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Islam">Islam</SelectItem>
                                            <SelectItem value="Kristen">Kristen</SelectItem>
                                            <SelectItem value="Katolik">Katolik</SelectItem>
                                            <SelectItem value="Hindu">Hindu</SelectItem>
                                            <SelectItem value="Buddha">Buddha</SelectItem>
                                            <SelectItem value="Konghucu">Konghucu</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.religion && <p className="text-sm text-destructive">{errors.religion}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Alamat</Label>
                                <Textarea
                                    id="address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    placeholder="Masukkan alamat lengkap"
                                    rows={3}
                                />
                                {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
                            </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Data Orang Tua / Wali</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Father Information */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-primary">Data Ayah</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="father_name">Nama Ayah</Label>
                                        <Input
                                            id="father_name"
                                            type="text"
                                            value={data.father_name}
                                            onChange={(e) => setData('father_name', e.target.value)}
                                            placeholder="Masukkan nama ayah"
                                        />
                                        {errors.father_name && <p className="text-sm text-destructive">{errors.father_name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="father_job">Pekerjaan Ayah</Label>
                                        <Input
                                            id="father_job"
                                            type="text"
                                            value={data.father_job}
                                            onChange={(e) => setData('father_job', e.target.value)}
                                            placeholder="Masukkan pekerjaan ayah"
                                        />
                                        {errors.father_job && <p className="text-sm text-destructive">{errors.father_job}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="father_phone">No. HP Ayah</Label>
                                        <Input
                                            id="father_phone"
                                            type="tel"
                                            value={data.father_phone}
                                            onChange={(e) => setData('father_phone', e.target.value)}
                                            placeholder="Masukkan nomor HP ayah"
                                        />
                                        {errors.father_phone && <p className="text-sm text-destructive">{errors.father_phone}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Mother Information */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-primary">Data Ibu</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="mother_name">Nama Ibu</Label>
                                        <Input
                                            id="mother_name"
                                            type="text"
                                            value={data.mother_name}
                                            onChange={(e) => setData('mother_name', e.target.value)}
                                            placeholder="Masukkan nama ibu"
                                        />
                                        {errors.mother_name && <p className="text-sm text-destructive">{errors.mother_name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mother_job">Pekerjaan Ibu</Label>
                                        <Input
                                            id="mother_job"
                                            type="text"
                                            value={data.mother_job}
                                            onChange={(e) => setData('mother_job', e.target.value)}
                                            placeholder="Masukkan pekerjaan ibu"
                                        />
                                        {errors.mother_job && <p className="text-sm text-destructive">{errors.mother_job}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mother_phone">No. HP Ibu</Label>
                                        <Input
                                            id="mother_phone"
                                            type="tel"
                                            value={data.mother_phone}
                                            onChange={(e) => setData('mother_phone', e.target.value)}
                                            placeholder="Masukkan nomor HP ibu"
                                        />
                                        {errors.mother_phone && <p className="text-sm text-destructive">{errors.mother_phone}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Guardian Information */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium text-primary">Data Wali (Opsional)</h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="guardian_name">Nama Wali</Label>
                                        <Input
                                            id="guardian_name"
                                            type="text"
                                            value={data.guardian_name}
                                            onChange={(e) => setData('guardian_name', e.target.value)}
                                            placeholder="Masukkan nama wali"
                                        />
                                        {errors.guardian_name && <p className="text-sm text-destructive">{errors.guardian_name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="guardian_job">Pekerjaan Wali</Label>
                                        <Input
                                            id="guardian_job"
                                            type="text"
                                            value={data.guardian_job}
                                            onChange={(e) => setData('guardian_job', e.target.value)}
                                            placeholder="Masukkan pekerjaan wali"
                                        />
                                        {errors.guardian_job && <p className="text-sm text-destructive">{errors.guardian_job}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="guardian_phone">No. HP Wali</Label>
                                        <Input
                                            id="guardian_phone"
                                            type="tel"
                                            value={data.guardian_phone}
                                            onChange={(e) => setData('guardian_phone', e.target.value)}
                                            placeholder="Masukkan nomor HP wali"
                                        />
                                        {errors.guardian_phone && <p className="text-sm text-destructive">{errors.guardian_phone}</p>}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end space-x-2 mt-6">
                        <Button type="button" variant="outline" asChild>
                            <Link href="/students">Batal</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            <Save className="mr-2 h-4 w-4" />
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
