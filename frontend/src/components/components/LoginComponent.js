// import {React, useState ,useRef} from 'react';
// import CustomInputField from './CustomInputField'; // Assuming the component is in a file named CustomInputField.js
// import { ReactComponent as Icon2 } from '../../src/files/line2.svg';
// import { ReactComponent as GoogleIcon } from '../../src/files/google.svg';
// import svgPassword from '../files/password.svg'
// import svgUser from '../files/user.svg'
// // import { useNavigate } from "react-router-dom";
// import useLogin from "../hooks/useLogin";


// export const LoginComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const errorMSG = "Champ incorrect !"
//   const isError = () => {
//     // Add your validation logic here
//     return inputValue.length === 0; // For example, check if the input value is empty
//   };
//   const [inputValues, setInputValues] = useState({
//     email: '',
//     password: ''
//   });

// // Function to handle changes to the input value for a specific field
// const handleInputChange = (fieldName, value) => {
//     setInputValues(prevState => ({
//         ...prevState,
//         [fieldName]: value
//     }));
// };
// const email = useRef(null);
// const password = useRef(null);
// // const navigate=useNavigate();
// const { Error, Login, Lauding } = useLogin();
// const handlelogin = async () => {
//   const res = await Login(inputValues.email, inputValues.password);
//   if (!Error) {
//     console.log(res);
//   }
// };

//   return (
//     <div className='flex flex-col items-center justify-center  w-[30rem] h-[30rem] rounded-xl gap-y-4 text-base py-3 shadow-xl'>

//       <CustomInputField width="16rem" svg={svgUser} fieldName="Nom d'utilisateur" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('email', value)}/>
//       <CustomInputField width="16rem" svg={svgPassword} fieldName="Password" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('password', value)}/>
//       <div className='flex justify-end  w-[77%]'>
//           <p className='font-normal text-sm text-[#C51605]'>
//             <a href='#'>
//             Mot de passe oublié?
//             </a>
//           </p>
//           </div>
//       <button type="submit" onClick={handlelogin} className='mt-5 mb-5 bg-[#FD8D14] w-[50%] py-2 px-4 rounded-md text-white font-semibold shadow-md hover:bg-[#FFA94D] focus:outline-none focus:ring-2 focus:ring-[#FD8D14] focus:ring-opacity-50'>
//         Connexion
//       </button>

//        <div className='flex flex-col items-center w-[full] gap-y-[1rem]'>
//        <div className='flex items-center w-[100%] gap-x-2'>
//       <Icon2/>
//       <p className='text-xs font-semibold '>Ou se connecter avec</p>
//       <Icon2/>
//       </div>
//       <GoogleIcon/>
//       <div className='font-medium text-sm'><p>Vous n'avez pas de compte? <span className='text-[#C51605]'><a href='#'>Inscrivez vous !</a></span></p></div>

//        </div>

//     </div>
//   );
// };
import {React, useState ,useRef} from 'react';
import CustomInputField from './CustomInputField'; // Assuming the component is in a file named CustomInputField.js
import { ReactComponent as Icon2 } from '../files/line2.svg';
import { ReactComponent as GoogleIcon } from '../files/google.svg';
import svgPassword from '../files/password.svg'
import svgUser from '../files/user.svg'
// import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export const LoginComponent = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: ''
  });
  const [isError, setIsError] = useState(false);

  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);   WHAT DOES THIS DO??

  const { Error, Login, Lauding } = useLogin();

  const handleInputChange = (fieldName, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
    setErrorMessages(prevState => ({
      ...prevState,
      [fieldName]: value === '' ? `Remplir le champ ${fieldName}` : ''
    }));
    setIsError(value === '' ? true : false); // Update isError based on the empty value
  };

  const handlelogin = async () => {
    if (inputValues.email === '' || inputValues.password === '') {
      setErrorMessages(prevState => ({
        ...prevState,
        email: inputValues.email === '' ? 'Remplir le champ Email' : '',
        password: inputValues.password === '' ? 'Remplir le champ Password' : ''
      }));
      setIsError(true);
      return;
    }

    const res = await Login(inputValues.email, inputValues.password);
    if (Error) {
      setErrorMessages(prevState => ({
        ...prevState,
        email: 'Champ incorrect'
      }));
      setIsError(true);
    } else {
      console.log(res);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-[30rem] h-[30rem] rounded-xl gap-y-4 text-base py-3 shadow-xl'>
      <form className='flex flex-col items-center justify-center w-auto h-auto gap-y-2' 
      onSubmit={(e) => {
        e.preventDefault()
        handlelogin();
      }}>
      <CustomInputField
        width="16rem"
        svg={svgUser}
        fieldName="Email"
        errorMessage={errorMessages.email}
        onInputChange={(value) => handleInputChange('email', value)}
        isError={isError && inputValues.email === ''}
      />
      <CustomInputField
        width="16rem"
        svg={svgPassword}
        fieldName="Password"
        errorMessage={errorMessages.password}
        onInputChange={(value) => handleInputChange('password', value)}
        isError={isError && inputValues.password === ''}
      />
      <div className='flex justify-end  w-[100%]'>
        <p className='font-normal text-sm text-[#C51605]'>
          <a href='#'>
            Mot de passe oublié?
          </a>
        </p>
      </div>
      <button
        type="submit"
        className='mt-5 mb-5 bg-[#FD8D14] w-[50%] py-2 px-4 rounded-md text-white font-semibold shadow-md hover:bg-[#FFA94D] focus:outline-none focus:ring-2 focus:ring-[#FD8D14] focus:ring-opacity-50'
      >
        Connexion
      </button>
      </form>

      <div className='flex flex-col items-center w-[full] gap-y-[1rem]'>
        <div className='flex items-center w-[100%] gap-x-2'>
          <Icon2 />
          <p className='text-xs font-semibold '>Ou se connecter avec</p>
          <Icon2 />
        </div>
        <GoogleIcon />
        <div className='font-medium text-sm'>
          <p>
            Vous n'avez pas de compte? <span className='text-[#C51605]'><a href='#'>Inscrivez vous !</a></span>
          </p>
        </div>
      </div>
    </div>
  );
};