import React from 'react'
import dashNav from "../../assets/img/dashNav.png"
import BaNavbar from '../BaNavbar'
import BaMiniMenu from '../BaMiniMenu'

const DashBoardNavBar = () => {
  return (
    <div className='w-full xsm:h-auto xsm:pb-5 xl:h-[344px]' style={{backgroundImage:`url(${dashNav})`}}>
      <BaMiniMenu/>
      <BaNavbar/>
    </div>
  )
}

export default DashBoardNavBar;
