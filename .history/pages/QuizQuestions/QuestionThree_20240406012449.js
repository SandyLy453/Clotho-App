import React, { useState } from "react";

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
            <h1>Question 3</h1>
            <p>Which celebrity's style do you admire the most?</p>
            <button onClick={() => handleAnswerSelection('A')}>A. Audrey Hepburn</button>
            <button onClick={() => handleAnswerSelection('B')}>B. Rihanna</button>
            <button onClick={() => handleAnswerSelection('C')}>C. Jennifer Aniston</button>
            <button onClick={() => handleAnswerSelection('D')}>D. Lady Gaga</button>

            {selectedAnswer !== null && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </>
    );
}

