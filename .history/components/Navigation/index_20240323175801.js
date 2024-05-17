import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'

export default function Navigation() {
    return(
        <div className={styles.SideNav}>
            <MenuItem title="Experiences" bgColor="var(--blue)" textColor="var(--white)" tabLeft="10px"/>
            <MenuItem title="Education"/>
            <MenuItem title="Projects"/>
            <MenuItem title="Volunteering"/>
            <MenuItem title="Skills"/>
            <MenuItem title="Interests"/>
        </div>
    )
}