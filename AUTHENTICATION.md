# Sistem Autentikasi SAPA Raudha - Dokumentasi

## Gambaran Umum

Sistem autentikasi telah diperbaiki sehingga tabel `users` sekarang dapat menampung baik **Guru** maupun **Orang Tua**. Sistem menggunakan **polymorphic relationship** untuk menghubungkan setiap user dengan record Guru atau Parent yang sesuai.

## Struktur Database

### Tabel Users
Tabel `users` sekarang memiliki kolom tambahan:
- `userable_type`: Tipe model yang terhubung (`App\Models\Guru` atau `App\Models\ParentModel`)
- `userable_id`: ID dari record Guru atau Parent

### Relasi
```
User (polymorphic)
├── Guru (userable)
└── ParentModel (userable)
```

## Login Credentials

### Untuk Guru:
- **Email**: Email yang terdaftar di tabel `gurus`
- **Password**: Password yang sama dengan `password_hash` di tabel `gurus`
- Contoh:
  - Email: `admin@ra-alislam.sch.id`
  - Password: `admin123`

### Untuk Orang Tua:
- **Email**: Dibuat otomatis dengan format `parent[NISN]@ra-alislam.sch.id`
- **Password**: Default `ortu123` atau password yang sudah diatur
- Contoh untuk siswa dengan NISN 3200194909:
  - Email: `parent3200194909@ra-alislam.sch.id`
  - Password: `ortu123`

## Cara Menggunakan

### 1. Login sebagai Guru
```php
// Email dan password dari tabel gurus
$credentials = [
    'email' => 'admin@ra-alislam.sch.id',
    'password' => 'admin123'
];

if (Auth::attempt($credentials)) {
    $user = Auth::user();
    $guru = $user->userable; // Mendapatkan data guru
    $role = $guru->role; // admin, guru, atau kepsek
}
```

### 2. Login sebagai Orang Tua
```php
$credentials = [
    'email' => 'parent3200194909@ra-alislam.sch.id',
    'password' => 'ortu123'
];

if (Auth::attempt($credentials)) {
    $user = Auth::user();
    $parent = $user->userable; // Mendapatkan data parent
    $student = $parent->student; // Mendapatkan data siswa
}
```

### 3. Memeriksa Tipe User
```php
$user = Auth::user();

if ($user->isGuru()) {
    // User adalah guru
    $guru = $user->userable;
    if ($guru->isAdmin()) {
        // Guru dengan role admin
    }
} elseif ($user->isParent()) {
    // User adalah orang tua
    $parent = $user->userable;
    $student = $parent->student;
}
```

## API Endpoints

### Guru Management
- `GET /api/gurus` - List semua guru
- `POST /api/gurus` - Buat guru baru (otomatis membuat user)
- `GET /api/gurus/{id}` - Detail guru
- `PUT /api/gurus/{id}` - Update guru (otomatis update user)
- `DELETE /api/gurus/{id}` - Hapus guru (otomatis hapus user)

### Parent Management
- `GET /api/parents` - List semua orang tua
- `POST /api/parents` - Buat data orang tua baru (otomatis membuat user)
- `GET /api/parents/{id}` - Detail orang tua
- `PUT /api/parents/{id}` - Update data orang tua
- `DELETE /api/parents/{id}` - Hapus data orang tua (otomatis hapus user)

## Models

### User Model
```php
// Relasi polymorphic
$user->userable; // Mendapatkan Guru atau ParentModel

// Helper methods
$user->isGuru(); // true jika user adalah guru
$user->isParent(); // true jika user adalah orang tua
$user->getRole(); // Mendapatkan role user
```

### Guru Model
```php
$guru->user; // Mendapatkan user account
$guru->homeroomClasses; // Kelas yang diajar
$guru->announcements; // Pengumuman yang dibuat
$guru->scannedAttendance; // Kehadiran yang di-scan
```

### ParentModel
```php
$parent->user; // Mendapatkan user account
$parent->student; // Mendapatkan data siswa
$parent->primary_contact_name; // Nama kontak utama (ayah/ibu/wali)
$parent->primary_contact_phone; // Nomor kontak utama
```

## Migrasi Data

Data yang sudah ada di database telah otomatis di-sync ke tabel users menggunakan seeder `SyncUsersSeeder`.

Untuk sync ulang jika diperlukan:
```bash
php artisan db:seed --class=SyncUsersSeeder
```

## Membuat User Baru

### Membuat Guru dengan User Account
```php
use App\Models\Guru;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// Buat guru
$guru = Guru::create([
    'nik' => '1234567890',
    'name' => 'Nama Guru',
    'email' => 'guru@example.com',
    'role' => 'guru',
    'password_hash' => 'password123',
]);

// Buat user account
$user = User::create([
    'name' => $guru->name,
    'email' => $guru->email,
    'password' => Hash::make('password123'),
    'userable_type' => Guru::class,
    'userable_id' => $guru->id,
]);
```

### Membuat Parent dengan User Account
```php
use App\Models\ParentModel;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// Buat parent
$parent = ParentModel::create([
    'student_id' => 1,
    'father_name' => 'Nama Ayah',
    'mother_name' => 'Nama Ibu',
    'password_hash' => 'ortu123',
]);

// Buat user account
$user = User::create([
    'name' => $parent->primary_contact_name,
    'email' => 'parent@example.com',
    'password' => Hash::make('ortu123'),
    'userable_type' => ParentModel::class,
    'userable_id' => $parent->id,
]);
```

## Notes

- Password di tabel `gurus` dan `parents` (kolom `password_hash`) masih disimpan untuk kompatibilitas dengan sistem lama
- Password di tabel `users` menggunakan bcrypt hash melalui Laravel
- Saat membuat atau update guru/parent, pastikan user account juga dibuat/diupdate
- Saat menghapus guru/parent, user account terkait juga akan dihapus otomatis
