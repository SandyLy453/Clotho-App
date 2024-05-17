import React from 'react';
import Chart from '../components/Chart'; 


export default ChartResultPage;
const ChartResultPage = ({ resultType }) => {
    return (
        <>
        <div>
            <h1>Chart Page</h1>
            <Chart resultType={resultType} /> 
        </div>
    </>
    );
}
