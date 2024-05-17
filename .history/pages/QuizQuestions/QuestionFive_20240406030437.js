import React, { useState } from "react";
import styles from "../../styles/QuestionFive.module.css";


export default function QuestionFive({ onNextQuestion }) {
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
            <h1>Question 5</h1>
            <p>What challenges do you face when choosing outfits?</p>
            <ButtonTwo onClick={() => handleAnswerSelection('A')}title="Option A"/>
            <ButtonTwo onClick={() => handleAnswerSelection('B')}title="Option B"/>
            <ButtonTwo onClick={() => handleAnswerSelection('C')}title="Option C"/>
            <ButtonTwo onClick={() => handleAnswerSelection('D')}title="Option D"/>
        </div>
            {selectedAnswer !== null && (
                <Button onClick={handleNextQuestion}title="Next"/>
            )}
        </>
    );
}
