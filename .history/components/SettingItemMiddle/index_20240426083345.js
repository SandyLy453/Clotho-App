import styles from '.SettingItemMiddle.module.css'
import Image from "next/image"

export default function SettingItemMiddle({
    tittle=""
}) {
    return(
        <>
            <div className={styles.box}>
                <p className={styles.item}>{tittle}</p>
            </div>
        </>
    )
}


