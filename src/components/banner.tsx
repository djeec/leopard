import Image from 'next/image'

import styles from '@/styles/Banner.module.css'

const Banner = () => {
    return (
        <header>
            <div>
                Hello world
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </div>
            
        </header>
    )
};

export default Banner;