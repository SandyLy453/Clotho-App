import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Inventory() {
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
                    <h1 className={styles.title}>Wardrobe</h1>
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
                        <div className={styles.cards}>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/All.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--inventory-bgColor)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="150"
                                    width="140"
                                    content="All"
                                />
                            </Link>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/Shoes.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--inventory-bgColor)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="100"
                                    width="140"
                                    content="Shoes"
                                />
                            </Link>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/T-shirts.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--inventory-bgColor)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="120"
                                    width="110"
                                    content="Tops"
                                />
                            </Link>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/Jeans.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--inventory-bgColor)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="120"
                                    width="80"
                                    content="Bottoms"
                                />
                            </Link>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/Jackets.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--white)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="140"
                                    width="120"
                                    content="Jackets"
                                />
                            </Link>
                            <Link href={'/Category'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <InventoryCard 
                                    className={styles.items}
                                    imageURL="/images/inventory/Accessories.png"
                                    title=""
                                    alt="inventory icons"
                                    bgColor="var(--white)"
                                    borderRadius="50px"
                                    border="var(--inventory-card-outline)"
                                    boxShadow="2px 2px 10px 0px rgba(0, 0, 0, 0.15)"
                                    height="120"
                                    width="140"
                                    content="Accessories"
                                />
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        <BottomNavigation
                            bgColorInventory="var(--button-highlight-light)"
                            pathColorInventory="var(--white)"
                            borderStyle="60%"
                            iconWidth={36}
                            iconHeight={36}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}





