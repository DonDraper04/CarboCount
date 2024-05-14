import React from 'react'
import svgLangue from '../files/langue.svg'
import HeaderParams from './HeaderParams'
import ToggleSwitch from './ToggleSwitch'

const LangueActive = () => {
  return (
    <div className='h-full w-full flex flex-col'>
    <HeaderParams svg={svgLangue} Text="Langue" />
    <ToggleSwitch choice1={"Français"} choice2={"Anglais"} color={"[#090E24]"}/>
    </div>
  )
}

export default LangueActive;