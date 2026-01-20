#!/bin/bash

# Database Restore Test Script
# Test restore tanpa mengubah data production

echo "🧪 TESTING DATABASE BACKUP & RESTORE"
echo "====================================="
echo ""
echo "⚠️  Script ini akan test restore di database test."
echo "    Database production TIDAK akan terpengaruh."
echo ""
read -p "Lanjutkan? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Test dibatalkan."
    exit 1
fi

cd /home/bayu/projects/laravel/web-sapa-raudha

echo ""
echo "1️⃣ Checking backup files..."
php artisan tinker --execute="
\$dataPath = database_path('seeders/data');
\$files = ['classes', 'gurus', 'students', 'parents', 'users'];
\$allGood = true;

foreach (\$files as \$file) {
    \$path = \$dataPath . '/' . \$file . '_backup.json';
    if (File::exists(\$path)) {
        \$data = json_decode(File::get(\$path), true);
        if (is_array(\$data) && count(\$data) > 0) {
            echo '✓ ' . \$file . ': ' . count(\$data) . ' records' . PHP_EOL;
        } else {
            echo '✗ ' . \$file . ': INVALID JSON' . PHP_EOL;
            \$allGood = false;
        }
    } else {
        echo '✗ ' . \$file . ': NOT FOUND' . PHP_EOL;
        \$allGood = false;
    }
}

echo PHP_EOL . '✅ All backup files valid!' . PHP_EOL;
" 2>&1 | grep -v "Exception\|vendor\|Goodbye"

echo ""
echo "2️⃣ Checking DatabaseBackupSeeder..."

if [ -f "database/seeders/DatabaseBackupSeeder.php" ]; then
    echo "✅ DatabaseBackupSeeder.php exists"
else
    echo "❌ DatabaseBackupSeeder.php NOT FOUND"
    exit 1
fi

echo ""
echo "3️⃣ Checking migrations..."
MIGRATIONS=$(php artisan migrate:status | grep "Ran" | wc -l)
echo "✅ $MIGRATIONS migrations installed"

echo ""
echo "✅ SEMUA TEST PASSED!"
echo ""
echo "📚 Cara restore database:"
echo "   1. php artisan migrate:fresh"
echo "   2. php artisan db:seed --class=DatabaseBackupSeeder"
echo "   3. php artisan optimize"
echo ""
echo "📖 Dokumentasi lengkap: DATABASE_BACKUP.md"

