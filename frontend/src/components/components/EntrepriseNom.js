import React from 'react';
import profile from "../files/profile.svg";
import line from "../files/line4.svg";

const EntrepriseNom = ({ nomEntreprise, secteurActivity, image }) => {
  const renderImage = () => {
    if (image) {
      return <img src={image} alt={nomEntreprise} />;
    } else {
      return <img src={profile} alt="Profile" />;
    }
  };

  return (
    <div className='flex justify-start gap-x-5'>
        <div>
        {renderImage()}
        </div>
        <div className='flex flex-col justify-center gap-y-3 mt-4'>
        <span className='font-jersey-15 font-bold text-4xl '>{nomEntreprise}</span>
        <span><img src={line} alt="Line" /></span>
        <span className='font-semibold text-2xl'>{secteurActivity}</span>
        </div>
    </div>
  );
};

export default EntrepriseNom;
