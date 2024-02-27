import React from 'react'
import bannar from "../../assets/img/countryD.png"
import BaMiniNavMenu from "../BaMiniMenu"
import BaNavBar from "../BaNavbar"
import CDTravelLisr from './CDTravelLisr'
import CDSlider from './CDSlider'

const CDBanner = () => {
  return (
    <div className='w-full h-[1945px]' style={{backgroundImage: `url(${bannar})` }}>
     <BaMiniNavMenu />
     <BaNavBar />

     <div className='mx-[100px]'>
     <CDTravelLisr />
     <CDSlider/>
     </div>

    </div>
  )
}

export default CDBanner
