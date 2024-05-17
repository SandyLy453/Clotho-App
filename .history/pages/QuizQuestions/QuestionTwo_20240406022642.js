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
            <button onClick={() => handleAnswerSelection('A')}>Option 1</button>
            <button onClick={() => handleAnswerSelection('B')}>Option 2</button>
            <button onClick={() => handleAnswerSelection('C')}>Option 3</button>
            <button onClick={() => handleAnswerSelection('D')}>Option 4</button>
            </div>
            {selectedAnswer !== null && (
                 <Button onClick={handleNextQuestion}title="Next"/>
            )}
        </>
    );
}
