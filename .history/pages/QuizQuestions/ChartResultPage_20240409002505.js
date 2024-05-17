import Chart from '../components/Chart';

const ChartResultPage = ({ resultType }) => {
    return (
        <div>
          
            <Chart resultType={resultType} /> 
        </div>
    );
};

export default ChartResultPage;