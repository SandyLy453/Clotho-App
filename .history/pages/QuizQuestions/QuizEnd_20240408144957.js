import React from 'react';
import styles from "../../styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult";

const QuizEnd = ({ selectedAnswers }) => {
    // Log the answerString generated from selectedAnswers
    const answerString = selectedAnswers.join('');
    console.log("Answer String:", answerString);

    // Define the result mapping
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

    const calculateResult = (selectedAnswers) => {
        // Check if the answerString matches any key in the result mapping
        if (resultMapping.hasOwnProperty(answerString)) {
            return resultMapping[answerString];
        } else {
            return "Free-spirited";
        }
    };

    // Log the calculated result
    const result = calculateResult(selectedAnswers);
    console.log("Calculated Result:", result);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                <p>Your Ideal Outfit Type is {result}</p>
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
