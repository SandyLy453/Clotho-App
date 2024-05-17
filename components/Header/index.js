import Image from "next/image";
import styles from './Header.module.css';
import Link from "next/link";

export default function Header(
    title=''
) {
    return (
        <header>
            <div className={styles.container}>
                <div>
                    <Image  src=""
                            alt=""
                            width={50}
                            height={50}
                            className={styles.userIcon}
                    />
                </div>
                <div className={styles.pageTitle}>
                    <p className={styles.text}>{title}</p>
                </div>
                <div className={styles.icon}>
                    <Image  src=""
                            alt=""
                            width={50}
                            height={50}
                            className={styles.icon}
                    />
                </div>
            </div>
        </header>
    )
}



