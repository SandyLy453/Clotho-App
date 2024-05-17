import React, { useState } from "react";
import styles from "../../styles/QuestionThree.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";

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

