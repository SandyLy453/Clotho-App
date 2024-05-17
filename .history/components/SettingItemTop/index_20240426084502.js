import styles from './SettingItemTop.module.css'
import Image from "next/image"

export default function SettingItemTop({
    tittle="",
    sectionHead=""
}) {
    return(
        <>
            <div className={styles.holder}>
                <p className={styles.sectionHead}>{sectionHead}</p>
                <div className={styles.box}>
                    <p className={styles.item}>{tittle}</p>
                </div>
            </div>
        </>
    )
}


