import Link from "next/link";
import Button from "@/components/Button";
import styles from "../../styles/QuestionsHome.module.css";


export default function QuestionsHome() {
    return (
        <>
            <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Clotho</h1>
            {/* will put our mascot */}
            
            <div>
               
                <Link href="/QuizQuestions/QuestionOne" className={styles.link}>
                    <Button title="Start Quiz"/>
                </Link>
            </div>

            </div>
        </>
    )
}


