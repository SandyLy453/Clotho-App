import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import CollectionCard from "@/components/CollectionCard";
import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Overview() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
             {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={styles.main}>
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
                    <h1 className={styles.title}>Collection</h1>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User icon"
                        width={35}
                        height={35}
                        className={styles.userIcon}
                    />
                </div>
                <div className={styles.mainContainer} >
                    <div className={styles.contentContainer}>
                    <CollectionCard
                        title="Summer Outfits"
                        largePhoto="/images/outfit/Summer_beach.jpg"
                        topLeftPhoto="/image/"
                        topRightPhoto="/image/"
                        bottomLeftPhoto="/image/"
                        bottomRightPhoto="/image/"
                    />
                    </div>
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