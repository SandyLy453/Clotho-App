import { useState } from "react";

export default function QuestionFive() {
    const [questionFive, setQuestionFive] = useState();

    return(
        <>
            <h1>Question 5</h1>
            <p>What role does fashion play in your daily life?</p>
            <button>A. Formal events like weddings or galas</button>
            <button>B. Fashion shows or parties</button>
            <button>C. Casual gatherings with friends or family</button>
            <button>D. Any opportunity to showcase my unique style</button>
        </>
    )
}

