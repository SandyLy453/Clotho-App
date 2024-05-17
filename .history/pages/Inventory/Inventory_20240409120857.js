import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";

export default function Inventory() {
    return (
        <>
            <BottomNavigation
                pathColorHome="var(--button-highlight-light)"
                bgColorInventory="var(--button-highlight-light)"
                pathColorNavigation="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}