
  import React from 'react'
  import { LoginComponent } from '../components/LoginComponent';
  import Bienvenu from '../components/Bienvenu';
const Login = () => {
  return (
    <div className=' flex flex-col items-center py-10'>
    <Bienvenu msgTYPE="Bienvenu !"/>
    <LoginComponent/>
    </div>
  )
}

export default Login
