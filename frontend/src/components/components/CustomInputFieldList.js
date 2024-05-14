import React, { useState } from 'react';

const CustomInputFieldList = ({ width,svg, fieldName, isError, errorMessage, obligatory, dataList,onInputChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Input value:", value); // Add this line to log the input value
    onInputChange(value); // Call the onInputChange function with the new value
};

  // Function to render the SVG content
  const renderSVG = () => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg === 'string') {
      return <img src={svg} alt={fieldName} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  };

  // Function to handle input change


  return (
    <div className={`flex flex-col items-center font-semibold w-[${width}]`}>
    <div className='w-full flex flex-col items-center gap-y-1'>
    <div className='flex justify-start w-[77%]'>
      <div className='flex items-center gap-x-2'>
        {(fieldName !== "Nom" && fieldName !== "Prenom") &&             
          <div className='w-[1rem] h-[1rem]'>
            {renderSVG()}
          </div>
        }
        <p className='text-sm'>{fieldName} {obligatory && <span className='text-red-500'>*</span>}</p>
      </div>
    </div>
    <div className='flex flex-col items-center w-full relative'>
      <input 
        type="text" 
        className={`w-[77%] rounded border-2 ${isError ? 'border-red-500' : 'border-[#090E24]'} px-2 py-1`} 
        placeholder='placeholder' 
        list={dataList && dataList.length > 0 ? 'dataList' : undefined}
        style={{ paddingRight: '1rem' }} // Adjust input field width to accommodate datalist
        onChange={handleChange}
      />
      {dataList && dataList.length > 0 && (
        <datalist id="dataList" className="custom-datalist">
          {dataList.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>
      )}
      {isError && <div className='flex justify-start w-[77%]'> <p className="text-red-500 text-xs mt-1">{errorMessage}</p> </div>}
    </div>
  </div>
</div>

  );
};

export default CustomInputFieldList;
