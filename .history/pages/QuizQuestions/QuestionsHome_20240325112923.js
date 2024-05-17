import { useState } from "react";

export default function QuestionsHome() {
    const [mainPage, setMainPage] = useState();

    const [startQuiz, setStartQuiz] = useState(false);
    const handleStartQuiz = () => {
        setStartQuiz(true);
    };

    return (
        <>
            <h1>Welcome to Clotho</h1>
            {/* will put our mascot */}
            
            <div className={}></div>
        </>
    )
}