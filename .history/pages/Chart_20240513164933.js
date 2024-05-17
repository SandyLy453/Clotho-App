import styles from "@/styles/Chart.module.css";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, Label, ResponsiveContainer } from "recharts";
import Button from "@/components/Button";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import BottomNavigation from "@/components/BottomNavigation";


export default function Chart({ resultType }) {
    console.log("Received resultType:", resultType);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        console.log("useEffect triggered with resultType:", resultType);
    }, [resultType]);
    
    const dataA = [
        { name: "Bohemian", percentage: 5, pv: 5, fill: "var(--chart-color-cyan)" },
        { name: "Vintage", percentage: 15, pv: 15, fill: "var(--chart-color-light-purple)" },
        { name: "Athletic", percentage: 20, pv: 20, fill: "var(--chart-color-bright-purple)" },
        { name: "Formal", percentage: 25, pv: 25, fill: "var(--chart-color-blue)" },
        { name: "Casual", percentage: 30, pv: 30, fill: "var(--chart-color-purple)" }
    ];

    const dataB = [
        { name: "Alternative", percentage: 10, pv: 10, fill: "var(--chart-color-cyan)" },
        { name: "Gothic", percentage: 20, pv: 20, fill: "var(--chart-color-light-purple)" },
        { name: "Seasonal", percentage: 25, pv: 25, fill: "var(--chart-color-bright-purple)" },
        { name: "Trend Setter", percentage: 30, pv: 30, fill: "var(--chart-color-blue)" },
        { name: "Electric", percentage: 15, pv: 15, fill: "var(--chart-color-purple)" }
    ];

    const dataC = [
        { name: "Bobo-Chic", percentage: 5, pv: 5, fill: "var(--chart-color-cyan)" },
        { name: "Romantic", percentage: 15, pv: 15, fill: "var(--chart-color-light-purple)" },
        { name: "Minimalist", percentage: 20, pv: 20, fill: "var(--chart-color-bright-purple)" },
        { name: "Athletic", percentage: 25, pv: 25, fill: "var(--chart-color-blue)" },
        { name: "Pratical", percentage: 30, pv: 30, fill: "var(--chart-color-purple)" }
    ];

    const dataD = [
        { name: "Edgy", percentage: 10, pv: 10, fill: "var(--chart-color-cyan)" },
        { name: "Retro", percentage: 20, pv: 20, fill: "var(--chart-color-light-purple)" },
        { name: "Comfortable", percentage: 25, pv: 25, fill: "var(--chart-color-bright-purple)" },
        { name: "Elegant", percentage: 30, pv: 30, fill: "var(--chart-color-blue)" },
        { name: "Chic", percentage: 15, pv: 15, fill: "var(--chart-color-purple)" }
    ];

    
    let dataToShow;
    switch (resultType) {
        case "A":
            console.log("Setting dataToShow to dataA");
            dataToShow = dataA;
            break;
        case "B":
            console.log("Setting dataToShow to dataB");
            dataToShow = dataB;
            break;
        case "C":
            console.log("Setting dataToShow to dataC");
            dataToShow = dataC;
            break;
        case "D":
            console.log("Setting dataToShow to dataD");
            dataToShow = dataD;
            break;
        default:
            console.log("Setting dataToShow to default dataA");
            dataToShow = dataA;
            break;
    }

    const customTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, percentage } = payload[0].payload;
            return (
                <div className={styles.customTooltip}>
                    <p>{`${name}: ${percentage}%`}</p>
                </div>
            );
         }
      
        return null
      }

    return (
        <div className={styles.mainContainer}>
            
            <div className={styles.contentContainer}>
                    
                    <div className={styles.chart}>

                    <div className={styles.titleContent}>
                    <p className={styles.pageTitle}>Your Ideal Style</p> 
                    </div>

                    <div className={styles.chartContent}>
                        {isClient && 
                        <ResponsiveContainer width={350} height={250}>
                            <RadialBarChart  
                                innerRadius="20%" 
                                outerRadius="90%" 
                                data={dataToShow} 
                                startAngle={180} 
                                endAngle={0}
                                cx={120}
                                cy={140}
                            >
                                <RadialBar minAngle={15} label={{ fill: 'var(--button-linear-light)', position: 'insideStart' }} background clockWise={true} dataKey='percentage' />
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"/>
                                <Tooltip content={customTooltip}/>
                            </RadialBarChart>
                            </ResponsiveContainer>}

                            </div>
                    </div>
                    
                    

                    <div className={styles.splineContainer}>
                        <Spline scene="prod.spline.design/hCAVyADUhFGynFQO/scene.splinecodee"/>
                    </div>

                    

                    <div className={styles.mainContents}>
                        
                        <p className={styles.analysisTitle}>Approach to Fashion</p>
                        <p className={styles.analysisText}>Lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in your wardrobe choices.</p>
                        <p className={styles.analysisTitle}>Priority When Shopping for Clothes</p>
                        <p className={styles.analysisText}>Comfort and fit are your primary concerns, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                        <p className={styles.analysisTitle}>Events to Dress Up</p>
                        <p className={styles.analysisText}>Dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                        <p className={styles.analysisTitle}>Wardrobe Organization</p>
                        <p className={styles.analysisText}>Organizes their wardrobe primarily by clothing type approaches to organizing Your fashion essentials.</p>
                        <p className={styles.analysisTitle}>Choosing Outfits</p>
                        <p className={styles.analysisText}>Finding the right fit and balancing comfort with fashion, suggests comfortable wearing.</p>
                    </div>
                </div>
                <BottomNavigation 
                    bgColorHome="var(--button-highlight-light)"
                    pathColorHome="var(--white)"
                    borderStyle="60%"
                    iconWidth={36}
                    iconHeight={36}
                />
            </div>

            
            
            
        
    );
}
