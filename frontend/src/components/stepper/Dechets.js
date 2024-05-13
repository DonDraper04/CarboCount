import "../../fonts/fonts.css"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Energie({ setFormData, FormData }){
        
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categories, setcategories] = useState([
    "Traitement des déchets"
  ]);
  const [isElement, setElement] = useState(false);
  const [tags, settags] = useState([]);
  const [inputs, setInputs] = useState([

  ]);

  useEffect(() => {
    const fetchData = async () => {
      if ( tags.length === 0 ){
        return;
      }
      try {
        // Make the POST reques
        const response = await axios.post('http://localhost:8080/api/calcul/getSubCategory', {tags});
        console.log(tags);
        // Handle the response
        if (response.data.error === "Thats all the tags there") {
          // Make the second POST request
          console.log("fff");
          const responseFromGetDocumentsWithTags = await axios.post('http://localhost:8080/api/calcul/getDocsWithTags', { tags });
          const processedDocs = processDocuments(responseFromGetDocumentsWithTags.data.docs);
          console.log(processedDocs);
          const concatenatedStrings = processedDocs.map(doc => ({
            Nom: `${doc.Nom_base_français} ${doc.Nom_attribut_francais}`,
            Unity: doc.Unity,
            details: doc.details,
            Quantity: 0
          }));
          setcategories(concatenatedStrings);
          setElement(true);
        } else {
          // Update categories state with the response data
          setcategories(response.data.uniqSubTags);
        }
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    };
  
    // Call fetchData whenever tags change
    fetchData();
  }, [tags]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const processDocuments = (docs) => {
    if (!docs || docs.length === 0) {
      return [];
    }
    const groupedDocs = docs.reduce((acc, doc) => {
      const existingDoc = acc.find(d => d.Id_number === doc.Id_number);
      if (existingDoc) {
        existingDoc.details.push({ Type_poste: doc.Type_poste, Post: doc.Post });
      } else {
        acc.push({
          Id_number: doc.Id_number,
          Nom_base_français: doc.Nom_base_français,
          Nom_attribut_francais: doc.Nom_attribut_francais,
          Unity: doc.Unity,
          details: [{ Type_poste: doc.Type_poste, Post: doc.Post }],
        });
      }
      return acc;
    }, []);
    return groupedDocs.map(doc => ({ Id_number: doc.Id_number, Nom_base_français: doc.Nom_base_français, Nom_attribut_francais: doc.Nom_attribut_francais, Unity: doc.Unity, details: doc.details }));
  };
  const handleInputChange = (event, input) => {
    const { value } = event.target;
    setFormData(prevInputValues => ({
      ...prevInputValues,
      [input.id]: { value: parseFloat(value), details: input.details }
    }));
  };

  const handleClick = (item) => {
    if (isElement) {
    selectItem(item);
    togglePopup();
    setcategories(["Traitement des déchets"]);
    settags([]);
    setElement(false);
    }
    else{
    settags(prevTags => [...prevTags, item]);}
  };
  
  const selectItem = (item) => {
      setSelectedItem(item);
      addInput(item); // Add selected item as a new input
      togglePopup(); // Close the popup after selecting an item
    };
    const handleButton1 = () => {// Add selected item as a new input
      setShowPopup(true); 
      settags(["Transport de marchandises"]);
      // Close the popup after selecting an item

    };
    const addInput = (item) => {
      const newInput = {
        id: inputs.length + 1,
        label: item.Nom,
        placeholder: "0",
        unit: item.Unity,
        details: item.details
      };
      setInputs(prevInputs => [...prevInputs, newInput]);
    };
    const handleButton2 = () => {// Add selected item as a new input
      setShowPopup(true); 
      settags(["Transport de personnes"])
      // Close the popup after selecting an item

    };
  return(
    <div className="w-[60%] aileron flex flex-col gap-6 items-center pt-4 mx-auto">
    {inputs.map(input => (
      <div key={input.id} className="mb-4 w-full items-center justify-center flex">
        
        <label htmlFor={`input${input.id}`} className="mr-4">{input.label}</label>
        <div className="flex border border-gray-300 w-[50%] rounded px-3 py-1">
          <input
            id={`input${input.id}`}
            type="text"
            className="w-full focus:outline-none"
            placeholder={input.placeholder}
            value={FormData[input.id]?.value || ''} // Set value from state
           onChange={(e) => handleInputChange(e, input)}
          />
          <span className="text-black text-[15px] italic">{input.unit}</span>
        </div>
      </div>
    ))}
    <button onClick={togglePopup} className="flex gap-3 px-6 py-2 bg-[#FFFAF6] border-[#FD8D14] border-[1px] rounded-lg">
      <img src="/Union.svg" alt="plus"></img>
      <span className="text-[#FD8D14] aileron">Ajouter une ligne</span>
    </button>
    {showPopup && (
  <div className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-500 bg-opacity-50 z-20">
    <div className="bg-[#CFCF5C] flex items-center pt-16 rounded-lg flex-col w-[70%] p-4 rounded shadow-md">
      <input className="rounded-[20px] pl-4 p-2" placeholder="Rechercher"></input>
      <ul className="flex flex-col items-center w-full mt-16 gap-6">
        {categories.map((item, index) => (
          
          <li key={index} className="cursor-pointer justify-between px-4 w-[90%] flex gap-4 items-center py-2 bg-[#FFFAF6] hover:bg-gray-200 p-2 flex rounded" onClick={() => handleClick(item)}>
              <div className="flex gap-4">
              <img src="/Trilobite.png" alt="desc">
                  
              </img>
            
            <span className="aileron text-[#704116]">  {typeof item === 'object' ? item.Nom : item}  {typeof item === 'object' ? item.Unity : ""} </span>
            </div>
            <div>
            <svg width="19" height="18" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34375 8.5V14H9.34375V8.5H14.8438V5.5H9.34375V0H6.34375V5.5H0.84375V8.5H6.34375Z" fill="#704116"/>
          </svg>
            </div>

          </li>
        ))}
      </ul>
    </div>
  </div>
)}
  </div>)
}