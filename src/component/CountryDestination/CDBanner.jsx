import React from 'react'
import bannar from "../../assets/img/countryD.png"
import BaMiniNavMenu from "../BaMiniMenu"
import BaNavBar from "../BaNavbar"
import CDTravelLisr from './CDTravelLisr'
import CDSlider from './CDSlider'
import SectionWrapper from '../wrappers/SectionWrapper'


const CDBanner = () => {
  return (
    <div className='w-full h-auto bg-cover ' style={{backgroundImage: `url(${bannar})` }}>
      <SectionWrapper>
     <BaMiniNavMenu />
     <BaNavBar />

     <div className='xsm:mx-[15px] sm:mx-[30px] md:mx-[50px] lg:mx-[80px] xl:mx-[100px]'>
     <CDTravelLisr />
     <CDSlider/>
     
     </div>
     </SectionWrapper>

    </div>
  )
}

export default CDBanner
