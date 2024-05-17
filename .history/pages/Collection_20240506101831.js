import Link from "next/link";
import Image from "next/image"
import styles from "@/styles/Collection.module.css"
import BottomNavigation from '@/components/BottomNavigation';
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";
import { inventoryTwo } from "@/data/inventoryTwo";
import OutfitCard from "@/components/OutfitCard";
import Head from "next/head";

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
        <Head title="Collection" description="Clothes Collection page of Clotho." />
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.main} ${styles.box}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
                    </div>
                    <h1 className={styles.title}>Collection</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none" className={styles.userIcon}>
                        <path d="M24 8.75C24 13.0038 20.445 16.5 16 16.5C11.555 16.5 8 13.0038 8 8.75C8 4.49616 11.555 1 16 1C20.445 1 24 4.49616 24 8.75Z" stroke="#0B0014" stroke-width="2"/>
                        <path d="M1 35V27.4167C1 23.5507 4.13401 20.4167 8 20.4167H24C27.866 20.4167 31 23.5507 31 27.4167V35" stroke="#0B0014" stroke-width="2"/>
                    </svg>
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
                                        alt="inventory images"
                                        bgColor="var(--white)"
                                        borderRadius="20px"
                                        border="0px var(--white)"
                                        boxShadow="2px 2px 10px 0px rgba(0, 0, 0, 0.15)"
                                        height="260"
                                        width="150"
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
                                            bgColor="var(--white)"
                                            borderRadius="20px"
                                            border="0px var(--white)"
                                            boxShadow="2px 2px 10px 0px rgba(0, 0, 0, 0.15)"
                                            height="260"
                                            width="150"
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
                iconWidth={90}
                iconHeight={36}
            />
        </>
    )
}