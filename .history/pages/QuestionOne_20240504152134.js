import { useState } from "react";
import styles from "@/styles/QuestionOne.module.css";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionOne() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={styles.mainContainer}>
            <Image
                src="/images/quiz/Progress Indicator.png"
                alt="Progress Indicator question 1"
                width={430}
                height={10}
            />
            <div className={styles.contentContainer}>
                <p className={styles.openSansText} tabIndex={1}>Which best describes your approach to fashion?</p>
                <div className={styles.optionRow}>
                    <ButtonTwo
                        onClick={() => handleOptionClick("A")}
                        title="Timeless and Classic"
                        className={selectedOption === "A" ? styles.selected : styles.option}
                        tabIndex={2}
                    />
                    <ButtonTwo
                        onClick={() => handleOptionClick("B")}
                        title="Bold and Trendy"
                        className={selectedOption === "B" ? styles.selected : styles.option}
                        tabIndex={3}
                    />
                    <ButtonTwo
                        onClick={() => handleOptionClick("C")}
                        title="Simple and Practical"
                        className={selectedOption === "C" ? styles.selected : styles.option}
                        tabIndex={4}
                    />
                    <ButtonTwo
                        onClick={() => handleOptionClick("D")}
                        title="Unique and Free-spirited"
                        className={selectedOption === "D" ? styles.selected : styles.option}
                        tabIndex={5}
                    />
                </div>
                {selectedOption && (
                    <div className={styles.nextButtonContainer}>
                        <Button title="Next" className={styles.nextButton} tabIndex={6} />
                    </div>
                )}
           
  

            {currentQuestion === 2 && (
                <QuestionTwo onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 3 && (
                <QuestionThree onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 4 && (
                <QuestionFour onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}

            {currentQuestion === 5 && (
                <QuestionFive onNextQuestion={handleNextQuestion} onAnswerSelection={handleAnswerSelection} />
            )}
        </>
    );
}
