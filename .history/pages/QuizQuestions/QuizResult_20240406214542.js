import { useState } from "react";

export default function QuizResult() {

    const [results, setResults] = useState({
        Style1: "Bohemian",
        Style2: "Vintage",
        Style3: "Athletic",
        Style4: "Formal",
        Style5: "Casual"

    })

    return (
        <>
            <h1>Quiz Result</h1>
            <h2>Overall Fashion Styles: </h2>
        </>
    )
}