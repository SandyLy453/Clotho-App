import Chart from '../components/Chart';

const ChartResultPage = ({ resultType }) => {
    return (
        <div>
            <h1>Chart Page</h1>
            <Chart resultType={resultType} /> 
        </div>
    );
};

export default ChartResultPage;