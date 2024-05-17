import { useState } from "react";

import styles from "../../styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import QuizEnd from "./QuizEnd";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questionToAnswer = (answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);
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
                    {/* Render QuestionOne component here */}
                </div>
            )}

            {currentQuestion === 2 && (
                <QuestionTwo onNextQuestion={handleNextQuestion} />
            )}

            {currentQuestion === 3 && (
                <QuestionThree onNextQuestion={handleNextQuestion} />
            )}

            {currentQuestion === 4 && (
                <QuestionFour onNextQuestion={handleNextQuestion} />
            )}

            {currentQuestion === 5 && (
                <QuestionFive onNextQuestion={handleNextQuestion} />
            )}

            {/* Render QuizEnd component only when quiz is completed */}
            {quizCompleted && (
                <QuizEnd selectedAnswers={selectedAnswers} />
            )}
        </>
    );
}
