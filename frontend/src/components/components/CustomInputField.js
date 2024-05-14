import React from 'react';

const CustomInputField = ({ width, svg, fieldName, isError, errorMessage, onInputChange }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        console.log("Input value:", value);
        onInputChange(value);
    };
    const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === 'string') {
        return <img src={svg2} alt={fieldName} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
    };

    return (
        <div className={`flex flex-col items-center font-semibold w-[${width}]`}>
            <div className="w-full flex flex-col gap-y-1">
                <div className="flex justify-start w-full">
                    <div className="gap-x-2 flex items-center"> {/* Add flex and items-center here */}
                        {(fieldName !== "Nom" && fieldName !== "Prenom") &&             
                        <div className='w-[1rem] h-[1rem]'>
                            {renderSVG(svg)}
                        </div>
                        }
                        <p className="text-sm">
                            {fieldName}
                        </p>
                    </div>
                </div>
                <div className="w-full relative">
                    <input
                        type="text"
                        className={`w-full rounded border ${
                            isError ? 'border-red-500' : 'border-[#090E24]'
                        } py-1 pl-[3%]`}
                        placeholder={fieldName}
                        onChange={handleChange}
                    />
                    {isError && <div className='flex justify-start w-[77%]'> <p className="text-red-500 text-xs mt-1">{errorMessage}</p> </div>}
                </div>
            </div>
        </div>
    );
};

export default CustomInputField;

// import React from 'react';

// const CustomInputField = ({ width,svg, fieldName, isError,errorMessage, onInputChange }) => {
//     const handleChange = (event) => {
//         const value = event.target.value;
//         console.log("Input value:", value);
//         onInputChange(value);
//     };
//     const renderSVG = (svg2) => {
//         // If the svg prop is a string (URL), render an <img> element
//         if (typeof svg2 === 'string') {
//           return <img src={svg2} alt={fieldName} className="w-full h-full" />;
//         }
//         // If the svg prop is an imported SVG file, render it directly
//         return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
//       };
    

//     return (
//         <div className={`flex flex-col items-center font-semibold w-[${width}]`}>
//             <div className="w-full flex flex-col gap-y-1">
//                 <div className="flex justify-start w-full">
//                     <div className="gap-x-2 flex items-center"> {/* Add flex and items-center here */}
//                         {(fieldName !== "Nom" && fieldName !== "Prenom") &&             
//                         <div className='w-[1rem] h-[1rem]'>
//                             {renderSVG(svg)}
//                         </div>
//                         }
//                         <p className="text-sm">
//                             {fieldName}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-full relative">
//                     <input
//                         type="text"
//                         className={`w-full rounded border ${
//                             isError ? 'border-red-500' : 'border-[#090E24]'
//                         } py-1 pl-[3%]`}
//                         placeholder={fieldName}
//                         onChange={handleChange}
//                     />
//                     {isError && <div className='flex justify-start w-[77%]'> <p className="text-red-500 text-xs mt-1">{errorMessage}</p> </div>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomInputField;
