import styles from './SettingItemTop.module.css'
import Image from "next/image"
import Link from 'next/link'

export default function SettingItemTop({
    tittle="",
    sectionHead="",
    link="/"
}) {
    return(
        <>
            <Link href={link} className={styles.link}>
                <div className={styles.box}>
                    <p className={styles.item}>{tittle}</p>
                </div>
            </Link>
        </>
    )
}


