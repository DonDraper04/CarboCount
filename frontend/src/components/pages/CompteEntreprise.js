import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import EntrepriseNom from '../components/EntrepriseNom';
import EntrepriseDescription from '../components/EntrepriseDescription';
import Logo from "../files/CARBOcount.png";
import Historique from '../components/Historique';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const CompteEntreprise = () => {
  const historique = [
    {
      nom: "Entreprise A",
      date: "2024-05-10 10:30",
      periode: "2024-05",
      emission: "2500 kg CO2"
    },
    {
      nom: "Entreprise B",
      date: "2024-05-30 14:45",
      periode: "2024-04",
      emission: "1800 kg CO2"
    },
    {
      nom: "EntreKray",
      date: "2024-05-16 14:45",
      periode: "2024-04",
      emission: "1800 kg CO2"
    },
    {
      nom: "EntreKrbay",
      date: "2024-05-19 14:45",
      periode: "2024-04",
      emission: "1800 kg CO2"
    },
    {
      nom: "Tchiwaw",
      date: "2024-05-20 14:45",
      periode: "2024-04",
      emission: "1800 kg CO2"
    },
    {
      nom: "Tchamendar",
      date: "2024-05-24 14:45",
      periode: "2024-04",
      emission: "1800 kg CO2"
    },
  ];

  // Sort the historique array by date
  historique.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the latest 4 elements
  const latestHistorique = historique.slice(0, 4);

  const companyNames = latestHistorique.map(entry => entry.nom);
  const emissions = latestHistorique.map(entry => parseFloat(entry.emission)); // Assuming emissions are in numeric format

  // Chart data
  const data = {
    labels: companyNames,
    datasets: [{
      label: 'Emissions (kg CO2)',
      data: emissions,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y', // To use the labels as y-axis
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false // Hide the legend if not needed
        }
      },
      layout: {
        padding: {
          top: 20, // Adjust top padding as needed
          bottom: 20 // Adjust bottom padding as needed
        }
      },
      responsive: true,
      maintainAspectRatio: false, // Allow chart to be responsive with custom height
    },
  };

  return (
    <div className='flex flex-col items-start gap-y-[7.8rem]'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-y-[5rem]'>
          <EntrepriseNom nomEntreprise={"Nom Entreprise"} secteurActivity={"Secteur d'activités"} />
          <EntrepriseDescription />
        </div>
        <div className='flex justify-center pt-[7rem] items-center w-[40rem] h-auto'>
          <img src={Logo} alt="LOGO" />
        </div>
      </div>
      <Historique histo={historique} />
      <div>
        <h2>Emissions par entreprise</h2>
        <div className='w-[30rem] h-[30rem]'>
          <Bar data={data} options={config} width={"30rem"} height={"30rem"} />
        </div>
      </div>
    </div>
  )
}

export default CompteEntreprise;
