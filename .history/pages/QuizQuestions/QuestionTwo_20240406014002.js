import React, { useState } from 'react';

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
            <h1>Question 2</h1>
            <p>Which best describes your approach to fashion?</p>
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
