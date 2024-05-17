import React from 'react';
import Link from 'next/link';


const ChartResultPage = ({ resultType }) => {
    return (
        <div>
            <h1>Chart Page</h1>
            <Chart resultType={resultType} />
            {/* Add a link back to the QuizEnd page */}
            <Link href={'/QuizQuestions/Chart'}>
            </Link>
        </div>
    );
};

export default ChartResultPage;
