import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import Navigation from "@/components/Navigation";
import styles from '@/styles/Profile.module.css'

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
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}

            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <Image 
                            src={'/images/menu-burger.png'}
                            alt="Hamburger menu"
                            width={50}
                            height={35}
                            className={styles.menuIcon}
                        />
                    </div>
                    <h1 className={styles.title}>Profile</h1>
                </div>
                
                <div className={styles.topInfo}>
                    {isEditing ? (
                        <>
                            <Image 
                                src={avatar}
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
                            src={avatar}
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


