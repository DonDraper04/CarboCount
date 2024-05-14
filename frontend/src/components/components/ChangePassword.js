import React, { useState } from 'react';
import svgPassword from '../files/password.svg';
import HeaderParams from './HeaderParams';
import CustomInputField from './CustomInputField';
import CustomButton from './CustomButton';

const ChangePassword = () => {
    // State to store input values for each field
    const [inputValues, setInputValues] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    // Function to handle changes to the input value for a specific field
    const handleInputChange = (fieldName, value) => {
        setInputValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    return (
        <div className='h-full w-full flex flex-col'>
            <HeaderParams svg={svgPassword} Text="Change password" />
            <div className=' flex-1 p-[10%]'>
                <div className='bg-white w-full h-full flex flex-col items-center justify-center gap-y-8 shadow-xl rounded-xl'>
                    {/* Pass the field name to identify each input */}
                    <div className='flex justify-center gap-x-8' >
                    <CustomInputField  width="16rem" fieldName="Ancien mot de passe" isError={false} errorMessage={""} obligatory={false} onInputChange={(value) => handleInputChange('oldPassword', value)} />
                    <CustomInputField  width="16rem" fieldName="Nouveau mot de passe" isError={false} errorMessage={""} obligatory={false} onInputChange={(value) => handleInputChange('newPassword', value)} />
                    </div>
                    <div className='flex justify-center gap-x-8'>
                    <CustomInputField  width="16rem" fieldName="Confirmer le mot de passe" isError={false} errorMessage={""} obligatory={false} onInputChange={(value) => handleInputChange('confirmNewPassword', value)} />
                    <div className='h-full w-[16rem] flex justify-end items-end pr-2'>
                    <CustomButton
                    width="6.5rem"
                    height="1.2rem"
                    bgColor="#FEBB74"
                    textColor="black"
                    textSize="0.8rem"
                    fontWeight="450"
                    children="Reinitialliser"
                    />
                    </div>
                    </div>
  
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
