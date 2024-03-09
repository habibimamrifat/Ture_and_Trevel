import React, { useState } from 'react'
import DashBoardNavBar from './DashBoardNavBar';
import RouteView from './RouteView';
import MainBoard from './MainBoard';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer"
import Prefooter from '../Prefooter';
import Newsteller from '../Newsteller';
import CDCatagoryDiscripto from '../CountryDestination/CDCatagoryDiscripto';
import SectionWrapper from '../wrappers/SectionWrapper';
import Profile from "./Profile"
import Booking from "./Booking"
import Cards from "./Cards"
import WishList from "./WishList"
import DashBoardPreview from "./DashBoardPreview"

const DahBoard = () => {

  const [selectRoute, setSelectedRoute]=useState("Dashboard")
  console.log("dashboard", selectRoute)

  return (
    <div>
      
        <DashBoardNavBar/>
        <RouteView/>
        <SectionWrapper>
            <MainBoard selectRoute={selectRoute}
            setSelectedRoute={setSelectedRoute}
            />

            <div className='xsm:ml-[10px] xsm:mr-[10px] xl:ml-[100px] xl:mr-[100px] h-full mb-[62px]'>
              {
                selectRoute === 'Profile'? <Profile/> :selectRoute ==="Booking" ? <Booking/>: selectRoute === "Cards" ? <Cards/> : selectRoute === "Wishlist" ? <WishList/> :<DashBoardPreview/>
              }
            </div>

            <Newsteller/>

            <div className='xsm:ml-[10px] xsm:xsm-[10px] :ml-[80px] xl:mr-[80px]'>
            <CDCatagoryDiscripto/>
            </div>
      </SectionWrapper>

      <Prefooter/>
      <Footer/>
      
    </div>
  )
}

export default DahBoard;
