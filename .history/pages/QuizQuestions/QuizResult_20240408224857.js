import React from 'react'; 
import styles from "../../styles/QuizResult.module.css";

export default function QuizResult({ resultType }) { 

    const resultsA = [
        "Bohemian: 5%",
        "Vintage: 15%",
        "Athletic: 20%",
        "Formal: 25%",
        "Casual: 30%"
    ];

    const resultsB = [
        "Alternative: 10%",
        "Gothic: 20%",
        "Seasonal: 25%",
        "Trend Setter: 30%",
        "Eclectic: 15%"
    ];
    
    const resultsC = [
        "Boho-Chic: 5%",
        "Romantic: 15%",
        "Minimalist: 20%",
        "Athletic: 25%",
        "Practical: 30%"
    ];
    
    const resultsD = [
        "Edgy: 10%",
        "Retro: 20%",
        "Comfortable: 25%",
        "Elegant: 30%",
        "Chic: 15%"
    ];
    

    let result;
    switch (resultType) {
        case 'A':
            result = resultsA;
            break;
        case 'B':
            result = resultsB;
            break;
        case 'C':
            result = resultsC;
            break;
        case 'D':
            result = resultsD;
            break;
        default:
            result = [];
    }

    return (
        <>
            <div>
                <h2 className={styles.title}>Quiz Result</h2>
                <h3 className={styles.title}>
                    Overall Fashion Styles:
                    <ul className={styles.result}>
                        {result.map((style, index) => (
                            <li key={index} className={styles.report}>
                                {Object.values(style)}
                            </li>
                        ))}
                    </ul>
                </h3>
            </div>
        </>
    );
}
