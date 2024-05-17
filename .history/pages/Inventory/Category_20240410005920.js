import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";

export default function Category() {

    const tabsBox = document.querySelector('.tabs-box');
    const dragging = () => {
        tabsBox.scrollLeft
    }

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
                    <Button title="All" height={40} width={100} borderRadius="10px" fontSize="var(--open-sans-small)" margin="5px">All</Button>
                    <ButtonTwo title="Shoes" height={40} width={100} margin="5px">Shoes</ButtonTwo>
                    <ButtonTwo title="Tops" height={40} width={100} margin="5px">Tops</ButtonTwo>
                    <ButtonTwo title="Bottoms" height={40} width={100} margin="5px">Bottoms</ButtonTwo>
                    <ButtonTwo title="Jackets" height={40} width={100} margin="5px">Jackets</ButtonTwo>
                    <ButtonTwo title="Accessories" height={40} width={100} margin="5px">Accessories</ButtonTwo>
                </div>

                <div className={styles.cards}>
                    
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