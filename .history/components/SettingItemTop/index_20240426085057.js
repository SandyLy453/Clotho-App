import styles from './SettingItemTop.module.css'
import Image from "next/image"

export default function SettingItemTop({
    tittle="",
    sectionHead=""
}) {
    return(
        <>
            <div className={styles.box}>
                <p className={styles.item}>{tittle}</p>
            </div>
        </>
    )
}


