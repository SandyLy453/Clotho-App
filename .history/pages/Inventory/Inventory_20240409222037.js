import styles from "@/styles/Inventory.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";

export default function Inventory() {
    return (
        <div className={styles.mainContainer} >
            <div className={styles.contentContainer}>
                <h1>My Wardrobe</h1>
                <h3>Customize Your Own Wardrobe</h3>

                <div className={styles.chip}>
                    <button>All</button>
                    <button>Shoes</button>
                    <button>T-shirts</button>
                    <button>Jeans</button>
                    <button>Jackets</button>
                    <button>Accessories</button>
                </div>

                <div>
                    <InventoryCard 
                        key={index}
                        photoId={photos.id}
                        title={photos.title}
                        src={photos.title}
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