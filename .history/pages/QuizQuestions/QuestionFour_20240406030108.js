import React, { useState } from "react";
import styles from "../../styles/QuestionFour.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";


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
        <div className={styles.container}>
            <h1>Question 4</h1>
            <p>How do you usually organize your wardrobe?</p>
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
