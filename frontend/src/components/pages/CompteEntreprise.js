import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import EntrepriseNom from "../components/EntrepriseNom";
import EntrepriseDescription from "../components/EntrepriseDescription";
import Logo from "../files/CARBOcount.png";
import Historique from "../components/Historique";
import { useApp } from "../context/AuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const CompteEntreprise = () => {
  const [historique, setHistorique] = useState([]);
  const { baseUrl, user } = useApp();
  useEffect(() => {
    const token = JSON.parse(Cookies.get("user")).token;
    console.log(token);
    const res = fetch(`${baseUrl}/api/bilan/entreprise`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          if (res.ok) {
            setHistorique(data.bilanCarbons);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
console.log(historique)
  // Get the latest 4 elements

  // const companyNames = latestHistorique.map((entry) => entry.nom);
  // const emissions = latestHistorique.map((entry) => parseFloat(entry.emission)); // Assuming emissions are in numeric format

  // // Chart data
  // const data = {
  //   labels: companyNames,
  //   datasets: [
  //     {
  //       label: "Emissions (kg CO2)",
  //       data: emissions,
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(255, 159, 64, 0.2)",
  //         "rgba(255, 205, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(255, 159, 64)",
  //         "rgb(255, 205, 86)",
  //         "rgb(75, 192, 192)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const config = {
  //   type: "bar",
  //   data: data,
  //   options: {
  //     indexAxis: "y", // To use the labels as y-axis
  //     scales: {
  //       x: {
  //         beginAtZero: true,
  //       },
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false, // Hide the legend if not needed
  //       },
  //     },
  //     layout: {
  //       padding: {
  //         top: 20, // Adjust top padding as needed
  //         bottom: 20, // Adjust bottom padding as needed
  //       },
  //     },
  //     responsive: true,
  //     maintainAspectRatio: false, // Allow chart to be responsive with custom height
  //   },
  // };

  return (
    <div className="flex flex-col items-center py-16 gap-y-[7.8rem] py-">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[5rem]">
          <EntrepriseNom
            nomEntreprise={"Nom Entreprise"}
            secteurActivity={"Secteur d'activités"}
          />
          <EntrepriseDescription />
        </div>
        <div className="flex justify-center pt-[7rem] items-center w-[40rem] h-auto">
          <img src={Logo} alt="LOGO" />
        </div>
      </div>
      <Historique histo={historique} />
    </div>
  );
};

export default CompteEntreprise;
