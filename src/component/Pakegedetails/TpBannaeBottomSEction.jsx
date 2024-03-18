import React from 'react'
import Rating from "../Rating"

const TpBannaeBottomSEction = () => {
    
  return (
    <div className='flex justify-center items-center pb-16 xsm:mt-[10px] lg:mt-[40px] xl:mt-[118px] w-full'>

      <div className='text-white grid grid-cols-12 w-full xl:flex'>

        <div className='w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-2 md:border-b-0 md:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6'>
            <h1 className='font-normal text-[20px] text-center'>Check In</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <h1 className='font-normal text-[64px]'>8</h1>
                <p className='font-normal text-[16opx]'>September 
                2022</p>
            </div>
        </div>
        <div className='w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-0 md:border-b-0 md:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6'>
            <h1 className='font-normal text-[20px] text-center'>Check Out</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <h1 className='font-normal text-[64px]'>8</h1>
                <p className='font-normal text-[16opx]'>September 
                2022</p>
            </div>
        </div>
        <div className='w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 sm:border-r-2 md:border-b-0 md:border-r-0 lg:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-4 sm:col-span-6'>
            <h1 className='font-normal text-[20px] text-center'>Adult</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <div className='font-normal text-[16opx] pr-4'> <h1>+</h1> <h1>-</h1>
                </div>
                <h1 className='font-normal text-[64px]'>8</h1>
                
            </div>
        </div>
        <div className='w-full  h-[211px] flex flex-col justify-center items-center xsm:border-b-2 sm:border-b-0 md:border-b-0 md:border-r-2 lg:border-r-0 xl:border-r-2 border-white xsm:col-span-12 flex-1 lg:col-span-3 md:col-span-6 sm:col-span-6'>
            <h1 className='font-normal text-[20px] text-center'>Children</h1>
            <div className='flex justify-center items-center h-[77px] w-[138px] mt-[23px] gap-3'>
                <div className='font-normal text-[16opx] pr-4'> <h1>+</h1> <h1>-</h1>
                </div>
                <h1 className='font-normal text-[64px]'>8</h1>
                
            </div>
        </div>
        <div className='w-full  h-[211px] flex flex-col justify-center items-center xsm:col-span-12 flex-1 lg:col-span-12 md:col-span-6 sm:col-span-12'>
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
