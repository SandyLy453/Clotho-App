import styles from './MenuItem.module.css'

export default function MenuItem({
    title = " ",
    bgColor,
    textColor,
    paddingTop,
}) {
    return(
            <div className= {styles.items} style={{backgroundColor: bgColor, color: textColor, paddingTop: paddingTop}}>{title}</div>
    )
}