import React from 'react';
import line8 from "../files/line8.svg"

const ScopeDescription = ({ title, description }) => {
    const renderSVG = (e) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof e === 'string') {
          return <img src={e} className="w-full h-full" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: e }} />;
      };
    return (
        <div className='w-[80rem] h-[10rem] flex flex-col rounded-xl shadow-xl p-6'>
            <div>
                <p className="text-[#C51605] font-bold text-xl ">{title}</p>
                <div className="w-[40%] h-[1.1rem]">{renderSVG(line8)}</div>
            </div>
            <p className="text-black text-lg font-normal">{description}</p>
        </div>
    );
};

export default ScopeDescription;
