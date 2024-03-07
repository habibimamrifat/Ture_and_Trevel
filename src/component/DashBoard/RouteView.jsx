import React from 'react'
import SectionWrapper from '../wrappers/SectionWrapper';
import { IoIosArrowForward } from "react-icons/io";

const RouteView = () => {
  return (
    
    <div>
      <SectionWrapper>
        <div className='w-full h-[56px] bg-[#9c9494]  flex items-center'>
        <h1 className='ml-5 flex items-center'> HOME <span> <IoIosArrowForward /></span> My Account </h1>
        </div>
      
      </SectionWrapper>
    </div>
    
  )
}

export default RouteView;
