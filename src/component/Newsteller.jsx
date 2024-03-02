import React from 'react'
import background from "../assets/img/news.png"
import { CiMail } from "react-icons/ci";


const Newsteller = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center text-white w-full'>
      <div className='px-10 py-10 rounded-2xl h-auto flex items-center justify-around flex-wrap bg-no-repeat bg-center' style={{backgroundImage:`url(${background})`}}>

        <div className='w-[219px] h-[83px]'>
            <h1 className='text-[24px] font-semibold'>Newsletter</h1>
            <p className='text-base font-normal'>Sign Up to receive the best offer</p>
        </div>

        <form action="" className='flex flex-wrap gap-[35px]'>
        <input type="text" placeholder='Destination' className='w-[372px] h-[74px] bg-black/20 rounded-2xl pl-[27px] text-white'/>
        <input type="text" placeholder='Email'className='w-[372px] h-[74px] bg-black/20 rounded-2xl pl-[27px] text-white' />
        </form>
        
        <div>
            <button className='h-[66px] w-[66px] rounded-full bg-[#FF3B00] flex justify-center items-center'>
                    <CiMail className='text-white text-3xl'/>
            </button>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Newsteller;
