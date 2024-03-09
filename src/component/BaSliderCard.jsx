import React from 'react'
import BaCountry from './BaCountry';
import BaBookNOw from './BaBookNOw';
import SectionWrapper from './wrappers/SectionWrapper';


const BaSliderCard = ({eachBanner}) => {
    console.log(eachBanner)
  return (
    <div className='relative w-full xsm:h-[100vh]'>
        <img src={eachBanner.img} alt="" srcset="" className='w-full h-full object-cover' />

        <div className="  absolute top-1/3 w-full sm:bg-transparent z-10">
            <SectionWrapper>
                <BaCountry
                eachBanner={eachBanner}/>
                <BaBookNOw 
                next={eachBanner.next}
                previous={eachBanner.previous}
                />
                    
             </SectionWrapper>
        
      </div>
      
    </div>
  )
}

export default BaSliderCard;
