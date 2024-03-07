import React from 'react'

const Cards = () => {
  return (
    <div>
      <div>
      <u className='text-[#FF3B00]'><h1 className='xsm:text-[30px] lg:text-[48px] font-bold text-black'>Credit / Debit Cards</h1></u>
      <div className='w-full shadow-md shadow-[#d2d2d2] rounded-[5px]'>
        <div className='xsm:ml-[30px] lg:ml-[40px] pb-[61px] pt-[40px]'>
          <h1 className='xsm:text-[20px] xl:text-[32px] font-bold'>settings</h1>
          <p className='text-[20px] font-normal mt-[20px]'>Notifications</p>
          <p className='text-[20px] font-normal mt-[20px]'>change the way you receive the notifications</p>

          <div className='mt-[30px]'>
            <div className='flex items-center gap-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-[20px] font-normal' >Make my profile private</p>
            </div>
            <div className='flex items-center gap-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-[20px] font-normal' >Send me an email when some one replires to one of your comment</p>
            </div>
           
          </div>

          <div className='mt-[33px]'>
            <h1 className='text-[24px] font-medium text-[#FF3B00] mb-[15px]' >Who Can Contact Me?</h1>
            <input type="text" className='outline-none xsm:w-[90%] xsm:h-[50px] lg:w-[482px] lg:h-[48px] border-[1px] text-[#948D8D] border-[#948D8D] rounded-[10px] p-5 text-[20px] font-light ' placeholder='Every One'/>

            <h1 className='text-[20px] font-medium text-[#FF3B00] mb-[15px]' >Payments</h1>
            <div className='flex items-center gap-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-[20px] font-normal' >auto payment</p>
            </div>

          </div>

         <div className='flex xsm:flex-col md:flex-row gap-9 mt-[34px]'>
          <div>
              <h1 className='text-[20px] font-medium text-[#FF3B00] mb-[15px]' >Card Type</h1>
              <input type="text" className='outline-none xsm:w-[90%] md:w-[45%] lg:w-[482px] h-[40px] lg:h-[48px] border-[1px] text-[#948D8D] border-[#948D8D] rounded-[10px] p-5 text-[20px] font-light ' placeholder='visa'/>
            </div>
          <div>
              <h1 className='text-[20px] font-medium text-[#FF3B00] mb-[15px]' >Card Number</h1>
              <input type="text" className='outline-none xsm:w-[90%] md:w-[45%] lg:w-[482px] h-[40px] lg:h-[48px] border-[1px] text-[#948D8D] border-[#948D8D] rounded-[10px] p-5 text-[20px] font-light ' placeholder=''/>
            </div>
         </div>

         <div className='mt-[20px]'>
              <h1 className='text-[20px] font-medium text-[#FF3B00] mb-[15px]' >Expiry Date</h1>
              <input type="text" className='outline-none xsm:w-[90%]  lg:w-[482px] h-[40px] lg:h-[48px] border-[1px] text-[#948D8D] border-[#948D8D] rounded-[10px] p-5 text-[20px] font-light ' placeholder='dd--yyyy'/>
            </div>

            <div className='mt-[20px]'>
              <h1 className='text-[20px] font-medium text-[#FF3B00] mb-[15px]' >Cvv</h1>
              <input type="text" className='outline-none xsm:w-[90%]  lg:w-[482px] h-[40px] lg:h-[48px] border-[1px] text-[#948D8D] border-[#948D8D] rounded-[10px] p-5 text-[20px] font-light ' placeholder=''/>
            </div>
            <button className='w-[209px] h-[57px] bg-[#200D98] text-white text-[16px] font-normal flex justify-center items-center mt-[47px] rounded-[5px]'>
            Save Details
            </button>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Cards;
