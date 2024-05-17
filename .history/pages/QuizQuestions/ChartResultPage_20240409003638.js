import React from 'react';
import ChartPage from '../path/to/ChartPage'; // Import the ChartPage component
import Link from 'next/link';

const ChartResultPage = ({ resultType }) => {
    return (
        <div>
            <h1>Chart Result Page</h1>
         
            <ChartPage resultType={resultType} />
            
            <Link href={'/QuizEnd'}>
                <a>Go Back to Quiz End</a>
            </Link>
        </div>
    );
};

export default ChartResultPage;
