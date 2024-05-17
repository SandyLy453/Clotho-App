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
    const [selectedItems, setSelectedItems] = useState("All");
    const [popup, setPopup] = useState(false);

    const findItems = (title) => {
        setSelectedItems(title.toUpperCase())
    }

    const overlayPage = () => {
        setPopup(!popup);
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
                
                <div className={`${styles.chip} ${styles.carouselContainer}`}>
                    {color ? (
                            <ButtonTwo title="All" width={100} height={40} margin="5px" onClick={() => findItems("ALL")} />
                        ) : 
                            (
                            <Button onClick={isClick} title="All" width={100} height={40} borderRadius="10px" fontSize="var(--open-sans-small)" margin="5px" />
                        )}
                        <ButtonTwo title="Shoes" height={40} margin="5px" onClick={() => findItems("S")} />
                        <ButtonTwo title="Tops" height={40} margin="5px" onClick={() => findItems("T")} />
                        <ButtonTwo title="Bottoms" height={40} margin="5px" onClick={() => findItems("B")} />
                        <ButtonTwo title="Jackets" height={40} margin="5px" onClick={() => findItems("J")} />
                        <ButtonTwo title="Accessories" height={40} margin="5px" onClick={() => findItems("A")} />
                </div>

                <div className={styles.cards}>
                    {selectedCards && selectedCards.map((photo, index) => (
                        selectedItems === "ALL" ? (
                            <CategoryCard 
                                key={index}
                                photoId={photo.id}
                                className={styles.items}
                                src={photo.image}
                                title={photo.title}
                                alt="inventory images"
                                bgColor="var(--inventory-bgColor)"
                                borderRadius="20px"
                                border="0px var(--white)"
                                boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                height="150"
                                width="140"
                                />
                        ) : (
                            selectedItems === photo.title.slice(0,1).toUpperCase() && (
                                <CategoryCard 
                                    key={index}
                                    photoId={photo.id}
                                    className={styles.items}
                                    src={photo.image}
                                    title={photo.title}
                                    alt="inventory images"
                                    bgColor="var(--inventory-bgColor)"
                                    borderRadius="20px"
                                    border="0px var(--white)"
                                    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                    height="150"
                                    width="140"
                                    onClick={() => overlayPage(true)}
                                />
                            )
                        )
                        
                    ))}
                    
                </div>
            </div>

            <div className={styles.popup} style={{ display: popup ? 'block' : 'none'}} onClick={() => setPopup(false)}>
                {popup && <fieldset className={styles.frame}>
                    <h2>Generate your new outfits</h2>
                    <Image className={styles.photo} src="/images/outfits.png" width={390} height={390}/>
                    <h4>Business Casual</h4>
                    <p>
                        Collocation rate: ⭐️⭐️⭐⭐️
                    </p>
                    <p>
                        Wear rate: ⭐️⭐️⭐️
                    </p>
                    <p>
                        Likeability: ⭐️⭐️⭐️⭐️
                    </p>
                </fieldset>}
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

