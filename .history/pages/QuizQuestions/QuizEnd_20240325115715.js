import Link from "next/link";
import Button from "@/components/Button";
import styles from "@styles/QuizEnd.module.css"

export default function QueizEnd() {
    return (
        <>
            <div id="text">
            <h1 className={styles.title}>Congratulation!</h1>
            <h4>You have finished the quiz!</h4>
            {/* will put our mascot */}
            </div> 

            <div id="endTheQuiz">
                <Link   href={'/'}
                        className={styles.link}
                >
                    <Button title="Back to Home page"/>
                </Link>
            </div>
        </>
    )
}


