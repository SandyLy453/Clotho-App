import styles from "@/styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult"; 
import Chart from './Chart';


const QuizEnd = ({ selectedAnswers }) => {
    const calculateResult = (selectedAnswers) => {
        console.log("Selected answers:", selectedAnswers);
        
        const resultMapping = {
            'A': 'Classic and Relaxed', 
            'B': 'Trendy and Seasonable', 
            'C': 'Practical and Active',
            'D': 'Comfortable and Elegant',
        };

        const lastAnswer = selectedAnswers[selectedAnswers.length - 1];
        return resultMapping[lastAnswer];
    };

   
    const resultType = selectedAnswers[selectedAnswers.length - 1];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
                
                <QuizResult resultType={resultType} />
                {/* Add mascot or other content here */}

                <Chart resultType={resultType} />

                <div className={styles.finishButtonContainer}>
                    <Link href={'/QuizQuestions/Chart'}>
                        <Button title="Finish"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizEnd;
