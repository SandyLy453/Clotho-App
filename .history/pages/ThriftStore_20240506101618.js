import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css';
import Navigation from "@/components/Navigation";

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
                .then((response) => {
                    const { DataList } = response.data; 
                    setSearchResults(DataList); 
                    setIsButtonClicked(true);
                    console.log(DataList);
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
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


