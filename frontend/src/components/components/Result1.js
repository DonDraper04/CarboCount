import React from 'react';

const Result1 = ({ svg, scope, result, color }) => {
  const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === 'string') {
      return <img src={svg2} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
  };



  return (
    <div className='flex flex-col w-[30rem]'>
      <div className='flex items-center gap-x-3'>
        <div style={{ backgroundColor: color, width: '1rem', height: '1rem' }}></div>
        <p className='text-lg font-semibold'>{scope}</p>
      </div>
      <p className='mt-4 mb-3 font-bold text-3xl'>{result} KgCO2</p>
      {renderSVG(svg)}
    </div>
  );
};

export default Result1;