import React, { useState, useEffect } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import '../../fonts/fonts.css'
import Energie from "./Energie";
import General from "./General";
import Transport from "./Transport";
import Dechets from "./Dechets";
import { Link } from 'react-router-dom';
import Achats from "./Achats";
const Stepper = ({ scope1, setScope1, scope2, setScope2, scope3, setScope3, totale, setTotale }) => {
  const steps = ["Géneral", "Énergie", "Transport", "Achats", "Traitement de déchets"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [FormData, setFormData] = useState([]);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      Object.keys(FormData).forEach(key => {
        const data = FormData[key];
        data.details.forEach(detail => {
          console.log(detail.Type_poste);
          if (currentStep === 2){ 
            if (detail.Type_poste === "") {

              setTotale(prevTotale => prevTotale + data.value * detail.Post);
              
            } else{
              setScope2(scope2 + data.value * detail.Post);
            }
          }
          else{
          if ((detail.Type_poste === "Combustion") || (detail.Type_poste === "Emissions fugitives")|| (detail.Type_poste === "Fuites")) {

            setScope1(scope1 + data.value * detail.Post);
            
          } else if ((detail.Type_poste === "Énergie")|| (detail.Type_poste === "Énergie (Electricité)")) {
            setScope2(scope2 + data.value * detail.Post);
          }else if (detail.Type_poste === "") {
            setTotale(prevTotale => prevTotale + data.value * detail.Post);
            
          }
          else{
            setScope3(scope3 + data.value * detail.Post);
          }
      }});
      });
    
      setFormData([]);
    } else {
      setComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setComplete(false); // Reset complete status when going back
    }
  };

  return (
    <div className="w-full mb-32">
      <div className="flex w-[40%] mx-auto justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1}
            </div>
            <p className="text-[#FD8D14] text-[11px] text-center aileron font-bold">{step}</p>
          </div>
        ))}
      </div>
      <div className="bg-white mt-6 p-4 w-[90%] rounded-lg mx-auto">
       {!complete && (<div className="h-[90%] mt-6">
        {currentStep === 1 &&  <General setFormData={setFormData} FormData={FormData}/>}
          {currentStep === 2 &&  <Energie setFormData={setFormData} FormData={FormData}/>}
          {currentStep === 3 &&  <Transport setFormData={setFormData} FormData={FormData}/>}
          {currentStep === 4 &&  <Achats setFormData={setFormData} FormData={FormData}/>}
          {currentStep === 5 &&  <Dechets setFormData={setFormData} FormData={FormData}/>}
        </div>)}
      <div className="flex  h-[15%] mt-8 justify-between mx-24 ">
        {!complete && (<button
          className="bg-[#FD8D14] rounded-lg text-white px-6 py-1 aileron"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
         Précedent
        </button>)}
        {!complete && (
          <button className="bg-[#FD8D14] rounded-lg text-white px-6 py-1 aileron" onClick={nextStep}>
            {currentStep === steps.length ? "Finir" : "Suivant"}
          </button>
        )}

        {complete && (
          <div className="flex flex-col mx-auto gap-8 items-center">
        <p className="aileron">Merci pour votre patience, votre bilan est prêt</p>
        <Link to="/resultats">
        <button className="bg-[#CECE5A]  mx-auto rounded-lg text-white px-6 py-3 aileron" >
          Voir votre bilan carbone
          </button></Link>
          </div>)}
      </div>
      </div>
    </div>
  );
};

export default Stepper;