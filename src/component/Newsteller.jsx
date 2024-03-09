import React from 'react'
import background from "../assets/img/news.png"
import { CiMail } from "react-icons/ci";
import SectionWrapper from './wrappers/SectionWrapper';


const Newsteller = () => {
  return (
    <SectionWrapper>
    <div className='w-full'>
      <div className='flex justify-center text-white w-full'>
      <div className='px-4 py-4 rounded-2xl  flex items-center justify-around xsm:flex-col sm:flex-row xsm:h-auto sm:h-[200px] md:h-[300px] w-[90%] bg-no-repeat bg-center ' style={{backgroundImage:`url(${background})`}}>

        <div className=''>
            <h1 className='text-[24px] font-semibold'>Newsletter</h1>
            <p className='text-base font-normal'>Sign Up to receive the best offer</p>
        </div>

        <form action="" className='flex xsm:flex-wrap lg:flex-nowrap lg:flex-row gap-x-5 xsm:gap-4 xsm:mt-[10px]'>

        <input type="text" placeholder='Destination' className=' xsm:w-[90%] outline-none lg:w-[45%]  xl:w-[370px] xsm:h-[45px]  lg:h-[74px] bg-black/20 rounded-2xl pl-[27px] text-white'/>

        <input type="text" placeholder='Email'className=' xsm:w-[90%] outline-none xsm:h-[45px] lg:w-[45%]  xl:w-[370px] lg:h-[74px] bg-black/20 rounded-2xl pl-[27px] text-white' />
        </form>
        
        <div className='xsm:mt-[10px]'>
            <button className='h-[66px] w-[66px] rounded-full bg-[#FF3B00] flex justify-center items-center ml-3'>
                    <CiMail className='text-white text-3xl'/>
            </button>
        </div>
       
      </div>
    </div>
    </div>
    </SectionWrapper>
  )
}

export default Newsteller;
