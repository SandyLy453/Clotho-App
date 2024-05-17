import styles from "@/styles/RateThisApp.module.css";
import BottomNavigation from "@/components/BottomNavigation";
import Head from "next/head";
import Spline from "@splinetool/react-spline";

export default function RateThisApp() {
    return (
        <>

        <Head title="Home" description="Homepage of Clotho." />

        <main className={`${styles.main} ${styles.box}`}>
        <div className={styles.splineContainer}>
        <Spline scene="https://prod.spline.design/Dgcmid8if7EA-5WM/scene.splinecode"/>
        </div>

        <BottomNavigation />
        </main>
        </>
    )
}