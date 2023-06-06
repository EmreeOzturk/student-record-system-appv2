import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
    return (
        <Link href="/">
            <Image src="/vercel.svg" alt="logo" width={140} height={100} />
        </Link>
    );
};

export default Logo;
