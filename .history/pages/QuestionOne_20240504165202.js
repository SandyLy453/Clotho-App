import { useState } from "react";
import styles from "@/styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); 
        
    };
    
    
    
    const handleNextQuestion = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

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
                            <p className={styles.openSansText} tabIndex={1}>Which best describes your approach to fashion?</p>
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
                        onClick={()=>  handleAnswerSelection('C')}
                        title="Finding the Right Style for the Occasion"
                        className={selectedAnswer === 'C' ? styles.selected : ''}
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('D')}
                        title="Balancing Comfort with Fashion"
                        className={selectedAnswer === 'D' ? styles.selected : ''}
                    />
                </div>

                <div className={styles.nextButtonContainer}>
                {selectedAnswer !== null && (
                    <div className={styles.nextButtonContainer}>
                        <Button 
                            onClick={handleNextQuestion}
                            title="Next"
                        />
                    </div>
                )}
                </div>
                            </div>
                        </div>
                    </div>
                
            )}

            {currentQuestion === 2 && (
                <QuestionTwo onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 3 && (
                <QuestionThree onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 4 && (
                <QuestionFour onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 5 && (
                <QuestionFive onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}
        </>
    );
}
