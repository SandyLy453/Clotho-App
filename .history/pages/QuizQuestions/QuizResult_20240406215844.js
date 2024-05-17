import { useState } from "react";

export default function QuizResult() {

    const results = [
        {Style1: "Bohemian: 5%"},
        {Style2: "Vintage: 15%"},
        {Style3: "Athletic: 20%"},
        {Style4: "Formal: 25%"},
        {Style5: "Casual: 30%"}
    ];

    return (
        <>
            <h1>Quiz Result</h1>
            <h2>
                Overall Fashion Styles:
                {results.map((result, index) => {
                    <li>{key={index}}</li>
                    {object.values(result[0])}
                    {object.values(result[1])}
                    {object.values(result[2])}
                    {object.values(result[3])}
                    {object.values(result[4])}
                })}
            </h2>
        </>
    )
}