import { useState } from "react";
import styles from "@/styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerSelection = (question, answer) => {
        setSelectedAnswers({ ...selectedAnswers, [question]: answer });
    };

    const handleNextQuestion = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Quiz Completed");
        }
    };

    const isSelected = (question, answer) => selectedAnswers[question] === answer;

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.mainContainer}>
                    <Image
                        src="/images/quiz/Progress Indicator.png"
                        alt="Progress Indicator question 1"
                        width={430}
                        height={10}
                    />
                    <div className={styles.contentContainer}>
                        <p className={styles.openSansText} tabIndex={1}>Which best describes your approach to fashion?</p>
                        <div className={styles.optionRow}>
                            <ButtonTwo
                                onClick={() => handleAnswerSelection(1, 'A')}
                                title="Timeless and Classic"
                                className={isSelected(1, 'A') ? styles.selected : styles.option}
                                tabIndex={2}
                            />
                            <ButtonTwo
                                onClick={() => handleAnswerSelection(1, 'B')}
                                title="Bold and Trendy"
                                className={isSelected(1, 'B') ? styles.selected : styles.option}
                                tabIndex={3}
                            />
                            <ButtonTwo
                                onClick={() => handleAnswerSelection(1, 'C')}
                                title="Simple and Practical"
                                className={isSelected(1, 'C') ? styles.selected : styles.option}
                                tabIndex={4}
                            />
                            <ButtonTwo
                                onClick={() => handleAnswerSelection(1, 'D')}
                                title="Unique and Free-spirited"
                                className={isSelected(1, 'D') ? styles.selected : styles.option}
                                tabIndex={5}
                            />
                        </div>
                        <div className={styles.nextButtonContainer}>
                            {selectedAnswers[1] && (
                                <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} tabIndex={6} />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {currentQuestion === 2 && (
                <QuestionTwo onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 3 && (
                <QuestionThree onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 4 && (
                <QuestionFour onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 5 && (
                <QuestionFive onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}
        </>
    );
}
