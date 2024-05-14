import {React,useState} from 'react'
import SideParam from '../components/SideParam.js'
import Params from '../components/Params.js'

// const Parameters = () => {
// return (
//   <>
//   <div className='flex justify-start w-[70%] h-[40rem]'>
//   <SideParam/>
//   <Params/>
//   </div>

//   </>
// )
// }

// export default Parameters;
const Parameters = () => {
  const [activeItem, setActiveItem] = useState(0); // State to track active item

  return (
      <>
          <div className='flex justify-start w-[70%] h-[40rem]'>
              {/* Pass setActiveItem function to SideParams */}
              <SideParam setActiveItem={setActiveItem} />
              {/* Render Params component and pass activeItem as prop */}
              <Params activeItem={activeItem} />
          </div>
      </>
  );
};

export default Parameters;