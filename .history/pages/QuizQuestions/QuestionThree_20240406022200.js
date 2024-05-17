import React, { useState } from "react";
import styles from "../../styles/QuestionThree.module.css";

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
         <div className={styles.container}>
            <h1>Question 3</h1>
            <p>What kind of events do you typically dress up for?</p>
            <button onClick={() => handleAnswerSelection('A')}>Option 1</button>
            <button onClick={() => handleAnswerSelection('B')}>Option 2</button>
            <button onClick={() => handleAnswerSelection('C')}>Option 3</button>
            <button onClick={() => handleAnswerSelection('D')}>Option 4</button>
        </div>
            {selectedAnswer !== null && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </>
    );
}

