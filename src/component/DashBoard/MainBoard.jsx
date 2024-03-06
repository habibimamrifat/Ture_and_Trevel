import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MainBoard = () => {
    const [selectRoute, setSelectedRoute]=useState("Dashboard")
  return (
    <div>

        <div className='xl:ml-[100px] mt-[42px] xl:mr-[100px] xsm:ml-[10px] xsm:mr-[10px]'>
        <u className='text-red-600'><h1 className='xsm:text-[30px] xsm:font-normal xl:xl:text-[48px] font-semibold text-black'>Dashboard</h1></u>
        
            <div className='flex justify-around items-center flex-wrap  xsm:mt-[50px] xl:mt-[80px] mb-[40px]'>

               <Link to='/dashboard' className='lg:w-[173px] lg:h-[50px] xsm:w-[100px] relative xsm:mt-[20px] sm:mt-0 xsm:border-x-[1px] xsm:border-white sm:border-none'>
                <div className={`lg:w-[173px] lg:h-[50px] xsm:w-[100px]  flex justify-center items-center ${selectRoute === 'Dashboard' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Dashboard")}>
                    <h1 className='xl:font-bold xl:text-[20px] xsm:text-[15px] text-white'>Dashboard</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Dashboard' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="profile" className='lg:w-[173px] lg:h-[50px] xsm:w-[100px] relative xsm:mt-[20px] sm:mt-0 xsm:border-x-[1px] xsm:border-white sm:border-none'>
                    <div className={`lg:w-[173px] lg:h-[50px] xsm:w-[100px]  flex justify-center items-center ${selectRoute === 'Profile' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Profile")}>
                    <h1 className='xl:font-bold xl:text-[20px] xsm:text-[15px] text-white'>Profile</h1>
                    
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Profile' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="booking" className='lg:w-[173px] lg:h-[50px] xsm:w-[100px] relative xsm:mt-[20px] sm:mt-0 xsm:border-x-[1px] xsm:border-white sm:border-none'>
                <div className={`lg:w-[173px] lg:h-[50px] xsm:w-[100px]  flex justify-center items-center ${selectRoute === 'Booking' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Booking")}>
                    <h1 className='xl:font-bold xl:text-[20px] xsm:text-[15px] text-white'>Booking</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Booking' ? 'block':'hidden'}`}></div>
                </Link>

                <Link to="cards" className='lg:w-[173px] lg:h-[50px] xsm:w-[100px] relative xsm:mt-[20px] sm:mt-0 xsm:border-x-[1px] xsm:border-white sm:border-none'>
                <div className={`lg:w-[173px] lg:h-[50px] xsm:w-[100px]  flex justify-center items-center ${selectRoute === 'Cards' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Cards")}>
                    <h1 className='xl:font-bold xl:text-[20px] xsm:text-[15px] text-white'>Cards</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Cards' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="wishlist" className='lg:w-[173px] lg:h-[50px] xsm:w-[100px] relative xsm:mt-[20px] sm:mt-0 xsm:border-x-[1px] xsm:border-white sm:border-none'>
                <div className={`lg:w-[173px] lg:h-[50px] xsm:w-[100px]  flex justify-center items-center ${selectRoute === 'Wishlist' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Wishlist")}>
                    <h1 className='xl:font-bold xl:text-[20px] xsm:text-[15px] text-white'>Wishlist</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Wishlist' ? 'block':'hidden'}`}></div>
                </Link>
                
                
            </div>
        </div>

      
    </div>
  )
}

export default MainBoard;
