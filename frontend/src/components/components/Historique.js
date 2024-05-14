import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce'; // Import the useDebounce hook
import HistoriqueBilanCarbon from './HistoriqueBilanCarbon';
import svgSearch from '../files/search.svg';

const Historique = ({histo}) => {
  const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === 'string') {
      return <img src={svg2} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
  };

    const historique = histo;
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce the search query with a delay of 300 milliseconds
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="shadow-xl p-[5rem] w-[75rem]">
      <div className="flex justify-between items-center mb-8">
        <p className="text-2xl font-bold">Historique de calcul</p>

        <div className="relative rounded-full border border-gray-300 overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-2 w-[2rem] h-[2rem]">
            {renderSVG(svgSearch)}
          </div>
          <input
            type="text"
            className="block w-full h-full py-2 pl-10 pr-4 rounded-full border-none bg-transparent focus:outline-none"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
        <HistoriqueBilanCarbon historique={historique} searchQuery={debouncedSearchQuery} />
      </div>
    </div>
  );
};

export default Historique;


/*
  const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === 'string') {
      return <img src={svg2} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
  };

    const historique = [
        {
          nom: "Entreprise A",
          date: "2024-05-10 10:30",
          periode: "2024-05",
          emission: "2500 kg CO2"
        },
        {
          nom: "Entreprise B",
          date: "2024-05-09 14:45",
          periode: "2024-04",
          emission: "1800 kg CO2"
        },
    ];
*/