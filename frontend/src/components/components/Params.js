// import React from 'react'
// import MonCompte from '../components/MonCompte'
// import ChangePassword  from './ChangePassword'
// import NotificationsActive from './NotificationsActive'
// import LangueActive from './LangueActive'

// const Params = () => {
//   return (
//     <div className='w-[50rem] pl-6 shadow-xl rounded-xl'>
//     <MonCompte/>
//     <ChangePassword/>
//     <NotificationsActive/>
//     <LangueActive/>
//     </div>
//   )
// }
// export default Params;
import React from 'react';
import MonCompte from '../components/MonCompte';
import ChangePassword from './ChangePassword';
import NotificationsActive from './NotificationsActive';
import LangueActive from './LangueActive';

const Params = ({ activeItem }) => {
  return (
    <div className='w-[50rem] pl-6 shadow-xl rounded-xl'>
      {/* Render the component based on activeItem */}
      {activeItem === 0 && <MonCompte />}
      {activeItem === 1 && <ChangePassword />}
      {activeItem === 2 && <NotificationsActive />}
      {activeItem === 3 && <LangueActive />}
    </div>
  );
}
export default Params;