import React, { useEffect, useState } from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import SectionWrapper from './wrappers/SectionWrapper';

const FooterBottom = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentDate(date.toDateString());
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SectionWrapper>
      <div className='w-[60%] h-[154px] mt-[23px] flex justify-around absolute bottom-0 right-0 rounded-ss-2xl overflow-hidden '>
            <div className='w-[161px] h-full bg-[#FF3B00] flex justify-center items-center'>
                <FaArrowDown className='text-3xl text-white font-normal'/>
            </div>

            <div className='bg-white w-full flex  justify-around items-center xsm:flex-wrap xsm:py-[10px]'>
                <div className='flex justify-around gap-5'>
                    <FiFacebook className='text-3xl text-black font-normal' />
                    <CiTwitter className='text-3xl text-black font-normal' />
                    <FaInstagram className='text-3xl text-black font-normal' />
                </div>
                <div className='text-black'>
                     <h1> @ All Copyright <span>{currentDate}</span>, Solutya</h1>
                </div>
            </div>
      </div>
      </SectionWrapper>
    
  )
}

export default FooterBottom;
