import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
const Logo = ({ themeType }: { themeType: string }) => {
    return (
        <Link href="/">
            {
                // If the theme is dark, show the white logo
                themeType === 'dark' ? (
                    <Image src={logo2} alt="logo" width={100} height={100} />
                ) : (
                    <Image
                        src={logo1}
                        alt="logo"
                        width={76}
                        height={76}
                        style={{
                            marginLeft: '.5rem',
                            marginTop: '.5rem',
                        }}
                    />
                )
            }
        </Link>
    );
};

export default Logo;
