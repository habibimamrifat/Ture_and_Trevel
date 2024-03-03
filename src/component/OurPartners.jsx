import React from 'react'
import Opimg from "../assets/img/Opimg.png"
import imageS from "../assets/img/Simg.png"
import imageT from "../assets/img/Timg.png"
import imageU from "../assets/img/Uimg.png"

const OurPartners = () => {
  return (
    <div className='w-full h-auto lg:h-[280px] bg-[#D9D9D9] mt-[81px]  flex justify-center items-center'>
      <div className='flex justify-around items-center xsm:flex-col sm:flex-row sm:flex-wrap p-5 lg:flex-nowrap gap-16 lg:ml-[144px] lg:mr-[144px]'>
      <img src={Opimg} alt="" />
      <img src={imageS} alt="" />
      <img src={imageT} alt="" />
      <img src={imageU} alt="" />
      </div>
    </div>
  )
}

export default OurPartners;
