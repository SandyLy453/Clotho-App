import { useState } from "react";
import styles from "@/styles/QuestionThree.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionThree({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); 
    };

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer); 
    }

    return (
        <>
                    <div className={styles.mainContainer}>
                    
                    <Image
                    src="/images/quiz/Progress Indicator-2.png"
                    alt="Progress Indicator question 3"
                    width={430} 
                    height={10}
                    className={styles.imageOne}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText} tabIndex={1}>What kind of events do you typically dress up for?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Casual Outings with Friends" className={styles.optionRowInnerOne} tabIndex={2}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Formal Occasions" className={styles.optionRowInnerTwo} tabIndex={3}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Work or Business Events" className={styles.optionRowInnerThree} tabIndex={4}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Outdoor Activities like Hiking or Sports" className={styles.optionRowInnerFour} tabIndex={5}/>
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
