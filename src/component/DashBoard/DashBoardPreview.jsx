import React from 'react'
import GearPic from "../../assets/img/gearPic.png"
import Glob from "../../assets/img/globe.png"
import Building from "../../assets/img/building.png"
import Plane from "../../assets/img/plane 1.png"
import { IoMdMenu } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { BiSolidCheckbox } from "react-icons/bi";

const DashBoardPreview = () => {
  return (
    <div className='w-full mt-[67px]'>

     <div className=' grid grid-cols-12 gap-16'>
      
        <div className='col-span-3'>

            <div className='w-full h-[210px] flex justify-center items-center border-[1px] border-black'>
                <div className='flex flex-col'>
                    <img src={GearPic} alt="" />
                    <div className='flex items-center mt-3 gap-2'>
                      <h1 className='font-normal text-[32px] text-[#FF3B00]'>1535</h1>
                      <h1 className='font-normal text-[20px]'> Miles</h1>
                    </div>
                </div>
            </div>

            <div className='w-full h-[210px] flex justify-center items-center border-[1px] border-black mt-[42px]'>
                <div className='flex flex-col'>
                    <img src={Glob} alt="" />
                    <div className='flex items-center mt-3 gap-2'>
                      <h1 className='font-normal text-[32px] text-[#FF3B00]'>25%</h1>
                      <h1 className='font-normal text-[20px]'> World</h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-[210px] flex justify-center items-center border-[1px] border-black mt-[42px]'>
                <div className='flex flex-col'>
                    <img src={Building} alt="" />
                    <div className='flex items-center mt-3 gap-2'>
                      <h1 className='font-normal text-[32px] text-[#FF3B00]'>350</h1>
                      <h1 className='font-normal text-[20px]'> Client</h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-[210px] flex justify-center items-center border-[1px] border-black mt-[42px]'>
                <div className='flex flex-col'>
                    <img src={Plane} alt="" />
                    <div className='flex items-center mt-3 gap-2'>
                      <h1 className='font-normal text-[32px] text-[#FF3B00]'>150</h1>
                      <h1 className='font-normal text-[20px]'>Trips</h1>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='col-span-9'>

            <div>
            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <h1 className='text-[24px] font-normal text-black ml-[30px]'>RECENT ACTIVITIES</h1>
            </div>

            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
                <IoMdMenu  className='text-[24px] font-normal text-black'/>
              <h1 className='text-[20px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>
            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
                <FaRegStar  className='text-[24px] font-normal text-black'/>
              <h1 className='text-[20px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>
            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
                <CiBookmark  className='text-[24px] font-normal text-black'/>
              <h1 className='text-[20px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>
            </div>

            <div className='mt-[42px]'>
            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <h1 className='text-[24px] font-normal text-black ml-[30px]'>INVOCIES</h1>
            </div>

            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
                <BiSolidCheckbox  className='text-[24px] font-normal text-[#948D8D]'/>
                <h1 className='text-[24px] font-normal text-black'>Professional Plan</h1>
              <h1 className='text-[16px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>

            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
              <IoMdMenu  className='text-[24px] font-normal text-black'/>
                <h1 className='text-[24px] font-normal text-black'>Extended Plan</h1>
              <h1 className='text-[16px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>

            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
              <IoMdMenu  className='text-[24px] font-normal text-black'/>
                <h1 className='text-[24px] font-normal text-black'>Extended Plan</h1>
              <h1 className='text-[16px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>
            <div className='h-[115px] w-full shadow-sm shadow-[#645E5E] flex items-center'>
              <div className=' ml-[30px] flex items-center gap-4'>
              <BiSolidCheckbox  className='text-[24px] font-normal text-[#948D8D]'/>
                <h1 className='text-[24px] font-normal text-black'>Basic Plan</h1>
              <h1 className='text-[16px] font-normal text-[#645E5E]'> Your Listing The TravelCo Has Been Aproved</h1>
              </div> 
            </div>
            </div>

        </div>

     </div>

    </div>
  )
}

export default DashBoardPreview
