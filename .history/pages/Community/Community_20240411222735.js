import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import { useState } from "react";
import axios from 'axios';

export default function Community() {

    const [ data, setData ] = useState();
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);

    var apiKey = '9596f078c7a0457fb5fe18c0190bfa42';
    var type = 'clothing';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const GrabUsers = () => {
        axios.get(url)
            .then((response) => {
                console.clear();
                setData(response.data);
                setIsButtonClicked(true);
                console.log(response.data);
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>Community</h1>
            <Button onClick={() => GrabUsers()} title="See News" height={40} width={150}>See News</Button>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                border: isButtonClicked ? 'var(--inventory-card-outline)' : 'none',
                margin: '20px',
                padding: '30px',
                fontFamily: '--open-sans-small',

            }}>
            {
                data && Array.isArray(data.articles) && data.articles.slice(2, 5).map((d, index) => {
                    return(
                        <div key={index}>
                            {d.title}
                            {d.description}
                            {d.author}
                        </div>
                    )
                })
            }
            </div>

            <BottomNavigation
                bgColorCommunity="var(--button-highlight-light)"
                pathColorCommunity="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}