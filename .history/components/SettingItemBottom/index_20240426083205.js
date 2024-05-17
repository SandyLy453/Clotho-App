import styles from '.SettingItemBottom.module.css'
import Image from "next/image"

export default function SettingItemBottom({
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


