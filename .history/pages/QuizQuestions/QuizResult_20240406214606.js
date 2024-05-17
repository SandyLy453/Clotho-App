import { useState } from "react";

export default function QuizResult() {

    const [results, setResults] = useState({
        Style1: "Bohemian: 5%",
        Style2: "Vintage: 15%",
        Style3: "Athletic: 20%",
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