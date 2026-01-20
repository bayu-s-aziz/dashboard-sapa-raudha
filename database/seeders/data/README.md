# Database Backup Files

Folder ini berisi backup data dari database dalam format JSON.

## File Backup

- `classes_backup.json` - Data kelas (2 records)
- `gurus_backup.json` - Data guru (5 records)
- `students_backup.json` - Data siswa (30 records)
- `parents_backup.json` - Data orang tua (30 records)
- `users_backup.json` - Data pengguna/akun (65 records)

## Cara Membuat Backup Baru

Jalankan command berikut untuk export data terbaru dari database:

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

## Cara Restore Database

Jika database hilang atau corrupted, gunakan seeder backup:

```bash
# 1. Fresh migrate (hapus semua data)
php artisan migrate:fresh

# 2. Restore dari backup
php artisan db:seed --class=DatabaseBackupSeeder

# 3. Optimize
php artisan optimize
```

## Struktur Database

### Classes Table
- id, name, group, homeroom_teacher_id, academic_year, created_at

### Gurus Table
- id, nik, name, email, phone, role, subject, password_hash, photo_url, created_at, updated_at

### Students Table
- id, nisn, email, password, nis, name, class_id, gender, birth_place, birth_date, religion, address, photo_url, qr_code_path, created_at, updated_at

### Parents Table
- id, student_id, email, father_name, father_job, father_phone, mother_name, mother_job, mother_phone, guardian_name, guardian_job, guardian_phone, photo_url, active_parent_type, password_hash, created_at, updated_at

### Users Table
- id, name, email, userable_type, userable_id, email_verified_at, password, two_factor_secret, two_factor_recovery_codes, two_factor_confirmed_at, remember_token, created_at, updated_at

## Password Default

- Admin: `Admin123`
- Guru: `Alislam123`
- Siswa: `Alislam123`
- Orang Tua: `Alislam123`

## Tanggal Backup

Data terakhir di-export: **21 Januari 2026**

## Catatan Penting

⚠️ **JANGAN HAPUS FILE INI!**

File backup ini sangat penting untuk recovery jika database hilang. Pastikan:
1. File-file JSON selalu di-commit ke Git
2. Update backup secara berkala (minimal setiap bulan)
3. Simpan juga backup di tempat lain (Google Drive, cloud storage, dll)
