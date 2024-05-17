import styles from './Button.module.css'

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    borderRadius,
    fontSize,
    margin,
    padding
}) {
    return (
        <button className={styles.button} onClick={onClick} style={{ height: height, width: width, backgroundColor: bgColor, borderRadius: borderRadius, fontSize: fontSize, margin: margin, padding: padding}}>
            {title}
        </button>
    )
}
