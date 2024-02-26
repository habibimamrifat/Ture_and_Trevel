import React from 'react'
import xy from "../assets/img/xy.png"
import xz from "../assets/img/xz.png"
import yz from "../assets/img/yz.png"
import zy from "../assets/img/zy.png"
import zz from "../assets/img/zz.png"


const Prefooter = () => {
    
  return (
    <div>
      <div className='w-full h-[284px] flex mt-[80px]'>

        <div >
            <img src={xy} alt="" className='h-full w-full object-cover' />
        </div>
        <div >
            <img src={xz} alt="" className='h-full w-full object-cover' />
        </div>
        <div >
            <img src={yz} alt="" className='h-full w-full object-cover' />
        </div>
        <div >
            <img src={zy} alt="" className='h-full w-full object-cover' />
        </div>
        <div >
            <img src={zz} alt="" className='h-full w-full object-cover' />
        </div>

      </div>
    </div>
  )
}

export default Prefooter;
