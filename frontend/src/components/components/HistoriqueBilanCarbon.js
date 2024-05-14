// import React from 'react';

// const HistoriqueBilanCarbon = ({ historique }) => {
//   // Function to render table rows
//   const renderRows = () => {
//     // If historique is empty or undefined, display a single row with a message
//     if (!historique || historique.length === 0) {
//       return (
//         <tr>
//           <td colSpan="4" className="py-4 text-center">
//             Aucun bilan de carbone calculé pour le moment.{" "}
//             <button className="text-blue-500 underline">Calculer maintenant !</button>
//           </td>
//         </tr>
//       );
//     }

//     // If historique is not empty, render each row dynamically
//     return historique.map((item, index) => (
//       <tr key={index} className="border border-gray-200">
//         <td className="px-4 py-2 text-center">{item.nom}</td>
//         <td className="px-4 py-2 text-center">{item.date}</td>
//         <td className="px-4 py-2 text-center"> <span className='text-gray-500'>du</span> {item.periode} <span className='text-gray-500'>au</span> {item.periode}</td>
//         <td className="px-4 py-2 text-center">{item.emission} tCO2</td>
//       </tr>
//     ));
//   };

//   return (
//     <div className="rounded-lg overflow-hidden">
//       <table className="border-collapse w-full">
//         <thead>
//           <tr className='bg-[#090E24] text-white rounded-lg'>
//             <th className="px-4 py-2">Nom</th>
//             <th className="px-4 py-2">Date et heure</th>
//             <th className="px-4 py-2">Période étudiée</th>
//             <th className="px-4 py-2">Émission totale</th>
//           </tr>
//         </thead>
//         <tbody>
//           {renderRows()}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HistoriqueBilanCarbon;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AuthContext";

const HistoriqueBilanCarbon = ({ historique, searchQuery }) => {
  const {user}=useApp()
  console.log(user)
  const navigate = useNavigate();
  // Function to render table rows
  const renderRows = () => {
    // Filter historique based on searchQuery
    const filteredHistorique = historique.filter((item) =>
      item.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // If filteredHistorique is empty or undefined, display a single row with a message
    if (!filteredHistorique || filteredHistorique.length === 0) {
      return (
        <tr>
          <td colSpan="4" className="py-4 text-center">
            Aucun bilan de carbone calculé pour le moment.{" "}
            <button className="text-blue-500 underline">
              Calculer maintenant !
            </button>
          </td>
        </tr>
      );
    }

    // If filteredHistorique is not empty, render each row dynamically
    return filteredHistorique.map((item, index) => (
      <tr key={index} className="border border-gray-200">
         <td className="px-4 py-2 text-center">{user.name}</td> 
        <td className="px-4 py-2 text-center">{item.year}</td>
        <td className="px-4 py-2 text-center">{item.total} tCO2</td>
      </tr>
    ));
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-[#090E24] text-white rounded-lg">
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Émission totale</th>
          </tr>
        </thead>
        <tbody>
          {historique.length !== 0 &&
            historique.map((item) => (
              <tr
                onClick={() => {
                  navigate(`/resultats/${item.BilanCarbonId}`);
                }}
                key={item.BilanCarbonId}
                className="border border-gray-200 cursor-pointer hover:bg-gray-100"
              >
                <td className="px-4 py-2 text-center">{user.name}</td>
                <td className="px-4 py-2 text-center">{item.year}</td>
                <td className="px-4 py-2 text-center">{item.total} tCO2</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoriqueBilanCarbon;
