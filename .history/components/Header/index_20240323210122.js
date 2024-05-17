import Image from "next/image";
import styles from './Header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.userIcon}>

                </div>
                <div className={styles.pageTitle}>

                </div>
                <div className={styles.icon}>

                </div>
            </div>
        </header>
    )
}



