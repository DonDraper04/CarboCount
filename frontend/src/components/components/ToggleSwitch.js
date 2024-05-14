import React, { useState } from 'react';

const ToggleSwitch = ({ choice1, choice2, color }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className={`w-[16rem] border-double border-2 rounded-lg border-${color}`}>
      {/* Toggle switch track */}
      <div
        className={`relative w-full h-10 rounded-lg cursor-pointer ${isChecked ? `bg-${color}` : 'bg-gray-400'}`}
        onClick={toggleSwitch}
      >
        {/* Toggle switch thumb */}
        <div
          className="absolute top-0 w-[8rem] h-10 bg-white rounded-lg shadow-md flex justify-center items-center text-sm font-semibold text-[#090E24]"
          style={{
            left: isChecked ? 'calc(100% - 50.5%)' : '0',
            transition: 'left 0.3s ease-in-out'
          }}
        >
          {isChecked ? choice1 : choice2}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
