import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './CommunityOverlay.module.css'

export default function CommunityOverlay({ isButtonClicked, setIsButtonClicked }) {
    const [data, setData] = useState(null);
    const url = 'https://newsapi.org/v2/everything?q=clothing&from=2024-04-11&sortBy=publishedAt&apiKey=YOUR_API_KEY';

    const GrabNews = () => {
        if (isButtonClicked) {
            setData(null); // Clear the data when the button is clicked again
        } else {
            axios.get(url)
                .then((response) => {
                    setData(response.data); // Set the fetched data
                }).catch(err => {
                    console.log(err); // Log any errors
                });
        }
        setIsButtonClicked(!isButtonClicked); // Toggle the isButtonClicked state
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

