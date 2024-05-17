import styles from "../../styles/Chart.module.css";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import Button from "@/components/Button";
import Link from "next/link";


export default function Chart() {

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    const data = [
        {
            "name": "Bohemian",
            "uv": 5,
            "pv": 5,
            "fill": "var(--chart-color-cyan)"
        },
        {
            "name": "Vintage",
            "uv": 15,
            "pv": 15,
            "fill": "var(--chart-color-light-purple)"
        },
        {
            "name": "Athletic",
            "uv": 20,
            "pv": 20,
            "fill": "var(--chart-color-bright-purple)"
        },
        {
            "name": "Formal",
            "uv": 25,
            "pv": 25,
            "fill": "var(--chart-color-blue)"
        },
        {
            "name": "Casual",
            "uv": 30,
            "pv": 30,
            "fill": "var(--chart-color-purple)"
        },
    ]

    return(
        <>
            <div className={styles.questionAnalysis}>
                <h1 className={styles.title}>Your Fashion Profile</h1>
                <div className={styles.chart}>
                    {isClient ? 
                        <RadialBarChart 
                            width={400} 
                            height={300} 
                            innerRadius="10%" 
                            outerRadius="80%" 
                            data={data} 
                            startAngle={180} 
                            endAngle={0}
                            cx={140}
                            cy={170}
                            style={height='50%'}
                            >
                        <RadialBar minAngle={15} label={{ fill: 'var(--button-linear-light)', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"/>
                        <Tooltip/>
                    </RadialBarChart> : <></>}
                </div>
                <div className={styles.mainContents}>
                    <h3 className={styles.analysisTitle}>Approach to Fashion</h3>
                    <p className={styles.analysisContent}>Lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in your wardrobe choices.</p>
                    <h3 className={styles.analysisTitle}>Priority When Shopping for Clothes</h3>
                    <p className={styles.analysisContent}>Comfort and fit are your primary concerns, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                    <h3 className={styles.analysisTitle}>Types of Events for Dressing Up</h3>
                    <p className={styles.analysisContent}>Dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                    <h3 className={styles.analysisTitle}>Wardrobe Organization</h3>
                    <p className={styles.analysisContent}>Organizes their wardrobe primarily by clothing type approaches to organizing Your fashion essentials.</p>
                    <h3 className={styles.analysisTitle}>Challenges in Choosing Outfits</h3>
                    <p className={styles.analysisContent}>Finding the right fit and balancing comfort with fashion, suggesting comfortable wearing.</p>
                </div>
            </div>
            <div className={styles.questionAnalysis}>
                <h2 className={styles.title} id="space">Fashion Trend Recommendations</h2>
                <ul analysisContent>
                    <li className={styles.bulletPointJean}>Invest in timeless pieces: tailored blazers, crisp button-down shirts, and well-fitted denim jeans</li>
                    <li className={styles.bulletPointDress}>Choose comfortable dress-ups: relaxed-fit trousers, oversized knitwear, and flowy midi dresses</li>
                    <li className={styles.bulletPointTShirt}>Prepare versatile essentials: striped tops, camel coats, and black ankle boots</li>
                    <li className={styles.bulletPointShoes}>Incorporate personalized touches: custom monogramming, and handmade jewelry</li>
                </ul>
            </div>
            <Link href={'/'} className={styles.buttonPosition}>
                <Button title="Finish" />
            </Link>
        </>
    )
}