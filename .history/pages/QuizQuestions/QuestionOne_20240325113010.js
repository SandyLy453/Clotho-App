import { useState } from "react";

export default function QuestionOne() {
    const [data, setData] = useState();

    const questionOneToAnswer = () => {
        setData("Excellent! Let's move to next question!")
    }

    return(
        <>
            <h1>Question 1</h1>
            <p></p>
            <button onClick={() => questionOneToAnswer()}>Next Question</button>

        </>
    )
}

