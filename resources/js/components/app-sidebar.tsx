import { Link } from '@inertiajs/react';
import { BookOpen, Folder, GraduationCap, LayoutGrid, Megaphone, School, Users, UserCheck, List, BarChart3 } from 'lucide-react';

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
// import { dashboard } from '@/routes';
// import { index as usersIndex, teachers, parents } from '@/routes/users';
import { type NavItem } from '@/types';

import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Manajemen Pengguna',
        icon: Users,
        items: [
            {
                title: 'Guru',
                href: '/users/teachers',
                icon: UserCheck,
            },
            {
                title: 'Orang Tua',
                href: '/users/parents',
                icon: Users,
            },
        ],
    },
    {
        title: 'Manajemen Siswa',
        href: '/students',
        icon: GraduationCap,
    },
    {
        title: 'Manajemen Kelas',
        href: '/classes',
        icon: School,
    },
    {
        title: 'Manajemen Pengumuman',
        href: '/announcements',
        icon: Megaphone,
    },
    {
        title: 'Manajemen Kehadiran',
        icon: UserCheck,
        items: [
            {
                title: 'Detail Presensi',
                href: '/attendance',
                icon: List,
            },
            {
                title: 'Laporan Kehadiran',
                href: '/attendance/reports',
                icon: BarChart3,
            },
            {
                title: 'Permohonan Izin',
                href: '/leave-requests',
                icon: Folder,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
