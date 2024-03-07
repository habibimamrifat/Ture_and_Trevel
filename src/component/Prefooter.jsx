import React from 'react'
import xy from "../assets/img/xy.png"
import xz from "../assets/img/xz.png"
import yz from "../assets/img/yz.png"
import zy from "../assets/img/zy.png"
import zz from "../assets/img/zz.png"



const Prefooter = () => {
    
  return (
    
      <div className='w-full  flex xsm:h-[100px] sxm:mt-[30px] md:h-[150px] xsm:mt-[25px] md:mt-[50px] lg:h-[284px] lg:mt-[80px]'>

        <div className='flex-1' >
            <img src={xy} alt="" className='h-full w-full object-cover' />
        </div>

        <div className='flex-1'>
            <img src={xz} alt="" className='h-full w-full object-cover' />
        </div>

        <div className='flex-1'>
            <img src={yz} alt="" className='h-full w-full object-cover' />
        </div>

        <div className='flex-1'>
            <img src={zy} alt="" className='h-full w-full object-cover' />
        </div>

        <div className='flex-1'>
            <img src={zz} alt="" className='h-full w-full object-cover' />
        </div>

      </div>
  
  )
}

export default Prefooter;
