import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';
import MenuItem from '../MenuItem';
import Link from 'next/link';

export default function Navigation({ toggleMenu }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigationRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(event.target) &&
                isOpen
            ) {
                setIsOpen(false);
                toggleMenu(); // Close the menu if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleMenu]);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        toggleMenu(); // Toggle the menu open/close state
    };

    return (
        <div>
            <div className={styles.box} onClick={handleToggleMenu}></div>
            <div className={`${styles.sideNav} ${isOpen ? styles.open : ''}`} ref={navigationRef}>
                <div className={styles.appInfo}>
                    <Image src="/images/LogoFullColourLight.png" alt="App Logo" width={250} height={170} />
                    
                </div>

                <div className={styles.userInfo}>
                    <Image src="/images/user-image.png" alt="User Image" width={50} height={50} />
                    <p className={styles.welcome}>Welcome Ana</p>
                </div>

                <div className={styles.navigation}>
                    <Link href="/"><MenuItem title="Home" /></Link>
                    <Link href="/Profile"><MenuItem title="Profile" /></Link>
                    <Link href="/Inventory"><MenuItem title="Inventory" /></Link>
                    <Link href="/Calendar"><MenuItem title="Calendar" /></Link>
                    <Link href="/Collection"><MenuItem title="Collection" /></Link>
                    <Link href="/ThriftStore"><MenuItem title="Thrift Stores" /></Link>
                    <hr />
                    <MenuItem title="Posts" />
                    <MenuItem title="Favourite Fashion Trends" />
                    <MenuItem title="History" />
                    <Link href="/QuestionsHome"><MenuItem title="Take The Quiz" /></Link>
                    <hr />
                    <Link href="/Setting"><MenuItem title="Setting" /></Link>
                    <Link href="/RateThisApp"><MenuItem title="Rate This App" /></Link>
                    <MenuItem title="Sign Out" />
                </div>
            </div>
        </div>
    );
}


