import { useState } from "react";

export default function QuestionFour() {
    const [questionFour, setQuestionFour] = useState();

    return(
        <>
            <h1>Question 4</h1>
            <p>What kind of events do you typically dress up for?</p>
            <button>A. Formal events like weddings or galas</button>
            <button>B. Fashion shows or parties</button>
            <button>C. Casual gatherings with friends or family</button>
            <button>D. Any opportunity to showcase my unique style</button>
        </>
    )
}

