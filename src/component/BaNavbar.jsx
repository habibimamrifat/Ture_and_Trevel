import React, { useState } from 'react'
import logo from "../assets/img/logo-malekairinternational 1 (1).png";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";
const BaNavbar = () => {
  const [menuButtonClicked, setMenuButtonClicked]=useState(false)
  console.log(menuButtonClicked);
 
  return (
    <div className='flex justify-center items-center xsm:mt-[30px] xsm:mb-[50px] md:mb-[0px]'>

      <div className='flex justify-around items-center xsm:ml-[20px] sm:ml-[60px] md:ml-[80px] lg:ml-[50px] xl:ml-[112px] w-[80%]'>

        <div className='xsm:w-[100px] lg:w-[150px] lg:h-[100px] sm:w-[15px] xl:w-[211px] xl:h-[146px] lg:ml-1 xsm:hidden lg:block'>
            <img src={logo} alt="" />
        </div>

        {/* ..... make it animeded whilw small ...  */}
        <div>
          <SlOptionsVertical className={`xsm:text-sm xsm:block md:absolute md:top-[99999px] md:right-[99999px] text-white ${menuButtonClicked ? 'xsm:absolute xsm:top-[99999px] xsm:right-[99999px]':'block'}`} onClick={()=>setMenuButtonClicked(!menuButtonClicked)}/>
        </div>

        <div className={`flex xsm:text-sm lg:text-xl lg:font-semibold relative w-[80vw]  ${menuButtonClicked ? ' bg-white text-black font-semibold rounded-xlb shadow-lg shadow-[#A0AAB8] z-10 justify-center':'text-white bg-transparent'}`}>

            <div className={`absolute top-5 right-3 ${menuButtonClicked ? ' block':'hidden'}`}>
              <GiCancel className='text-xl' onClick={()=>setMenuButtonClicked(!menuButtonClicked)}/>
            </div>

            <ul className={`flex md:gap-3 lg:gap-4 xl:gap-6   ${menuButtonClicked ? ' xsm:flex-col xsm:justify-center xsm:items-center p-3 xsm:gap-1':'xsm:hidden md:flex'}`}>
                <li><a href="/">HOME</a></li>

                <li><div className='flex items-center '>
                    <h1>FEATURES</h1>
                    <FaChevronDown/>
                    </div>
                </li>

                <li><a href="/pakagedetails">PAGES</a></li>
                <li><a href="/country_destination">TOURS</a></li>
                <li>CARS</li>
                <li>HOTELS</li>
                <li>FLIGHTS</li>
            </ul>

        </div>

      </div>

      <div className={`w-[20px]  text-white xsm:mr-[20px] sm:mr-[60px] md:mr-[80px] lg:mr-[150px] xl:mr-[112px]${menuButtonClicked ? ' absolute top-[30%] right-2': ''}`}>
            <FaSearch className='text-xl'/>
      </div>

    </div>
  )
}

export default BaNavbar;
