<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Siswa;
use App\Models\User;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = [
            ['nisn' => '3200194909', 'nis' => '250001', 'email' => '250001@ra-alislam.sch.id', 'name' => 'AKHSAN RAMADHAN', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-05-12', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:38:10'],
            ['nisn' => '3208188033', 'nis' => '250002', 'email' => '250002@ra-alislam.sch.id', 'name' => 'ALINNA TRI WULANDARY', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-08-30', 'religion' => '1', 'address' => 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:38:41'],
            ['nisn' => '3201873261', 'nis' => '250003', 'email' => '250003@ra-alislam.sch.id', 'name' => 'DANU GHILMAN HADIYAN', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-04-18', 'religion' => '1', 'address' => 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:39:47'],
            ['nisn' => '3207734540', 'nis' => '250005', 'email' => '250005@ra-alislam.sch.id', 'name' => 'MUHAMMAD KENZIE PUTRA PERMANA', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'BOYOLALI', 'birth_date' => '2020-06-17', 'religion' => '1', 'address' => 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:40:53'],
            ['nisn' => '3202043565', 'nis' => '250006', 'email' => '250006@ra-alislam.sch.id', 'name' => 'NISA NURAFIFAH AZ-ZAHRA', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-05-10', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:44'],
            ['nisn' => '3204694103', 'nis' => '250008', 'email' => '250008@ra-alislam.sch.id', 'name' => 'RAFA AL TAUFIQ', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-02-24', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:06'],
            ['nisn' => '3201208113', 'nis' => '250009', 'email' => '250009@ra-alislam.sch.id', 'name' => 'RAZKA WILIAM SAPUTRA', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-08-08', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:17'],
            ['nisn' => '3203334373', 'nis' => '250010', 'email' => '250010@ra-alislam.sch.id', 'name' => 'RIENTAMMY NAZIA PUTRIE', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-09-26', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:32'],
            ['nisn' => '3204587629', 'nis' => '250011', 'email' => '250011@ra-alislam.sch.id', 'name' => 'RIRIN SOPIYAH', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-12-11', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:40'],
            ['nisn' => '3202885958', 'nis' => '250004', 'email' => '250004@ra-alislam.sch.id', 'name' => 'FAHMI KAMAL ALGHANI', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-11-09', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:39:55'],
            ['nisn' => '3194033181', 'nis' => '250007', 'email' => '250007@ra-alislam.sch.id', 'name' => 'NOVIAN MAHARDIKA', 'class_id' => 1, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-11-24', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:56'],
            ['nisn' => '3209312801', 'nis' => '250012', 'email' => '250012@ra-alislam.sch.id', 'name' => 'SHAQILA NURHASANAH', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-04-18', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:48'],
            ['nisn' => '3206684539', 'nis' => '250013', 'email' => '250013@ra-alislam.sch.id', 'name' => 'SYAKILA ALMAIRA', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-09-18', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:43:02'],
            ['nisn' => '3185384514', 'nis' => '240001', 'email' => '240001@ra-alislam.sch.id', 'name' => 'ABIDZARD HILMI FAUZIANSYAH', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2018-09-27', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:37:50'],
            ['nisn' => '3191564790', 'nis' => '240002', 'email' => '240002@ra-alislam.sch.id', 'name' => 'AL AYYUBY FAIZ', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-09-04', 'religion' => '1', 'address' => 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:38:19'],
            ['nisn' => '3186404777', 'nis' => '240003', 'email' => '240003@ra-alislam.sch.id', 'name' => 'ALESHA MAULIDA', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2018-11-11', 'religion' => '1', 'address' => 'DUSUN RANJI RATA, Kel. CIMARI, Kec. CIKONENG, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:38:27'],
            ['nisn' => '3196018725', 'nis' => '240004', 'email' => '240004@ra-alislam.sch.id', 'name' => 'AMELIA RAHMA JULIANTI', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-07-01', 'religion' => '1', 'address' => 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:38:51'],
            ['nisn' => '3186781982', 'nis' => '250014', 'email' => '250014@ra-alislam.sch.id', 'name' => 'ANNISA NURRUL QOLBY', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2018-12-27', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:39:05'],
            ['nisn' => '3205309254', 'nis' => '240005', 'email' => '240005@ra-alislam.sch.id', 'name' => 'AZKIA ZAHRA NURSIFA', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-04-05', 'religion' => '1', 'address' => 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:39:15'],
            ['nisn' => '3198820898', 'nis' => '240006', 'email' => '240006@ra-alislam.sch.id', 'name' => 'HAFIZ NAJWAN', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-10-25', 'religion' => '1', 'address' => 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:40:26'],
            ['nisn' => '3199037426', 'nis' => '240007', 'email' => '240007@ra-alislam.sch.id', 'name' => 'HANIF HUSNI RAMADHAN', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-05-28', 'religion' => '1', 'address' => 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:40:34'],
            ['nisn' => '3196993818', 'nis' => '240008', 'email' => '240008@ra-alislam.sch.id', 'name' => 'HILYA DWI ANNAURI', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-05-02', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:40:43'],
            ['nisn' => '3196285378', 'nis' => '240009', 'email' => '240009@ra-alislam.sch.id', 'name' => 'MUHAMMAD LUTHFI IBNU HAFIDZ', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-07-11', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:02'],
            ['nisn' => '3195329264', 'nis' => '240010', 'email' => '240010@ra-alislam.sch.id', 'name' => 'MUHAMMAD RAFI HAFIZ ALFATIH', 'class_id' => 2, 'gender' => 'L', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-05-04', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:10'],
            ['nisn' => '3196449784', 'nis' => '240011', 'email' => '240011@ra-alislam.sch.id', 'name' => 'NABILA NUR AZIZAH', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-02-27', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:18'],
            ['nisn' => '3192889481', 'nis' => '240012', 'email' => '240012@ra-alislam.sch.id', 'name' => 'NADIFA NURUL JANNAH', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-02-27', 'religion' => '1', 'address' => 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:26'],
            ['nisn' => '3195070489', 'nis' => '250015', 'email' => '250015@ra-alislam.sch.id', 'name' => 'NADZIFAH JAUHAR NAFISAH', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-02-06', 'religion' => '1', 'address' => 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:41:34'],
            ['nisn' => '3206313252', 'nis' => '250016', 'email' => '250016@ra-alislam.sch.id', 'name' => 'SHOFA NURSYIFA HASANAH', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2020-02-02', 'religion' => '1', 'address' => 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:42:55'],
            ['nisn' => '3194469072', 'nis' => '250017', 'email' => '250017@ra-alislam.sch.id', 'name' => 'SYASHA SHIDQIA', 'class_id' => 1, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-09-12', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:43:09'],
            ['nisn' => '3190130709', 'nis' => '240013', 'email' => '240013@ra-alislam.sch.id', 'name' => 'YOLLA OLIVIA', 'class_id' => 2, 'gender' => 'P', 'birth_place' => 'CIAMIS', 'birth_date' => '2019-02-07', 'religion' => '1', 'address' => 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', 'photo_url' => null, 'qr_code_path' => null, 'created_at' => '2026-01-09 12:24:19', 'updated_at' => '2026-01-09 12:43:17'],
        ];

        foreach ($students as $student) {
            $studentRecord = \DB::table('students')->updateOrInsert(
                ['nisn' => $student['nisn']],
                $student
            );
            
            // Create or update User record linked to Student
            $siswaModel = Siswa::where('nisn', $student['nisn'])->first();
            if ($siswaModel) {
                User::updateOrCreate(
                    ['email' => $student['email']],
                    [
                        'name' => $student['name'],
                        'email' => $student['email'],
                        'password' => Hash::make('Alislam123'),
                        'userable_type' => 'App\\Models\\Siswa',
                        'userable_id' => $siswaModel->id,
                    ]
                );
            }
        }
    }
}
