import Button from "@/components/Button";
import { useState } from 'react';
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/ThriftStore.module.css'

export default function ThriftStore() {
    const [searchQuery, setSearchQuery] = useState('');
    const [thriftStores, setThriftStores] = useState([]);
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=9d8ba8e147f54f858df45cc6bf19bfdc`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            const userLocation = data.results[0].geometry.location;

            const nearbyStores = thriftStores.filter(store => {
                const distance = calculateDistance(userLocation.lat, userLocation.lng, store.latitude, store.longitude);
                return distance <= 10000; // 10km in meters
            });

            setResults(nearbyStores);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Earth radius in meters
        const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
    
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        const distance = R * c; // Distance in meters
        return distance;
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
                        placeholder="Enter your address or postal code"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button onClick={handleSearch} title="search"/>
                </div>

                <div className={styles.results}>
                    {results.map(store => (
                        <div key={store.id}>
                            {...store}
                        </div>
                    ))}
                </div>

            </main>
            <BottomNavigation />
        </>
    )
}



