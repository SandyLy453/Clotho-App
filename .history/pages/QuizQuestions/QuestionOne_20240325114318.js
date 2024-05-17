import { useState } from "react";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";

export default function QuestionOne() {
    const [data, setData] = useState();

    const questionOneToAnswer = () => {
        setData("Excellent! Let's move to next question!")
    }

    return(
        <>
            <h1>Question 1</h1>
            <p>Which of the following best describes your approach to fashion?</p>
            <button>a. Classic and timeless</button>
            <button>b. Trendy and experimental</button>
            <button>c. Comfortable and casual</button>
            <button>d. Eclectic and unique</button>

            <button onClick={() => questionOneToAnswer()}>Next Question</button>


            <QuestionTwo questionOneToAnswer={data}/>
            <button onClick={() => questionOneToAnswer()}>Next Question</button>

        </>
    )
}

