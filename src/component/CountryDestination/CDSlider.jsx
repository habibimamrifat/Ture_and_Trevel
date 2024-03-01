
import React from 'react';


const CDSlider = () => {
   
  return (
    <div className='h-[100vh] w-[100%] bg-white '>
     <div className='h-full w-full  grid-rows-12 gap-[50px]'>
        <div className='bg-orange-700 row-span-4 w-full h-36 my-[20px] grid grid-cols-12'>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>
        <div className='bg-orange-700 row-span-4 w-full h-36 my-[20px] grid grid-cols-12'>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>
        <div className='bg-orange-700 row-span-4 w-full h-36 my-[20px] grid grid-cols-12'>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-4 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>
     </div>
    </div>
  )
}

export default CDSlider;
