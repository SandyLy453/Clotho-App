import styles from './SettingItemBottom.module.css'
import Image from "next/image"

export default function SettingItemBottom({
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


