import { useState } from "react";
import styles from "../../styles/QuestionThree.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionThree({ onNextQuestion }) {
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
                    <Image
                    src="/images/quiz/Progress Indicator-2.png"
                    alt="Progress Indicator question 3"
                    width={430} 
                    height={10}
                    className={styles.imageOne}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>What kind of events do you typically dress up for?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Casual Outings with Friends" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Formal Occasions" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Work or Business Events" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Outdoor Activities like Hiking or Sports" className={styles.optionRowInnerFour}/>
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
