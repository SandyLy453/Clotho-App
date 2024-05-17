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
            <h1>Quiz Result</h1>
            <h2>
                Overall Fashion Styles:
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            {Object.values(result)}
                        </li>
                    ))}
                </ul>
            </h2>
        </>
    )
}