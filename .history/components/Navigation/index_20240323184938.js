import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'

export default function Navigation() {
    return(
        <div className={styles.sideNav}>
            <div className={styles.appInfo}>
                <Image src="/images/closet-space-app.png" alt="App Logo" width={100} height={100}/>
                <p className={styles.appName}>Clotho</p>
            </div>

            <div className={styles.userInfo}>
                <Image src="/images/user.png" alt="User Image" width={60} height={60}/>
                <p className={styles.welcome}>Welcome!</p>
            </div>

            <MenuItem title="My Profile"/>
            <MenuItem title="Calendar"/>
            <MenuItem title="Posts"/>
            <MenuItem title="Thrift Stores"/>
            <MenuItem title="Favourite Fashion Trends"/>
            <MenuItem title="History" paddingBottom="30px"/>
            <hr/>
            <MenuItem title="Setting" paddingTop= "30px"/>
            <MenuItem title="Help"/>
            <MenuItem title="Sign Out"/>
        </div>
    )
}