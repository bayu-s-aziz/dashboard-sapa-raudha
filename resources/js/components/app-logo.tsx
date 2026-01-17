export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center ">
                <img
                    src="/logo_ra.png"
                    alt="SAPA Raudha"
                    className="size-15 object-contain"
                />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    SAPA Raudha
                </span>
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    Al-Islam
                </span>
            </div>

        </>
    );
}
