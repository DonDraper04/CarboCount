import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ labels, datas, colors }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: datas,
                        backgroundColor: colors, // Use colors array
                    },
                ],
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [labels, datas, colors]);

    return (
        <div className='w-[25rem] h-[25rem] '>
            <canvas ref={chartRef}  />
        </div>
    );
};

export default DoughnutChart;
