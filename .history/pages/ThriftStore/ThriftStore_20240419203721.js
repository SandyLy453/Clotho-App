import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css';
import Navigation from "@/components/Navigation"; // Import the Navigation component

export default function ThriftStore() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${searchQuery}?key=YOUR_API_KEY`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching:', error);
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
                    <h1 className={styles.title}>Thrift Store</h1>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User icon"
                        width={35}
                        height={35}
                        className={styles.userIcon}
                    />
                </div>
                <div className={styles.searchBar}>
                    <input 
                        type="text"
                        className={styles.barInput}
                        placeholder="Enter your ZIP code"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Image 
                        src={'/images/search-light.png'}
                        alt="search icon"
                        width={35}
                        height={35}
                        className={styles.searchIcon}
                        onClick={handleSearch}
                    />
                </div>

                <div className={styles.results}>
                    {searchResults.map(result => (
                        <div key={result.ZipCode}>{result.City}, {result.State}</div>
                    ))}
                </div>
            </main>

            <BottomNavigation />
        </>
    )
}



