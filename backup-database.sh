#!/bin/bash

# Database Backup Script
# Backup all important tables to JSON files

echo "🔄 Starting database backup..."
echo ""

cd /home/bayu/projects/laravel/web-sapa-raudha

php artisan tinker --execute="
echo '📦 Exporting database tables...' . PHP_EOL . PHP_EOL;

// Export all students
\$students = \DB::table('students')->get();
file_put_contents('database/seeders/data/students_backup.json', json_encode(\$students, JSON_PRETTY_PRINT));
echo '✓ Students: ' . \$students->count() . ' records' . PHP_EOL;

// Export all parents
\$parents = \DB::table('parents')->get();
file_put_contents('database/seeders/data/parents_backup.json', json_encode(\$parents, JSON_PRETTY_PRINT));
echo '✓ Parents: ' . \$parents->count() . ' records' . PHP_EOL;

// Export all gurus
\$gurus = \DB::table('gurus')->get();
file_put_contents('database/seeders/data/gurus_backup.json', json_encode(\$gurus, JSON_PRETTY_PRINT));
echo '✓ Gurus: ' . \$gurus->count() . ' records' . PHP_EOL;

// Export all classes
\$classes = \DB::table('classes')->get();
file_put_contents('database/seeders/data/classes_backup.json', json_encode(\$classes, JSON_PRETTY_PRINT));
echo '✓ Classes: ' . \$classes->count() . ' records' . PHP_EOL;

// Export all users
\$users = \DB::table('users')->get();
file_put_contents('database/seeders/data/users_backup.json', json_encode(\$users, JSON_PRETTY_PRINT));
echo '✓ Users: ' . \$users->count() . ' records' . PHP_EOL;

echo PHP_EOL . '✅ Backup completed!' . PHP_EOL;
echo '📁 Location: database/seeders/data/' . PHP_EOL;
echo PHP_EOL . 'ℹ️  Next steps:' . PHP_EOL;
echo '  1. git add database/seeders/data/' . PHP_EOL;
echo '  2. git commit -m \"Update database backup\"' . PHP_EOL;
echo '  3. git push' . PHP_EOL;
"

echo ""
echo "✅ Backup selesai! Jangan lupa commit ke git."
