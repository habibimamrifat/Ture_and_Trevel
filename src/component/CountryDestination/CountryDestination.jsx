import React from 'react'
import CDBanner from './CDBanner';
import NewsLetter from "../Newsteller"
import CDCatagoryDiscripto from './CDCatagoryDiscripto';
import PreFooter from "../Prefooter"
import Footer from "../Footer";

const CountryDestination = () => {
  return (
    <div>
        <CDBanner/>
        <div className='xsm:ml-[10px] xsm:mr-[10px] xl:ml-[80px] xl:mr-[80px]'>
            <div className='mt-[132px]'>
            <NewsLetter />
            </div>
            <div className='mt-[70px]'>
                <CDCatagoryDiscripto/>
            </div>
        
        </div>
        <div className='mt-[56px]'>
            <PreFooter/>
            <Footer />
        </div>
    </div>
  )
}

export default CountryDestination;
