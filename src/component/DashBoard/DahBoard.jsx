import React from 'react'
import DashBoardNavBar from './DashBoardNavBar';
import RouteView from './RouteView';
import MainBoard from './MainBoard';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer"
import Prefooter from '../Prefooter';
import Newsteller from '../Newsteller';
import CDCatagoryDiscripto from '../CountryDestination/CDCatagoryDiscripto';

const DahBoard = () => {
  return (
    <div>
      <DashBoardNavBar/>
      <RouteView/>
      <MainBoard/>

      <div className='ml-[100px] mr-[100px] h-full mb-[62px]'>
      <Outlet/>
      </div>
      <Newsteller/>
      <div className='ml-[80px] mr-[80px]'>
      <CDCatagoryDiscripto/>
      </div>
      <Prefooter/>
      <Footer/>
      
    </div>
  )
}

export default DahBoard;
