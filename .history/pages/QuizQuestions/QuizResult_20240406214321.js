import { useState } from "react";

export default function QuizResult() {

    const [results, setResults] = useState({
        score: 0,
        
    })

    return (
        <>
            <h1>Quiz Result</h1>
            <h2>Overall: </h2>
        </>
    )
}