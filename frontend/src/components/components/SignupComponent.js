import { React, useState, useRef } from "react";
import CustomInputField from "./CustomInputField"; // Assuming the component is in a file named CustomInputField.js
import CustomInputFieldList from "./CustomInputFieldList"; // Assuming the component is in a file named CustomInputField.js
import { ReactComponent as Icon3 } from "../files/line3.svg";
import useSignup from "../hooks/useSignup";
import { Link, redirect, useNavigate } from "react-router-dom";

import svgEmail from "../files/email.svg";
import svgEntreprise from "../files/entreprise.svg";
import svgIndustrie from "../files/industrie.svg";
import svgUser from "../files/user.svg";
import svgPhone from "../files/numero.svg";
import svgPassword from "../files/password.svg";

// export const SignupComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const errorMSG = "Veuillez remplir ce champs! !"
//   const isError = () => {
//     // Add your validation logic here
//     return inputValue.length === 0; // For example, check if the input value is empty
//   };
//   const dataList = [
//     "Option 1",
//     "Kray le mis",
//     "KrayBig",
//     "Miason",
//     "Debugger"
//   ];

//   const [inputValues, setInputValues] = useState({
//     nom: '',
//     prenom: '',
//     email:'',
//     password:'',
//     phone:'',
//     username:'',
//     entreprise:'',
//     secteur:''

//   });

// // Function to handle changes to the input value for a specific field
// const handleInputChange = (fieldName, value) => {
//     setInputValues(prevState => ({
//         ...prevState,
//         [fieldName]: value
//     }));
// };

// const { Error, Signup, Lauding } = useSignup();
// const handleSignup = async () => {
//   const res = await Signup(inputValues.username, inputValues.email, inputValues.password);
// };
//  return (
//     <div className='flex justify-center  w-[80%] h-[40rem] gap-y-4 text-base py-3 shadow-xl rounded-xl p-4  '>

//     <div className='p-0 w-[49%] h-full flex flex-col items-center justify-center rounded-xl gap-y-10 text-base py-3 '>
//     <CustomInputField width="18rem" fieldName="Nom" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('nom', value)} />
//     <CustomInputField width="18rem" fieldName="Prenom" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('prenom', value)} />
//     <CustomInputField width="18rem" svg={svgPhone} fieldName="Numero de téléphone" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('phone', value)} />
//     <CustomInputField width="18rem" svg={svgEntreprise} fieldName="Entreprise" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('entreprise', value)}/>
//     <CustomInputFieldList width="18rem" svg={svgIndustrie} fieldName="Secteur d'activités" isError={isError()} errorMessage={errorMSG} obligatory={true} dataList={dataList} onInputChange={(value) => handleInputChange('secteur', value)}/>

//     </div>
//     <div className='p-0 w-[1%] h-full flex justify-center items-center text-base '><Icon3/></div>
//     <div className='w-[50%] h-full'>
//     <div className='p-0 w-full h-[80%] flex flex-col items-center justify-center  rounded-xl gap-y-10 text-base py-3 '>
//     <CustomInputField width="18rem" svg={svgEmail} fieldName="E-mail" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('email', value)}/>
//     <CustomInputField width="18rem" svg={svgUser} fieldName="Nom d'utilisateur" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('username', value)} />
//     <CustomInputField width="18rem" svg={svgPassword} fieldName="Mot de passe" isError={isError()} errorMessage={errorMSG} obligatory={true} onInputChange={(value) => handleInputChange('password', value)}/>
//     </div>
//     <div className='flex flex-col justify-end items-end h-[20%]  pr-20 pb-5'>
//       <button type="submit" onClick={handleSignup} className='mt-5  bg-[#FD8D14] w-[50%] py-2 px-4 rounded-md text-white font-semibold shadow-md hover:bg-[#FFA94D] focus:outline-none focus:ring-2 focus:ring-[#FD8D14] focus:ring-opacity-50'>
//         Connexion
//       </button>
//       {isError() && <div > <p className="text-red-500 text-xs mt-1">Veuillez remplir tous les champs requis.</p> </div>}
//     </div>
//     </div>

//     </div>
//   );
// };

export const SignupComponent = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    username: "",
    entreprise: "",
    secteur: "",
  });

  const dataList = ["Option 1", "Kray le mis", "KrayBig", "Miason", "Debugger"];

  const [errorMessages, setErrorMessages] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    phone: "",
    username: "",
    entreprise: "",
    secteur: "",
  });

  const [isError, setIsError] = useState(false);

  const { Error, Signup } = useSignup();

  const handleInputChange = (fieldName, value) => {
    setInputValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    setErrorMessages((prevState) => ({
      ...prevState,
      [fieldName]: value === "" ? `Veuillez remplir le champ ${fieldName}` : "",
    }));
    setIsError(value === "" ? true : false); // Update isError based on the empty value
  };

  const handleSignup = async () => {
    let hasError = false;

    Object.entries(inputValues).forEach(([key, value]) => {
      if (value === "") {
        setErrorMessages((prevState) => ({
          ...prevState,
          [key]: `Veuillez remplir le champ ${key}`,
        }));
        hasError = true;
      }
    });

    if (hasError) {
      setIsError(true);
      return;
    }

    const res = await Signup(
      inputValues.username,
      inputValues.email,
      inputValues.phone,
      inputValues.entreprise,
      inputValues.secteur
    );
    if (!res) {
      return;
    }
    if (res.error) {
      setMessage(null);
      setErrorMessage(res.error);
      return setTimeout(() => {
        console.log(errorMessage);
        if (res.error === "Request is pending") {
          navigate("/");
        }
        setErrorMessage(null);
      }, 3000);
    }
    setErrorMessage(null);
    setMessage(
      "Votre demande de création de compte est en cours de traitement."
    );
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  return (
    <div className="flex justify-center  w-[80%] h-[40rem] gap-y-4 text-base py-3 shadow-xl rounded-xl p-4  ">
      {errorMessage && (
        <div className=" transition-all absolute top-40  sm:top-20 sm:w-1/2 sm:absolute bg-red-300/40 border-2 rounded-md w-3/4 h-10 flex justify-center items-center text-lg font-Parr text-red-400 border-red-500 ">
          {errorMessage}
        </div>
      )}
      {message && (
        <div className=" transition-all absolute top-40  sm:top-20 sm:w-1/2 sm:absolute bg-green-300/40 border-2 rounded-md w-3/4 h-10 flex justify-center items-center text-lg font-Parr text-green-400 border-green-500 ">
          {message}
        </div>
      )}
      <div className="p-0 w-[49%] h-full flex flex-col items-center justify-center rounded-xl gap-y-10 text-base py-3 ">
        <CustomInputField
          width="18rem"
          fieldName="Nom"
          errorMessage={errorMessages.nom}
          onInputChange={(value) => handleInputChange("nom", value)}
          isError={isError && inputValues.nom === ""}
        />
        <CustomInputField
          width="18rem"
          fieldName="Prenom"
          errorMessage={errorMessages.prenom}
          onInputChange={(value) => handleInputChange("prenom", value)}
          isError={isError && inputValues.prenom === ""}
        />
        <CustomInputField
          width="18rem"
          svg={svgPhone}
          fieldName="Numero de téléphone"
          errorMessage={errorMessages.phone}
          onInputChange={(value) => handleInputChange("phone", value)}
          isError={isError && inputValues.phone === ""}
        />
        <CustomInputField
          width="18rem"
          svg={svgEntreprise}
          fieldName="Entreprise"
          errorMessage={errorMessages.entreprise}
          onInputChange={(value) => handleInputChange("entreprise", value)}
          isError={isError && inputValues.entreprise === ""}
        />
        <CustomInputFieldList
          width="18rem"
          svg={svgIndustrie}
          fieldName="Secteur d'activités"
          errorMessage={errorMessages.secteur}
          dataList={dataList}
          onInputChange={(value) => handleInputChange("secteur", value)}
          isError={isError && inputValues.secteur === ""}
        />
      </div>
      <div className="p-0 w-[1%] h-full flex justify-center items-center text-base ">
        <Icon3 />
      </div>
      <div className="w-[50%] h-full">
        <div className="p-0 w-full h-[80%] flex flex-col items-center justify-center  rounded-xl gap-y-10 text-base py-3 ">
          <CustomInputField
            width="18rem"
            svg={svgEmail}
            fieldName="E-mail"
            errorMessage={errorMessages.email}
            onInputChange={(value) => handleInputChange("email", value)}
            isError={isError && inputValues.email === ""}
          />
          <CustomInputField
            width="18rem"
            svg={svgUser}
            fieldName="Nom d'utilisateur"
            errorMessage={errorMessages.username}
            onInputChange={(value) => handleInputChange("username", value)}
            isError={isError && inputValues.username === ""}
          />
        </div>
        <div className="flex flex-col justify-end items-end h-[20%]  pr-20 pb-5">
          <button
            type="submit"
            onClick={handleSignup}
            className="mt-5  bg-[#FD8D14] w-[50%] py-2 px-4 rounded-md text-white font-semibold shadow-md hover:bg-[#FFA94D] focus:outline-none focus:ring-2 focus:ring-[#FD8D14] focus:ring-opacity-50"
          >
            Connexion
          </button>
          {isError && (
            <div>
              {" "}
              <p className="text-red-500 text-xs mt-1">
                Veuillez remplir tous les champs requis.
              </p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
