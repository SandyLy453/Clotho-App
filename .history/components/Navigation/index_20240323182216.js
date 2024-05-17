import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'

export default function Navigation() {
    return(
        <div className={styles.SideNav}>
            <Image src="URL" alt="App Logo"/>
            <div>
                <Image src="URL" alt="User Image"/>
                <p>Welcome!</p>
            </div>
            <MenuItem title="My Profile"/>
            <MenuItem title="Calendar"/>
            <MenuItem title="Posts"/>
            <MenuItem title="Thrift Stores"/>
            <MenuItem title="Favourite Fashion Trends"/>
            <MenuItem title="History"/>
            <MenuItem title="Setting" paddingTop= "30px"/>
            <MenuItem title="Help"/>
            <MenuItem title="Sign Out"/>
        </div>
    )
}