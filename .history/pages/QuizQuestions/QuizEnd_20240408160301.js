import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

const calculateResult = (selectedAnswers) => {
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

    // Construct the answer string from selected answers
    const answerString = selectedAnswers.join('');

    console.log("Answer string:", answerString); // Log the answer string

    // Check if the answer string exists in the result mapping
    if (resultMapping.hasOwnProperty(answerString)) {
        const result = resultMapping[answerString];
        console.log("Result:", result); // Log the calculated result
        return result;
    } else {
        console.log("No matching result found for answer string:", answerString);
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
