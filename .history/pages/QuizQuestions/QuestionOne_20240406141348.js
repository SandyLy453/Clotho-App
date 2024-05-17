import { useState } from "react";
import styles from "../../styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

// Dummy Result component for testing
const Result = ({ result }) => <p>Result: {result}</p>;

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questionToAnswer = (answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);
    }

    const handleNextQuestion = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    }

    const calculateResult = (selectedAnswers) => {
        // Define the mapping of selected answers to result categories
        const resultMapping = {
            'A': {
                'A': 'Casual Outfit',
                'B': 'Trendy Outfit',
                'C': 'Practical Outfit',
                'D': 'Bohemian Outfit'
            },
            'B': {
                'A': 'Comfortable Outfit',
                'B': 'Stylish Outfit',
                'C': 'Affordable Outfit',
                'D': 'Durable Outfit'
            },
            'C': {
                'A': 'Casual Event',
                'B': 'Formal Event',
                'C': 'Work Event',
                'D': 'Outdoor Event'
            },
            'D': {
                'A': 'Organized by Clothing Type',
                'B': 'Organized by Occasion',
                'C': 'Organized by Color',
                'D': 'Organized by Season'
            },
            'E': {
                'A': 'Fit',
                'B': 'Color Matching',
                'C': 'Style Selection',
                'D': 'Comfort vs Fashion'
            }
        };
    
        // Initialize an empty result
        let result = "";
    
        // Iterate over the selected answers and determine the result
        for (let i = 0; i < selectedAnswers.length; i++) {
            const question = String.fromCharCode(65 + i); // Convert index to letter A, B, C, D, E
            const answer = selectedAnswers[i];
    
            // Check if the answer is valid
            if (resultMapping[question] && resultMapping[question][answer]) {
                // Concatenate the result for each question
                result += `${resultMapping[question][answer]} `;
            } else {
                // Handle invalid answers
                return "Invalid answer selected";
            }
        }
    
        // Return the final result
        return result;
    }
    

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.mainContainer}>
                    <Image
                        src="/images/quiz/Progress Indicator.png"
                        alt="Progress Indicator question 1"
                        width={430}
                        height={10}
                        className={styles.imageOne}
                    />
                    <div className={styles.contentContainer}>
                        <div className={styles.optionContainer}>
                            <p className={styles.openSansText}>Which best describes your approach to fashion?</p>
                            <div className={styles.optionRowOne}>
                                <ButtonTwo onClick={() => questionToAnswer('A')} title="Timeless and Classic" className={styles.optionRowInnerOne}/>
                                <ButtonTwo onClick={() => questionToAnswer('B')} title="Bold and Trendy" className={styles.optionRowInnerTwo}/>
                            </div>
                            <div className={styles.optionRowTwo}>
                                <ButtonTwo onClick={() => questionToAnswer('C')} title="Simple and Practical" className={styles.optionRowInnerThree}/>
                                <ButtonTwo onClick={() => questionToAnswer('D')} title="Unique and Free-spirited" className={styles.optionRowInnerFour}/>
                            </div>
                            <div className={styles.nextButtonContainer}>
                                {selectedAnswers.length > 0 && (
                                    <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Render other questions based on currentQuestion */}
            {/* Include <Result /> component when quizCompleted */}
            {quizCompleted && <Result result={calculateResult(selectedAnswers)} />}
        </>
    );
}
