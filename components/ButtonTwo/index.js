import styles from './ButtonTwo.module.css';

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    fontSize,
    margin,
    className = '', 
}) {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            onClick={onClick}
            style={{ height, width, backgroundColor: bgColor, fontSize, margin }}
        >
            {title}
        </button>
    );
}
