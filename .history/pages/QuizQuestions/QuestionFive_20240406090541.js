import React, { useState } from "react";
import styles from "../../styles/QuestionFive.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

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

        <div className={styles.imageOne}>
                <Image
                    src="/images/quiz/Progress Indicator-5.png"
                    alt="Progress Indicator question 5"
                    width={430} 
                    height={10}
                />
            </div>

            
            <p>What challenges do you face when choosing outfits?</p>
            <ButtonTwo onClick={() => handleAnswerSelection('A')}title="Option A"/>
            <ButtonTwo onClick={() => handleAnswerSelection('B')}title="Option B"/>
            <ButtonTwo onClick={() => handleAnswerSelection('C')}title="Option C"/>
            <ButtonTwo onClick={() => handleAnswerSelection('D')}title="Option D"/>

            {selectedAnswer !== null && (
                <Button onClick={handleNextQuestion}title="Next"/>
            )}
        </div>
           
        </>
    );
}
