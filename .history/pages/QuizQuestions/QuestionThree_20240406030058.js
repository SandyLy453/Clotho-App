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

