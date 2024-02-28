import React from 'react'

const Booking = () => {
  const Bookingdataset =[
    {
      bookingDate:'15',
      bookingMonth:"August",
      Booking_Date:"28:12:2021 at 3:20 AM",
      Booking_Details:"28:12:2021 at 3:20 AM",
      Client:"Monica smith",
      Email:"example@example.com",
      Phone:"+123-456-789"

    },
    {
      bookingDate:'15',
      bookingMonth:"August",
      Booking_Date:"28:12:2021 at 3:20 AM",
      Booking_Details:"28:12:2021 at 3:20 AM",
      Client:"Monica",
      Email:"example@example.com",
      Phone:"+123-456-789"

    }
  ]
  return (
    <div>
      <div>
        <u className='text-[#FF3B00]'><h1 className='text-[48px] text-black font-normal'>Trips You have Booked!</h1></u>
        <div className='mt-[60px] flex flex-col gap-14'>

          {
            Bookingdataset.map((BookingDetail, index)=>(
              <div className='grid grid-cols-12 shadow-md shadow-[#d2d2d2] rounded-[5px]' key={index}>

            <div className="col-span-3 ml-[40px] mt-[20px]">
              <div className='border-[1px] h-[220px] w-[212px] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='font-normal text-[64px] text-[#FF3B00]'>
                    {BookingDetail.bookingDate}
                  </h1>
                    <p className='font-normal text-[32px] text-black'>{BookingDetail.bookingMonth}</p>
                </div>
              </div>
            </div>

            <div className="col-span-6 mb-[50px] mt-[20px]">

              <h1 className='font-medium text-[32px] text-[#FF3B00]'>
              Restuarent Details
              </h1>
              <div className='mt-[30px]'>

                <div className='flex gap-36'>
                  <h1 className='text-[16px] font-normal text-[#FF3B00] w-[200px]'> Booking Date:</h1>
                    <p className='text-[16px] font-normal text-[#544E4E]'>{BookingDetail.Booking_Date}</p>
                </div>
                <div className='flex gap-36 mt-[30px]'>
                  <h1 className='text-[16px] font-normal text-[#FF3B00] w-[200px]'> Booking Details:</h1>
                    <p className='text-[16px] font-normal text-[#544E4E]'>{BookingDetail.Booking_Details}</p>
                </div>
                <div className='flex gap-36 mt-[30px]'>
                  <h1 className='text-[16px] font-normal text-[#FF3B00] w-[200px]'> Client:</h1>
                    <p className='text-[16px] font-normal text-[#544E4E]'>{BookingDetail.Client}</p>
                </div>
                <div className='flex gap-36 mt-[30px]'>
                  <h1 className='text-[16px] font-normal text-[#FF3B00] w-[200px]'> Email:</h1>
                    <p className='text-[16px] font-normal text-[#544E4E]'>{BookingDetail.Email}</p>
                </div>
                <div className='flex gap-36 mt-[30px]'>
                  <h1 className='text-[16px] font-normal text-[#FF3B00] w-[200px]'>Phone</h1>
                    <p className='text-[16px] font-normal text-[#544E4E]'>{BookingDetail.Phone}</p>
                </div>

              </div>
            </div>

            <div className="col-span-3 mr-[40px] mt-[20px]">
            <button className='w-[209px] h-[57px] flex justify-center items-center text-[20px] font-normal border-[1px] border-[#FF3B00] text-[#FF3B00] rounded-[10px]'>
            Message
            </button>
            <button className='w-[209px] h-[57px] flex justify-center items-center text-[20px] font-normal border-[1px] border-[#200D98] text-[#200D98] rounded-[10px] mt-[20px]'>
            Message
            </button>
            <button className='w-[209px] h-[57px] flex justify-center items-center text-[20px] font-normal border-[1px] bg-[#200D98] text-white rounded-[10px] mt-[20px]'>
            Message
            </button>
            </div>

          </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Booking;
