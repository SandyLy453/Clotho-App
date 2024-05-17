import styles from './AddPopup.module.css'
import Button from '@/components/ButtonTwo'

export default function AddPopup() {

    return (
        <>
            <div className={styles.container}>
                <Button 
                    title="Take photo"
                />
                <Button 
                    title="Upload photo"
                />
            </div>
        </>
    )
}





