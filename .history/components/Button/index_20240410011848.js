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
    hover
}) {
    return (
        <button className={styles.button} onClick={onClick} style={{ height: height, width: width, backgroundColor: bgColor, borderRadius: borderRadius, fontSize: fontSize, margin: margin, hover: hover}}>
            {title}
        </button>
    )
}
