import React from 'react';
import '../fonts/fonts.css';

export default function Home() {
    return(
    <div>
        <div className='w-[72rem] h-[79vh] mx-auto'>
            <div className='mb-16 mt-24'>
                <span className='text-[83px] text-[#C51605] font-bold'>CARBO</span>
                <span className='text-[83px] font-bold'>count</span>
            </div>
            <div>
                <span className='text-[22px] leading-loose'>Bienvenue sur</span>
                <span className='text-[22px] font-bold'> CARBOCOUNT</span>
                <span className='text-[22px] leading-loose'> l'outil inédit pour les </span>
                <span className='text-[22px] font-bold'> entreprises</span>
                <span className='text-[22px] leading-loose'> soucieuses de leur</span>
                <span className='text-[22px] font-bold leading-loose text-[#4AA43A]'> empreinte carbone.</span>
                <span className='text-[22px] leading-loose'> Notre calculateur vous offre des moyens simples et efficaces pour mesurer et réduire votre impact environnemental. Rejoignez-nous dans cette démarche vers la durabilité, et ensemble, construisons un avenir plus vert.
                </span>
            </div>

            <div>
                <button className='mt-16 bg-[#FD8D14] p-4 text-white font-bold rounded-full' onClick={() => window.location.href = '/calculer'}>
                    Calculer le bilan carbone de mon entreprise  {`   >`} 
                </button>
            </div>
        </div>

        <div className='bg-[#FCE599]'>
            <div className='w-[72rem] flex pb-24 mx-auto'>
                <div>
                    <div className='pt-24 pb-12  '>
                        <span className='relative'>
                            <span className='text-[50px] font-bold text-[#C51605]'>QUI SOMMES NOUS ?</span>
                            <span className='absolute bottom-0 left-0 w-1/2 border-b-4 top-12 border-[#C51605]'></span>
                        </span>
                    </div>
                    <div className='w-[45rem]'>
                        <span className='text-[20px] font-bold'>CARBOCOUNT</span>
                        <span className='text-[20px]'> est le fruit de l'engagement déterminé d'une équipe d'étudiants en informatique qui mettent leurs compétences techniques au service d'une cause significative. En tant que projet, nous nous concentrons sur la création d'un calculateur d'empreinte carbone d'entreprise. Notre objectif est d'offrir aux entreprises les moyens de mesurer et de réduire leur impact environnemental. À travers CarboCount, nous unissons technologie et responsabilité environnementale pour promouvoir un avenir plus durable. </span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src='/Group 2031.png' alt='logo' className='mx-auto ml-[200px] mt-[80px]'></img>
                </div>
            </div>
        </div>
        <div className='bg-[#FFE17B]'>
            <div className='ml-48 pt-16'>
                <span className='relative'>
            <span className='text-[#C51605] text-[49px]  gotham'>Nos objectifs ?</span>
            <span className='absolute bottom-0 left-0 w-3/4 border-b-4 top-8 border-[#C51605]'></span>
                </span>
                <div className='relative  ml-16 pb-16 aileron h-[650px]'>
               <div className='h-[170px] w-[170px] rounded-[100%] bg-[#090E24] top-[80px] left-[220px] absolute flex items-center justify-center'>
                <span className='text-white '>Sensibilisation </span>

               </div>
               <div className='h-[140px] w-[140px] rounded-[100%] p-4 bg-[#CECE5A] top-[210px] left-[10px] absolute flex items-center justify-center'>
                <span className='text-white '>Soutien 
actif
 </span>

               </div>
               <div className='h-[200px] w-[200px] rounded-[100%] p-4 bg-[#C51605] top-[210px] left-[450px] absolute flex items-center justify-center'>
                <span className='text-white '>Calculateur
précis
                </span>

               </div>

               <div className='h-[170px] w-[170px] rounded-[100%] p-4 bg-[#090E24] top-[460px] left-[440px] absolute flex items-center justify-center'>
                <span className='text-white text-center '>Facilité 
d’utilisation
                </span>

               </div>

               <div className='h-[150px] w-[150px] rounded-[100%] p-4 bg-white top-[130px] left-[740px] absolute flex items-center justify-center'>
                <span className='text-black '>Accessibilité
                </span>

               </div>

               <div className='h-[210px] w-[210px] rounded-[100%] p-4 bg-[#CECE5A] top-[350px] left-[760px] absolute flex items-center justify-center'>
                <span className='text-black '>Assistance
technique
                </span>

               </div>

               <div className='h-[180px] w-[180px] rounded-[100%] bg-[#FD8D14] top-[350px] left-[190px] absolute flex items-center justify-center'>
                <span className='text-white text-center'>Confidentialité
des données</span>

               </div>
               
                </div>
            </div>

        </div>
            <div className=" bg-[#090E24] text-white lg:block  h-[26.5rem] ">
                <div className=" flex items-center   h-[85%] justify-center border-b-2 border-white">
                    <div className="hidden lg:flex justify-center  gap-36 text-[#DDDDDE] w-[70%]"> 
                        <div className="flex flex-col  text-sm gap-[0.9rem]">
                            <h1 className="font-semibold  pb-1 text-lg">CarboCount</h1>
                            <span> A propos</span>
                            <span>Nos Objectis</span>
                            <span>Calculer votre bilan carbone</span>
                            <span>FAQ</span>
                        </div>
                        <div className="flex flex-col  text-sm gap-[0.9rem]">

                            <span>Mon compte</span>
                            <span>Mes bilans</span>
                        </div>
                        <div  className=" flex flex-col  text-sm gap-[0.9rem] ">
                            <h1 className=" font-semibold  pb-1 text-lg ">Contact</h1>
                            <span>Terms of Service</span>
                            <span>Privacy Policy</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center h-[15%]">
                    ©CarboCount 2024. All rights reserved
                </div>
            </div>  
        
    </div>
);
}


