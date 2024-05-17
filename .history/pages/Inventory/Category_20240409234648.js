import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";

export default function Category() {
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

                <div className={styles.chip}>
                    <button>All</button>
                    <button>Shoes</button>
                    <button>T-shirts</button>
                    <button>Jeans</button>
                    <button>Jackets</button>
                    <button>Accessories</button>
                </div>