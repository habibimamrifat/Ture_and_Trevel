import React from 'react'
import bannerBg from "../assets/img/herobg.png";
import BaMiniMenu from './BaMiniMenu';

const Bannar = () => {
  return (
    <div
      className="bg-cover  bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bannerBg})`}}
    > 

    <BaMiniMenu />

    </div>
  )
}

export default Bannar;
