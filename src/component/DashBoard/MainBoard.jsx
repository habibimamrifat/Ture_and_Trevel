import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MainBoard = () => {
    const [selectRoute, setSelectedRoute]=useState("Dashboard")
  return (
    <div>

        <div className='ml-[100px] mt-[42px]'>
        <u className='text-red-600'><h1 className='text-[48px] font-semibold text-black'>{selectRoute}</h1></u>
            <div className='flex gap-16 items-center mt-[80px] mb-[40px]'>

               <Link to='/dashboard'>
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Dashboard' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Dashboard")}>
                    <h1 className='font-bold text-[20px] text-white'>Dashboard</h1>
                </div>
                </Link>
                
                <Link to="profile">
                    <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Profile' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Profile")}>
                    <h1 className='font-bold text-[20px] text-white'>Profile</h1>
                </div>
                </Link>
                
                <Link to="booking">
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Booking' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Booking")}>
                    <h1 className='font-bold text-[20px] text-white'>Booking</h1>
                </div>
                </Link>

                <Link to="cards">
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Cards' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Cards")}>
                    <h1 className='font-bold text-[20px] text-white'>Cards</h1>
                </div>
                </Link>
                
                <Link to="wishlist">
                <div className={`w-[173px] h-[50px]  flex justify-center items-center ${selectRoute === 'Wishlist' ? 'bg-[#200D98]':'bg-[#FF3B00]'}`} onClick={()=>setSelectedRoute("Wishlist")}>
                    <h1 className='font-bold text-[20px] text-white'>Wishlist</h1>
                </div>
                </Link>
                
                
            </div>
        </div>

      
    </div>
  )
}

export default MainBoard;
