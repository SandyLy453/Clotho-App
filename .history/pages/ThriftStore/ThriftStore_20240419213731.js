import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css';
import Navigation from "@/components/Navigation"; // Import the Navigation component

export default function ThriftStore() {
    const [isOpen, setIsOpen] = useState(false);
    const [ data, setData ] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);

    var apiKey = process.env.NEXT_PUBLIC_API_ZIPCODE;

    const url = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${searchQuery}&minimumradius=0&maximumradius=5&country=Canada&key=${apiKey}`;
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = async () => {
        if(isButtonClicked) {
            setData(null);
            setIsButtonClicked(false);
        } else {
            axios.get(url)
                .then((response) => {
                    const { DataList } = response.data; // Assuming DataList contains the array of results
                    setSearchResults(DataList); // Update searchResults state with the array of results
                    setIsButtonClicked(true);
                    console.log(DataList);
                }).catch(err => {
                    console.log(err)
                })
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
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {!isLoading && !error && Array.isArray(data) && 
                        searchResults.map((z, index) => (
                        <div key={index}>
                            <div className={styles.resultCard}>
                                <p className={styles.storeName}>Thrift Store</p>
                                {z.DataList.City}
                                {z.DataList.Code}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <BottomNavigation />
        </>
    )
}



