import styles from './ButtonTwo.module.css'

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    

}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {title}
        </button>
    )
}
