import styles from "../../styles/Chart.module.css";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";


export default function Chart() {

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    const data = [
        {
            "name": "Casual",
            "uv": 40,
            "pv": 40,
            "fill": "var(--button-linear-light)"
        },
        {
            "name": "Formal",
            "uv": 25,
            "pv": 25,
            "fill": "var(--button-linear-light)"
        },
        {
            "name": "Athletic",
            "uv": 20,
            "pv": 20,
            "fill": "var(--button-outline-light)"
        },
        {
            "name": "Vintage",
            "uv": 10,
            "pv": 10,
            "fill": "var(--button-linear-light)"
        },
        {
            "name": "Bohemian",
            "uv": 5,
            "pv": 5,
            "fill": "var(--button-linear-light)"
        },
    ]

    return(
        <>
            <div className={styles.questionAnalysis}>
                <h1>Your Fashion Profile</h1>
                {isClient ? 
                    <RadialBarChart 
                        width={330} 
                        height={250} 
                        innerRadius="10%" 
                        outerRadius="80%" 
                        data={data} 
                        startAngle={180} 
                        endAngle={0}
                        >
                    <RadialBar minAngle={15} label={{ fill: 'var(--button-linear-light)', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                    </RadialBarChart> : <></>}

                <h3>Approach to Fashion</h3>
                <p>Lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in your wardrobe choices.</p>
                <h3>Priority When Shopping for Clothes</h3>
                <p>Comfort and fit are your primary concerns, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                <h3>Types of Events for Dressing Up</h3>
                <p>Dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                <h3>Wardrobe Organization</h3>
                <p>Organizes their wardrobe primarily by clothing type approaches to organizing Your fashion essentials.</p>
                <h3>Challenges in Choosing Outfits</h3>
                <p>Finding the right fit and balancing comfort with fashion, suggesting comfortable wearing.</p>
            </div>
            <div>
                <h2>Fashion Trend Recommendations</h2>
                <ul>
                    <li className={styles.bulletPointJean}>Invest in timeless pieces: tailored blazers, crisp button-down shirts, and well-fitted denim jeans</li>
                    <li className={styles.bulletPointDress}>Choose comfortable dress-ups: relaxed-fit trousers, oversized knitwear, and flowy midi dresses</li>
                    <li className={styles.bulletPointTShirt}>Prepare versatile essentials: striped tops, camel coats, and black ankle boots</li>
                    <li className={styles.bulletPointShoes}>Incorporate personalized touches: custom monogramming, and handmade jewelry</li>
                </ul>
            </div>
        </>
    )
}