import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

// QuizEnd component

const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'AAAAA': 'Classic',
            'AAAAB': 'Trendy',
            'AAAAC': 'Practical',
            // Add more mappings as needed
        };

        // Convert the selected answers array to a string
        const answerString = selectedAnswers.join('');

        // Check if the answer combination exists in the result mapping
        if (resultMapping.hasOwnProperty(answerString)) {
            // Return the corresponding result
            return resultMapping[answerString];
        } else {
            // Handle cases where the answer combination is not found
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

