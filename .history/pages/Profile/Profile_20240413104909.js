import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Profile.module.css'

export default function ThriftStore() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <h1 className={styles.title}>Profile</h1>
                    <p className={styles.subtitle}>Hi beauty~</p>
                </div>
            </main>
            <BottomNavigation />
        </>
    )
}


