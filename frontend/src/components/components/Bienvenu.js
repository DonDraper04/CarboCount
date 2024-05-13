import React from 'react';


const Bienvenu = ({msgTYPE}) => {
  return (
  
  <div className="flex flex-col justify-center items-center w-[30rem] h-[5rem] gap-y-2 mb-8">
   <h1 className='text-3xl font-[750]'>{msgTYPE}</h1>
  </div>
  
  );
};

export default Bienvenu;