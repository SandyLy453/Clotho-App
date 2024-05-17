import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
    top,
}) {
    return(
            <div className= {styles.items} style={{backgroundColor: bgColor, color: textColor, paddingTop: top}}>{title}</div>
    )
}