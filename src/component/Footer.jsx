import React from 'react'
import logo from "../assets/img/logo-malekairinternational 1 (1).png"
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div className='bg-black w-full text-white relative pb-[177px]'>
        
      <div className=' sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center  md:pt-[183px] md:mx-[112px] md:grid md:grid-cols-12'>

            <div className='md:col-span-4'>
                <div className='w-[130px] h-[83px]'>
                    <img src={logo} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='mb-[33px]'>
                    <p className='text-base font-normal pb-[32px] w-[288px] h-[38px] mb-[33px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                    <hr className='bg-[#FF3B00] h-[2px] border-none w-[80%]'/>
                </div>
                <div>
                    <div className='flex items-center gap-[17px] mb-[30px]'>
                        <MdOutlinePhoneInTalk className='text-[#FF3B00] text-xl '/>
                        <h1 className='text-xl font-normal'>+ 880 1611 66 4965</h1>
                    </div>
                    <div className='flex items-center gap-[17px] mb-[30px]'>
                        <CiMail className='text-[#FF3B00] text-xl '/>
                        <h1 className='text-xl font-normal'>solutya@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-[17px] mb-[30px]'>
                        <CiLocationOn className='text-[#FF3B00] text-xl '/>
                        <h1 className='text-xl font-normal'>Usman center,  Uttara-12</h1>
                    </div>
                </div>
            </div>

            <div className='md:col-span-2'>
                <h1 className='text-2xl font-medium mb-[52px]'>Company</h1>
                <h1 className='text-base  font-normal mb-[25px]'>About us </h1>
                <h1 className='text-base  font-normal mb-[25px]'>Company Blogs</h1>
                <h1 className='text-base  font-normal mb-[25px]'>Work with Us</h1>
                <h1 className='text-base  font-normal mb-[25px]'>Meet the team</h1>
            </div>

            <div className='md:col-span-2'>
                <h1 className='text-2xl font-medium mb-[52px]'>Explore</h1>
                <h1 className='text-base  font-normal mb-[25px]'>Accountb</h1>
                <h1 className='text-base  font-normal mb-[25px]'>Legel </h1>
                <h1 className='text-base  font-normal mb-[25px]'>Contact</h1>
                <h1 className='text-base  font-normal mb-[25px]'>Privecy Policy</h1>
            </div>
            
            <div className='sm:w-full sm:flex sm:justify-center sm:flex-col 
            md:col-span-4 '>
                <h1 className='text-2xl font-medium mb-[52px]'>Newsletter</h1>
                <div className=''>
                    <button className='w-[90%] h-[63px] bg-[#BDB0B0] text-base font-medium rounded-[8px] mb-[14px]'>
                    Email Address
                    </button>
                    <button className='w-[90%] h-[63px] bg-[#FF3B00] text-base font-medium rounded-[8px]'>
                    Email Address
                    </button>
                    <div className='flex items-center gap-4 mt-[16px]'>
                    <FaRegCheckCircle/> 
                    <h1>I agree to all terms and condition</h1>
                    </div>      
                   
                </div>
            </div>
      </div>
      <FooterBottom/>
    </div>
  )
}

export default Footer;
