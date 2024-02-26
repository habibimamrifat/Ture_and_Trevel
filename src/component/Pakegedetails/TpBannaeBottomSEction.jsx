import React from 'react'
import Rating from "../Rating"

const TpBannaeBottomSEction = () => {
  return (
    <div className='flex justify-center'>
      <div className='mt-[118px] text-white flex'>

        <div className='w-[270px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white'>
            <h1 className='font-normal text-[20px] text-center'>Check In</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <h1 className='font-normal text-[64px]'>8</h1>
                <p className='font-normal text-[16opx]'>September 
                2022</p>
            </div>
        </div>
        <div className='w-[270px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white'>
            <h1 className='font-normal text-[20px] text-center'>Check Out</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <h1 className='font-normal text-[64px]'>8</h1>
                <p className='font-normal text-[16opx]'>September 
                2022</p>
            </div>
        </div>
        <div className='w-[270px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white'>
            <h1 className='font-normal text-[20px] text-center'>Adult</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <div className='font-normal text-[16opx] pr-4'> <h1>+</h1> <h1>-</h1>
                </div>
                <h1 className='font-normal text-[64px]'>8</h1>
                
            </div>
        </div>
        <div className='w-[270px] h-[211px] flex flex-col justify-center items-center border-r-2 border-white'>
            <h1 className='font-normal text-[20px] text-center'>Children</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <div className='font-normal text-[16opx] pr-4'> <h1>+</h1> <h1>-</h1>
                </div>
                <h1 className='font-normal text-[64px]'>8</h1>
                
            </div>
        </div>
        <div className='w-[270px] h-[211px] flex flex-col justify-center items-center'>
            <h1>5 Days <span className='font-bold text-[24px]'>| from $500</span></h1> 
            <button className='py-[10px] px-[38px] bg-[#FF3B00] rounded-md mt-[21px]'>Book Now</button>
            <div className='mt-[12px]'>
                    <div className='w-[198px] h-[35px] text-sm'>
                        <Rating
                        retting={3}
                        />
                        <h1 className=' text-end'>
                            3 reviews
                        </h1>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TpBannaeBottomSEction;