import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Profile.module.css'

export default function ThriftStore() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <Image 
                        src={'/images/menu-burger.png'}
                        alt="Hamburger menu"
                        width={50}
                        height={35}
                        className={styles.menuIcon}
                    />
                    <h1 className={styles.title}>Profile</h1>
                </div>

                <div className={styles.topTnfo}>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User's avatar"
                        width={185}
                        height={185}
                    />
                </div>

                <div className={styles.info}>

                </div>
            </main>
            <BottomNavigation />
        </>
    )
}


