import React from 'react'
import Opimg from "../assets/img/Opimg.png"
import imageS from "../assets/img/Simg.png"
import imageT from "../assets/img/Timg.png"
import imageU from "../assets/img/Uimg.png"

const OurPartners = () => {
  return (
    <div className='w-[1440px] h-[283px] bg-[#D9D9D9] mt-[81px]  flex justify-center items-center'>
      <div className='flex justify-around items-center gap-16 ml-[144px] mr-[144px]'>
      <img src={Opimg} alt="" />
      <img src={imageS} alt="" />
      <img src={imageT} alt="" />
      <img src={imageU} alt="" />
      </div>
    </div>
  )
}

export default OurPartners;
