import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import { useState } from "react";
import axios from 'axios';

export default function Community() {

    const [ data, setData ] = useState();

    var apiKey = '9596f078c7a0457fb5fe18c0190bfa42';
    var type = 'telsa';
    var date = '2024-12-25';
    var sortBy = 'publi--shedAt';

    const url = 'https://newsapi.org/v2/everything?q=${telsa}&from=2024-03-12&sortBy=publishedAt&apiKey=${apiKey}';

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
            <h1 onClick={() => GrabUsers()}>Community</h1>
            {
                data && data.map((d, index) => {
                    return(
                        <div key={index}>{d.author}</div>
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