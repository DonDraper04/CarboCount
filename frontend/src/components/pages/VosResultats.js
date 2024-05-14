import React from 'react'
import Bienvenu from '../components/Bienvenu'
import line5 from '../files/line5.svg';
import ScopesResult from '../components/ScopesResult';
import ResultByScope from '../components/ResultByScope';

const VosResultats = () => {
   const posteXD = "Deplacement 3.1"
   const posteXD2 = "1.3 Emission fugitives"
   const scope1Posts = [
    { number: "1.1", color: "#C51605", text: "Émissions directes des sources fixes de combustion", emissions: 80 },
    { number: "1.2", color: "#D86155", text: "Émissions directes des sources mobiles de combustion", emissions: 100 },
    { number: "1.3", color: "#902C23", text: "Émissions directes des procédés hors énergie", emissions: 10 },
    { number: "1.4", color: "#622A25", text: "Émissions directes fugitives", emissions: 30 },
    // Add more posts as needed
  ];
   const scope2Posts = [
    { number: "1.1", color: "#B1B119", text: "Émissions indirectes liées à la consommation d'électricité", emissions: 100 },
    { number: "1.2", color: "#DBDB2D", text: "Émissions indirectes liées à la consommation d'électricité", emissions: 200 },

    // Add more posts as needed
  ];
   const scope3Posts = [
    { number: "", color: "#FFB96D", text: "Déplacement", emissions: 100 },
    { number: "", color: "#FF9625", text: "Produits achetés", emissions: 200 },
    { number: "", color: "#A86216", text: "Produits vendus", emissions: 150 },
    { number: "", color: "#FFD913", text: "Autres émissions indirèctes", emissions: 120 },

    // Add more posts as needed
  ];

    return (
    <div className='flex flex-col items-center'>
        <Bienvenu
        msgTYPE={"Vos resultats"}
        />
      <ScopesResult
        svg2={line5}
        scope1={"Scope 01 - Émissions dirèctes"} result1={"290 kgCO2"} color1={"#C51605"}
        scope2={"Scope 02 - Émissions indirèctes associées à l’Énergie"} result2={"290 kgCO2"} color2={"#CECE5A"}
        scope3={"Scope 03 - Autres émissions indirèctes"} result3={"290 kgCO2"} color3={"#FD8D14"}
      />
      <div className='flex justify-start items-center w-full h-[10rem] mt-8 gap-x-8'>
        <div className='w-[20rem] h-full bg-[#FFE17B] rounded-xl flex flex-col items-center justify-center shadow-lg'>
          <div className='w-full h-[50] flex justify-start items-center font-semibold text-lg px-8 pt-4'><p>Le poste ayant la plus forte émission</p></div>
          <div className='h-[50%] w-full flex justify-start items-center font-bold text-2xl px-8 pb-4'>{posteXD}</div>
        </div>
        <div className='w-[20rem] h-full bg-[#FFE17B] rounded-xl flex flex-col items-center justify-center shadow-lg'>
          <div className='w-full h-[50] flex justify-start items-center font-semibold text-lg px-8 pt-4'><p>Le poste ayant la plus faible émission</p></div>
          <div className='h-[50%] w-full flex justify-start items-center font-bold text-2xl px-8 pb-4'>{posteXD2}</div>
        </div>
      </div>

      <ResultByScope scope={"Scope 1 - Emissions Directes"} posts={scope1Posts} />
      <ResultByScope scope={"Scope 02 - Émissions indirèctes associées à l’énergie"} posts={scope2Posts} />
      <ResultByScope scope={"Scope 03 - Autres émissions indirèctes"} posts={scope3Posts} />









    </div>
  )
}

export default VosResultats;