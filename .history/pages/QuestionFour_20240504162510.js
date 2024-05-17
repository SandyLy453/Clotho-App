import { useState } from "react";
import styles from "@/styles/QuestionFour.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionTwo({ onNextQuestion }) {
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
                src="/images/quiz/Progress Indicator-1.png"
                alt="Progress Indicator"
                width={430}
                height={10}
                className={styles.imageOne}
            />
            <div className={styles.contentContainer}>
                <p className={styles.openSansText}>How do you usually organize your wardrobe?</p>
                
                <div className={styles.optionRowOne}>
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('A')}
                        title="By Clothing Type"
                        className={selectedAnswer === 'A' ? styles.selected : ''} 
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('B')}
                        title="By Occasion"
                        className={selectedAnswer === 'B' ? styles.selected : ''}
                    />
                </div>
                <div className={styles.optionRowTwo}>
                    <ButtonTwo 
                        onClick={()=>  handleAnswerSelection('C')}
                        title="By Colour Coordination"
                        className={selectedAnswer === 'C' ? styles.selected : ''}
                    />
                    <ButtonTwo 
                        onClick={() => handleAnswerSelection('D')}
                        title="By Season"
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
