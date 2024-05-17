import styles from "@/styles/RateThisApp.module.css";
import BottomNavigation from "@/components/BottomNavigation";
import Head from "next/head";

export default function RateThisApp() {
    return (
        <>

        <Head title="Home" description="Homepage of Clotho." />

        <BottomNavigation />
        </>
    )
}