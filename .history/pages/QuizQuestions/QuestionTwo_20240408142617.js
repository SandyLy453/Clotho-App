import { useState } from "react";
import styles from "../../styles/QuestionTwo.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionTwo({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        handleAnswerSelection(answer);
    };

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
                    className={styles.imageOne}
                    />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText} tabIndex={1}>When shopping for clothes, what's most important to you?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Comfort and Fit" className={styles.optionRowInnerOne} tabIndex={2}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Style and Trendiness" className={styles.optionRowInnerTwo} tabIndex={3}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Affordability and Value" className={styles.optionRowInnerThree} tabIndex={4}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Quality and Durability" className={styles.optionRowInnerFour} tabIndex={5}/>
                        </div>
                   
                        <div className={styles.nextButtonContainer}>
                        {selectedAnswer !== null && (
                            <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} tabIndex={6}/>
                        )}
                        </div>
                    </div>
                    
                </div>
                    </div>
               
            
            
        </>
    );
}
