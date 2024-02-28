import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MainBoard = () => {
    const [selectRoute, setSelectedRoute]=useState("Dashboard")
  return (
    <div>

        <div className='ml-[100px] mt-[42px] mr-[100px]'>
        <u className='text-red-600'><h1 className='text-[48px] font-semibold text-black'>Dashboard</h1></u>
            <div className='flex justify-between gap-16 items-center mt-[80px] mb-[40px]'>

               <Link to='/dashboard' className='w-[173px] h-[50px] relative'>
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Dashboard' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Dashboard")}>
                    <h1 className='font-bold text-[20px] text-white'>Dashboard</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Dashboard' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="profile" className='w-[173px] h-[50px] relative'>
                    <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Profile' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Profile")}>
                    <h1 className='font-bold text-[20px] text-white'>Profile</h1>
                    
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Profile' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="booking" className='w-[173px] h-[50px] relative'>
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Booking' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Booking")}>
                    <h1 className='font-bold text-[20px] text-white'>Booking</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Booking' ? 'block':'hidden'}`}></div>
                </Link>

                <Link to="cards" className='w-[173px] h-[50px] relative'>
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Cards' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Cards")}>
                    <h1 className='font-bold text-[20px] text-white'>Cards</h1>
                </div>
                <div className={`w-[20px] h-[20px] bg-[#200D98] absolute right-[45%] -bottom-2
                 rotate-45 -z-10 ${selectRoute === 'Cards' ? 'block':'hidden'}`}></div>
                </Link>
                
                <Link to="wishlist" className='w-[173px] h-[50px] relative'>
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Wishlist' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Wishlist")}>
                    <h1 className='font-bold text-[20px] text-white'>Wishlist</h1>
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
