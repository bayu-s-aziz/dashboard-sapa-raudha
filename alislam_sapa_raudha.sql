-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 19, 2026 at 06:04 PM
-- Server version: 8.0.44-0ubuntu0.24.04.2
-- PHP Version: 8.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alislam_sapa_raudha`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `author_id` int NOT NULL,
  `author_type` enum('guru') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'guru',
  `target_audience` enum('all','parents','teachers','class') COLLATE utf8mb4_general_ci DEFAULT 'all',
  `target_class_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `title`, `content`, `author_id`, `author_type`, `target_audience`, `target_class_id`, `created_at`, `updated_at`) VALUES
(1, 'KBM Semester Genap', 'Kegiatan belajar mengajar semester genap mulai kembali pada tanggal 5 Januari 2026.', 1, 'guru', 'all', NULL, '2026-01-09 15:39:50', '2026-01-09 15:39:50'),
(2, 'MBG Dilanjutkan', 'Untuk Semester genap MBG akan diberikan pada minggu ke-2 tepatnya tanggal 12 Januari 2026.', 1, 'guru', 'all', NULL, '2026-01-09 15:41:58', '2026-01-09 15:41:58');

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int NOT NULL,
  `announcement_id` int NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `file_type` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file_size` int DEFAULT NULL,
  `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `date` date NOT NULL,
  `status` enum('hadir','sakit','izin','alpa') COLLATE utf8mb4_general_ci DEFAULT 'hadir',
  `check_in` time DEFAULT NULL,
  `check_out` time DEFAULT NULL,
  `notes` text COLLATE utf8mb4_general_ci,
  `scanned_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `student_id`, `date`, `status`, `check_in`, `check_out`, `notes`, `scanned_by`, `created_at`) VALUES
(1, 1, '2026-01-05', 'izin', NULL, NULL, 'Sakit, Izn Liburan', NULL, '2026-01-10 03:38:03'),
(2, 1, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:00:31'),
(3, 2, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:00:45'),
(4, 18, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:00:57'),
(5, 3, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:01:09'),
(6, 10, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:01:23'),
(7, 4, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:01:39'),
(8, 27, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:01:53'),
(9, 5, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:02:04'),
(10, 11, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:02:19'),
(11, 6, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:02:33'),
(12, 7, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:02:44'),
(13, 8, '2026-01-11', 'hadir', NULL, NULL, NULL, 2, '2026-01-11 16:02:55'),
(14, 1, '2026-01-07', 'izin', NULL, NULL, 'izizniznzinzinz', NULL, '2026-01-13 02:14:32');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('sapa-raudha-cache-190512c237a2e3723016a2ad5617d7e9', 'i:1;', 1768845806),
('sapa-raudha-cache-190512c237a2e3723016a2ad5617d7e9:timer', 'i:1768845806;', 1768845806);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `group` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `homeroom_teacher_id` int DEFAULT NULL,
  `academic_year` varchar(20) COLLATE utf8mb4_general_ci DEFAULT '2025/2026',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `group`, `homeroom_teacher_id`, `academic_year`, `created_at`) VALUES
(1, 'Kelompok A', 'A', 3, '2025/2026', '2026-01-09 12:06:47'),
(2, 'Kelompok B', 'B', 2, '2025/2026', '2026-01-09 12:06:47');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gurus`
--

CREATE TABLE `gurus` (
  `id` int NOT NULL,
  `nik` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` enum('guru','kepsek','admin') COLLATE utf8mb4_general_ci DEFAULT 'guru',
  `subject` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `photo_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gurus`
--

INSERT INTO `gurus` (`id`, `nik`, `name`, `email`, `phone`, `role`, `subject`, `password_hash`, `photo_url`, `created_at`, `updated_at`) VALUES
(1, '1234567890', 'Administrator', 'admin@ra-alislam.sch.id', NULL, 'admin', NULL, 'admin123', NULL, '2026-01-09 11:42:43', '2026-01-09 11:48:09'),
(2, '1234567891', 'Eulis Sukmayati', '', '081234567890', 'guru', '', '123456', NULL, '2026-01-09 11:53:27', '2026-01-09 11:53:27'),
(3, '1234567892', 'Elis Nurjanah', '', '082123123123', 'guru', '', '123456', NULL, '2026-01-09 11:54:01', '2026-01-09 11:54:01'),
(4, '1234567893', 'Ecin Nurbayanti', '', '083073084000', 'guru', '', '123456', NULL, '2026-01-09 11:55:03', '2026-01-09 11:55:03'),
(5, '1234567894', 'Lilis Farida', '', '082134395867', 'guru', '', '123456', NULL, '2026-01-09 11:55:47', '2026-01-09 11:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_requests`
--

CREATE TABLE `leave_requests` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `request_date` date NOT NULL,
  `reason` text COLLATE utf8mb4_general_ci NOT NULL,
  `attachment_path` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `reviewed_by` int DEFAULT NULL,
  `reviewed_at` timestamp NULL DEFAULT NULL,
  `review_notes` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leave_requests`
--

INSERT INTO `leave_requests` (`id`, `student_id`, `request_date`, `reason`, `attachment_path`, `status`, `submitted_at`, `reviewed_by`, `reviewed_at`, `review_notes`) VALUES
(1, 1, '2026-01-05', 'Sakit, Izn Liburan', NULL, 'approved', '2026-01-10 03:38:03', 2, '2026-01-10 03:39:05', 'Disetujui'),
(2, 1, '2026-01-07', 'izizniznzinzinz', '/uploads/1768270472584-23028734.png', 'approved', '2026-01-13 02:14:32', 2, '2026-01-13 02:14:47', 'Disetujui');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_17_000000_create_sapa_raudha_tables', 1),
(5, '2025_08_26_100418_add_two_factor_columns_to_users_table', 2),
(6, '2026_01_17_095737_add_polymorphic_relationship_to_users_table', 2),
(7, '2026_01_17_142502_change_grade_column_to_string_in_classes_table', 2),
(8, '2026_01_17_152632_change_grade_to_group_in_classes_table', 2),
(9, '2026_01_17_153626_update_existing_classes_group_values', 2);

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `father_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `father_job` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `father_phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mother_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mother_job` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mother_phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `guardian_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `guardian_job` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `guardian_phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `photo_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parents`
--

INSERT INTO `parents` (`id`, `student_id`, `father_name`, `father_job`, `father_phone`, `mother_name`, `mother_job`, `mother_phone`, `guardian_name`, `guardian_job`, `guardian_phone`, `photo_url`, `password_hash`, `created_at`, `updated_at`) VALUES
(1, 1, 'AAS BENI HIDAYAT', NULL, '', 'AAH SOLIHAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:38:10'),
(2, 2, 'WARDIMAN', NULL, '', 'LILIS LISNAWATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:38:41'),
(3, 3, 'DIDI JUMADI', NULL, '', 'Devi Sintiawati', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:39:47'),
(4, 4, 'HERI PERMANA', NULL, '', 'Fidiyawati', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:40:53'),
(5, 5, 'AJIS', NULL, '', 'Fuji Fauziah', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:47'),
(6, 6, 'SAEPULOH', NULL, '', 'Lilis Lisnawati', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:06'),
(7, 7, 'SUPRIATNA', NULL, '', 'Sri Wahyuningsih', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:17'),
(8, 8, 'AGIS ROHIMAT', NULL, '', 'Resti Firdayanti', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:32'),
(9, 9, 'AHMAD SUJAI', NULL, '', 'IIS RODIAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:40'),
(10, 10, 'AAS AGIS KUSWAYA', NULL, '', 'CICI PARLINA', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:39:55'),
(11, 11, 'AGUS HERYANA', NULL, '', 'NUR NURJANAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:56'),
(12, 12, 'JEJEN JENAL ARIPIN', NULL, '', 'ELIN HERLINA', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:48'),
(13, 13, 'SYARIF HIDAYAT', NULL, '', 'ELY YULIA', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:43:02'),
(14, 14, 'NANANG FRIATNA', NULL, '', 'ENOK HERLINA', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:37:50'),
(15, 15, 'DALI PERMADI', NULL, '', 'YATI SURYATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:38:19'),
(16, 16, 'DEDE MULYADI', NULL, '', 'ANTI ROSTIANTI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:38:27'),
(17, 17, 'SANUSI', NULL, '', 'RAHMAWATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:38:51'),
(18, 18, 'HENDI', NULL, '', 'SITI AISAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:39:05'),
(19, 19, 'CECEP SAHARA', NULL, '', 'SITI MARDIANAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:39:15'),
(20, 20, 'DODO HENDRA', NULL, '', 'ATIN SUPRIATIN', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:40:26'),
(21, 21, 'EDI SUPRIADI', NULL, '', 'ENTIK TATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:40:34'),
(22, 22, 'JAJANG SURYANA', NULL, '', 'IMAS RAHMAWATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:40:43'),
(23, 23, 'ASEP DODO', NULL, '', 'WARI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:02'),
(24, 24, 'AZIS MUSLIM', NULL, '', 'RINI YANTI RAHAYU', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:10'),
(25, 25, 'ASEP SAEPULLOH', NULL, '', 'SITI KHOERIAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:18'),
(26, 26, 'AEP SAEPULLOH', NULL, '', 'SITI KHOERIAH', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:26'),
(27, 27, 'NANANG FARIDUDIN', NULL, '', 'Enung Nurhayati', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:41:34'),
(28, 28, 'MUHAMAD TOHA', NULL, '', 'IIF SARIPAH S.PD', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:42:55'),
(29, 29, 'DENI HERDIANA', NULL, '', 'ATIK IRAWATI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:43:09'),
(30, 30, 'AGUS SANJAYA', NULL, '', 'MAYASARI MAHARANI', NULL, '', NULL, NULL, NULL, NULL, 'ortu123', '2026-01-09 12:24:19', '2026-01-09 12:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_requests`
--

CREATE TABLE `password_reset_requests` (
  `id` int NOT NULL,
  `identifier` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `user_type` enum('guru','parent') COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('pending','completed','rejected') COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `processed_at` timestamp NULL DEFAULT NULL,
  `processed_by` int DEFAULT NULL,
  `notes` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `password_reset_requests`
--

INSERT INTO `password_reset_requests` (`id`, `identifier`, `name`, `user_type`, `phone_number`, `status`, `created_at`, `processed_at`, `processed_by`, `notes`) VALUES
(1, '3200194909', 'Akhsan', 'parent', NULL, 'rejected', '2026-01-13 00:53:26', '2026-01-13 00:53:46', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1NckJNhTehiGLfyqArAIGnUqLWHsbm6BEtSjfkcl', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoieVJ5elFUaGtzMEZGblF0QWpIZE9DVjNVN3VkbWRBNHlLd2FGakhwTCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdHRlbmRhbmNlIjtzOjU6InJvdXRlIjtzOjE2OiJhdHRlbmRhbmNlLmluZGV4Ijt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1768845877),
('RssFidKEaQmZac3bF3rBaI8PoT4Xw8ATGGim4hzU', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiMVlHRzM1d2lIRUhYUmk0ZHdHTlAwY2tPeTdCbWVzRjA1eHVEWEczNyI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozMToiaHR0cDovL2xvY2FsaG9zdDo4MDAxL2Rhc2hib2FyZCI7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vbG9jYWxob3N0OjgwMDEvbG9naW4iO3M6NToicm91dGUiO3M6NToibG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1768639552),
('w8g6QSISoBiFiPCR3cRPjxJ05GZkfWdKGsxhO8CG', 2, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiVmwwZlVFS3JxNVlCQzM0V1pXZHZWbE1neFZVM2dpUnFOQ003NjN5SCI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjM4OiJodHRwOi8vbG9jYWxob3N0OjgwMDEvc2V0dGluZ3MvcHJvZmlsZSI7czo1OiJyb3V0ZSI7czoxMjoicHJvZmlsZS5lZGl0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1768642003);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int NOT NULL,
  `nisn` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `nis` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `class_id` int DEFAULT NULL,
  `gender` enum('L','P') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birth_place` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `religion` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_general_ci,
  `photo_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `qr_code_path` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `nisn`, `nis`, `name`, `class_id`, `gender`, `birth_place`, `birth_date`, `religion`, `address`, `photo_url`, `qr_code_path`, `created_at`, `updated_at`) VALUES
(1, '3200194909', '250001', 'AKHSAN RAMADHAN', 1, 'L', 'CIAMIS', '2020-05-12', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:38:10'),
(2, '3208188033', '250002', 'ALINNA TRI WULANDARY', 1, 'P', 'CIAMIS', '2020-08-30', '1', 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:38:41'),
(3, '3201873261', '250003', 'DANU GHILMAN HADIYAN', 1, 'L', 'CIAMIS', '2020-04-18', '1', 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:39:47'),
(4, '3207734540', '250005', 'MUHAMMAD KENZIE PUTRA PERMANA', 1, 'L', 'BOYOLALI', '2020-06-17', '1', 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:40:53'),
(5, '3202043565', '250006', 'NISA NURAFIFAH AZ-ZAHRA', 1, 'P', 'CIAMIS', '2020-05-10', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:44'),
(6, '3204694103', '250008', 'RAFA AL TAUFIQ', 1, 'L', 'CIAMIS', '2020-02-24', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:06'),
(7, '3201208113', '250009', 'RAZKA WILIAM SAPUTRA', 1, 'L', 'CIAMIS', '2020-08-08', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:17'),
(8, '3203334373', '250010', 'RIENTAMMY NAZIA PUTRIE', 1, 'P', 'CIAMIS', '2020-09-26', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:32'),
(9, '3204587629', '250011', 'RIRIN SOPIYAH', 1, 'P', 'CIAMIS', '2020-12-11', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:40'),
(10, '3202885958', '250004', 'FAHMI KAMAL ALGHANI', 1, 'L', 'CIAMIS', '2020-11-09', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:39:55'),
(11, '3194033181', '250007', 'NOVIAN MAHARDIKA', 1, 'L', 'CIAMIS', '2019-11-24', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:56'),
(12, '3209312801', '250012', 'SHAQILA NURHASANAH', 1, 'P', 'CIAMIS', '2020-04-18', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:48'),
(13, '3206684539', '250013', 'SYAKILA ALMAIRA', 1, 'P', 'CIAMIS', '2020-09-18', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:43:02'),
(14, '3185384514', '240001', 'ABIDZARD HILMI FAUZIANSYAH', 2, 'L', 'CIAMIS', '2018-09-27', '1', 'DUSUN SIRNAGALIH', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:37:50'),
(15, '3191564790', '240002', 'AL AYYUBY FAIZ', 2, 'L', 'CIAMIS', '2019-09-04', '1', 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:38:19'),
(16, '3186404777', '240003', 'ALESHA MAULIDA', 2, 'P', 'CIAMIS', '2018-11-11', '1', 'DUSUN RANJI RATA, Kel. CIMARI, Kec. CIKONENG, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:38:27'),
(17, '3196018725', '240004', 'AMELIA RAHMA JULIANTI', 2, 'P', 'CIAMIS', '2019-07-01', '1', 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:38:51'),
(18, '3186781982', '250014', 'ANNISA NURRUL QOLBY', 1, 'P', 'CIAMIS', '2018-12-27', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:39:05'),
(19, '3205309254', '240005', 'AZKIA ZAHRA NURSIFA', 2, 'P', 'CIAMIS', '2020-04-05', '1', 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:39:15'),
(20, '3198820898', '240006', 'HAFIZ NAJWAN', 2, 'L', 'CIAMIS', '2019-10-25', '1', 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:40:26'),
(21, '3199037426', '240007', 'HANIF HUSNI RAMADHAN', 2, 'L', 'CIAMIS', '2019-05-28', '1', 'DUSUN SUBANG, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:40:34'),
(22, '3196993818', '240008', 'HILYA DWI ANNAURI', 2, 'P', 'CIAMIS', '2019-05-02', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:40:43'),
(23, '3196285378', '240009', 'MUHAMMAD LUTHFI IBNU HAFIDZ', 2, 'L', 'CIAMIS', '2019-07-11', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:02'),
(24, '3195329264', '240010', 'MUHAMMAD RAFI HAFIZ ALFATIH', 2, 'L', 'CIAMIS', '2019-05-04', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:10'),
(25, '3196449784', '240011', 'NABILA NUR AZIZAH', 2, 'P', 'CIAMIS', '2019-02-27', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:18'),
(26, '3192889481', '240012', 'NADIFA NURUL JANNAH', 2, 'P', 'CIAMIS', '2019-02-27', '1', 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:26'),
(27, '3195070489', '250015', 'NADZIFAH JAUHAR NAFISAH', 1, 'P', 'CIAMIS', '2019-02-06', '1', 'SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:41:34'),
(28, '3206313252', '250016', 'SHOFA NURSYIFA HASANAH', 1, 'P', 'CIAMIS', '2020-02-02', '1', 'DUSUN SIRNAGALIH, Kel. GUNUNGCUPU, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:42:55'),
(29, '3194469072', '250017', 'SYASHA SHIDQIA', 1, 'P', 'CIAMIS', '2019-09-12', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:43:09'),
(30, '3190130709', '240013', 'YOLLA OLIVIA', 2, 'P', 'CIAMIS', '2019-02-07', '1', 'DUSUN TUGU, Kel. SUKASENANG, Kec. SINDANGKASIH, JAWA BARAT, 46268', NULL, NULL, '2026-01-09 12:24:19', '2026-01-09 12:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userable_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userable_id` bigint UNSIGNED DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `userable_type`, `userable_id`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin SAPA Raudha', 'admin@sapa.com', NULL, NULL, NULL, '$2y$12$eX9TrDP06FC2vVpgSheGoOzeat8Mat7DIBrQ0GAWUUORAMalxF5u6', NULL, NULL, NULL, NULL, '2026-01-17 01:42:21', '2026-01-17 01:42:29'),
(2, 'Administrator', 'admin@ra-alislam.sch.id', 'App\\Models\\Guru', 1, NULL, '$2y$12$WIx6lj909prmPNB26I6Am.t685MlLziV0iOqhqc1vaY4VNBZ868EO', NULL, NULL, NULL, 'J67gyKgELPhWY1xa2Kpf0p9y0DjfLqZ4DTkMbU5gLbzLz6vUfwlwVykNi5AK', '2026-01-17 01:44:57', '2026-01-19 11:01:26'),
(3, 'Eulis Sukmayati', 'guru2@sapa-raudha.local', 'App\\Models\\Guru', 2, NULL, '$2y$12$iR8gZIQhu/blfepXBu8XzOSpr2tsKqkpXpyZHpOQLDWPLET1CIULK', NULL, NULL, NULL, NULL, '2026-01-19 11:01:27', '2026-01-19 11:01:27'),
(4, 'Elis Nurjanah', 'guru3@sapa-raudha.local', 'App\\Models\\Guru', 3, NULL, '$2y$12$2F1x6QIeZWr2tDbk2wHMNuO3FTsArD76ZlNhLmnXTuDHf2ECZHghe', NULL, NULL, NULL, NULL, '2026-01-19 11:01:28', '2026-01-19 11:01:28'),
(5, 'Ecin Nurbayanti', 'guru4@sapa-raudha.local', 'App\\Models\\Guru', 4, NULL, '$2y$12$SUhNFHhMTrneEpvE1ZGcl.iO1jwMXqz1V4p1Jb92GIJd8gYmgSfVS', NULL, NULL, NULL, NULL, '2026-01-19 11:01:29', '2026-01-19 11:01:29'),
(6, 'Lilis Farida', 'guru5@sapa-raudha.local', 'App\\Models\\Guru', 5, NULL, '$2y$12$WBKUK6sIJZfvEmt9QOHRpukEeQtPcP0hophZywWVnqDMZQbVMn8jK', NULL, NULL, NULL, NULL, '2026-01-19 11:01:30', '2026-01-19 11:01:30'),
(7, 'AAS BENI HIDAYAT', '250001@ra-alislam.sch.id', 'App\\Models\\ParentModel', 1, NULL, '$2y$12$7QXAGEPsQYnJ.OemUAX6x.TKNmUizCF4icpMLOLKYz2eGB82OSF7S', NULL, NULL, NULL, NULL, '2026-01-19 11:01:31', '2026-01-19 11:01:31'),
(8, 'WARDIMAN', '250002@ra-alislam.sch.id', 'App\\Models\\ParentModel', 2, NULL, '$2y$12$VM5iVurVSjMvwKazBDYZvOFNcD3rlvK1EOrAHHAsKyQQ2u9LNL3nO', NULL, NULL, NULL, NULL, '2026-01-19 11:01:32', '2026-01-19 11:01:32'),
(9, 'DIDI JUMADI', '250003@ra-alislam.sch.id', 'App\\Models\\ParentModel', 3, NULL, '$2y$12$j0fypFPgGxPF29b0N/gtCuBk.jN.YHIrdmbOxO/Ih0wl5SOISi89K', NULL, NULL, NULL, NULL, '2026-01-19 11:01:33', '2026-01-19 11:01:33'),
(10, 'HERI PERMANA', '250005@ra-alislam.sch.id', 'App\\Models\\ParentModel', 4, NULL, '$2y$12$QYdkWy0q1SywXQuO.kBn8.QTKYsO9L7NRl4ZIB5ydsbnYA4b8tTDS', NULL, NULL, NULL, NULL, '2026-01-19 11:01:33', '2026-01-19 11:01:33'),
(11, 'AJIS', '250006@ra-alislam.sch.id', 'App\\Models\\ParentModel', 5, NULL, '$2y$12$MOu5q2CDY4VIWKR1adNbFunVQie/RygbOltPi7vRCy6xY/dOXCFyG', NULL, NULL, NULL, NULL, '2026-01-19 11:01:34', '2026-01-19 11:01:34'),
(12, 'SAEPULOH', '250008@ra-alislam.sch.id', 'App\\Models\\ParentModel', 6, NULL, '$2y$12$xqmhjtVVANTPYYprh/tSa.IPjzh30oF.q6kxaQkaosPcLxwvrDzYu', NULL, NULL, NULL, NULL, '2026-01-19 11:01:35', '2026-01-19 11:01:35'),
(13, 'SUPRIATNA', '250009@ra-alislam.sch.id', 'App\\Models\\ParentModel', 7, NULL, '$2y$12$V0ueVcivhREQlETUJdBOGOD7d7gt7HZiYe3EpotmTF0oKGwyXOV9y', NULL, NULL, NULL, NULL, '2026-01-19 11:01:36', '2026-01-19 11:01:36'),
(14, 'AGIS ROHIMAT', '250010@ra-alislam.sch.id', 'App\\Models\\ParentModel', 8, NULL, '$2y$12$XF/X6vqAqsBa8fpQf9j.4edl7wwSI2DlpVHBNmfErSIRj9k8nZbla', NULL, NULL, NULL, NULL, '2026-01-19 11:01:38', '2026-01-19 11:01:38'),
(15, 'AHMAD SUJAI', '250011@ra-alislam.sch.id', 'App\\Models\\ParentModel', 9, NULL, '$2y$12$J21hG4sxCF1pDvitiUEmQ.HYdYXLabYT2PkWnVEg2YpTf4s8PLZla', NULL, NULL, NULL, NULL, '2026-01-19 11:01:39', '2026-01-19 11:01:39'),
(16, 'AAS AGIS KUSWAYA', '250004@ra-alislam.sch.id', 'App\\Models\\ParentModel', 10, NULL, '$2y$12$az/1sGOOcNdryv3Z6oop5uSJvcuq/b82bcqviE677o1U6yCWAf5Wu', NULL, NULL, NULL, NULL, '2026-01-19 11:01:40', '2026-01-19 11:01:40'),
(17, 'AGUS HERYANA', '250007@ra-alislam.sch.id', 'App\\Models\\ParentModel', 11, NULL, '$2y$12$IhwNyGdnSPbanWlckwh7VOVs0iYIWK8nwICr4h7dUJzik1m8fn1ee', NULL, NULL, NULL, NULL, '2026-01-19 11:01:41', '2026-01-19 11:01:41'),
(18, 'JEJEN JENAL ARIPIN', '250012@ra-alislam.sch.id', 'App\\Models\\ParentModel', 12, NULL, '$2y$12$tOVGBRispiKS6xG5g27kMOoAw/73XjvRXs70uuj672JBoyR7uo0m2', NULL, NULL, NULL, NULL, '2026-01-19 11:01:42', '2026-01-19 11:01:42'),
(19, 'SYARIF HIDAYAT', '250013@ra-alislam.sch.id', 'App\\Models\\ParentModel', 13, NULL, '$2y$12$YCQk6RkFs7LH/GIph6EvW.rvyIBo8Z6nfm7Ae54iAYskDQiFKUn86', NULL, NULL, NULL, NULL, '2026-01-19 11:01:43', '2026-01-19 11:01:43'),
(20, 'NANANG FRIATNA', '240001@ra-alislam.sch.id', 'App\\Models\\ParentModel', 14, NULL, '$2y$12$6e0hB60c5MAgTGXI3J4KzuiuOcIHL8LCH8jjMhAPdZTxrQjfxdcE2', NULL, NULL, NULL, NULL, '2026-01-19 11:01:44', '2026-01-19 11:01:44'),
(21, 'DALI PERMADI', '240002@ra-alislam.sch.id', 'App\\Models\\ParentModel', 15, NULL, '$2y$12$BdmssYw9n3aiP5.R0U77xekZTrSyMFw5eUueiEudF9BRVjRo1yOUW', NULL, NULL, NULL, NULL, '2026-01-19 11:01:45', '2026-01-19 11:01:45'),
(22, 'DEDE MULYADI', '240003@ra-alislam.sch.id', 'App\\Models\\ParentModel', 16, NULL, '$2y$12$QmmKgMJROOoYrE6UO.CDIeV5YyqtDwqUHQ8oDq8hPcD6s4noKFTHa', NULL, NULL, NULL, NULL, '2026-01-19 11:01:45', '2026-01-19 11:01:45'),
(23, 'SANUSI', '240004@ra-alislam.sch.id', 'App\\Models\\ParentModel', 17, NULL, '$2y$12$DOtRP.6yiD8SaLMn78YxqeQRfYKvUCN6cssOGYIjbcP22oA1GXtRC', NULL, NULL, NULL, NULL, '2026-01-19 11:01:46', '2026-01-19 11:01:46'),
(24, 'HENDI', '250014@ra-alislam.sch.id', 'App\\Models\\ParentModel', 18, NULL, '$2y$12$0WM9ElcMMwD6xKwtHDTp..Q9UFKaqjR9ZV.Q0yDaT66vmcjDA8BZS', NULL, NULL, NULL, NULL, '2026-01-19 11:01:47', '2026-01-19 11:01:47'),
(25, 'CECEP SAHARA', '240005@ra-alislam.sch.id', 'App\\Models\\ParentModel', 19, NULL, '$2y$12$uTvaouNo5ohFoWr3HZzfwOZ3Sum0ezVQWPUAK/GKP4YYTrCdbyMPu', NULL, NULL, NULL, NULL, '2026-01-19 11:01:48', '2026-01-19 11:01:48'),
(26, 'DODO HENDRA', '240006@ra-alislam.sch.id', 'App\\Models\\ParentModel', 20, NULL, '$2y$12$Ofa06K9UBG6VaQqm4awj0e8qGrbiTkFI65fg6sgnktkqDKBHTReDq', NULL, NULL, NULL, NULL, '2026-01-19 11:01:49', '2026-01-19 11:01:49'),
(27, 'EDI SUPRIADI', '240007@ra-alislam.sch.id', 'App\\Models\\ParentModel', 21, NULL, '$2y$12$1DK2CcR1nZwSh7oP.pUvfOvJZZePaTMHtfA8hhT6CscZlDR/He8lG', NULL, NULL, NULL, NULL, '2026-01-19 11:01:50', '2026-01-19 11:01:50'),
(28, 'JAJANG SURYANA', '240008@ra-alislam.sch.id', 'App\\Models\\ParentModel', 22, NULL, '$2y$12$2Hi483i9jIOG4qG8lqlsnOv2PnQTxZGN/cUzEehLquHhm979XHPv2', NULL, NULL, NULL, NULL, '2026-01-19 11:01:51', '2026-01-19 11:01:51'),
(29, 'ASEP DODO', '240009@ra-alislam.sch.id', 'App\\Models\\ParentModel', 23, NULL, '$2y$12$UmpOVpDjank3iXbdEN.dzeYe72y7D52PuLel4fpyf4zhFswfpm1Iy', NULL, NULL, NULL, NULL, '2026-01-19 11:01:52', '2026-01-19 11:01:52'),
(30, 'AZIS MUSLIM', '240010@ra-alislam.sch.id', 'App\\Models\\ParentModel', 24, NULL, '$2y$12$8JmUYUqy4f/9QRxW1M0zyu5LPE8mem3x8m2vCGMtH/VIveQ1GpGrK', NULL, NULL, NULL, NULL, '2026-01-19 11:01:53', '2026-01-19 11:01:53'),
(31, 'ASEP SAEPULLOH', '240011@ra-alislam.sch.id', 'App\\Models\\ParentModel', 25, NULL, '$2y$12$HcdwXAtSsvgvo9JOH/LdHOXapssDJhh4Jxq4Qz.q8EcFqh0j/fTiW', NULL, NULL, NULL, NULL, '2026-01-19 11:01:54', '2026-01-19 11:01:54'),
(32, 'AEP SAEPULLOH', '240012@ra-alislam.sch.id', 'App\\Models\\ParentModel', 26, NULL, '$2y$12$DUrWWT6fDuHI3m4wMA/aL.OPJMSXs1afNzZrHgGfiqgGCRwkcGwKy', NULL, NULL, NULL, NULL, '2026-01-19 11:01:56', '2026-01-19 11:01:56'),
(33, 'NANANG FARIDUDIN', '250015@ra-alislam.sch.id', 'App\\Models\\ParentModel', 27, NULL, '$2y$12$DR4.K7sRFXuBS8C0l5UMee/u29K3uKiWl0IOj7h0HshFMlK41fJhu', NULL, NULL, NULL, NULL, '2026-01-19 11:01:57', '2026-01-19 11:01:57'),
(34, 'MUHAMAD TOHA', '250016@ra-alislam.sch.id', 'App\\Models\\ParentModel', 28, NULL, '$2y$12$84ZBjO.WTIwaXSATWxH1E.mF8ErUJxZA8.pMMebhR30Hledh5pX76', NULL, NULL, NULL, NULL, '2026-01-19 11:01:57', '2026-01-19 11:01:57'),
(35, 'DENI HERDIANA', '250017@ra-alislam.sch.id', 'App\\Models\\ParentModel', 29, NULL, '$2y$12$O0t4JuilSzFNnnMRT80fMuZjpziwTHOVGniuyrEpAIvifyYbWrP/K', NULL, NULL, NULL, NULL, '2026-01-19 11:01:58', '2026-01-19 11:01:58'),
(36, 'AGUS SANJAYA', '240013@ra-alislam.sch.id', 'App\\Models\\ParentModel', 30, NULL, '$2y$12$GH8g99Q/nKOgSqrYFY2oMOSysax/NXvMaJSzkMqKYwG0zBLYo53HO', NULL, NULL, NULL, NULL, '2026-01-19 11:01:59', '2026-01-19 11:01:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `target_class_id` (`target_class_id`),
  ADD KEY `idx_announcements_date` (`created_at`);

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `announcement_id` (`announcement_id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_attendance` (`student_id`,`date`),
  ADD KEY `scanned_by` (`scanned_by`),
  ADD KEY `idx_attendance_date` (`date`),
  ADD KEY `idx_attendance_student` (`student_id`,`date`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `homeroom_teacher_id` (`homeroom_teacher_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `gurus`
--
ALTER TABLE `gurus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `reviewed_by` (`reviewed_by`),
  ADD KEY `idx_leave_status` (`status`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `password_reset_requests`
--
ALTER TABLE `password_reset_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `processed_by` (`processed_by`),
  ADD KEY `idx_password_reset_status` (`status`),
  ADD KEY `idx_password_reset_identifier` (`identifier`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nisn` (`nisn`),
  ADD KEY `idx_students_nisn` (`nisn`),
  ADD KEY `idx_students_class` (`class_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_userable_type_userable_id_index` (`userable_type`,`userable_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gurus`
--
ALTER TABLE `gurus`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leave_requests`
--
ALTER TABLE `leave_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `password_reset_requests`
--
ALTER TABLE `password_reset_requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcements`
--
ALTER TABLE `announcements`
  ADD CONSTRAINT `announcements_ibfk_1` FOREIGN KEY (`target_class_id`) REFERENCES `classes` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `attachments`
--
ALTER TABLE `attachments`
  ADD CONSTRAINT `attachments_ibfk_1` FOREIGN KEY (`announcement_id`) REFERENCES `announcements` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`scanned_by`) REFERENCES `gurus` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`homeroom_teacher_id`) REFERENCES `gurus` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD CONSTRAINT `leave_requests_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leave_requests_ibfk_2` FOREIGN KEY (`reviewed_by`) REFERENCES `gurus` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `password_reset_requests`
--
ALTER TABLE `password_reset_requests`
  ADD CONSTRAINT `password_reset_requests_ibfk_1` FOREIGN KEY (`processed_by`) REFERENCES `gurus` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
