import styles from './SideNavigation.module.css'
import Image from 'next/image'
import MenuItem from '../Menultem'

export default function SideNavigation() {
    return(
        <div className={styles.SideNav}>
            <Image src='/images/user-icon.png' alt="user icon" width={70} height={70} className={styles.user}/>
            <div className={styles.profile}>
                <p className={styles.myName}>Samantha Yan</p>
                <p className={styles.position}>Developer</p>
            </div>
            <MenuItem title="Experiences" bgColor="var(--blue)" textColor="var(--white)" tabLeft="10px"/>
            <MenuItem title="Education"/>
            <MenuItem title="Projects"/>
            <MenuItem title="Volunteering"/>
            <MenuItem title="Skills"/>
            <MenuItem title="Interests"/>
        </div>
    )
}