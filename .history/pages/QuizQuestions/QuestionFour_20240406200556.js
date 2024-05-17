import { useState } from "react";
import styles from "../../styles/QuestionFour.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionFour({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer); 
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <h3>
                    Question: 4
                    <span>/5</span>
                </h3>
                <Image
                src="/images/quiz/Progress Indicator-3.png"
                alt="Progress Indicator question 4"
                width={430} 
                height={10}
                className={styles.imageOne}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>How do you usually organize your wardrobe?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="By Clothing Type" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="By Occasion" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="By Color Coordination" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="By Season" className={styles.optionRowInnerFour}/>
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
