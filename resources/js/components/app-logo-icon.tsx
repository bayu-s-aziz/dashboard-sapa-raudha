import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/logo_ra.png"
            alt="Logo Raudhatul Athfal Al-Islam"
            className="size-12 object-contain"
        />
    );
}
