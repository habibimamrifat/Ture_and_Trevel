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

      <div className='xsm:ml-[10px] xsm:mr-[10px] xl:ml-[100px] xl:mr-[100px] h-full mb-[62px]'>
      <Outlet/>
      </div>

      <Newsteller/>

      <div className='xsm:ml-[10px] xsm:xsm-[10px] :ml-[80px] xl:mr-[80px]'>
      <CDCatagoryDiscripto/>
      </div>

      <Prefooter/>
      <Footer/>
      
    </div>
  )
}

export default DahBoard;
