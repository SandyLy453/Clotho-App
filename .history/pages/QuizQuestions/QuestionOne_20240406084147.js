import { useState } from "react";
import styles from "../../styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

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
                <div className={styles.container}>
                    
                    <div className={styles.imageOne}>
                        <Image
                        src="/images/quiz/Progress Indicator-1.png"
                        alt="Progress Indicator question 1"
                        width={100} 
                        height={100}
                        />
                    </div>
                    <p>Which best describes your approach to fashion?</p>
                    <ButtonTwo onClick={() => questionToAnswer('A')}title="Option A"/>
                    <ButtonTwo onClick={() => questionToAnswer('B')}title="Option B"/>
                    <ButtonTwo onClick={() => questionToAnswer('C')}title="Option C"/>
                    <ButtonTwo onClick={() => questionToAnswer('D')}title="Option D"/>
                    {selectedAnswer !== null && (
                        <Button onClick={handleNextQuestion}title="Next"/>
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
