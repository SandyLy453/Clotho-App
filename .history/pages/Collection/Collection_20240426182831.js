import Link from "next/link";
import Image from "next/image"
import styles from "@/styles/Collection.module.css"
import BottomNavigation from "@/components/BottomNavigation/index.js";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";

export default function Collection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    const [color, setColor] = useState(false);
    const isClick = () => {
        setColor(true);
    }

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
                            <fieldset>
                                
                            </fieldset>
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