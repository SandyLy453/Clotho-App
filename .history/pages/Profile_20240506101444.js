import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import Navigation from "@/components/Navigation";
import styles from '@/styles/Profile.module.css'
import Head from "next/head";

export default function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Clotho");
    const [height, setHeight] = useState("170");
    const [weight, setWeight] = useState("72");
    const [gender, setGender] = useState("Female");
    const [bodyShape, setBodyShape] = useState("Retangle");
    const [email, setEmail] = useState("Clotho.2024@email.com");
    const [avatar, setAvatar] = useState('/images/user-light.png');
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

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
    const handleAvatarChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the selected files
        if (file) {
            const reader = new FileReader(); // Create a file reader
            reader.onloadend = () => {
                setAvatar(reader.result); // Set the avatar to the uploaded image
            };
            reader.readAsDataURL(file); // Read the uploaded file as a data URL
        }
    };

    return (
        <>
        <Head title="Profile" description="User Profile."/>
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}

            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
                    </div>
                    <h1 className={styles.title}>Profile</h1>
                </div>
                
                <div className={styles.topInfo}>
                    {isEditing ? (
                        <>
                            <Image 
                                src="/images/user-image.png"
                                alt="User's avatar"
                                width={185}
                                height={185}
                                className={styles.avatarFix}
                            />
                            <input
                                type="file"
                                accept="image/*" // Specify that only image files are accepted
                                onChange={handleAvatarChange}
                                className={styles.avatarInput}
                            />
                        </>
                    ) : (
                        <Image 
                            src="/images/user-image.png"
                            alt="User's avatar"
                            width={185}
                            height={185}
                            className={styles.avatar}
                        />
                    )}
                    
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
                                    type="number"
                                    value={height}
                                    onChange={handleHeightChange}
                                    className={styles.infoInput}
                                    min={0}
                                />
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={handleWeightChange}
                                    className={styles.infoInput}
                                    min={0}
                                />
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    list="genderOptions"
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={bodyShape}
                                    onChange={handleBodyShapeChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={styles.infoInput}
                                />
                            </>
                        ) : (
                            <>
                                <p className="text">{height} cm</p>
                                <p className="text">{weight} kg</p>
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


