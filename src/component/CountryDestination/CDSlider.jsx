
import React from 'react';
import MptCard from "../MptCard";
import ptp1 from "../../assets/img/Rectangle 21.png";
import ptp2 from "../../assets/img/Rectangle 22.png";


const CDSlider = () => {

  const MostPopulerTureDataSet = [
    {
      location: "Australia",
      bookMarked: "no",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 2.5,
      totalReviews: 3,
      img: ptp1,
    },
    {
      location: "NorthAmerica",
      bookMarked: "yes",
      detail: "Lorem Ipsum is simply dummy text",
      days: 5,
      totalCosting: 500,
      ratting: 5,
      totalReviews: 3,
      img: ptp2,
    },
  ];
   
  return (
    <div className='h-[100vh] w-[100%] bg-white '>
     <div className='h-full w-full  grid-rows-12 gap-[50px]'>
        <div className='bg-orange-700 row-span-4 w-full h-[225px] my-[20px] grid grid-cols-12'>
          <div className='col-span-3 bg-blue-500 m-4 h-full rounded-lg'>
            
          </div>
          <div className='col-span-6 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-3 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>

        <div className='bg-orange-700 row-span-4 w-full h-[225px] my-[20px] grid grid-cols-12'>
          <div className='col-span-6 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-6 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>

        <div className='bg-orange-700 row-span-4 w-full h-[225px] my-[20px] grid grid-cols-12'>
          <div className='col-span-3 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-6 bg-blue-500 m-4 h-full rounded-lg'></div>
          <div className='col-span-3 bg-blue-500 m-4 h-full rounded-lg'></div>
        </div>
     </div>
    </div>
  )
}

export default CDSlider;
