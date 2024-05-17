import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css';
import Navigation from "@/components/Navigation";
import OpenCageGeocode from 'opencage-api-client';

export default function ThriftStore() {
    const [isOpen, setIsOpen] = useState(false);
    const [ data, setData ] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);

    const thriftStoreNames = ["Value Village", "Revival", "Thrift & Fund", "Value Village"];

    var apiKey = process.env.NEXT_PUBLIC_API_ZIPCODE;

    const url = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${searchQuery}&minimumradius=0&maximumradius=2&country=Canada&key=${apiKey}`;
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = async () => {
        if(isButtonClicked) {
            setData(null);
            setIsButtonClicked(false);
        } else {
            axios.get(url)
                .then(async (response) => {
                    const { DataList } = response.data; 
                    setSearchResults(DataList); 
                    setIsButtonClicked(true);

                    // Convert ZIP codes to actual addresses
                    const addresses = await Promise.all(DataList.map(async (result) => {
                        const { Latitude, Longitude, ZipCode } = result; // Change 'Code' to 'ZipCode'
                        try {
                            const addressData = await OpenCageGeocode.reverseGeocode({
                                q: `${Latitude},${Longitude}`,
                                key: '20c2357248c043928442f4808e56d3c0',
                            });
                            return addressData.results[0].formatted;
                        } catch (error) {
                            console.error('Error converting ZIP code to address:', error);
                            return null;
                        }
                    }));

                    console.log(addresses);
                }).catch(err => {
                    console.log(err);
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };
    
    const getRandomThriftStoreName = () => {
        return thriftStoreNames[Math.floor(Math.random() * thriftStoreNames.length)];
    };

    return (
        <>
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}

            <main className={`${styles.main} ${styles.box}`}>
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
                    {isLoading && <p className={styles.loading}>Loading...</p>}
                    {error && <p className={styles.error}>Error: {error.message}</p>}
                    {!isLoading && !error && searchResults.length > 0 && (
                        searchResults.slice(0, 20).map((result, index) => (
                            <div key={index} className={styles.resultCard}>
                                <p className={styles.storeName}>{getRandomThriftStoreName()}</p>
                                <p className={styles.subText}>{result.City}</p>
                                <p className={styles.subText}>{result.Code}</p>
                            </div>
                        ))
                    )}
                    {!isLoading && !error && searchResults.length === 0 && (
                        <p className={styles.noZip}>Input your ZIP code/ postal code to search the nearby thrift stores.</p>
                    )}
                </div>
            </main>

            <BottomNavigation />
        </>
    )
}


