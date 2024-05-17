import styles from '.SettingItemMiddle.module.css'
import Image from "next/image"

export default function SettingItemMiddle({
    tittle=""
}) {
    return(
        <>
            <div className={styles.box}>
                <p>{tittle}</p>
            </div>
        </>
    )
}


