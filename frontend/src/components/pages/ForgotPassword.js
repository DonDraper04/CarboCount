import { React, useState } from "react";
import Bienvenu from "../components/Bienvenu";
import CustomInputField from "../components/CustomInputField";
import svgEmail from "../files/email.svg";
import svgPassword from "../files/password.svg";
import CustomButton from "../components/CustomButton";
import VerificationCodeInput from "../components/VerificationCodeInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate =useNavigate()
  const [isCodeSent, setIsCodeSent] = useState(false); // State to track if verification code is sent
  const [isCodeCorrect, setIsCodeCorrect] = useState(false); // State to track if verification code is correct
  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };
  const [inputValue, setInputValue] = useState("");
  const errorMSG = "Veuillez remplir ce champs! !";
  const isError = () => {
    // Add your validation logic here
    return inputValues.email === ""; // For example, check if the input value is empty
  };
  const [inputValues, setInputValues] = useState({
    email: "",
  });

  const [step, setStep] = useState(1);

  // Function to handle changes to the input value for a specific field
  const handleInputChange = (fieldName, value) => {
    setInputValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // Function to handle sending the verification code
  const handleSendVerificationCode = async () => {
    // Simulate sending verification code (replace with your actual logic)
    // For demonstration, let's assume the code is sent successfully after a delay of 1 second
    try {
      console.log("i am here");
      console.log(inputValues.email);

      if (inputValues.email == "") {
        return;
      }
      console.log(inputValues);
      const res = await fetch(
        "http://localhost:8080/api/Entreprise/ForgotPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: inputValues.email }),
        }
      );
      console.log("ooo");
      const json = await res.json();
      console.log(json);
      if (!res.ok) {
        console.log("i am here2");
        console.log(json);
        return isError(true);
      }
      console.log("i am her2e");

      setIsCodeSent(true); // Update state to indicate that code is sent
      setStep(2);
    } catch (error) {
      return console.log(error);
    }
  };

  // Function to handle confirming the verification code
  const handleConfirmVerificationCode = async () => {
    // Simulate verifying the code (replace with your actual logic)
    // For demonstration, let's assume the code is correct if it's "12345"
    setIsCodeCorrect(true);
    setStep(3);
  };

  const handleResetPassword = async () => {
    try {
      console.log(inputValues);
      console.log(verificationCode);
      if (verificationCode === "") {
        return;
      }
      if (inputValues.email == "") {
        return;
      }
      if(inputValues.oldPassword !== inputValues.confirmNewPassword){
        return;
      }
      const res = await fetch(
        "http://localhost:8080/api/Entreprise/ResetPassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: inputValues.email,
            verifCode: verificationCode,
            newPassword: inputValues.oldPassword,
          }),
        }
      );
      const json = await res.json();
      console.log(json)
      if (!res.ok) {
        return setIsCodeCorrect(false); // Update state to indicate that code is incorrect
      }
      return navigate("/login")
      // Move to the next step
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-3">
      <Bienvenu msgTYPE={"Mot de passe oublié!"} />
      {step === 1 && <p>Vérifiez votre boîte mail et entrez le code reçu</p>}
      {step === 2 && (
        <p>Réinitialiser votre mot de passe pour vous connecter</p>
      )}
      {step === 3 && <p>Modifier votre mot de passe</p>}
      {step === 1 && (
        <div className="flex items-center flex-col w-[30rem] h-[20rem]  gap-y-8 shadow-xl rounded-xl p-[10%]">
          <CustomInputField
            width="18rem"
            svg={svgEmail}
            fieldName="E-mail"
            isError={isError()}
            errorMessage={errorMSG}
            obligatory={false}
            onInputChange={(value) => handleInputChange("email", value)}
          />
          <CustomButton
            width="8rem"
            height="2rem"
            bgColor="#FEBB74"
            textColor="black"
            textSize="1rem"
            fontWeight="500"
            children="Envoyer"
            onClick={handleSendVerificationCode} // Call handleSendVerificationCode when the button is clicked
          />
        </div>
      )}
      {step === 2 && (
        <div
          className={`flex items-center flex-col w-[30rem] h-[20rem]  gap-y-8 shadow-xl rounded-xl p-[10%]`}
        >
          <p>Code de validation</p>
          {/* <VerificationCodeInput onVerificationCodeChange={handleVerificationCodeChange} /> */}
          <input onChange={handleVerificationCodeChange} />
          <CustomButton
            width="8rem"
            height="2rem"
            bgColor="#FEBB74"
            textColor="black"
            textSize="1rem"
            fontWeight="500"
            children="Confirmer"
            onClick={handleConfirmVerificationCode} // Call handleConfirmVerificationCode when the button is clicked
          />
        </div>
      )}
      {step === 3 && (
        <div className="flex items-center flex-col w-[30rem] h-[20rem]  gap-y-8 shadow-xl rounded-xl p-[10%]">
          <CustomInputField
            width="18rem"
            svg={svgPassword}
            fieldName="Mot de passe"
            isError={isError()}
            errorMessage={errorMSG}
            obligatory={true}
            onInputChange={(value) => handleInputChange("oldPassword", value)}
          />
          <CustomInputField
            width="18rem"
            svg={svgPassword}
            fieldName="Confirmer mot de passe"
            isError={isError()}
            errorMessage={errorMSG}
            obligatory={true}
            onInputChange={(value) =>
              handleInputChange("confirmNewPassword", value)
            }
          />
          <CustomButton
            width="8rem"
            height="2rem"
            bgColor="#FEBB74"
            textColor="black"
            textSize="1rem"
            fontWeight="500"
            children="Modifier"
            onClick={handleResetPassword}
            // Call handleSendVerificationCode when the button is clicked
          />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
