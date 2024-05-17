import { useState } from "react";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";

export default function QuestionOne() {
    const [data, setData] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showMessage, setShowMessage] = useState(false);

    const questionToAnswer = () => {
        setCurrentQuestion(currentQuestion + 1);
    }
    
    const message =() => {
        setData("Excellent! Let's move to next question!");
        setShowMessage(!showMessage);
        questionToAnswer();
    }

    return(
        <>
            {currentQuestion === 1 && (
                <>
                    <h1>Question 1</h1>
                    <p>Which of the following best describes your approach to fashion?</p>
                    <button>A. Classic and timeless</button>
                    <button>B. Trendy and experimental</button>
                    <button>C. Comfortable and casual</button>
                    <button>D. Eclectic and unique</button>
                </>
            )}

            <button onClick={() => message()}>Next Question</button>

            {currentQuestion === 2 && (
                <QuestionTwo questionToAnswer={data}/>
            )}
            
            

            {currentQuestion === 3 && (
                <QuestionThree />
            )}
           
            

            {currentQuestion === 4 && (
                <QuestionThree />
            )}
           
            



            
        

        </>
    )
}

