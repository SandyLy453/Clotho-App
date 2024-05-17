import { useState } from "react";

export default function QuestionTwo() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer); 
    }

    return (
        <>
            <h1>Question 2</h1>
            <p>How do you usually organize your wardrobe?</p>
            <button onClick={() => handleAnswerSelection('A')}>A. By color and style coordination</button>
            <button onClick={() => handleAnswerSelection('B')}>B. By seasonal trends</button>
            <button onClick={() => handleAnswerSelection('C')}>C. By what's clean and ready to wear</button>
            <button onClick={() => handleAnswerSelection('D')}>D. In a mix-and-match manner</button>

            {selectedAnswer !== null && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </>
    );
}