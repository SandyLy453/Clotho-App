import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import AddPopup from "@/components/AddPopup";

export default function Plus() {
    return (
        <>
            <AddPopup/>
            <BottomNavigation />
        </>
    )
}