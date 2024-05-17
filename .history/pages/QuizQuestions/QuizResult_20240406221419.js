import styles from "../../styles/QuizResult.module.css"
export default function QuizResult() {

    const results = [
        {Style1: "Bohemian: 5%"},
        {Style2: "Vintage: 15%"},
        {Style3: "Athletic: 20%"},
        {Style4: "Formal: 25%"},
        {Style5: "Casual: 30%"}
    ];

    return (
        <>
        <div>
            <h4 className={styles.title}>Quiz Result</h4>
            <h3 className={styles.title}>
                Overall Fashion Styles:
                <ul className={styles.result}>
                    {results.map((result, index) => (
                        <li key={index} className={styles.report}>
                            {Object.values(result)}
                        </li>
                    ))}
                </ul>
            </h3>
        </div>
        </>
    )
}