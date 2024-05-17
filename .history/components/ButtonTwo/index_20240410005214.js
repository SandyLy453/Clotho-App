import styles from './ButtonTwo.module.css'

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    fontSize,
    margin
}) {
    return (
        <button className={styles.button} onClick={onClick} style={{ height: height, width: width, backgroundColor: bgColor, fontSize: fontSize, margin: margin}}>
            {title}
        </button>
    )
}
