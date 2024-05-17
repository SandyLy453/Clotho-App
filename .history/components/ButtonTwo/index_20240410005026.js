import styles from './ButtonTwo.module.css'

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    fontSize,
    padding
}) {
    return (
        <button className={styles.button} onClick={onClick} style={{ height: height, width: width, backgroundColor: bgColor, fontSize: fontSize, padding: padding}}>
            {title}
        </button>
    )
}
