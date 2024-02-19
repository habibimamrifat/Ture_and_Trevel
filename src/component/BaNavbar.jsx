import React from 'react'
import logo from "../assets/img/logo-malekairinternational 1 (1).png";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const BaNavbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex justify-center items-center ml-[82px]'>
        <div className='w-[211px] h-[146px]'>
            <img src={logo} alt="" />
        </div>
        <div className='text-xl font-semibold text-white'>
            <ul className='flex justify-around gap-10'>
                <li>HOME</li>
                <li><div className='flex justify-center items-center'>
                    <h1>FEATURES</h1>
                    <FaChevronDown/>
                    </div>
                </li>
                <li>PAGES</li>
                <li>TOURS</li>
                <li>CARS</li>
                <li>HOTELS</li>
                <li>FLIGHTS</li>
            </ul>
        </div>
      </div>
      <div className='w-[20px]  text-white mr-[112px]'>
            <FaSearch className='text-xl'/>
      </div>
    </div>
  )
}

export default BaNavbar;
