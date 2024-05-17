import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";

export default function Inventory() {
    return (
        <div className={styles.mainContainer} >
            <div className={styles.contentContainer}>
                <div className={styles.topHead}>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>My Wardrobe</h1>
                        <h3 className={styles.content}>Customize Your Own Wardrobe</h3>
                    </div>
                    <div className={styles.user}>
                        <Image src="/images/inventory/User_account.png" height={35} width={30} />
                    </div>
                </div>

                <div className={styles.cards}>
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/All.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="150"
                        width="140"
                    />
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Shoes.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="100"
                        width="140"
                    />
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/T-shirts.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="110"
                    />
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Jeans.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="80"
                    />
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Jackets.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="140"
                        width="120"
                    />
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Accessories.png"
                        title=""
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="50px"
                        border="var(--inventory-card-outline)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="140"
                    />
                </div>
            </div>
            
            <div>
                <BottomNavigation
                    bgColorInventory="var(--button-highlight-light)"
                    pathColorInventory="var(--white)"
                    borderStyle="60%"
                    IconWidth={90}
                    iconHeight={36}
                />
            </div>
        </div>
    );
}