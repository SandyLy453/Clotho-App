import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import CategoryCard from "@/components/CategoryCard";
import { useState } from "react";
import Image from "next/image";
import { inventory } from "@/Data/inventory";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";

export default function Category() {

    const [color, setColor] = useState(false);
    const isClick = () => {
        setColor(true);
    }

    const [selectedCards, setSelectedCards] = useState([...inventory.photos]);

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
                    {color ? (
                    <ButtonTwo title="All" height={40} width={100} margin="5px">
                        All
                    </ButtonTwo>) : 
                        (
                        <Button onClick={isClick} title="All" height={40} width={100} borderRadius="10px" fontSize="var(--open-sans-small)" margin="5px">
                            All
                        </Button>
                    )}
                    <ButtonTwo title="Shoes" height={40} width={100} margin="5px">Shoes</ButtonTwo>
                    <ButtonTwo title="Tops" height={40} width={100} margin="5px">Tops</ButtonTwo>
                    <ButtonTwo title="Bottoms" height={40} width={100} margin="5px">Bottoms</ButtonTwo>
                    {/* <ButtonTwo title="Jackets" height={40} width={100} margin="5px">Jackets</ButtonTwo>
                    <ButtonTwo title="Accessories" height={40} width={100} margin="5px">Accessories</ButtonTwo> */}
                </div>

                <div className={styles.cards}>
                    {selectedCards && selectedCards.map((photo, index) => (
                        <CategoryCard 
                        key={index}
                        photoId={}
                        className={styles.items}
                        src={photo.image}
                        title="Tops: Sweather"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="160"
                        width="140"
                        />
                    ))}
                    {/* <CategoryCard 
                        className={styles.items}
                        imageURL="/images/top/top_32.png"
                        title="Tops: Sweather"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="160"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/top/top_15.png"
                        title="Tops: Vest"
                        alt="inventory icons"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="160"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/pant/pant_28.png"
                        title="Bottoms: Short"
                        alt="inventory image"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="150"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/pant/pant_8.png"
                        title="Bottoms: Jean"
                        alt="inventory image"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="150"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/sneaker.jpg"
                        title="Shoes: Sneaker"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="150"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL={"/images/inventory/boots.jpg"}
                        title="Shoes: Boots"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/accessories.jpg"
                        title="Accessories: Earrings"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/bag.jpg"
                        title="Accessories: Bag and Hat"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Jacket.jpg"
                        title="Jackets: Bomber"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="120"
                        width="140"
                    />
                    <CategoryCard 
                        className={styles.items}
                        imageURL="/images/inventory/Jacket_2.jpg"
                        title="Jackets: Denim Jacket"
                        alt="inventory images"
                        bgColor="var(--inventory-bgColor)"
                        borderRadius="20px"
                        border="0px var(--white)"
                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                        height="110"
                        width="140"
                    /> */}
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