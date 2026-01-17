# Panduan Models - Mana yang Digunakan?

## ⚠️ MASALAH: Ada 2 Versi Models

Ada duplikasi models dengan nama berbeda (bahasa Inggris vs Indonesia):

| Versi Lama (Inggris) ❌ | Versi Baru (Indonesia) ✅ | Tabel Database |
|------------------------|--------------------------|----------------|
| `Parent.php` | **`ParentModel.php`** | `parents` |
| `Student.php` | **`Siswa.php`** | `students` |
| `Announcement.php` | **`Pengumuman.php`** | `announcements` |
| `Attendance.php` | **`Kehadiran.php`** | `attendance` |
| `GuruClass.php` | **`Kelas.php`** | `classes` |

## ✅ Models yang HARUS Digunakan (Versi Baru)

Gunakan models berikut dengan nama **Indonesia**:

1. **`User.php`** - Model autentikasi (polymorphic)
2. **`Guru.php`** - Model untuk guru
3. **`ParentModel.php`** - Model untuk orang tua (bukan `Parent.php`)
4. **`Siswa.php`** - Model untuk siswa (bukan `Student.php`)
5. **`Kelas.php`** - Model untuk kelas (bukan `GuruClass.php`)
6. **`Pengumuman.php`** - Model untuk pengumuman (bukan `Announcement.php`)
7. **`Kehadiran.php`** - Model untuk kehadiran (bukan `Attendance.php`)
8. **`Attachment.php`** - Model untuk lampiran pengumuman
9. **`LeaveRequest.php`** - Model untuk izin siswa
10. **`PasswordResetRequest.php`** - Model untuk request reset password

## 🔧 Perbaikan yang Diperlukan

### 1. Hapus Models Lama (Duplikat)

Models yang harus **DIHAPUS**:
```bash
rm app/Models/Parent.php
rm app/Models/Student.php
rm app/Models/Announcement.php
rm app/Models/Attendance.php
rm app/Models/GuruClass.php
```

### 2. Update Relasi di Model Guru

Model `Guru.php` masih mereferensi `GuruClass`, harus diganti ke `Kelas`:

**SEBELUM:**
```php
public function homeroomClasses()
{
    return $this->hasMany(GuruClass::class, 'homeroom_teacher_id');
}
```

**SESUDAH:**
```php
public function homeroomClasses()
{
    return $this->hasMany(Kelas::class, 'homeroom_teacher_id');
}
```

### 3. Update Relasi di Models Lain

Pastikan semua relasi menggunakan nama model yang benar:

- `Student` → `Siswa`
- `Parent` → `ParentModel`
- `Announcement` → `Pengumuman`
- `Attendance` → `Kehadiran`
- `GuruClass` → `Kelas`

## 📝 Import yang Benar di Controllers

### GuruController
```php
use App\Models\Guru;
use App\Models\User;
use App\Models\Kelas; // bukan GuruClass
```

### ParentController
```php
use App\Models\ParentModel; // bukan Parent
use App\Models\User;
use App\Models\Siswa; // bukan Student
```

### PengumumanController (jika ada)
```php
use App\Models\Pengumuman; // bukan Announcement
use App\Models\Guru;
use App\Models\Kelas;
```

### KehadiranController (jika ada)
```php
use App\Models\Kehadiran; // bukan Attendance
use App\Models\Siswa; // bukan Student
use App\Models\Guru;
```

## 🎯 Alasan Menggunakan Versi Baru (Indonesia)

1. **Konsistensi** - Semua nama dalam bahasa Indonesia
2. **Relasi Benar** - Models baru punya relasi yang sudah diperbaiki
3. **Polymorphic** - Terintegrasi dengan sistem User polymorphic
4. **Password Hash** - Menggunakan Laravel bcrypt yang benar

## ⚡ Langkah Perbaikan Cepat

Jalankan perintah berikut untuk membersihkan:

```bash
# Hapus models duplikat
rm app/Models/Parent.php
rm app/Models/Student.php
rm app/Models/Announcement.php
rm app/Models/Attendance.php
rm app/Models/GuruClass.php
```

Kemudian update relasi yang masih menggunakan nama lama.

## 📊 Ringkasan

| Aspek | Versi Lama ❌ | Versi Baru ✅ |
|-------|-------------|-------------|
| Nama | Bahasa Inggris | Bahasa Indonesia |
| Relasi User | Tidak ada | Ada (polymorphic) |
| Password | Plain text | Bcrypt hash |
| Relasi Model | Tidak lengkap | Lengkap |
| Controllers | Tidak ada | Ada (GuruController, ParentController) |

**GUNAKAN VERSI BARU (BAHASA INDONESIA)! ✅**
