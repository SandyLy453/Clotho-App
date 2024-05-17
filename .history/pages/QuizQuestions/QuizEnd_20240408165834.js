import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

const QuizEnd = ({ selectedAnswers }) => {
    const calculateResult = (selectedAnswers) => {
        console.log(selectedAnswers);
        
        const resultMapping = {
            'A': 'Classic and Relaxed', 
            'B': 'Trendy and Seasonable', 
            'C': 'Practical and Active',
            'D': 'Comfortable and Elegant',
            
        };

        const answerString = selectedAnswers.join('');

        console.log(answerString);

        if (resultMapping.hasOwnProperty(answerString)) {
            return resultMapping[answerString];
        } else {
            return "Free-spirited";
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
                <QuizResult />
                {/* Add mascot or other content here */}
                <div className={styles.finishButtonContainer}>
                    <Link href={'/QuizQuestions/Chart'}>
                        <Button title="Check Your Style"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizEnd;
