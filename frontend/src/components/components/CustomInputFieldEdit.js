import React from 'react';

const CustomInputField = ({ width,svg2, fieldName, isError ,onInputChange}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Input value:", value); // Add this line to log the input value
    onInputChange(value); // Call the onInputChange function with the new value
};
  // Function to render the SVG content
  const renderSVG = (e) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof e === 'string') {
      return <img src={e} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: e }} />;
  };

  return (
    <div className={`flex flex-col items-center font-semibold w-[${width}]`}>
    <div className="w-full flex flex-col gap-y-1">
        <div className="flex justify-start w-[77%]">
          <div className="gap-x-2">
            <p className="text-sm">
              {fieldName} {/* {obligatory && <span className="text-red-500">*</span>} */}
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <div className="flex justify-end items-center absolute inset-y-0 right-0 px-2 z-10 h-full">
            <div className="w-[1.1rem] h-[1.1rem]">{renderSVG(svg2)}</div>
          </div>
          <input
            type="text"
            className={`w-full rounded-lg border ${
              isError ? 'border-red-500' : 'border-[#090E24]'
            } py-1 pl-[3%]`}
            placeholder={fieldName}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomInputField;
