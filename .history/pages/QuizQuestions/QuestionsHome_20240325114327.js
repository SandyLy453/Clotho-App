import Link from "next/link";
import Button from "@/components/Button";

export default function QuestionsHome() {
    return (
        <>
            <h1>Welcome to Clotho</h1>
            {/* will put our mascot */}
            
            <div id="startTheQuiz">
                <Link href={'/QuestionOne'}>
                    <Button title="Start Quiz"/>
                </Link>
            </div>
        </>
    )
}


