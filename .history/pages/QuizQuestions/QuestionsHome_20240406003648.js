import Link from "next/link";
import Button from "@/components/Button";
import styles from "@styles/QuestionsHome.module.css"
import Link from "next/link";

export default function QuestionsHome() {
    return (
        <>
            <h1 className={styles.title}>Welcome to Clotho</h1>
            {/* will put our mascot */}
            
            <div id="startTheQuiz">
                
                <Link href={'/QuizQuestions/QuestionaHome'} className={styles.link}>
                    <Button title="Start Quiz"/>
                </Link>
            </div>
        </>
    )
}


