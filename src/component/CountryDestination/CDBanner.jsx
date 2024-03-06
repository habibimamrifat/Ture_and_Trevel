import React from 'react'
import bannar from "../../assets/img/countryD.png"
import BaMiniNavMenu from "../BaMiniMenu"
import BaNavBar from "../BaNavbar"
import CDTravelLisr from './CDTravelLisr'
import CDSlider from './CDSlider'


const CDBanner = () => {
  return (
    <div className='w-full h-auto ' style={{backgroundImage: `url(${bannar})` }}>
     <BaMiniNavMenu />
     <BaNavBar />

     <div className='xsm:mx-[15px] sm:mx-[30px] md:mx-[50px] lg:mx-[80px] xl:mx-[100px]'>
     <CDTravelLisr />
     <CDSlider/>
     
     </div>

    </div>
  )
}

export default CDBanner
