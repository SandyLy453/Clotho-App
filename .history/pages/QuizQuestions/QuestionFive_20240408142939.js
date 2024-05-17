import { useState } from "react";
import styles from "../../styles/QuestionFive.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";
import QuizEnd from "./QuizEnd";

export default function QuestionFive({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isLastQuestion, setIsLastQuestion] = useState(false);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); 
    };

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer);
        setIsLastQuestion(true); 
    }

    return (
        <>
            {!isLastQuestion ? (
                <div className={styles.mainContainer}>
                    
                    <Image
                        src="/images/quiz/Progress Indicator-4.png"
                        alt="Progress Indicator question 5"
                        width={430}
                        height={10}
                        className={styles.imageOne}
                    />
                    <div className={styles.contentContainer}>

                        <div className={styles.optionContainer}>
                            <p className={styles.openSansText} tabIndex={1}>What challenges do you face when choosing outfits?</p>
                            <div className={styles.optionRowOne}>
                                <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Finding the Right Fit" className={styles.optionRowInnerOne} tabIndex={2}/>
                                <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Matching Colors and Patterns" className={styles.optionRowInnerTwo} tabIndex={3}/>
                            </div>
                            <div className={styles.optionRowTwo}>
                                <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Finding the Right Style for the Occasion" className={styles.optionRowInnerThree} tabIndex={4}/>
                                <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Balancing Comfort with Fashion" className={styles.optionRowInnerFour} tabIndex={5}/>
                            </div>

                            <div className={styles.nextButtonContainer}>
                                {selectedAnswer !== null && (
                                    <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} tabIndex={6}/>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <QuizEnd selectedAnswers={[selectedAnswer]} />
            )}
        </>
    );
}
