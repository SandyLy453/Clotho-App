import { useState } from "react";

export default function QuestionThree() {
    const [questionThree, setQuestionThree] = useState();

    return(
        <>
            <h1>Question 3</h1>
            <p>Which celebrity's style do you admire the most?</p>
            <button>A. Audrey Hepburn</button>
            <button>B. Rihanna</button>
            <button>C. Jennifer Aniston</button>
            <button>D. Lady Gaga</button>
        
        </>
    )
}



