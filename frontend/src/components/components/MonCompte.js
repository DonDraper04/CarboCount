import {React,useState} from 'react'
import svgUser from '../files/user.svg';
import svgEdit from '../files/edit.svg';
import ProfilePictureUpload from './ProfilePictureUpload';
import ProfileSaveButton from './ProfileSaveButton';
import ChangeProfilePicture from './ChangeProfilePicture';
import CustomInputFieldEdit from './CustomInputFieldEdit';
import CustomButton from './CustomButton';
import picture from '../files/kray.jpg';




const MonCompte = () => {
  const errorMSG = "Veuillez remplir ce champs! !"
  const isError = () => {
    // Add your validation logic here
    return false; // For example, check if the input value is empty
  };
    const renderSVG = (svg) => {
        // If the svg prop is a string (URL), render an <img> element
        if (typeof svg === 'string') {
            return <img src={svg} className="w-full h-full" />;
        }
        // If the svg prop is an imported SVG file, render it directly
        return <div dangerouslySetInnerHTML={{ __html: svg }} />;
    };
    const [inputValues, setInputValues] = useState({
      nom: '',
      prenom: '',
      email:'',
      phone:'',
      username:'',
      entreprise:'',
      secteur:''

    });
  
  // Function to handle changes to the input value for a specific field
  const handleInputChange = (fieldName, value) => {
      setInputValues(prevState => ({
          ...prevState,
          [fieldName]: value
      }));
  };

  return (
    <div className='h-full w-full flex flex-col  '>
    
    <div className=' h-[15%] flex justify-start items-center gap-2 text-3xl font-semibold  w-full'>
    <div className='w-[1.6rem] h-[1.6rem]'>
        {renderSVG(svgUser)}
    </div>
    <p>Mon compte</p>
    </div>

    <div className='h-[30%]  flex justify-center gap-x-6 '>
    <ChangeProfilePicture />
    </div>


    <div className='h-[55%] flex flex-col  p-[7%]'>
    <div className='w-full h-[25%] flex justify-center gap-x-14'>
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Nom" isError={isError()} errorMessage={errorMSG} obligatory={false}  onInputChange={(value) => handleInputChange('nom', value)}/>    
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Prenom" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('prenom', value)}/> 
    </div>
    <div className='w-full h-[25%] flex justify-center gap-x-14'>
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Email" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('email', value)} />    
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Numero de telephone" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('phone', value)} /> 
    </div>
    <div className='w-full h-[25%] flex justify-center gap-x-14 '>
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Nom d'utilisateur" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('username', value)}/>    
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Entreprise" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('entreprise', value)}/> 
    </div>
    <div className='w-full h-[25%] flex justify-between px-10  '>
    <CustomInputFieldEdit width="16rem" svg2={svgEdit}  fieldName="Secteur d'activités" isError={isError()} errorMessage={errorMSG} obligatory={false} onInputChange={(value) => handleInputChange('secteur', value)} />    
    <div className=' flex justify-end items-end pb-2 w-[16rem] gap-x-2'>
      <CustomButton
          width="6.5rem"
          height="1.2rem"
          bgColor="#FEBB74"
          textColor="black"
          textSize="0.8rem"
          fontWeight="450"
          children="Reinitialliser"
        />
    <CustomButton
        width="6.5rem"
        height="1.2rem"
        bgColor="#FD8D14"
        textColor="white"
        textSize="0.8rem"
        fontWeight="450"
        children="Sauvgarder"
      />
    </div>
    </div>


    </div>

   </div>


  )
}
export default MonCompte;
