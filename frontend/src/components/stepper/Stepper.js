import React, { useState, useEffect } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import "../../fonts/fonts.css";
import Energie from "./Energie";
import General from "./General";
import Transport from "./Transport";
import Dechets from "./Dechets";
import { Link } from "react-router-dom";
import Achats from "./Achats";
import { useApp } from "../context/AuthContext";
const Stepper = ({
  scope1,
  setScope1,
  scope2,
  setScope2,
  scope3,
  setScope3,
  scope11,
  setScope11,
  scope12,
  setScope12,
  scope13,
  setScope13,
  scope14,
  setScope14,
  scope21,
  setScope21,
  scope22,
  setScope22,
  scope31,
  setScope31,
  scope32,
  setScope32,
  scope33,
  setScope33,
  scope34,
  setScope34,
  totale,
  setTotale,
}) => {
  const steps = [
    "Géneral",
    "Énergie",
    "Transport",
    "Achats",
    "Traitement de déchets",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [FormData, setFormData] = useState([]);
  const { user, baseUrl } = useApp();
  if (currentStep === 1) {
    setTotale(0);
    setScope1(0);
    setScope2(0);
    setScope3(0);
    setScope11(0);
    setScope12(0);
    setScope13(0);
    setScope14(0);
    setScope21(0);
    setScope22(0);
    setScope31(0);
    setScope32(0);
    setScope33(0);
    setScope34(0);
  }
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      Object.keys(FormData).forEach((key) => {
        const data = FormData[key];
        data.details.forEach((detail) => {
          console.log(detail.Type_poste);
          if (
            currentStep === 2 &&
            (data.Nom_base_français === "Électricité" ||
              data.Nom_base_français === "Electricité")
          ) {
            if (detail.Type_poste === "") {
              setTotale((prevTotale) => prevTotale + data.value * detail.Post);
            } else {
              setScope2(scope2 + data.value * detail.Post);
              setScope21(scope21 + data.value * detail.Post);
            }
          } else {
            if (
              detail.Type_poste === "Combustion" ||
              (currentStep === 5 &&
                detail.Type_poste === "Emissions fugitives") ||
              detail.Type_poste === "Fuites"
            ) {
              setScope1(scope1 + data.value * detail.Post);
              if (currentStep === 2 && detail.Type_poste === "Combustion") {
                setScope11(scope11 + data.value * detail.Post);
              } else if (detail.Type_poste === "Combustion") {
                setScope12(scope12 + data.value * detail.Post);
              } else {
                setScope14(scope14 + data.value * detail.Post);
              }
            } else if (
              detail.Type_poste === "Énergie" ||
              detail.Type_poste === "Énergie (Electricité)"
            ) {
              setScope2(scope2 + data.value * detail.Post);
              setScope22(scope22 + data.value * detail.Post);
            } else if (detail.Type_poste === "") {
              setTotale((prevTotale) => prevTotale + data.value * detail.Post);
            } else {
              if (currentStep === 4) {
                setScope32(scope32 + data.value * detail.Post);
              } else if (currentStep === 2) {
                setScope34(scope34 + data.value * detail.Post);
              } else if (currentStep === 3) {
                setScope31(scope31 + data.value * detail.Post);
              } else if (currentStep === 5) {
                if (
                  detail.Type_poste ===
                    "Émissions fugitives (process d'épuration)" ||
                  detail.Type_poste ===
                    "Émissions fugitives (Rejets au milieu naturel)"
                ) {
                  setScope34(scope34 + data.value * detail.Post);
                } else {
                  setScope32(scope32 + data.value * detail.Post);
                }
              }

              setScope3(scope3 + data.value * detail.Post);
            }
          }
        });
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
  const handleClick = async () => {
    try {
      //create bilan in the db
      console.log(user);
      let response = await fetch(`${baseUrl}/api/bilan/create/${user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          total: totale,
          year: 2024,
        }),
      });
      let json = await response.json();
      if (!response.ok) {
        return console.log(json);
      }
      console.log(json.bilanCarbon);
      //create other scopes
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope1",
          total: scope1,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope2",
          total: scope2,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope2",
          total: scope2,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope3",
          total: scope3,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope12",
          total: scope12,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope13",
          total: scope13,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope14",
          total: scope14,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope21",
          total: scope21,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope22",
          total: scope22,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope31",
          total: scope31,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope32",
          total: scope32,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope33",
          total: scope33,
        }),
      });
      response = await fetch(`${baseUrl}/bilan/${json.bilanCarbon.BilanCarbonId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: "scope34",
          total: scope34,
        }),
      });
     } catch (error) {
       console.log(error.message);
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
            <div className="step">{i + 1}</div>
            <p className="text-[#FD8D14] text-[11px] text-center aileron font-bold">
              {step}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white mt-6 p-4 w-[90%] rounded-lg mx-auto">
        {!complete && (
          <div className="h-[90%] mt-6">
            {currentStep === 1 && (
              <General setFormData={setFormData} FormData={FormData} />
            )}
            {currentStep === 2 && (
              <Energie setFormData={setFormData} FormData={FormData} />
            )}
            {currentStep === 3 && (
              <Transport setFormData={setFormData} FormData={FormData} />
            )}
            {currentStep === 4 && (
              <Achats setFormData={setFormData} FormData={FormData} />
            )}
            {currentStep === 5 && (
              <Dechets setFormData={setFormData} FormData={FormData} />
            )}
          </div>
        )}
        <div className="flex  h-[15%] mt-8 justify-between mx-24 ">
          {!complete && (
            <button
              className="bg-[#FD8D14] rounded-lg text-white px-6 py-1 aileron"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Précedent
            </button>
          )}
          {!complete && (
            <button
              className="bg-[#FD8D14] rounded-lg text-white px-6 py-1 aileron"
              onClick={nextStep}
            >
              {currentStep === steps.length ? "Finir" : "Suivant"}
            </button>
          )}

          {complete && (
            <div className="flex flex-col mx-auto gap-8 items-center">
              <p className="aileron">
                Merci pour votre patience, votre bilan est prêt
              </p>
              <Link to="/resultats">
                <button
                  onClick={() => {
                    handleClick();
                  }}
                  className="bg-[#CECE5A]  mx-auto rounded-lg text-white px-6 py-3 aileron"
                >
                  Voir votre bilan carbone
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
