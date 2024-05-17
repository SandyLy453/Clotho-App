import { useState } from "react";
import styles from "../../styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questionToAnswer = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); 
    }

    return (
        <>
            {currentQuestion === 1 && (
                <div className={styles.container}>
                    <h1>Question 1</h1>
                    <p>Which best describes your approach to fashion?</p>
                    <ButtonTwo onClick={() => questionToAnswer('A')}title="Option A"/>
                    <button onClick={() => questionToAnswer('B')}>B. Option B</button>
                    <button onClick={() => questionToAnswer('C')}>C. Option C</button>
                    <button onClick={() => questionToAnswer('D')}>D. Option D</button>
                    {selectedAnswer !== null && (
                        <ButtonOne onClick={handleNextQuestion}title="Next"/>
                    )}
                </div>
            )}

            {currentQuestion === 2 && <QuestionTwo onNextQuestion={handleNextQuestion} />}
            {currentQuestion === 3 && <QuestionThree onNextQuestion={handleNextQuestion} />}
            {currentQuestion === 4 && <QuestionFour />}
            {currentQuestion === 5 && <QuestionFive />}
        </>
    );
}
