import React from 'react';
import Result1 from './Result1';
import line6 from '../files/line6.svg';
import DoughnutChart from '../components/DoughnutChart';

const DynamicScopesResult = ({ title,totalEmission, data }) => {
    const renderSVG = (e) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof e === 'string') {
          return <img src={e} className="w-full h-full" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: e }} />;
      };
    // Extracting data from the array of objects
    const labels = data.map(item => item.scope);
    const datas = data.map(item => parseFloat(item.result));
    const colors = data.map(item => item.color);

    return (
        <div className="w-[80rem] h-auto flex flex-col border shadow-xl rounded-xl p-8">
            <div className="pt-6 pl-8">
                <p className="text-3xl font-bold">
                    {title} :{' '}
                    <span className="text-red-500">{totalEmission} tCO2</span>
                </p>
                <div className="w-[95%] h-[2rem] mt-2 mb-4">{renderSVG(line6)}</div>
            </div>
            <div className="flex w-full h-full ">
                <div className="w-[45%] h-[100%] flex justify-center items-center">
                    <DoughnutChart labels={labels} datas={datas} colors={colors} />
                </div>
                <div className="w-[55%] h-[90%] flex flex-col justify-center items-center gap-y-6">
                    {data.map((item, index) => (
                        <Result1
                            key={index}
                            svg={line6}
                            scope={item.scope}
                            result={item.result+" kgCO2"}
                            color={item.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DynamicScopesResult;
