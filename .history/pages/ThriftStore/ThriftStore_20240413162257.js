import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css'

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

                
            </main>
            <BottomNavigation />
        </>
    )
}



