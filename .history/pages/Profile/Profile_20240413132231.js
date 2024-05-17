import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react';
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Profile.module.css'

export default function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("User Name");

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <Image 
                        src={'/images/menu-burger.png'}
                        alt="Hamburger menu"
                        width={50}
                        height={35}
                        className={styles.menuIcon}
                    />
                    <h1 className={styles.title}>Profile</h1>
                </div>

                <div className={styles.topTnfo}>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User's avatar"
                        width={185}
                        height={185}
                        className={styles.avatar}
                    />
                    {isEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className={styles.nameInput}
                        />
                    ) : (
                        <p className={styles.name}>{name}</p>
                    )}
                </div>

                <div className={styles.info}>

                </div>

                <div className={styles.button}>
                    <Button 
                        title={isEditing ? "Save Profile" : "Edit Profile"}
                        onClick={handleEditProfile}
                    />
                </div>
            </main>
            <BottomNavigation />
        </>
    )
}


