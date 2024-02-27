import React from 'react'
import DashBoardNavBar from './DashBoardNavBar';
import RouteView from './RouteView';
import MainBoard from './MainBoard';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer"

const DahBoard = () => {
  return (
    <div>
      <DashBoardNavBar/>
      <RouteView/>
      <MainBoard/>
      <div className='ml-[100px] mr-[100px] h-full'>
      <Outlet/>
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default DahBoard;
