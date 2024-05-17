import Link from "next/link";
import Button from "@/components/Button";
import styles from "../../styles/QuestionsHome.module.css";


export default function QuestionsHome() {
    return (
        <>
            <div className={styles.mainContainer}>

            <h1 className={styles.title}>Welcome to Clotho</h1>
            <p className={styles.openSansText}>Before you organize, we have a few questions to help you get settled</p>
            {/* Add your mascot or other content here */}
            
            <div>
                <Link href="/QuizQuestions/QuestionOne" className={styles.link}>
                    <Button title="Start Quiz"/>
                </Link>
            </div>
            
        </div>
        </>
    )
}


