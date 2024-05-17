import styles from '@/styles/FAQ.module.css'
import Navigation from '@/components/Navigation'
import BottomNavigation from '@/components/BottomNavigation';
import { useState } from 'react'
import Image from "next/image"
import SettingItemBottom from '@/components/SettingItemBottom'
import SettingItemMiddle from '@/components/SettingItemMiddle'
import SettingItemTop from '@/components/SettingItemTop'
import Link from "next/link"
import Head from 'next/head';

export default function FAQ() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };
    
    return (
        <>
        <Head title="FAQ" description="Frequently Asked Quesions." />
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.main} ${styles.box}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
                    </div>
                    <h1 className={styles.title}>Collection</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none" className={styles.userIcon}>
                        <path d="M24 8.75C24 13.0038 20.445 16.5 16 16.5C11.555 16.5 8 13.0038 8 8.75C8 4.49616 11.555 1 16 1C20.445 1 24 4.49616 24 8.75Z" stroke="#0B0014" stroke-width="2"/>
                        <path d="M1 35V27.4167C1 23.5507 4.13401 20.4167 8 20.4167H24C27.866 20.4167 31 23.5507 31 27.4167V35" stroke="#0B0014" stroke-width="2"/>
                    </svg>
                </div>

                
            </main>
            <BottomNavigation
                bgColorCollection="var(--button-highlight-light)"
                pathColorCollection="var(--white)"
                borderStyle="60%"
                iconWidth={90}
                iconHeight={36}
            />
        </>
    )
}