import styles from './AddPopup.module.css'
import Button from '@/components/ButtonTwo'
import { useState } from 'react'

export default function AddPopup() {

    const [openPopup, setOpenPopup] = useState(false);

    const closePopup = () => {
        setOpenPopup(false);
    };

    return (
        <>
            <div className={styles.background} onClick={closePopup}></div>
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





