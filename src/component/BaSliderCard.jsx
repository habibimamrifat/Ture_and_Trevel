import React from 'react'
import BaCountry from './BaCountry';
import SectionWrapper from './wrappers/SectionWrapper';


const BaSliderCard = ({eachBanner}) => {
    console.log(eachBanner)
  return (
    <div className='relative w-full xsm:h-[100vh]'>
        <img src={eachBanner.img} alt="" srcset="" className='w-full h-full object-cover' />

        <div className="  absolute 2xl:top-[50%] xl:top-[45%] lg:top-[35%] xsm:top-[25%] w-full sm:bg-transparent z-10">
            <SectionWrapper>
                <BaCountry
                eachBanner={eachBanner}/>    
             </SectionWrapper>
        
      </div>
      
    </div>
  )
}

export default BaSliderCard;
