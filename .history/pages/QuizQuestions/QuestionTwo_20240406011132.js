import { useState } from "react";

export default function QuestionTwo() {
    const [questionTwo, setQuestionTwo] = useState();

    return(
        <>
            <h1>Question 2</h1>
            <p>How do you usually organize your wardrobe?</p>
            <button>A. By color and style coordination</button>
            <button>B. By seasonal trends</button>
            <button>C. By what's clean and ready to wear</button>
            <button>D. In a mix-and-match manner</button>

            
        </>
    )
}

