import Link from "next/link";
import Button from "@/components/Button";
import styles from "../../styles/QuestionsHome.module.css";


export default function QuestionsHome() {
    return (
        <>
            <div className={styles.mainContainer}>

            <div className={styles.contentContainer}>

            <h1 className={styles.title}>Welcome to Clotho</h1>
            <p className={styles.openSansText}>Before you organize, we have a few questions to help you get settled</p>
            {/* Add your mascot or other content here */}
            
            <div className={styles.nextButtonContainer}>
                <Link href="/QuizQuestions/QuestionOne" className={styles.link}>
                    <Button title="Start Quiz" tabIndex={1}/>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}


