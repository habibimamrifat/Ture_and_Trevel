import React from 'react'
import america from "../assets/img/America.png"
import austrila from '../assets/img/Australia.png'
import india from "../assets/img/India.png"
import japan from "../assets/img/Japan.png"
import maldivs from '../assets/img/Maldives.png'
import africa from '../assets/img/Africa.png'

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
    <div>
      <div className='ml-[104px] mr-[104px]'>
        <h1 className='text-[48px] font-medium text-black'>Top Destinations</h1>
        <div className='flex justify-between mt[10px]'>
            <h1 className='text-[20px] font-normal text-[#645E5E]'>Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.</h1>
            <button className='text-[20px] font-normal text-[#645E5E]'> View All Destinations</button>
        </div>
        <div className='flex flex-wrap gap-x-10 gap-y-7 mt-[40px]'>

            {
                topDestinationData.map((topPlacetoVisit)=>(
                    <div className='w-[350px] h-[250px] relative rounded-[20px] overflow-hidden'>

            
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
  )
}

export default TopDestination;
