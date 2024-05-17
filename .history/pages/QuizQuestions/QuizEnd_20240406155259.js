import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";

// QuizEnd component
const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'AAAAA': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Finding the Right Fit',
            'AAAAB': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Matching Colors and Patterns',
            'AAAAC': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Deciding on the Right Style for the Occasion',
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
            return "Seems like you are a free spirit";
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
                {/* Add mascot or other content here */}

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

