import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/QuestionsHome.module.css";
import BottomNavigation from "@/components/BottomNavigation";


export default function QuestionsHome() {
    return (
        <>
            <div className={styles.mainContainer}>

            <div className={styles.contentContainer}>

            <h3 className={styles.title} tabIndex={1}>Welcome to the Style Quiz</h3>
            <p className={styles.openSansText} tabIndex={2}>Before you organize, we have a few questions to help you get settled</p>
            {/* Add your mascot or other content here */}
            
            <div className={styles.nextButtonContainer}>
                <Link href="/QuestionOne" className={styles.link}>
                    <Button title="Start Quiz" tabIndex={3}/>
                </Link>
            </div>
            </div>

            <BottomNavigation 
                bgColorHome="var(--button-highlight-light)"
                pathColorHome="var(--white)"
                borderStyle="60%"
                iconWidth={36}
                iconHeight={36}
            />
        </div>
        </>
    )
}


