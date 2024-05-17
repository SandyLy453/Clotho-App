import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
    tabLeft
}) {
    return(
            <div className= {styles.item} style={{backgroundColor: bgColor, color: textColor, paddingLeft: tabLeft}}>{title}</div>
    )
}