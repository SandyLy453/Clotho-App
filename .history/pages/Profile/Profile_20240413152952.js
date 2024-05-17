import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react';
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Profile.module.css'

export default function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("User Name");
    const [height, setHeight] = useState("XXX cm");
    const [weight, setWeight] = useState("XXX kg");
    const [gender, setGender] = useState("XXX");
    const [bodyShape, setBodyShape] = useState("XXXX");
    const [email, setEmail] = useState("Clotho.2024@email.com");


    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
    const handleBodyShapeChange = (e) => {
        setBodyShape(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
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
                    <div className={styles.tags}>
                        <p className="text">Height</p>
                        <p className="text">Weight</p>
                        <p className="text">Gender</p>
                        <p className="text">Body Shape</p>
                        <p className="text">Email</p>
                    </div>
                    <div className={styles.tagsInfo}>
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={height}
                                    onChange={handleHeightChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={weight}
                                    onChange={handleWeightChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={bodyShape}
                                    onChange={handleBodyShapeChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={styles.infoInput}
                                />
                            </>
                        ) : (
                            <>
                                <p className="text">{height}</p>
                                <p className="text">{weight}</p>
                                <p className="text">{gender}</p>
                                <p className="text">{bodyShape}</p>
                                <p className="text">{email}</p>
                            </>
                        )}
                    </div>
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


