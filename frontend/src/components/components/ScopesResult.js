import React from 'react';
import Result1 from './Result1';
import line6 from '../files/line6.svg';
import DoughnutChart from './DoughnutCharts.js';

const ScopesResult = ({
    svg,
    scope1,
    scope2,
    scope3,
    result1,
    result2,
    result3,
    color1,
    color2,
    color3,
    totale
}) => {
    // Convert result1, result2, result3 to numbers
    const renderSVG = (e) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof e === 'string') {
          return <img src={e} className="w-full h-full" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: e }} />;
      };
    const datas = [parseFloat(result1), parseFloat(result2), parseFloat(result3)];
   
    // Create an array of colors
    const colors = [color1, color2, color3];

    return (
        <div className="w-[75rem] h-[35rem] flex flex-col border shadow-xl rounded-xl p-4">
            <div className="pt-6 pl-8">
                <p className="text-3xl font-bold">
                    Votre Emission totale :{' '}
                    <span className="text-red-500"> {totale} KgCO2</span>
                </p>
                <div className="w-[95%] h-[2rem] mt-2">{renderSVG(line6)}</div>
            </div>
            <div className="flex w-full h-full ">
                <div className="w-[45%] h-[100%] flex justify-center items-center">
                    <DoughnutChart
                        labels={[scope1, scope2, scope3]}
                        datas={datas}
                        colors={colors} // Pass colors array
                    />
                </div>
                <div className="w-[55%] h-[100%] flex flex-col justify-center items-center gap-y-6">
                    <Result1 svg={line6} scope={scope1} result={result1} color={color1} />
                    <Result1 svg={line6} scope={scope2} result={result2} color={color2} />
                    <Result1 svg={line6} scope={scope3} result={result3} color={color3} />
                </div>
            </div>
        </div>
    );
};

export default ScopesResult;