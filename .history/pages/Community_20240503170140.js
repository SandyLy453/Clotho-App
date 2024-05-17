import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Community.module.css'
import { useState } from "react";
import axios from 'axios';
import Navigation from "@/components/Navigation";

export default function Community() {

    const [ data, setData ] = useState();
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    var apiKey = process.env.NEXT_PUBLIC_API_KEY;
    var type = 'clothing';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const GrabNews = () => {
        if(isButtonClicked) {
            setData(null);
            setIsButtonClicked(false);
        } else {
            axios.get(url)
            .then((response) => {
                // console.clear();
                setData(response.data);
                setIsButtonClicked(true);
                console.log(response.data);
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
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
                    <h1 className={styles.title}>Communication</h1>
                    <svg className={styles.news} width="26" height="29" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => GrabNews()} title={isButtonClicked ? "Close News": "See News"}>
                        <path d="M19.3333 8.93333C19.3333 7.0945 18.5607 5.33098 17.1855 4.03073C15.8102 2.73047 13.9449 2 12 2C10.0551 2 8.18982 2.73047 6.81455 4.03073C5.43928 5.33098 4.66667 7.0945 4.66667 8.93333C4.66667 17.0222 1 20.6667 1 20.6667H23C23 20.6667 19.3333 17.0222 19.3333 8.93333Z" stroke="#17191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.75 24.6667C14.4705 25.0722 14.0694 25.4088 13.5868 25.6428C13.1041 25.8768 12.557 26 12 26C11.443 26 10.8959 25.8768 10.4132 25.6428C9.9306 25.4088 9.52947 25.0722 9.25 24.6667" stroke="#17191F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="19" cy="5" r="5" fill="#D20A0A"/>
                    </svg>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.contentContainer}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            justifyContent: 'center',
                            border: isButtonClicked ? 'var(--inventory-card-outline)' : 'none',
                            margin: '30px',
                            padding: '30px',
                            fontFamily: '--open-sans-small',
                            marginBottom: '50px'
                        }}>
                        <div className={styles.posts}>
                            <div className={styles.backgroundCard}>
                                <div className={styles.postHead}>
                                    <Image
                                        className={styles.user}
                                        src="/images/user-image.png"
                                        alt="user images"
                                        width={92}
                                        height={92}
                                    />
                                    <svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3" cy="3" r="3" fill="#A5A5A5"/>
                                        <circle cx="11" cy="3" r="3" fill="#A5A5A5"/>
                                        <circle cx="19" cy="3" r="3" fill="#A5A5A5"/>
                                    </svg>
                                </div>
                                
                                <div className={styles.content}>
                                    <p className={styles.userName}>Shelly McKell</p>
                                    <p>Excited to share my fresh new looks with the community, can't wait to hear your thoughts!</p>
                                    <Image
                                    className={styles.postImage}
                                        src="/images/post_1.png"
                                        alt="posts"
                                        width={352}
                                        height={283}
                                    />
                                    <div className={styles.icons}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C12.7862 26.25 10.7217 25.6105 8.98121 24.5063L3.75 26.25L5.49374 21.0188C4.38946 19.2783 3.75 17.2138 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" stroke="#888888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.875 15C16.875 16.0355 16.0355 16.875 15 16.875C13.9645 16.875 13.125 16.0355 13.125 15C13.125 13.9645 13.9645 13.125 15 13.125C16.0355 13.125 16.875 13.9645 16.875 15Z" fill="#888888"/>
                                        <path d="M22.5 15C22.5 16.0355 21.6605 16.875 20.625 16.875C19.5895 16.875 18.75 16.0355 18.75 15C18.75 13.9645 19.5895 13.125 20.625 13.125C21.6605 13.125 22.5 13.9645 22.5 15Z" fill="#888888"/>
                                        <path d="M11.25 15C11.25 16.0355 10.4105 16.875 9.375 16.875C8.33947 16.875 7.5 16.0355 7.5 15C7.5 13.9645 8.33947 13.125 9.375 13.125C10.4105 13.125 11.25 13.9645 11.25 15Z" fill="#888888"/>
                                    </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            data && Array.isArray(data.articles) && 
                            data.articles.filter(article => article.title.toLowerCase().includes('fashion')).map((d, index) => {
                                return(
                                    <div key={index}>
                                        <Image 
                                            src='/images/news.jpeg'
                                            alt="workout image"
                                            height={200}
                                            width={320}
                                        />
                                        <h3 style={{ 
                                            fontFamily: 'var(--roboto-slab-text)', 
                                            color: 'var(--button-highlight-light)', 
                                            fontSize: 'var(--open-sans-medium)', 
                                            fontWeight: 'bold' 
                                        }}>{d.title}</h3>
                                        <p style={{ 
                                            fontSize: 'var(--open-sans-small)', 
                                            fontWeight: 'var(--open-sans-weight)' 
                                        }}>
                                            {d.description}
                                        </p>
                                        <p style={{ 
                                            fontSize: 'var(--open-sans-small)', 
                                            fontWeight: 'var(--open-sans-weight)', 
                                            textAlign: 'right',
                                        }}>
                                            {d.author}
                                            </p>
                                    </div>
                                )
                            })
                        }
                        </div>

                    </div>

                    <div>
                        <BottomNavigation
                            bgColorCommunity="var(--button-highlight-light)"
                            pathColorCommunity="var(--white)"
                            borderStyle="60%"
                            iconWidth={36}
                            iconHeight={36}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}