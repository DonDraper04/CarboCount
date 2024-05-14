import React from 'react'
import svgNotif from '../files/notification.svg'
import HeaderParams from './HeaderParams'
import ToggleSwitch from './ToggleSwitch'

const NotificationsActive = () => {
  return (
    <div className='h-full w-full flex flex-col'>
    <HeaderParams svg={svgNotif} Text="Notifications" />
    <ToggleSwitch choice1={"ON"} choice2={"OFF"} color={"[#090E24]"}/>
    </div>
  )
}

export default NotificationsActive;