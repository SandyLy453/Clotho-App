import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";

export default function Category() {

    const [color, setColor] = useState(false);
    const isClick = () => {
        setColor(true);
    }

    return (
        <div className={styles.mainContainer} >
            <div className={styles.contentContainer}>
                <div className={styles.topHead}>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>My Wardrobe</h1>
                    </div>
                    <div className={styles.user}>
                        <Image src="/images/inventory/User_account.png" height={35} width={30} />
                    </div>
                </div>

                <div className={styles.chip}>
                    {color? <Button onClick={isClick} title="All" height={40} width={100} borderRadius="10px" fontSize="var(--open-sans-small)" margin="5px">All</Button> : <ButtonTwo title="All" height={40} width={100} margin="5px">All</ButtonTwo>}
                    <ButtonTwo title="Shoes" height={40} width={100} margin="5px">Shoes</ButtonTwo>
                    <ButtonTwo title="Tops" height={40} width={100} margin="5px">Tops</ButtonTwo>
                    <ButtonTwo title="Bottoms" height={40} width={100} margin="5px">Bottoms</ButtonTwo>
                    <ButtonTwo title="Jackets" height={40} width={100} margin="5px">Jackets</ButtonTwo>
                    <ButtonTwo title="Accessories" height={40} width={100} margin="5px">Accessories</ButtonTwo>
                </div>

                <div className={styles.cards}>
                    <InventoryCard 
                        className={styles.items}
                        imageURL="/images/top/top_3.png"
                        title="Item Name: T-shirt"
                        alt="inventory icons"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="20"
                        width="15"
                        cardHeight="300"
                        cardWidth="240"

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