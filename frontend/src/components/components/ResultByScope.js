import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import NumberedBox from './NumberedBox';
import line7 from "../files/line6.svg";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ResultByScope = ({ scope,posts }) => {
  const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === 'string') {
      return <img src={svg2} className="w-full h-full" alt="line" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
  };

  const data = {
    labels: posts.map(post => post.number),
    datasets: [{
      label: 'Emissions (kg CO2)',
      data: posts.map(post => post.emissions),
      backgroundColor: posts.map(post => post.color),
      borderColor: posts.map(post => post.color),
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y', // To use the labels as y-axis
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false // Hide the legend if not needed
        }
      },
      layout: {
        padding: {
          top: 20, // Adjust top padding as needed
          bottom: 20 // Adjust bottom padding as needed
        }
      },
      responsive: true,
      maintainAspectRatio: false, // Allow chart to be responsive with custom height
    },
  };

  return (
    <div className='w-[75rem] h-[35rem] flex flex-col border shadow-xl rounded-xl p-4 mt-8'>
      <div className='pt-6 pl-8'>
        <p className='text-3xl font-bold text-gray-800'>{scope}</p>
        <div className='w-[95%] h-[2rem] mt-2'>
          {renderSVG(line7)}
        </div>
      </div>
      <div className='flex w-full h-full'>
        <div className='w-[60%] h-[100%] '>
          <div className='w-[80%] h-[80%] flex justify-center items-center mt-8'>
            <Bar data={data} options={config} width={"20rem"} height={"20rem"} />
          </div>
        </div>
        <div className='w-[40%] h-[100%] flex flex-col  gap-y-6  p-8'>
          <div className=' w-full text-2xl font-semibold'><p>Postes</p></div>
          {posts.map((post, index) => (
            <NumberedBox key={index} number={post.number} color={post.color} text={post.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResultByScope;