import React from 'react';

const HeaderParams = ({ svg, Text }) => {
    const renderSVG = (svg) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof svg === 'string') {
            return <img src={svg} className="w-full h-full" alt="Icon" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: svg }} />;
    };
    
  
    return (
        <div className='h-[15%] flex justify-start items-center gap-2 text-3xl font-semibold w-full'>
            <div className='w-[1.6rem] h-[1.6rem]'>
                {renderSVG(svg)}
            </div>
            <p>{Text}</p>
        </div>
    );
};

export default HeaderParams;
