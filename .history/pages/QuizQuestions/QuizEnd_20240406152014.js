import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";

const QuizEnd = ({ selectedAnswers }) => {
    // Calculate the result based on the selected answers
    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'AAAAA': 'Result 1',
    'AAAAB': 'Result 2',
    'AAAAC': 'Result 3',
    'AAAAD': 'Result 4',
    'AAABA': 'Result 5',
    'AAABB': 'Result 6',
    'AAABC': 'Result 7',
    'AAABD': 'Result 8',
    'AAACA': 'Result 9',
    'AAACB': 'Result 10',
    'AAACC': 'Result 11',
    'AAACD': 'Result 12',
    'AAADA': 'Result 13',
    'AAADB': 'Result 14',
    'AAADC': 'Result 15',
    'AAADD': 'Result 16',
    'AABAA': 'Result 17',
    'AABAB': 'Result 18',
    'AABAC': 'Result 19',
    'AABAD': 'Result 20',
    'AABBA': 'Result 21',
    'AABBB': 'Result 22',
    'AABBC': 'Result 23',
    'AABBD': 'Result 24',
    'AABCA': 'Result 25',
    'AABCB': 'Result 26',
    'AABCC': 'Result 27',
    'AABCD': 'Result 28',
    'AABDA': 'Result 29',
    'AABDB': 'Result 30',
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
