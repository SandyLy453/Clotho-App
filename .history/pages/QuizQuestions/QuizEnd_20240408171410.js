import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

const QuizEnd = ({ selectedAnswers }) => {
    const calculateResult = (selectedAnswers) => {
        console.log("Selected answers:", selectedAnswers);
        
        const resultMapping = {
            'AAAAA': 'Classic',
            'AAAAB': 'Trendy',
            'AAAAC': 'Practical',
            'AAAAD': 'Comfortable',
            'BAAAA': 'Stylish',
            'CAAAA': 'Professional',
            'DAAAA': 'Active',
            'AABAA': 'Seasonable',
            'AACAA': 'Relaxed',
        };

        const answerString = selectedAnswers.join('');

        console.log("Answer string:", answerString);

        const result = resultMapping[answerString];
        if (result) {
            console.log("Result:", result);
            return result;
        } else {
            console.error("No matching result found for answer string:", answerString);
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
