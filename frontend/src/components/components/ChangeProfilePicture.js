import React, { useState } from 'react';
import img from "../files/kray.jpg"

const ChangeProfilePicture = () => {
  const [previewImage, setPreviewImage] = useState(img);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., upload the image to the server)
    alert('Changes saved successfully!');
  };

  return (
    <div className="flex justify-center items-center gap-x-14">
      <input
        type="file"
        id="profile-picture"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className="mt-4 w-32 h-32 object-cover rounded-full"
        />
      )}
      <div className='flex flex-col'>
      <label htmlFor="profile-picture" className="flex justify-center items-center cursor-pointer w-[12rem] h-[2.5rem] bg-[#FEBB74] rounded-lg text-base text-black font-semibold ">
        Upload new picture
      </label>

      <button
        className="mt-4 bg-[#FD8D14] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg "
        onClick={handleSaveChanges}
        disabled={!previewImage}>
        
       Save Changes
      </button>
      </div>

    </div>
  );
};

export default ChangeProfilePicture;
