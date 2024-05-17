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
        if (onNextQuestion) {
            onNextQuestion(selectedAnswer); 
        }
    };

    return (
        <div className={styles.mainContainer}>
            <Image
                src="/images/quiz/Progress Indicator-2.png"
                alt="Progress Indicator"
                width={430}
                height={10}
                className={styles.imageOne}
            />
            <div className={styles.contentContainer}>
                <p className={styles.openSansText}>What kind of events do you typically dress up for?</p>
                
                <div className={styles.optionRowOne}>
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('A')}
                        title="Casual Outings with Friends"
                        className={selectedAnswer === 'A' ? styles.selected : ''} 
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('B')}
                        title="Formal Occasions"
                        className={selectedAnswer === 'B' ? styles.selected : ''}
                    />
                </div>
                <div className={styles.optionRowTwo}>
                    <ButtonTwo 
                        onClick={()=>  handleAnswerSelection('C')}
                        title="Work or Business Events"
                        className={selectedAnswer === 'C' ? styles.selected : ''}
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('D')}
                        title="Outdoor Activities like Hiking or Sports"
                        className={selectedAnswer === 'D' ? styles.selected : ''}
                    />
                </div>

                <div className={styles.nextButtonContainer}></div>
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
    );
}
