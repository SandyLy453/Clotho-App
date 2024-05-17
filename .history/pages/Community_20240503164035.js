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
                            <div>
                                <div className={styles.backgroundCard}>
                                    <Image
                                        className={styles.user}
                                        src="/images/user-image.png"
                                        alt="user images"
                                        width={92}
                                        height={92}
                                    />
                                    
                                </div>
                            </div>
                                <p>Shelly McKell</p>
                                <p>Excited to share my fresh new looks with the community, can't wait to hear your thoughts!</p>
                                <Image
                                    src="/images/post_1.png"
                                    alt="posts"
                                    width={352}
                                    height={283}
                                />
                            
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