import styles from "@/styles/Inventory.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";

export default function Inventory() {
    return (
        <>
            <div className={styles.mainContainer}>
                <h2></h2>
                <BottomNavigation
                    bgColorInventory="var(--button-highlight-light)"
                    pathColorInventory="var(--white)"
                    borderStyle="60%"
                    IconWidth={90}
                    iconHeight={36}
                />
            </div>
        </>
    )
}