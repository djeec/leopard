import Image from 'next/image'
import Link from 'next/link';

import styles from '@/styles/banner.module.css'

const Banner = () => {
    return (
        <header>
            <>
                <Link href='/'>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </>          
        </header>
    )
};

export default Banner;