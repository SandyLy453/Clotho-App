import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import CategoryCard from "@/components/CategoryCard";
import { useState } from "react";
import Image from "next/image";
import { inventory } from "@/Data/inventory";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";

export default function Category() {

    const [color, setColor] = useState(false);
    const isClick = () => {
        setColor(true);
    }

    const [selectedCards, setSelectedCards] = useState([...inventory.photos]);
    const [selectedItems, setSelectedItems] = useState("All");
    const [popup, setPopup] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const findItems = (title) => {
        setSelectedItems(title.toUpperCase())
    }

    const overlayPage = () => {
        setPopup(!popup);
    }
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
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
                        <div className={`${styles.chip} ${styles.carouselContainer}`}>
                                {isClick ? (<ButtonTwo title="All" bgColor="var()" margin="5px" onClick={() => findItems("ALL")}/>): (<ButtonTwo title="All" width={100} height={40} margin="5px" onClick={() => findItems("ALL")}/>)}
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
                                        onClick={() => overlayPage(true)}
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

                    {popup ? (
                        <>
                            <div className={styles.popupBackground} onClick={() => overlayPage(false)}></div>
                            <div className={styles.popup}>
                                <fieldset className={styles.frame}>
                                    <h2>Generate your new outfits</h2>
                                    <Image className={styles.photo} src="/images/outfits.png" width={390} height={390}/>
                                    <h4>Business Casual</h4>
                                    <p>Collocation rate: ⭐️⭐️⭐⭐️</p>
                                    <p>Wear rate: ⭐️⭐️⭐️</p>
                                    <p>Likeability: ⭐️⭐️⭐️⭐️</p>
                                    <div className={styles.button}>
                                        <Button title="Generate" width={300} height={50} onClick={() => overlayPage(false)}/>
                                    </div>
                                </fieldset>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    
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
            </main>
        </>
    );
}



