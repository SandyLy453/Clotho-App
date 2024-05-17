import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import { useState } from "react"

export default function Community() {

    const [ data, setData ] = useState();

    var apiKey = 

    return (
        <>
            <BottomNavigation
                bgColorCommunity="var(--button-highlight-light)"
                pathColorCommunity="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}