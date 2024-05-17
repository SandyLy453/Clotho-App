import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import BottomNavigation from '@/components/BottomNavigation';
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

    const url = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${searchQuery}&minimumradius=0&maximumradius=2&country=Canada&key=${apiKey}`;
    
    const thriftStoreNames = ["Value Village", "Revival", "Thrift & Fund", "Value Village"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getRandomThriftStoreName = () => {
        return thriftStoreNames[Math.floor(Math.random() * thriftStoreNames.length)];
    };

    const handleSearch = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            
            if (response.data && response.data.DataList && response.data.DataList.length > 0) {
                const zipCodes = response.data.DataList.map(zipCode => zipCode.Code);
                const zipCodesString = zipCodes.join(',');
                const zippopotamResponse = await axios.get(`https://api.zippopotam.us/CA/${zipCodesString}`);
                
                const formattedResults = zippopotamResponse.data.places.map(place => ({
                    storeName: getRandomThriftStoreName(),
                    address: `${place['place name']}, ${place.state}, ${place['post code']}`
                }));
                
                setSearchResults(formattedResults);
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            setError('An error occurred while fetching the address');
            console.error(error);
        } finally {
            setIsLoading(false);
            setIsButtonClicked(true);
        }
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
                                <p className={styles.storeName}>{result.storeName}</p>
                                <p className={styles.subText}>{result.address}</p>
                            </div>
                        ))
                    )}
                    {!isLoading && !error && searchResults.length === 0 && (
                        <p>No results found.</p>
                    )}
                </div>
            </main>

            <BottomNavigation />
        </>
    )
}



