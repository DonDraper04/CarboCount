import React from 'react'
import Bienvenu from './components/Bienvenu'
import line5 from './files/line5.svg';
import ScopesResult from './components/ScopesResult';
import ResultByScope from './components/ResultByScope';
import {useState} from 'react'
const Resultats = ({ scope1, scope2, scope3, totale }) => {
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
        scope1={"Scope 01 - Émissions dirèctes"} result1={scope1} color1={"#C51605"}
        scope2={"Scope 02 - Émissions indirèctes associées à l’Énergie"} result2={scope2} color2={"#CECE5A"}
        scope3={"Scope 03 - Autres émissions indirèctes"} result3={scope3} color3={"#FD8D14"}
        totale={totale}
      />

      <ResultByScope scope={"Scope 1 - Emissions Directes"} posts={scope1Posts} />
      <ResultByScope scope={"Scope 02 - Émissions indirèctes associées à l’énergie"} posts={scope2Posts} />
      <ResultByScope scope={"Scope 03 - Autres émissions indirèctes"} posts={scope3Posts} />









    </div>
  )
}

export default Resultats;