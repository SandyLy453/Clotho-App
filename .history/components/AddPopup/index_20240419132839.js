import styles from './AddPopup.module.css'
import Button from '@/components/ButtonTwo'

export default function AddPopup() {

    return (
        <>
            <div className={styles.container}>
                <Button />
                <div className={styles.space}></div>
                <Button />
            </div>
        </>
    )
}





