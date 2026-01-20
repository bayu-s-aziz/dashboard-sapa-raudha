# 🗄️ Database Backup & Recovery Guide

## 📋 Ringkasan

Sistem backup database otomatis untuk RA Al-Islam Sapa Raudha. Semua data penting disimpan dalam format JSON untuk recovery jika database hilang atau corrupted.

---

## 📊 Data yang Di-backup

| Tabel | Records | Deskripsi |
|-------|---------|-----------|
| `classes` | 2 | Data kelas (Kelompok A & B) |
| `gurus` | 5 | Data guru termasuk admin |
| `students` | 30 | Data siswa lengkap |
| `parents` | 30 | Data orang tua siswa |
| `users` | 65 | Akun login untuk semua pengguna |

**Total:** 132 records tersimpan dengan aman

---

## 🔄 Cara Membuat Backup Baru

### Metode 1: Menggunakan Script Otomatis (Recommended)

```bash
./backup-database.sh
```

### Metode 2: Manual via Artisan

```bash
php artisan tinker --execute="
\$students = \DB::table('students')->get();
file_put_contents('database/seeders/data/students_backup.json', json_encode(\$students, JSON_PRETTY_PRINT));

\$parents = \DB::table('parents')->get();
file_put_contents('database/seeders/data/parents_backup.json', json_encode(\$parents, JSON_PRETTY_PRINT));

\$gurus = \DB::table('gurus')->get();
file_put_contents('database/seeders/data/gurus_backup.json', json_encode(\$gurus, JSON_PRETTY_PRINT));

\$classes = \DB::table('classes')->get();
file_put_contents('database/seeders/data/classes_backup.json', json_encode(\$classes, JSON_PRETTY_PRINT));

\$users = \DB::table('users')->get();
file_put_contents('database/seeders/data/users_backup.json', json_encode(\$users, JSON_PRETTY_PRINT));

echo 'Backup completed!' . PHP_EOL;
"
```

### Jangan Lupa Commit!

```bash
git add database/seeders/data/
git commit -m "Update database backup - $(date +%Y-%m-%d)"
git push
```

---

## ♻️ Cara Restore Database

### Skenario 1: Database Hilang Total

```bash
# 1. Setup ulang database
php artisan migrate:fresh

# 2. Restore dari backup
php artisan db:seed --class=DatabaseBackupSeeder

# 3. Clear cache
php artisan optimize
```

### Skenario 2: Data Corrupted, Ingin Reset

```bash
# 1. Hapus semua data
php artisan migrate:fresh

# 2. Restore dari backup
php artisan db:seed --class=DatabaseBackupSeeder

# 3. Clear cache  
php artisan optimize
```

### Skenario 3: Setup di Server Baru

```bash
# 1. Clone repository
git clone <repo-url>
cd web-sapa-raudha

# 2. Install dependencies
composer install
npm install

# 3. Setup environment
cp .env.example .env
php artisan key:generate

# 4. Konfigurasi database di .env
# DB_DATABASE=sapa_raudha
# DB_USERNAME=root
# DB_PASSWORD=

# 5. Migrasi dan restore
php artisan migrate
php artisan db:seed --class=DatabaseBackupSeeder

# 6. Setup storage dan cache
php artisan storage:link
php artisan optimize
```

---

## 📁 Struktur Backup

```
database/seeders/data/
├── README.md                    # Dokumentasi folder backup
├── .gitignore                   # Pastikan JSON files ter-commit
├── classes_backup.json          # 2 classes
├── gurus_backup.json            # 5 gurus
├── students_backup.json         # 30 students
├── parents_backup.json          # 30 parents
└── users_backup.json            # 65 users
```

---

## 🔐 Password Default

Setelah restore, gunakan password default berikut:

| Role | Username | Password |
|------|----------|----------|
| Admin | admin@ra-alislam.sch.id | `Admin123` |
| Guru | (lihat email guru) | `Alislam123` |
| Siswa | (NIS)@ra-alislam.sch.id | `Alislam123` |
| Orang Tua | parent(ID)@ra-alislam.sch.id | `Alislam123` |

---

## ✅ Verifikasi Backup

Cek apakah backup file valid:

```bash
php artisan tinker --execute="
\$dataPath = database_path('seeders/data');

\$files = ['classes', 'gurus', 'students', 'parents', 'users'];

foreach (\$files as \$file) {
    \$path = \$dataPath . '/' . \$file . '_backup.json';
    if (File::exists(\$path)) {
        \$data = json_decode(File::get(\$path), true);
        echo '✓ ' . \$file . ': ' . count(\$data) . ' records' . PHP_EOL;
    } else {
        echo '✗ ' . \$file . ': NOT FOUND' . PHP_EOL;
    }
}
"
```

Output yang benar:
```
✓ classes: 2 records
✓ gurus: 5 records
✓ students: 30 records
✓ parents: 30 records
✓ users: 65 records
```

---

## ⏰ Jadwal Backup

**Sangat Disarankan:**
- Backup setiap ada perubahan data penting
- Minimal 1x per bulan
- Sebelum update besar
- Sebelum migrasi server

---

## ⚠️ Hal Penting

### DO ✅
- ✅ Selalu commit file backup ke Git
- ✅ Backup berkala (minimal bulanan)
- ✅ Test restore di development sebelum production
- ✅ Simpan backup di multiple location (Git + Cloud)
- ✅ Dokumentasikan setiap perubahan struktur database

### DON'T ❌
- ❌ Hapus file backup
- ❌ Edit manual file JSON (gunakan seeder)
- ❌ Skip commit backup ke Git
- ❌ Lupa update backup setelah import data baru
- ❌ Restore langsung ke production tanpa test

---

## 🆘 Troubleshooting

### Problem: "Foreign key constraint fails"

**Solusi:**
```bash
# Matikan foreign key check saat restore
php artisan tinker --execute="
DB::statement('SET FOREIGN_KEY_CHECKS=0;');
// restore your data
DB::statement('SET FOREIGN_KEY_CHECKS=1;');
"
```

### Problem: "Duplicate entry"

**Solusi:**
```bash
# Truncate table dulu
php artisan migrate:fresh
php artisan db:seed --class=DatabaseBackupSeeder
```

### Problem: "File not found"

**Solusi:**
```bash
# Pastikan file backup ada
ls -la database/seeders/data/

# Jika tidak ada, pull dari Git
git pull origin main
```

---

## 📞 Kontak

Jika ada masalah dengan backup/restore, hubungi:
- Developer: [Your Contact]
- Dokumentasi lengkap: `/database/seeders/data/README.md`

---

**Last Updated:** 21 Januari 2026  
**Backup Version:** 1.0  
**Total Records:** 132
