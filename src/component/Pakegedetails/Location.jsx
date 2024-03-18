import React from 'react'
import map from "../../assets/img/Rectangle 129.png"

const Location = () => {
  // referrerpolicy="no-referrer-when-downgrade" 
  return (
    <div className='mt-[82px]' id='Location'>
      <h1 className='xsm:text-[30px] xsm:font-normal lg:text-[48px] lg:font-medium'>Location</h1>
      <div className='mt-[66px] flex justify-center'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34711.91122196199!2d90.39310834970858!3d23.866906450240535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5a1e962ebf1%3A0xa2fc36ddc0180767!2sXpressmall%20Hotels%20%26%20Resorts!5e0!3m2!1sen!2sbd!4v1708949240547!5m2!1sen!2sbd" loading="lazy"  className='w-full h-96'></iframe>
      </div>
    </div>
  )
}

export default Location;
