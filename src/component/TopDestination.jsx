import React from 'react'
import america from "../assets/img/America.png"
import austrila from '../assets/img/Australia.png'
import india from "../assets/img/India.png"
import japan from "../assets/img/Japan.png"
import maldivs from '../assets/img/Maldives.png'
import africa from '../assets/img/Africa.png'
import SectionWrapper from './wrappers/SectionWrapper'

const TopDestination = () => {
    const topDestinationData =[
        {
            countryName:"America",
            countryImg:america
        },
        {
            countryName:"Maldives",
            countryImg:maldivs
        },
        {
            countryName:"Africa",
            countryImg:africa
        },
        {
            countryName:"Japan",
            countryImg:japan
        },
        {
            countryName:"Australia",
            countryImg:austrila
        },
        {
            countryName:"India",
            countryImg:india
        },
    ]
  return (
    <SectionWrapper>
    <div className='w-full mt-[81px]'>
      <div className='xsm:ml-[10px] lg:ml-[104px] xsm:mr-[10px] lg:mr-[104px] '>
        <h1 className='xsm:text-[30px] lg:text-[48px] font-medium text-black'>Top Destinations</h1>
        <div className='flex xsm:flex-col md:flex-row md:justify-between mt[10px]'>
            <h1 className='xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]'>Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</h1>
            <button className='xsm:text-[15px] lg:text-[20px] font-normal text-[#645E5E]'> View All Destinations</button>
        </div>
        <div className='flex flex-wrap gap-x-10 gap-y-7 mt-[40px] justify-center items-center w-full'>

            {
                topDestinationData.map((topPlacetoVisit, index)=>(
                    <div className='w-[350px] h-[250px] relative rounded-[20px] overflow-hidden' key={index}>

            
                <div className='absolute top-0 left-0 right-0 bottom-0  rounded-[20px] flex justify-center m-4 items-center '>
                    <h1 className='text-[48px] font-bold text-white'>{topPlacetoVisit.countryName}</h1>
                </div>
                <img src={topPlacetoVisit.countryImg} alt="" className='w-full h-full object-fill block' />

            </div>

                ))

            }
           
        </div>
      </div>
    </div>
    </SectionWrapper>
  )
}

export default TopDestination;
