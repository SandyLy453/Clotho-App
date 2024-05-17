import { useState } from "react";
import QuestionTwo from "./QuestionTwo";

export default function QuestionOne() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // State to store selected answer for Question 1

    const questionToAnswer = () => {
        setCurrentQuestion(currentQuestion + 1);
    }

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer); // Update selected answer state
    }

    const handleNextQuestion = () => {
        questionToAnswer(); // Proceed to the next question
        setSelectedAnswer(null); // Reset selected answer for the next question
    }

    return(
        <>
            {currentQuestion === 1 && (
                <>
                    <h1>Question 1</h1>
                    <p>Which of the following best describes your approach to fashion?</p>
                    <button onClick={() => handleAnswerSelection('A')} className={selectedAnswer === 'A' ? 'selected' : ''}>A. Classic and timeless</button>
                    <button onClick={() => handleAnswerSelection('B')} className={selectedAnswer === 'B' ? 'selected' : ''}>B. Trendy and experimental</button>
                    <button onClick={() => handleAnswerSelection('C')} className={selectedAnswer === 'C' ? 'selected' : ''}>C. Comfortable and casual</button>
                    <button onClick={() => handleAnswerSelection('D')} className={selectedAnswer === 'D' ? 'selected' : ''}>D. Eclectic and unique</button>
                    {selectedAnswer !== null && (
                        <button onClick={handleNextQuestion}>Next Question</button>
                    )}
                </>
            )}

            {currentQuestion === 2 && (
                <QuestionTwo onNextQuestion={handleNextQuestion} />
            )}

            {/* Render other questions similarly */}
        </>
    )
}
