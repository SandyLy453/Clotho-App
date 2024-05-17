import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
    tabLeft
}) {
    return(
            <div className= {styles.items} style={{backgroundColor: bgColor, color: textColor, paddingLeft: tabLeft}}>{title}</div>
    )
}