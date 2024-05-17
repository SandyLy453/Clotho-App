import React, { useState } from "react";
import styles from "../../styles/QuestionFour.module.css";


export default function QuestionFour({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer); 
    }

    return (
        <>
            <h1>Question 4</h1>
            <p>How do you usually organize your wardrobe?</p>
            <button onClick={() => handleAnswerSelection('A')}>Option 1</button>
            <button onClick={() => handleAnswerSelection('B')}>Option 2</button>
            <button onClick={() => handleAnswerSelection('C')}>Option 3</button>
            <button onClick={() => handleAnswerSelection('D')}>Option 4</button>

            {selectedAnswer !== null && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </>
    );
}
