import styles from '@/styles/Setting.module.css'
import Navigation from '@/components/Navigation'
import BottomNavigation from '@/components/BottomNavigation/index.js'
import { useState } from 'react'
import Image from "next/image"
import SettingItemBottom from '@/components/SettingItemBottom'
import SettingItemMiddle from '@/components/SettingItemMiddle'
import SettingItemTop from '@/components/SettingItemTop'
import Link from "next/link"


export default function Setting() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.main} ${styles.box}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <Image 
                            src={'/images/menu-burger.png'}
                            alt="Hamburger menu"
                            width={50}
                            height={35}
                            className={styles.menuIcon}
                        />
                    </div>
                    <h1 className={styles.title}>Setting</h1>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User icon"
                        width={35}
                        height={35}
                        className={styles.userIcon}
                    />
                </div>

                <br/>
                <br/>

                <div className={styles.section}>
                    <p className={styles.sectionHead}>Preferences</p>
                    <SettingItemTop tittle="Language"/>
                    <SettingItemMiddle tittle="Theme"/>
                    <SettingItemBottom tittle="Notifications"/>
                </div>

                <div className={styles.section}>
                    <p className={styles.sectionHead}>Preferences</p>
                    <SettingItemTop tittle="Language"/>
                    <SettingItemMiddle tittle="Theme"/>
                    <SettingItemBottom tittle="Notifications"/>
                </div>
            </main>
            <BottomNavigation
                bgColorCollection="var(--button-highlight-light)"
                pathColorCollection="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}