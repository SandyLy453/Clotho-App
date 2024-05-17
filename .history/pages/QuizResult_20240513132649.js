import React from 'react'; 
import styles from "@/styles/QuizResult.module.css";
import BottomNavigation from '@/components/BottomNavigation';


export default function QuizResult({ resultType }) { 

    const resultsA = [
        { Style1: "Bohemian: 5%" },
        { Style2: "Vintage: 15%" },
        { Style3: "Athletic: 20%" },
        { Style4: "Formal: 25%" },
        { Style5: "Casual: 30%" }
    ];

    const resultsB = [
        { Style6: "Alternative: 10%" },
        { Style7: "Gothic: 20%" },
        { Style8: "Seasonal: 25%" },
        { Style9: "Trend Setter: 30%" },
        { Style10: "Eclectic: 15%" }
    ];

    const resultsC = [
        { Style11: "Boho-Chic: 5%" },
        { Style12: "Romantic: 15%" },
        { Style13: "Minimalist: 20%" },
        { Style14: "Athletic: 25%" },
        { Style15: "Practical: 30%" }
    ];

    const resultsD = [
        { Style16: "Edgy: 10%" },
        { Style17: "Retro: 20%" },
        { Style18: "Comfortable: 25%" },
        { Style19: "Elegant: 30%" },
        { Style20: "Chic: 15%" }
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
            <BottomNavigation 
                        bgColorHome="var(--button-highlight-light)"
                        pathColorHome="var(--white)"
                        borderStyle="60%"
                        iconWidth={36}
                        iconHeight={36}
                    />
            </div>
        </>
    );
}
