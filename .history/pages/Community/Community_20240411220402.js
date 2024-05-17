import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import { useState } from "react";
import axios from 'axios';

export default function Community() {

    const [ data, setData ] = useState();

    var apiKey = '9596f078c7a0457fb5fe18c0190bfa42';
    var type = 'fashion';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const GrabUsers = () => {
        axios.get(url)
            .then((response) => {
                console.clear();
                setData(response.data);
                console.log(response.data);
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>Community</h1>
            <Button onClick={() => GrabUsers()}>See News</Button>
            {
                data && Array.isArray(data.articles) && data.articles.map((d, index) => {
                    return(
                        <div key={index}>
                            {d.title}
                            {d.url}
                            {d.url}
                            {d.author}
                        </div>
                    )
                })
            }

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