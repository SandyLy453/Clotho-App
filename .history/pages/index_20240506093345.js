import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import CollectionCard from "@/components/CollectionCard";
import BottomNavigation from '@/components/BottomNavigation';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  return (
    <>
      <Head title="Home" description="Homepage of Clotho." />

      {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
      
      <main className={`${styles.main} ${styles.box}`}>
        <div className={styles.pageTitle}>
          <div onClick={toggleMenu} className={styles.menuIcon}>
            <Image 
              src={'/images/menu-burger.png'}
              alt="Hamburger menu"
              width={50}
              height={35}
            />
          </div>
          <h1 className={styles.title}>Home Page</h1>
          <Image 
            src={'/images/user-light.png'}
            alt="User icon"
            width={35}
            height={35}
            className={styles.userIcon}
          />
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.hello}>
          <Image
            className={styles.user}
            src="/images/user-image.png"
            alt="user images"
            width={92}
            height={92}
          />
          </div>
          
          <CollectionCard
              title="Summer Outfits"
              largePhoto="/images/outfit/Card_large.jpg"
              topLeftPhoto="/images/outfit/Card_top1.jpg"
              topRightPhoto="/images/outfit/Card_top2.jpg"
              bottomLeftPhoto="/images/outfit/Card_bottom1.jpg"
              bottomRightPhoto="/images/outfit/Card_bottom2.jpg"
          />
        </div>

      </main>
      <BottomNavigation 
          bgColorHome="var(--button-highlight-light)"
          pathColorHome="var(--white)"
          borderStyle="60%"
          iconWidth={36}
          iconHeight={36}
        />
    </>
  );
}



