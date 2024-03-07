import React from 'react'
import dashNav from "../../assets/img/dashNav.png"
import BaNavbar from '../BaNavbar'
import BaMiniMenu from '../BaMiniMenu'
import SectionWrapper from '../wrappers/SectionWrapper'

const DashBoardNavBar = () => {
  return (
    <div className='w-full xsm:h-auto xsm:pb-5 xl:h-[344px] bg-cover' style={{backgroundImage:`url(${dashNav})`}}>
      <SectionWrapper>
      <BaMiniMenu/>
      <BaNavbar/>
      </SectionWrapper>
    </div>
  )
}

export default DashBoardNavBar;
