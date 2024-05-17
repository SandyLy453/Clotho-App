import { useState } from "react";
import styles from "@/styles/QuestionFive.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";
import QuizEnd from "./QuizEnd";

export default function QuestionFive({ onQuizEnd }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizEnded, setQuizEnded] = useState(false); // Track whether the quiz has ended

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); // Update the selected answer
    };

    const handleNext = () => {
        setQuizEnded(true); // Indicate the quiz has ended
        if (onQuizEnd) {
            onQuizEnd(selectedAnswer); // Optional callback when the quiz ends
        }
    };

    if (quizEnded) {
        // If the quiz has ended, render QuizEnd
        return <QuizEnd selectedAnswers={[selectedAnswer]} />;
    }

    return (
        <div className={styles.mainContainer}>
            <Image
                src="/images/quiz/Progress Indicator-4.png"
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
                        onClick={() => handleAnswerSelection('C')}
                        title="Affordability and Value"
                        className={selectedAnswer === 'C' ? styles.selected : ''} 
                    />
                    <ButtonTwo
                        onClick={() => handleAnswerSelection('D')}
                        title="Quality and Durability"
                        className={selectedAnswer === 'D' ? styles.selected : ''} 
                    />
                </div>

                {selectedAnswer !== null && ( // Only show the "Next" button if an answer is selected
                    <div className={styles.nextButtonContainer}>
                        <Button 
                            onClick={handleNext} // Use the correct function
                            title="Next"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
