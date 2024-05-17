import { useState } from "react";
import styles from "@/styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1); 
    const [selectedAnswer, setSelectedAnswer] = useState(null); 
    const [selectedAnswers, setSelectedAnswers] = useState([]); 
    const [quizCompleted, setQuizCompleted] = useState(false); 

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); 
    };

    const handleNextQuestion = () => {
        
        if (selectedAnswer !== null) {
            setSelectedAnswers([...selectedAnswers, selectedAnswer]);
            setSelectedAnswer(null);
        }

        // Advance to the next question
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true); 
        }
    };

    if (quizCompleted) {
        return (
            <div>
                <h1>Quiz Completed!</h1>
                <p>Thank you for completing the quiz.</p>
                <p>Your selected answers:</p>
                <ul>
                    {selectedAnswers.map((answer, index) => (
                        <li key={index}>{answer}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.mainContainer}>
                    <Image
                        src="/images/quiz/Progress Indicator.png"
                        alt="Progress Indicator"
                        width={430}
                        height={10}
                        className={styles.imageOne}
                    />
                    <div className={styles.contentContainer}>
                        <p className={styles.openSansText} tabIndex={1}>
                            Which best describes your approach to fashion?
                        </p>
                        
                        <div className={styles.optionRowOne}>
                            <ButtonTwo 
                                onClick={() => handleAnswerSelection('A')}
                                title="Finding the Right Fit"
                                className={selectedAnswer === 'A' ? styles.selected : ''}
                            />
                            <ButtonTwo 
                                onClick={() => handleAnswerSelection('B')}
                                title="Matching Colors and Patterns"
                                className={selectedAnswer === 'B' ? styles.selected : ''}
                            />
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo 
                                onClick={() => handleAnswerSelection('C')}
                                title="Finding the Right Style for the Occasion"
                                className={selectedAnswer === 'C' ? styles.selected : ''}
                            />
                            <ButtonTwo 
                                onClick={() => handleAnswerSelection('D')}
                                title="Balancing Comfort with Fashion"
                                className={selectedAnswer === 'D' ? styles.selected : ''}
                            />
                        </div>
                        

                        {selectedAnswer !== null && (
                            <div className={styles.nextButtonContainer}>
                                <Button 
                                    onClick={handleNextQuestion}
                                    title="Next"
                                />
                            </div>
                        )}

<BottomNavigation 
                        bgColorHome="var(--button-highlight-light)"
                        pathColorHome="var(--white)"
                        borderStyle="60%"
                        iconWidth={36}
                        iconHeight={36}
                    />

                        
                    </div>
                    
                </div>
            )}

            {currentQuestion === 2 && (
                <QuestionTwo
                    onNextQuestion={handleNextQuestion}
                    onAnswerSelection={handleAnswerSelection}
                />
            )}

            {currentQuestion === 3 && (
                <QuestionThree
                    onNextQuestion={handleNextQuestion}
                    onAnswerSelection={handleAnswerSelection}
                />
            )}

            {currentQuestion === 4 && (
                <QuestionFour
                    onNextQuestion={handleNextQuestion}
                    onAnswerSelection={handleAnswerSelection}
                />
            )}

            {currentQuestion === 5 && (
                <QuestionFive
                    onNextQuestion={handleNextQuestion}
                    onAnswerSelection={handleAnswerSelection}
                />
            )}

            
        </>
        
    );
}
