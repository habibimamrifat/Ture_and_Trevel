import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div>
      <div className='w-[800px] h-[154px] mt-[23px] flex absolute bottom-0 right-0 rounded-ss-2xl overflow-hidden'>
            <div className='w-[161px] h-full bg-[#FF3B00] flex justify-center items-center'>
                <FaArrowDown className='text-3xl text-white font-normal'/>
            </div>

            <div className='bg-white w-full flex  justify-around items-center'>
                <div className='flex justify-around gap-5'>
                    <FiFacebook className='text-3xl text-black font-normal' />
                    <CiTwitter className='text-3xl text-black font-normal' />
                    <FaInstagram className='text-3xl text-black font-normal' />
                </div>
                <div className='text-black'>
                     <h1> @ All Copyright 2022, Solutya</h1>
                </div>
            </div>
      </div>
    </div>
  )
}

export default FooterBottom;
