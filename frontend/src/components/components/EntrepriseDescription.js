import React from "react";
import CustomButton from "../components/CustomButton";
import svgFleche from "../files/rightFleche.svg";
import { useNavigate } from "react-router-dom";

const EntrepriseDescription = () => {
  const navigate = useNavigate();
  const renderSVG = (svg2) => {
    // If the svg prop is a string (URL), render an <img> element
    if (typeof svg2 === "string") {
      return <img src={svg2} className="w-full h-full" />;
    }
    // If the svg prop is an imported SVG file, render it directly
    return <div dangerouslySetInnerHTML={{ __html: svg2 }} />;
  };

  return (
    <div className="flex flex-col gap-y-10">
      <span className="font-bold text-3xl tracking-wide">
        Bienvenue sur CARBOcount !
      </span>
      <div className="w-[40rem] h-auto font-[480] text-lg leading-10 tracking-tight ">
        Prenez le contrôle de votre{" "}
        <span className="text-[#C51605] font-medium">empreinte carbone</span>{" "}
        dès aujourd'hui ! <br /> Cliquez sur le{" "}
        <span className="text-[#FD8D14] font-medium">bouton</span> pour évaluer
        votre bilan carbone et contribuer à un avenir{" "}
        <span className="text-[#CECE5A] font-medium">plus durable</span> pour
        votre entreprise et notre planète.
      </div>
      <CustomButton
        onClick={() => {
          navigate("/calculer");
        }}
        width="30rem" // Adjusted width to accommodate the SVG icon
        height="2.8rem"
        bgColor="#FD8D14"
        textColor="white"
        textSize="1.15rem"
        fontWeight="600"
      >
        <div className="flex items-center justify-between gap-x-5">
          Calculer le bilan carbone de mon entreprise
          <div className="w-7 h-7">{renderSVG(svgFleche)}</div> {/* SVG icon */}
        </div>
      </CustomButton>
    </div>
  );
};

export default EntrepriseDescription;
