import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";

const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'ABCDE': 'Result 1',
            'ACDBE': 'Result 2',
            'BCDAE': 'Result 3',
            // Add more combinations and corresponding results as needed
        };

        // Convert the selected answers array to a string
        const answerString = selectedAnswers.join('');

        // Check if the answer combination exists in the result mapping
        if (resultMapping.hasOwnProperty(answerString)) {
            // Return the corresponding result
            return resultMapping[answerString];
        } else {
            // Handle cases where the answer combination is not found
            return "No result found for selected answers";
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
                {/* Add your mascot or other content here */}

                <div className={styles.finishButtonContainer}>
                    <Link href={'/'}>
                        <Button title="Finish" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizEnd;
