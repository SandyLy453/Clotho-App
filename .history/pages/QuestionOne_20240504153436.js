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
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswers(answer);
    };
    
    
    const handleNextQuestion = () => {
        if (currentQuestion < 5) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.mainContainer}>
                    <Image
                        src="/images/quiz/Progress Indicator.png"
                        alt="Progress Indicator question 1"
                        width={430}
                        height={10}
                        className={styles.imageOne}
                    />
                    <div className={styles.contentContainer}>
                        <div className={styles.optionContainer}>
                            <p className={styles.openSansText} tabIndex={1}>Which best describes your approach to fashion?</p>
                            <div className={styles.optionRowOne}>
                                <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Timeless and Classic" className={selectedAnswers === "A" ? styles.selected : styles.answer} tabIndex={2}/>
                                <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Bold and Trendy" className={selectedAnswers === "B" ? styles.selected : styles.answer} tabIndex={3}/>
                            </div>
                            <div className={styles.optionRowTwo}>
                                <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Simple and Practical" className={styles.optionRowInnerThree} tabIndex={4}/>
                                <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Unique and Free-spirited" className={styles.optionRowInnerFour} tabIndex={5}/>
                            </div>
                            <div className={styles.nextButtonContainer}>
                                {selectedAnswers.length > 0 && (
                                    <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} tabIndex={6}/>
                                )}
                            </div>
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
