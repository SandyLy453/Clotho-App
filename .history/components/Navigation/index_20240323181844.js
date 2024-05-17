import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'

export default function Navigation() {
    return(
        <div className={styles.SideNav}>
            <MenuItem title="My Profile"/>
            <MenuItem title="Calendar"/>
            <MenuItem title="Posts"/>
            <MenuItem title="Thrift Stores"/>
            <MenuItem title="Favourite Fashion Trends"/>
            <MenuItem title="History"/>
            <MenuItem title="Setting" top= "15px"/>
            <MenuItem title="Help"/>
            <MenuItem title="Sign Out"/>
        </div>
    )
}