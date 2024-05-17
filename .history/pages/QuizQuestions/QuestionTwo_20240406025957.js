import React, { useState } from 'react';
import styles from "../../styles/QuestionTwo.module.css";

export default function QuestionTwo({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion(); 
    }

    return (
        <>
            <div className={styles.container}>
            <h1>Question 2</h1>
            <p>When shopping for clothes, what's most important to you?</p>
            <ButtonTwo onClick={() => questionToAnswer('A')}title="Option A"/>
            <ButtonTwo onClick={() => questionToAnswer('B')}title="Option B"/>
            <ButtonTwo onClick={() => questionToAnswer('C')}title="Option C"/>
            <ButtonTwo onClick={() => questionToAnswer('D')}title="Option D"/>
            </div>
            {selectedAnswer !== null && (
                 <Button onClick={handleNextQuestion}title="Next"/>
            )}
        </>
    );
}
