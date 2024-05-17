import BottomNavigation from '@/components/BottomNavigation';
import styles from '@/styles/Calendar.module.css'
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Calendar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [currentDate, setCurrentDate] = useState(new Date());

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const options = { weekday: 'short'};
        return date.toLocaleDateString('en-US', options);
    };

    const generateDates = (numDays) => {
        const dates = [];
        for (let i = -numDays; i <= numDays; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const generateTimes = () => {
        const times = [];
        for (let i = 0; i < 24; i++) {
            const timeString = `${i < 10 ? '0' : ''}${i}:00`;
            times.push(timeString);
        }
        return times;
    };

    const dates = generateDates(3);
    const times = generateTimes();

    return (
        <>
            <Head title="Calendar" description="Calendar and upcoming plan." />
            {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.main} ${styles.box}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 50 35" fill="none" className={styles.menuIcon}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75002C6.25 7.94461 7.18274 7.29169 8.33333 7.29169H41.6667C42.8173 7.29169 43.75 7.94461 43.75 8.75002C43.75 9.55544 42.8173 10.2084 41.6667 10.2084H8.33333C7.18274 10.2084 6.25 9.55544 6.25 8.75002ZM6.25 17.5C6.25 16.6946 7.18274 16.0417 8.33333 16.0417H41.6667C42.8173 16.0417 43.75 16.6946 43.75 17.5C43.75 18.3054 42.8173 18.9584 41.6667 18.9584H8.33333C7.18274 18.9584 6.25 18.3054 6.25 17.5ZM6.25 26.25C6.25 25.4446 7.18274 24.7917 8.33333 24.7917H41.6667C42.8173 24.7917 43.75 25.4446 43.75 26.25C43.75 27.0554 42.8173 27.7084 41.6667 27.7084H8.33333C7.18274 27.7084 6.25 27.0554 6.25 26.25Z" fill="black"/>
                        </svg>
                    </div>
                    <h1 className={styles.title}>Calendar</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none" className={styles.userIcon}>
                        <path d="M24 8.75C24 13.0038 20.445 16.5 16 16.5C11.555 16.5 8 13.0038 8 8.75C8 4.49616 11.555 1 16 1C20.445 1 24 4.49616 24 8.75Z" stroke="#0B0014" stroke-width="2"/>
                        <path d="M1 35V27.4167C1 23.5507 4.13401 20.4167 8 20.4167H24C27.866 20.4167 31 23.5507 31 27.4167V35" stroke="#0B0014" stroke-width="2"/>
                    </svg>
                </div>

                <div className={styles.contentBox}>
                    <div className={styles.top}>
                        <div className={styles.text}>
                            <p>Date Seclection</p>
                            <p className={styles.seeAll}>See All</p>
                        </div>
                        <div className={styles.date}>
                            {dates.map((date, index) => (
                                <div key={index} className={`${styles.dateBox} ${date.toDateString() === currentDate.toDateString() ? styles.currentDate : ''}`}>
                                    <p className={styles.dateNumber}>{date.getDate()}</p>
                                    <p className={styles.dateName}>{formatDate(date)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.text}>
                            <p>Schedule Today</p>
                        </div>
                        <div className={styles.time}>
                            {times.map((time, index) => (
                                <p key={index} className={styles.number}>{time}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className={styles.space}></div>
                </div>
            </main>
            <BottomNavigation />
        </>
    )
}


