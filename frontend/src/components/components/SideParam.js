// import React, { useState } from 'react';
// import svgSettings from '../files/Settings.svg';
// import svgDeconnecter from '../files/deconnecter.svg';

// const SideParam = () => {
//     const [activeItem, setActiveItem] = useState(null); // State to track active item

//     const renderSVG = (svg) => {
//         // If the svg prop is a string (URL), render an <img> element
//         if (typeof svg === 'string') {
//             return <img src={svg} className="w-full h-full" />;
//         }
//         // If the svg prop is an imported SVG file, render it directly
//         return <div dangerouslySetInnerHTML={{ __html: svg }} />;
//     };

//     const handleItemClick = (index) => {
//         setActiveItem(index); // Set active item when clicked
//     };

//     return (
//         <div className='w-[25%] h-[40rem] rounded-xl shadow-xl rounded-xl bg-[#090E24] text-white'>
//             <div className=' h-[15%] flex justify-center items-center gap-2 text-3xl font-semibold'>
//                 <div className='w-[1.6rem] h-[1.6rem]'>
//                     {renderSVG(svgSettings)}
//                 </div>
//                 <p>Parameters</p>
//             </div>

//             <div className='h-[75%] flex justify-center w-full py-8'>
//                 <ul className='flex flex-col justify-center items-center text-lg font-medium w-full'>
//                     <li 
//                     className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 0 ? '' : ''}`} 
//                     onClick={() => handleItemClick(0)}
//                     >
//                         <p>Mon compte</p>
//                     </li>
//                     <li 
//                     className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 1 ? '' : ''}`} 
//                     onClick={() => handleItemClick(1)}
//                     >
//                         <p>Mot de passe</p>
//                     </li>
//                     <li 
//                     className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 2 ? '' : ''}`} 
//                     onClick={() => handleItemClick(2)}
//                     >
//                         <p>Notifications</p>
//                     </li>
//                     <li 
//                     className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 3? '' : ''}`} 
//                     onClick={() => handleItemClick(3)}
//                     >
//                         <p>Langue</p>
//                     </li>
//                 </ul>
//             </div>

//             <div className='h-[10%] flex justify-start items-end'>
//                 <div className='flex justify-center items-center gap-2 ml-2 mb-2 font-semibold'>
//                     <div className='w-[1rem] h-[1rem] '>
//                         {renderSVG(svgDeconnecter)}
//                     </div>
//                     <p>Se deconnecter</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default SideParam;
import React, { useState } from 'react';
import svgSettings from '../files/Settings.svg';
import svgDeconnecter from '../files/deconnecter.svg';

const SideParam = ({ setActiveItem }) => { // Pass setActiveItem as a prop
    const [activeItem, setActiveItemLocal] = useState(0); // State to track active item

    const renderSVG = (svg) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof svg === 'string') {
            return <img src={svg} className="w-full h-full" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: svg }} />;
    };

    const handleItemClick = (index) => {
        setActiveItemLocal(index); // Set active item locally
        setActiveItem(index); // Pass active item to parent component
    };

    return (
        <div className='w-[25%] h-[40rem] rounded-xl shadow-xl rounded-xl bg-[#090E24] text-white'>
            <div className=' h-[15%] flex justify-center items-center gap-x-2 text-2xl font-semibold'>
                <div className='w-[2rem] h-[2rem] mt-[0.2rem] mr-[0.3rem]'>
                    {renderSVG(svgSettings)}
                </div>
                <p>Parameters</p>
            </div>

            <div className='h-[50%] flex justify-center w-full py-2'>
                <ul className='flex flex-col justify-center items-center text-base font-semibold w-full'>
                    <li 
                    className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 0 ? '' : ''}`} 
                    onClick={() => handleItemClick(0)}
                    >
                        <p>Mon compte</p>
                    </li>
                    <li 
                    className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 1 ? '' : ''}`} 
                    onClick={() => handleItemClick(1)}
                    >
                        <p>Mot de passe</p>
                    </li>
                    <li 
                    className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 2 ? '' : ''}`} 
                    onClick={() => handleItemClick(2)}
                    >
                        <p>Notifications</p>
                    </li>
                    <li 
                    className={`w-full h-full flex justify-center items-center cursor-pointer ${activeItem === 3? '' : ''}`} 
                    onClick={() => handleItemClick(3)}
                    >
                        <p>Langue</p>
                    </li>
                </ul>
            </div>
            <div className='flex h-[25%] justify-center w-full py-8 '>
            </div>

            <div className='h-[10%] flex justify-start items-end'>
                <div className='flex justify-center items-center gap-2 ml-5 mb-6 font-base'>
                    <div className='w-[1rem] h-[1rem] '>
                        {renderSVG(svgDeconnecter)}
                    </div>
                    <p>Se deconnecter</p>
                </div>
            </div>
        </div>
    );
} 
export default SideParam;