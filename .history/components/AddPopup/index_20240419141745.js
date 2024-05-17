import styles from './AddPopup.module.css'
import Button from '@/components/ButtonTwo'

export default function AddPopup({
    onClick
}) {

    return (
        <>
            <div className={styles.background} onClick={onClick}></div>
            <div className={styles.box}>
                <div className={styles.container}>
                    <Button 
                        title="Take photo"
                        fontSize={16}
                    />
                    <Button 
                        title="Upload photo"
                        fontSize={16}
                    />
                </div>
                <div className={styles.triangle}></div>
            </div>
        </>
    )
}





