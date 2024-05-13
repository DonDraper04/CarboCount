import React from 'react';

const NumberedBox = ({ number, color, text }) => {
  return (
    <div className='w-full'>
      <div className={`flex gap-x-4 items-center`}>
        <div className='w-[3rem] h-[1.8rem]' style={{ backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center',color:'white' }}>{number}</div>
        <p className='mt-2'>{text}</p>
      </div>
    </div>
  );
};

export default NumberedBox;