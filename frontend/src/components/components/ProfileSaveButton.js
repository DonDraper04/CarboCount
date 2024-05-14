import React from 'react';

const ProfileSaveButton = ({ onSave }) => {
  return (
    <button onClick={onSave} className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
      Save Changes
    </button>
  );
};

export default ProfileSaveButton;
