import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './CommunityOverlay.module.css'

export default function CommunityOverlay({ isButtonClicked, setIsButtonClicked }) {
    const [data, setData] = useState(null);

   var apiKey = process.env.NEXT_PUBLIC_API_KEY;
    var type = 'clothing';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const GrabNews = () => {
        if (isButtonClicked) {
            setData(null); 
        } else {
            axios.get(url)
                .then((response) => {
                    setData(response.data); 
                }).catch(err => {
                    console.log(err); 
                });
        }
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <div className={styles.popUp}>
            {
                data && Array.isArray(data.articles) &&
                data.articles.filter(article => article.title.toLowerCase().includes('fashion')).map((d, index) => {
                    return (
                        <div key={index} className={styles.overlay}>
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
    )
}

