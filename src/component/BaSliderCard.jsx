import React from 'react'
import BaCountry from './BaCountry';
import SectionWrapper from './wrappers/SectionWrapper';


const BaSliderCard = ({eachBanner, index, bannerDaataset,next}) => {
  
  return (
    <div className='relative w-full xsm:h-[100vh]'>
        <img src={eachBanner.img} alt=""  className='w-full h-full object-cover' />

        <div className="  absolute 2xl:top-[50%] xl:top-[45%] lg:top-[35%] xsm:top-[25%] w-full sm:bg-transparent z-10">
            <SectionWrapper>
                <BaCountry
                eachBanner={eachBanner}
                index={index}
                bannerDaataset={bannerDaataset}
                next={next}/>    
             </SectionWrapper>
        
      </div>
      
    </div>
  )
}

export default BaSliderCard;
