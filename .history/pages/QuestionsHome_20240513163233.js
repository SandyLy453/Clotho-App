import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/QuestionsHome.module.css";
import BottomNavigation from "@/components/BottomNavigation";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function QuestionsHome() {
    const [playStartQuizSound, setPlayStartQuizSound] = useState(false);

    const handleStartQuizClick = () => {
        setPlayStartQuizSound(true);
    };

    useEffect(() => {
        if (playStartQuizSound) {
            const audio = new Audio('/assets/start-quiz-sound.wav');
            audio.play();
            setPlayStartQuizSound(false);
        }
    }, [playStartQuizSound]);

    
    return (
        <>
            <div className={styles.mainContainer}>

            <div className={styles.contentContainer}>

            <p className={styles.title} tabIndex={1}>Welcome to the Style Quiz</p>
            <p className={styles.openSansText} tabIndex={2}>Find what style best suits you</p>
            {/* Add your mascot or other content here */}

            <div className={styles.quizMascotContainer}> 
                <Image 
                  src="/images/quiz-mascot.gif"
                  alt="Mascot with outfits in hand"
                  width={350}
                  height={350}
                  className={styles.takeQuizMascot}
                />
              </div>
            
            <div className={styles.nextButtonContainer}>
                <Link href="/QuestionOne" className={styles.link}>
                    <Button 
                        title="Start Quiz" 
                        tabIndex={3}
                        onClick={handleStartQuizClick} 
                    />
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


