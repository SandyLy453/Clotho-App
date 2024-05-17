import { useState } from "react";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";

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
                <div>
                    <h1>Question 1</h1>
                   
                    <button onClick={() => questionToAnswer('A')}>A. Option A</button>
                    <button onClick={() => questionToAnswer('B')}>B. Option B</button>
                    <button onClick={() => questionToAnswer('C')}>C. Option C</button>
                    <button onClick={() => questionToAnswer('D')}>D. Option D</button>
                    {selectedAnswer !== null && (
                        <button onClick={handleNextQuestion}>Next Question</button>
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
