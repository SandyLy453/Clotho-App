import styles from "@/styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult"; 
import Chart from "./Chart";

const QuizEnd = ({ selectedAnswers }) => {
  if (!Array.isArray(selectedAnswers) || selectedAnswers.length === 0) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <h1>Quiz Result</h1>
          <p>No results available. Please complete the quiz to get your result.</p>
          <Link href="/">
            <Button title="Back to Home" />
          </Link>
        </div>
      </div>
    );
  }

  const calculateResult = (answers) => {
    console.log("Selected answers:", answers);
    
    const resultMapping = {
      A: 'Classic and Relaxed', 
      B: 'Trendy and Seasonable', 
      C: 'Practical and Active',
      D: 'Comfortable and Elegant',
    };

    const lastAnswer = answers[answers.length - 1];
    return resultMapping[lastAnswer] || 'Unknown';
  };

  const resultType = selectedAnswers[selectedAnswers.length - 1];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h1>Congratulations</h1>
        <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
        
        <QuizResult resultType={resultType} />
        

        <Chart resultType={resultType} />

        <div className={styles.finishButtonContainer}>
          <Link href="/">
            <Button title="Finish"/>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default QuizEnd;
