import React from 'react';
import Link from 'next/link';

const ChartResultPage = ({ resultType }) => {
    return (
        <div>
            <h1>Chart Result Page</h1>
            
            <Link href="/Chart">Go to Chart Page</Link>
            
        </div>
    );
};

export default ChartResultPage;
