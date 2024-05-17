import styles from "@/styles/Inventory.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";

export default function Inventory() {

    const [selectCards, setSelectedBooks] = usestate([...Inventory.photos]);

    return (
        <div className={styles.mainContainer} >
            <div className={styles.contentContainer}>
                <h1>My Wardrobe</h1>
                <h3>Customize Your Own Wardrobe</h3>

                <div className={styles.chip}>
                    <button>All</button>
                    <button>Shoes</button>
                    <button>T-shirts</button>
                    <button>Jeans</button>
                    <button>Jackets</button>
                    <button>Accessories</button>
                </div>

                <div>
                    {selectedPhotos && selectedPhotos.map((photos, index) => (
                        
                    ))}
                    <InventoryCard />
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