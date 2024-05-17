import React, { useState } from 'react';
import styles from "../../styles/QuestionTwo.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

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
            <div className={styles.container}>

            <div className={styles.imageOne}>
                <Image
                    src="/images/quiz/Progress Indicator-1.png"
                    alt="Progress Indicator question 1"
                    width={430} 
                    height={10}
                />
            </div>

            
            <p>When shopping for clothes, what's most important to you?</p>
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
