import { useState } from "react";

export default function QuestionFour() {
    const [questionFour, setQuestionFour] = useState();

    return(
        <>
            <h1>Question 4</h1>
            <p>What kind of events do you typically dress up for?</p>
            <button>a. Classic and timeless</button>
            <button>b. Trendy and experimental</button>
            <button>c. Comfortable and casual</button>
            <button>d. Eclectic and unique</button>
        </>
    )
}

