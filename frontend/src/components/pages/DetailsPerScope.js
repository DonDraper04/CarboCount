import React from 'react'
import Bienvenu from '../components/Bienvenu';
import DynamicScopesResult from "../components/DynamicScopesResult"
import ScopeTable from "../components/ScopeTable"
import ScopeComponent from "../components/ScopeDescription"

const DetailsPerScope = () => {
  const scopeData = {
    scopeName: "Scope Name",
    totalEmission: 280,
    postes: [
        {
            posteName: "Émissions directes des sources fixes de combustion",
            totalEmission: 100,
            elements: [
                {
                    elementName: "Element 1",
                    totalEmission: 100,
                    sousPostes: [
                        { sousPosteName: "Sous-Poste 1", totalEmission: 20 },
                        { sousPosteName: "Sous-Poste 2", totalEmission: 30 },
                        { sousPosteName: "Sous-Poste 3", totalEmission: 10 },
                    ]
                },
                {
                    elementName: "Element 2",
                    totalEmission: 150,
                    sousPostes: [
                        { sousPosteName: "Sous-Poste 1", totalEmission: 40 },
                        { sousPosteName: "Sous-Poste 2", totalEmission: 50 },
                        { sousPosteName: "Sous-Poste 3", totalEmission: 60 },
                    ]
                },
            ]
        },
        {
            posteName: "Émissions directes des sources mobiles de combustion",
            totalEmission: 80,
            elements: [
                {
                    elementName: "Element 3",
                    totalEmission: 80,
                    sousPostes: [
                        { sousPosteName: "Sous-Poste 1", totalEmission: 20 },
                        { sousPosteName: "Sous-Poste 2", totalEmission: 30 },
                    ]
                },
            ]
        },
    ]
};

  const datas = [
    { scope: "Émissions directes des sources fixes de combustion", result: 290, color: "#C51605" }, // Tomato
    { scope: "Émissions directes des sources mobiles de combustion", result: 290, color: "#CECE5A" }, // SteelBlue
    { scope: "Émissions directes des procédés hors énergie", result: 290, color: "#FD8D14" }, // LimeGreen
    { scope: "Émissions directes fugitives", result: 290, color: "#090E24" }]  // Gold
  return (
    <div className='flex flex-col items-center'>
     <Bienvenu msgTYPE={"Details sur le Scope 1"} />
     <ScopeComponent 
      title="Scope 01 - Émissions dirèctes"
      description="Scope englobant les émissions directes de gaz à effet de serre provenant de sources contrôlées directement par l'entreprise, telles que la combustion de carburants dans des installations fixes ou mobiles, ainsi que les émissions fugitives provenant des processus industriels."
      />

     <DynamicScopesResult
        title={"Emission totale du Scope 1"}
        totalEmission={250}
        data={datas}
      />
      <ScopeTable scopeData={scopeData}/>
     
    </div>
  )
}

export default DetailsPerScope;