import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import CategoryCard from "@/components/CategoryCard";
import { useState } from "react";
import Image from "next/image";
import { inventory } from "@/Data/inventory";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Category() {

    const [color, setColor] = useState(false);
    const isClick = () => {
        setColor(true);
    }

    const [selectedCards, setSelectedCards] = useState([...inventory.photos]);
    const [selectedItems, setSelectedItems] = useState();
    const findItems = (title) => {
        setSelectedItems(title.toUpperCase())
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    return (
        <div className={styles.mainContainer}>
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
                <Carousel responsive={responsive} containerClass={styles.carouselContainer}>
                    <Button onClick={() => findItems("ALL")} className={color ? styles.activeButton : styles.inactiveButton}>All</Button>
                    <ButtonTwo title="Shoes" height={40} width={100} margin="5px" onClick={() => findItems("S")}>Shoes</ButtonTwo>
                    <ButtonTwo title="Tops" height={40} width={100} margin="5px" onClick={() => findItems("T")}>Tops</ButtonTwo>
                    <ButtonTwo title="Bottoms" height={40} width={100} margin="5px" onClick={() => findItems("B")}>Bottoms</ButtonTwo>
                    <ButtonTwo title="Jackets" height={40} width={100} margin="5px" onClick={() => findItems("J")}>Jackets</ButtonTwo>
                    <ButtonTwo title="Accessories" height={40} width={100} margin="5px" onClick={() => findItems("A")}>Accessories</ButtonTwo>
                </Carousel>
            </div>

            <div className={styles.cards}>
                {selectedCards && selectedCards.map((photo, index) => (
                    selectedItems === "ALL" || selectedItems === photo.title.slice(0,1).toUpperCase() ? (
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
                    ) : null
                ))}
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

