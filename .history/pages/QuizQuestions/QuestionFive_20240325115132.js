import { useState } from "react";

export default function QuestionFive() {
    const [questionFive, setQuestionFive] = useState();

    return(
        <>
            <h1>Question 5</h1>
            <p>What role does fashion play in your daily life?</p>
            <button>A. It's a reflection of my values and personality</button>
            <button>B. It's a way to experiment and have fun</button>
            <button>C. It's about practicality and comfort</button>
            <button>D. It's a form of self-expression and creativity</button>
        </>
    )
}
