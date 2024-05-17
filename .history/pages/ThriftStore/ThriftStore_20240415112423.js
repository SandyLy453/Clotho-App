import { useState } from 'react';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css';
import Navigation from "@/components/Navigation"; // Import the Navigation component

export default function ThriftStore() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    return (
        <>
            {/* Pass toggleMenu function to the Navigation component */}
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}

            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    {/* Use the hamburger menu icon to toggle the side navigation menu */}
                    <div onClick={toggleMenu}>
                        <Image 
                            src={'/images/menu-burger.png'}
                            alt="Hamburger menu"
                            width={50}
                            height={35}
                            className={styles.menuIcon}
                        />
                    </div>
                    <h1 className={styles.title}>Thrift Store</h1>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User icon"
                        width={35}
                        height={35}
                        className={styles.userIcon}
                    />
                </div>
                <div className={styles.searchBar}>
                    <input 
                        type="text"
                        className={styles.barInput}
                        placeholder="Enter your address or postal code"
                    />
                </div>

                <div className={styles.results}>
                    {/* Display thrift store search results here */}
                </div>
            </main>

            <BottomNavigation />
        </>
    )
}



