import { Head, Link, usePage } from '@inertiajs/react';

import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Selamat Datang di SAPA Raudha">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-background p-6 text-foreground lg:justify-center lg:p-8 dark:bg-background">
                <header className="mb-6 w-full max-w-83.75 text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard.url()}
                                className="inline-block rounded-sm border border-border px-5 py-1.5 text-sm leading-normal text-foreground hover:border-primary dark:border-border dark:text-foreground dark:hover:border-primary"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login.url()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-foreground hover:border-primary dark:text-foreground dark:hover:border-primary"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register.url()}
                                        className="inline-block rounded-sm border border-border px-5 py-1.5 text-sm leading-normal text-foreground hover:border-primary dark:border-border dark:text-foreground dark:hover:border-primary"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-83.75 flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-5 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">
                                Selamat Datang di SAPA Raudha
                            </h1>
                            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                                SAPA Raudha adalah sistem administrasi pendidikan yang membantu mengelola kegiatan sekolah dengan mudah.
                                <br />
                                Akses fitur-fitur utama aplikasi di bawah ini.
                            </p>
                            <ul className="mb-4 flex flex-col lg:mb-6">
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        Akses Dashboard
                                        <a
                                            href={auth.user ? dashboard.url() : login.url()}
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#4b986c] underline underline-offset-4 dark:text-[#4b986c]"
                                        >
                                            <span>{auth.user ? 'Dashboard' : 'Login'}</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                                <li className="relative flex items-center gap-4 py-2 before:absolute before:top-0 before:bottom-1/2 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                                        </span>
                                    </span>
                                    <span>
                                        {canRegister ? 'Daftar Akun Baru' : 'Hubungi Admin'}
                                        <a
                                            href={canRegister ? register.url() : '#'}
                                            target={canRegister ? '_self' : '_blank'}
                                            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#4b986c] underline underline-offset-4 dark:text-[#4b986c]"
                                        >
                                            <span>{canRegister ? 'Register' : 'Kontak'}</span>
                                            <svg
                                                width={10}
                                                height={11}
                                                viewBox="0 0 10 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-2.5 w-2.5"
                                            >
                                                <path
                                                    d="M7.70833 6.95834V2.79167H3.54167M2.5 8L7.5 3.00001"
                                                    stroke="currentColor"
                                                    strokeLinecap="square"
                                                />
                                            </svg>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="flex gap-3 text-sm leading-normal">
                                <li>
                                    <a
                                        href={auth.user ? dashboard.url() : login.url()}
                                        className="inline-block rounded-sm border border-primary bg-primary px-5 py-1.5 text-sm leading-normal text-primary-foreground hover:border-primary hover:bg-primary/90 dark:border-primary dark:bg-primary dark:text-primary-foreground dark:hover:border-primary dark:hover:bg-primary/90"
                                    >
                                        {auth.user ? 'Ke Dashboard' : 'Masuk'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative -mb-px aspect-335/376 w-full shrink-0 overflow-hidden rounded-t-lg bg-[#c8d7e4] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-109.5 lg:rounded-t-none lg:rounded-r-lg dark:bg-[#17282e] flex flex-col items-center justify-center p-8">
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src="/logo_ra.png"
                                    alt="Logo Raudhatul Athfal Al-Islam"
                                    className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
                                />
                                <div className="text-center">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-[#4b986c] dark:text-[#4b986c] mb-2">
                                        Raudhatul Athfal Al-Islam
                                    </h2>
                                    <h3 className="text-lg lg:text-xl font-semibold text-[#0b191e] dark:text-[#ffffff] mb-1">
                                        SAPA Raudha
                                    </h3>
                                    <p className="text-sm lg:text-base text-[#384e58] dark:text-[#658593]">
                                        Sistem Informasi Presensi dan Komunikasi Terpadu Raudhatul Athfal
                                    </p>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]" />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}