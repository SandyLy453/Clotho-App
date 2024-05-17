import { useState } from "react";
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
                    <h3>
                        Question: 1
                        <span>/5</span>
                    </h3>
                    <Image
                    src="/images/quiz/Progress Indicator-1.png"
                    alt="Progress Indicator question 1"
                    width={430} 
                    height={10}
                    className={styles.imageOne}
                    />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>When shopping for clothes, what's most important to you?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Comfort and Fit" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Style and Trendiness" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Affordability and Value" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Quality and Durability" className={styles.optionRowInnerFour}/>
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
