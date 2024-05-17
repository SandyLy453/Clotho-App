import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
}) {
    return(
            <div className= {styles.items} style={{backgroundColor: bgColor, color: textColor}}>{title}</div>
    )
}