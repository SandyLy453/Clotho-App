import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";

export default function Inventory() {
    return (
        <>
            <BottomNavigation
                pathColor="var(--white)"
                bgColorInventory="var(--button-highlight-light)"
                pathColor="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}