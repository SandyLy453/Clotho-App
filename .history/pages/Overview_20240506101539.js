import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from '@/components/BottomNavigation';
import CollectionCard from "@/components/CollectionCard";
import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Head from "next/head";

export default function Overview() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <Head title="Overview" description="Overview of Clotho." />
             {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.main} ${styles.box}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
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
                            title="All Outfits"
                            largePhoto="/images/outfit/Casual_large.jpg"
                            topLeftPhoto="/images/outfit/Card_top1.jpg"
                            topRightPhoto="/images/outfit/Casual_top.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom4.jpg"
                            bottomRightPhoto="/images/outfit/Office_top.jpg"
                        />
                        <CollectionCard
                            title="Summer Outfits"
                            largePhoto="/images/outfit/Card_large.jpg"
                            topLeftPhoto="/images/outfit/Card_top1.jpg"
                            topRightPhoto="/images/outfit/Card_top2.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom1.jpg"
                            bottomRightPhoto="/images/outfit/Card_bottom2.jpg"
                        />
                        <CollectionCard
                            title="Party Outfits"
                            largePhoto="/images/outfit/Card_large2.jpg"
                            topLeftPhoto="/images/outfit/Card_top3.jpg"
                            topRightPhoto="/images/outfit/Card_top4.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom3.jpg"
                            bottomRightPhoto="/images/outfit/Card_bottom4.jpg"
                        />
                    </div>
                </div>
            </main>

            <BottomNavigation
                bgColorCollection="var(--button-highlight-light)"
                pathColorCollection="var(--white)"
                borderStyle="60%"
                iconWidth={36}
                iconHeight={36}
            />
        </>
    )
}