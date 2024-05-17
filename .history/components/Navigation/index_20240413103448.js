import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'
import Link from "next/link";

export default function Navigation() {
    
    return(
        <div className={styles.sideNav}>
            <div className={styles.appInfo}>
                <Image src="/images/closet-space-app.png" alt="App Logo" width={100} height={100}/>
                <p className={styles.appName}>Clotho</p>
            </div>

            <div className={styles.userInfo}>
                <Image src="/images/user.png" alt="User Image" width={50} height={50}/>
                <p className={styles.welcome}>Welcome!</p>
            </div>

            <Link href="/Profile/Profile" style={{textDecoration: 'none', color: 'var(--black)'}}>
                <MenuItem title="Profile"/>
            </Link>
            <Link href="/Calendar/Calendar" style={{textDecoration: 'none', color: 'var(--black)'}}>
                <MenuItem title="Calendar"/>
            </Link>
            <MenuItem title="Posts"/>
            <Link href="/ThriftStore/ThriftStore" style={{textDecoration: 'none', color: 'var(--black)'}}>
                <MenuItem title="Thrift Stores"/>
            </Link>
            <MenuItem title="Favourite Fashion Trends"/>
            <MenuItem title="History" paddingBottom="30px"/>
            <hr/>
            <MenuItem title="Setting" paddingTop= "30px"/>
            <MenuItem title="Help"/>
            <MenuItem title="Sign Out"/>
        </div>
    )
}

