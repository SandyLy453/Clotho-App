import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

const QuizEnd = ({ selectedAnswers }) => {
    const calculateResult = (selectedAnswers) => {
        console.log(selectedAnswers);
        
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

        console.log("Result mapping:", resultMapping);

        const answerString = selectedAnswers.join('');
        
        console.log("Answer string:", answerString);
    
        if (resultMapping.hasOwnProperty(answerString)) {
            const result = resultMapping[answerString];
            console.log("Result:", result);
            return result;
        } else {
            console.log("Result: Free-spirited");
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
