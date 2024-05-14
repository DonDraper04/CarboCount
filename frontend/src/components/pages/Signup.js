
import React from 'react'
import { SignupComponent } from '../components/SignupComponent';
import Bienvenu from '../components/Bienvenu';
const Signup = () => {
return (
  <div className='w-full flex flex-col items-center'>
  <Bienvenu msgTYPE="Inscrivez vous !"/>
  <SignupComponent/>
  </div>
)
}

export default Signup;
