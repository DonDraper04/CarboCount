import React, { useState } from 'react';

const ProfilePictureUpload = ({ currentPicture, onPictureChange }) => {
  const [newPicture, setNewPicture] = useState(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setNewPicture(file);
    onPictureChange(file);
  };

  return (
    <div className='flex gap-x-8'> 
      <img src={currentPicture} alt="Current Profile Picture" className="w-32 h-32 rounded-full mb-4" />
      <input
      type="file"
      accept="image/*"
      onChange={handlePictureChange}
      className="hidden"
      onClick={(e) => e.target.value = null} // Reset file input value on click
      id="profileButton"
      />
      <label for="profileButton"><div className='w-[10rem] h-[4rem] bg-[#FD8D14] flex justify-center items-center rounded-lg p-2 cursor-pointer font-bold text-white'>Upload a picture</div></label>
    </div>
  );
};

export default ProfilePictureUpload;
