import React, { useState } from 'react';
import styles from "../../styles/QuestionTwo.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionTwo({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion();
    }

    return (
        <>
                    <div className={styles.mainContainer}>
                    <Image
                    src="/images/quiz/Progress Indicator-1.png"
                    alt="Progress Indicator question 1"
                    width={430} 
                    height={10}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>When shopping for clothes, what's most important to you?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => questionToAnswer('A')} title="Option A" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => questionToAnswer('B')} title="Option B" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => questionToAnswer('C')} title="Option C" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => questionToAnswer('D')} title="Option D" className={styles.optionRowInnerFour}/>
                        </div>
                   
                        <div className={styles.nextButtonContainer}>
                        {selectedAnswer !== null && (
                            <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} />
                        )}
                        </div>
                    </div>
                    
                </div>
                    </div>
               
            
            
        </>
    );
}
