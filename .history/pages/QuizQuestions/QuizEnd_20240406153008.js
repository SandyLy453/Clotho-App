import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";

// Function to generate all combinations of answers
function generateCombinations() {
    const options = ['A', 'B', 'C', 'D'];
    const combinations = [];

    function generateHelper(currentCombination, questionIndex) {
        if (questionIndex === 5) {
            combinations.push(currentCombination);
            return;
        }

        for (const option of options) {
            generateHelper(currentCombination + option, questionIndex + 1);
        }
    }

    generateHelper('', 0);
    return combinations;
}

// Generate all combinations of answers
const allCombinations = generateCombinations();
console.log(allCombinations);

// QuizEnd component
const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'AAAAA': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Finding the Right Fit',
            'AAAAB': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Matching Colors and Patterns',
            'AAAAC': 'Timeless and Classic, Comfort and Fit, Casual Outings with Friends, By Clothing Type, Deciding on the Right Style for the Occasion',
            
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
    };

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
