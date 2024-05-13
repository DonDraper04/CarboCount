import React from 'react';
import Stepper from './stepper/Stepper';
import '../fonts/fonts.css'
import { useState, useEffect } from "react";

export default function Home({ scope1, setScope1, scope2, setScope2, scope3, setScope3, totale, setTotale }) {
    return(
        <div >
        <span className='relative block mb-12 mt-6 text-center'>
  <span className='gotham font-black text-center text-[33px] '>Mesurez votre bilan carbone</span>
  <span className='absolute left-1/2 top-16 transform -translate-x-1/2 bottom-0 w-32 border-b-[0.15rem] border-[#C51605]'></span>
</span>

        <div className="flex flex-col gap-10 items-center justify-center">
        <Stepper scope1={scope1}
          setScope1={setScope1}
          scope2={scope2}
          setScope2={setScope2}
          scope3={scope3}
          setScope3={setScope3}
          totale={totale}
          setTotale={setTotale}/>
      </div>
      </div>
    );

}

