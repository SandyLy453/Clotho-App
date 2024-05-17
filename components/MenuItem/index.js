import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
    paddingTop,
    paddingBottom,
}) {
    return(
            <div className= {styles.items} style={{backgroundColor: bgColor, color: textColor, paddingTop: paddingTop, paddingBottom: paddingBottom}}>{title}</div>
    )
}