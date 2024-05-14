import React from 'react';

const ScopeTable = ({ scopeData }) => {
    let sousScopeRowCounter = 0; // Counter for sous scope rows

    return (
        <div className="flex flex-col overflow-x-auto mt-16 w-[80rem]">
            <p className='font-bold text-4xl mb-4'>Tableau détaillé des émissions carbone</p>
            <div className='w-auto h-auto rounded-xl overflow-hidden'>

                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#E5E582] h-[4rem] rounded-xl ">
                            <th className="w-[30%] px-4 py-2 font-semibold">Sous scope</th>
                            <th className="w-[50%] px-4 py-2 font-semibold">Element</th>
                            <th className="w-[20%] px-4 py-2 font-semibold">Émission carbone [KgCO2]</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scopeData.postes.map((poste, posteIndex) => (
                            poste.elements.map((element, elementIndex) => {
                                const sousPostesCount = element.sousPostes.length; // Number of sous-postes for the current element
                                const rowSpan = sousPostesCount + 1; // Row span for sous scope cell

                                // Determine the background color for sous scope cells based on the counter
                                const sousScopeBgColor = sousScopeRowCounter % 2 === 0 ? 'bg-white' : 'bg-[#CECE5A]';
                                const sousScopeBgOpacity = sousScopeRowCounter % 2 === 0 ? '' : 'bg-opacity-20'; // Adding opacity here
                                sousScopeRowCounter++;

                                return (
                                    <React.Fragment key={`poste-${posteIndex}-element-${elementIndex}`}>
                                        <tr>
                                            <td className={` pl-6 py-2 ${sousScopeBgColor} ${sousScopeBgOpacity} font-normal `} rowSpan={rowSpan}>{poste.posteName}</td>
                                            <td className=" px-4 py-2 bg-[#F4F4F4]">
                                                <span className="font-semibold text-lg block pl-8 ">{element.elementName}</span>
                                            </td>
                                            <td className={` px-4 py-2 ${sousScopeBgColor} ${sousScopeBgOpacity} font-bold`}>{element.totalEmission}</td>
                                        </tr>
                                        {element.sousPostes.map((sousPoste, sousPosteIndex) => (
                                            <tr key={`poste-${posteIndex}-element-${elementIndex}-sousPoste-${sousPosteIndex}`}>
                                                <td className={` px-4 py-2 pl-20 bg-[#ECECEC]`}>{sousPoste.sousPosteName}</td>
                                                <td className={` px-4 py-2 ${sousScopeBgColor} ${sousScopeBgOpacity} font-light`}>{sousPoste.totalEmission}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                );
                            })
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScopeTable;
