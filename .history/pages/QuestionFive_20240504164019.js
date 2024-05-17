import { useState } from "react";
import styles from "@/styles/QuestionFive.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";
import QuizEnd from "./QuizEnd";

export default function QuestionFive({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); 
        
    };

    const handleNextQuestion = () => {
        if (onNextQuestion) {
            onNextQuestion(selectedAnswer);
            setIsLastQuestion(true);  
        }
    };

    return (
        <div className={styles.mainContainer}>
            <Image
                src="/images/quiz/Progress Indicator-1.png"
                alt="Progress Indicator"
                width={430}
                height={10}
                className={styles.imageOne}
            />
            <div className={styles.contentContainer}>
                <p className={styles.openSansText}>When shopping for clothes, what's most important to you?</p>
                
                <div className={styles.optionRowOne}>
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('A')}
                        title="Comfort and Fit"
                        className={selectedAnswer === 'A' ? styles.selected : ''} 
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('B')}
                        title="Style and Trendiness"
                        className={selectedAnswer === 'B' ? styles.selected : ''}
                    />
                </div>
                <div className={styles.optionRowTwo}>
                    <ButtonTwo 
                        onClick={()=>  handleAnswerSelection('C')}
                        title="Affordability and Value"
                        className={selectedAnswer === 'C' ? styles.selected : ''}
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('D')}
                        title="Quality and Durability"
                        className={selectedAnswer === 'D' ? styles.selected : ''}
                    />
                </div>

                <div className={styles.nextButtonContainer}>
                                {selectedAnswer !== null && (
                                    <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} tabIndex={6}/>
                                )}
                            </div>
                        </div>
                    </div>
                
            ) : (
                <QuizEnd selectedAnswers={[selectedAnswer]} />
            )}

        );
    }
