import Link from "next/link";
import Image from "next/image"
import styles from "@/styles/Collection.module.css"
import BottomNavigation from "@/components/BottomNavigation/index.js";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";
import { inventoryTwo } from "@/Data/inventoryTwo";
import OutfitCard from "@/components/OutfitCard";

export default function Collection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    const [color, setColor] = useState(false);

    const isClick = () => {
        setColor(true);
    }

    const [selectedCards, setSelectedCards] = useState([...inventoryTwo.photos]);
    const [selectedItems, setSelectedItems] = useState("All");

    const findItems = (title) => {
        setSelectedItems(title.toUpperCase())
    }

    useEffect(() => {
        findItems("ALL");
    }, []);

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
                        <div className={`${styles.chip} ${styles.carouselContainer}`}>
                        {color ? (
                            <ButtonTwo title="All" width={100} height={40} margin="5px" onClick={() => findItems("ALL")} />
                        ) : 
                            (
                            <Button onClick={isClick} title="All" padding={"10px 15px 15px 15px"} borderRadius="11px" width={100} height={40} fontSize="var(--open-sans-small)" margin="5px" />
                        )}
                            <ButtonTwo title="Summer" height={40} margin="5px" onClick={() => findItems("S")} />
                            <ButtonTwo title="Party" height={40} margin="5px" onClick={() => findItems("P")} />
                            <ButtonTwo title="Office" height={40} margin="5px" onClick={() => findItems("O")} />
                            <ButtonTwo title="Casual" height={40} margin="5px" onClick={() => findItems("C")} />
                        </div>
                        
                        <div className={styles.cards}>
                        {selectedCards && selectedCards.map((photo, index) => (
                                selectedItems === "ALL" ? (
                                    <OutfitCard 
                                        key={index}
                                        photoId={photo.id}
                                        className={styles.items}
                                        src={photo.image}
                                        title={photo.title}
                                        subTitle={photo.subTitle}
                                        alt="inventory images"
                                        bgColor="var(--inventory-bgColor)"
                                        backgroundColor="var()"
                                        borderRadius="20px"
                                        border="0px var(--white)"
                                        boxShadow="0px 6px 8px rgba(0, 0, 0, 0.1)"
                                        height="260"
                                        width="150"
                                        onClick={() => overlayPage(true)}
                                    />
                                ) : (
                                    selectedItems === photo.title.slice(0,1).toUpperCase() && (
                                        <OutfitCard 
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
                                            height="260"
                                            width="150"
                                            onClick={() => overlayPage(true)}
                                        />
                                    )
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <BottomNavigation
                bgColorCollection="var(--button-highlight-light)"
                pathColorCollection="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}