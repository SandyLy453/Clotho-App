import Image from "next/image";
import styles from './Header.module.css';
import Link from "next/link";

export default function Header(
    title=''
) {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.userIcon}>
                    <Image/>
                </div>
                <div className={styles.pageTitle}>
                    <p className={styles.text}>{title}</p>
                </div>
                <div className={styles.icon}>
                    <Image/>
                </div>
            </div>
        </header>
    )
}



