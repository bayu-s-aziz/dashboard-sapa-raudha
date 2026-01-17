# ✅ Models Final - SAPA Raudha

## Models yang Digunakan (10 Models)

Semua duplikasi sudah dihapus. Berikut adalah models yang **AKTIF** digunakan:

### 1. **User.php** 
- Tabel: `users`
- Fungsi: Autentikasi untuk Guru dan Orang Tua
- Relasi: Polymorphic ke Guru atau ParentModel
- Password: Bcrypt hash

### 2. **Guru.php**
- Tabel: `gurus`
- Fungsi: Data guru, admin, kepala sekolah
- Relasi: 
  - `user()` → morphOne ke User
  - `homeroomClasses()` → hasMany ke Kelas
  - `announcements()` → hasMany ke Pengumuman
  - `scannedAttendance()` → hasMany ke Kehadiran

### 3. **ParentModel.php**
- Tabel: `parents`
- Fungsi: Data orang tua siswa
- Relasi:
  - `user()` → morphOne ke User
  - `student()` → belongsTo ke Siswa

### 4. **Siswa.php**
- Tabel: `students`
- Fungsi: Data siswa
- Relasi:
  - `kelas()` → belongsTo ke Kelas
  - `parent()` → hasOne ke ParentModel
  - `attendance()` → hasMany ke Kehadiran
  - `leaveRequests()` → hasMany ke LeaveRequest

### 5. **Kelas.php**
- Tabel: `classes`
- Fungsi: Data kelas
- Relasi:
  - `homeroomTeacher()` → belongsTo ke Guru
  - `students()` → hasMany ke Siswa
  - `announcements()` → hasMany ke Pengumuman

### 6. **Pengumuman.php**
- Tabel: `announcements`
- Fungsi: Pengumuman dari guru
- Relasi:
  - `author()` → belongsTo ke Guru
  - `targetClass()` → belongsTo ke Kelas
  - `attachments()` → hasMany ke Attachment

### 7. **Kehadiran.php**
- Tabel: `attendance`
- Fungsi: Data kehadiran siswa
- Relasi:
  - `student()` → belongsTo ke Siswa
  - `scanner()` → belongsTo ke Guru

### 8. **Attachment.php**
- Tabel: `attachments`
- Fungsi: File lampiran pengumuman
- Relasi:
  - `announcement()` → belongsTo ke Pengumuman

### 9. **LeaveRequest.php**
- Tabel: `leave_requests`
- Fungsi: Izin/sakit siswa
- Relasi:
  - `student()` → belongsTo ke Siswa
  - `reviewer()` → belongsTo ke Guru

### 10. **PasswordResetRequest.php**
- Tabel: `password_reset_requests`
- Fungsi: Request reset password
- Relasi:
  - `processor()` → belongsTo ke Guru

## Import di Controllers

### Contoh penggunaan di Controllers:

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Guru;
use App\Models\ParentModel;
use App\Models\Siswa;
use App\Models\Kelas;
use App\Models\Pengumuman;
use App\Models\Kehadiran;
use App\Models\LeaveRequest;

class YourController extends Controller
{
    // Your code here
}
```

## Perubahan yang Telah Dilakukan

### ✅ Models yang Dihapus (Duplikat):
- ❌ `Parent.php` → Diganti `ParentModel.php`
- ❌ `Student.php` → Diganti `Siswa.php`
- ❌ `Announcement.php` → Diganti `Pengumuman.php`
- ❌ `Attendance.php` → Diganti `Kehadiran.php`
- ❌ `GuruClass.php` → Diganti `Kelas.php`

### ✅ Relasi yang Diperbaiki:
- `Attachment.php` → Sekarang menggunakan `Pengumuman` (bukan `Announcement`)
- `LeaveRequest.php` → Sekarang menggunakan `Siswa` dan `Guru` (bukan `Student` dan `User`)

## Diagram Relasi

```
User (Polymorphic)
├── Guru
│   ├── homeroomClasses (Kelas)
│   ├── announcements (Pengumuman)
│   └── scannedAttendance (Kehadiran)
└── ParentModel
    └── student (Siswa)

Siswa
├── kelas (Kelas)
├── parent (ParentModel)
├── attendance (Kehadiran)
└── leaveRequests (LeaveRequest)

Pengumuman
├── author (Guru)
├── targetClass (Kelas)
└── attachments (Attachment)

Kehadiran
├── student (Siswa)
└── scanner (Guru)

LeaveRequest
├── student (Siswa)
└── reviewer (Guru)
```

## Status: BERSIH ✅

✅ Tidak ada duplikasi models
✅ Semua relasi menggunakan nama yang benar
✅ Konsisten menggunakan bahasa Indonesia
✅ Terintegrasi dengan sistem autentikasi
