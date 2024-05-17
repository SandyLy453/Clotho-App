import Link from "next/link";
import Button from "@/components/Button";
import styles from "@styles/QuizEnd.module.css"

export default function QuizEnd() {
    
        return (
            <>
                <div className={styles.text}>
                    <h1 className={styles.title}>Congratulations!</h1>
                    <h4>You have finished the quiz!</h4>
                    <p>Your result: {result}</p>
                </div>
    
                <div id="endTheQuiz">
                    <Link href={'/'} className={styles.link}>
                        <Button title="Back to Home page" />
                    </Link>
                </div>
            </>
        );
    }
    