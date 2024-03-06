import React from "react";
import profilepic from "../../assets/img/smily.png"

const Profile = () => {
  const ProfileDetail ={
    img:profilepic,
    name:"Kavin Martain",
    Date_of_Birth:'25 Jan 1985',
    Email:'kavinmartain@gmail.com',
    Phone:"+123-456-789",
    Address:"23 Blok, Lorum Ipsum, Canada",
    country:" Canada",
    aboutMe:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."

  }
  return (
    <div>
      <div>
        <h1 className="xsm:text-[30px] lg:text-[48px] font-medium text-[#645E5E]">My Profile</h1>

        <div className="xsm:mt-[30px] lg:mt-[40px] lg:grid lg:grid-cols-12 lg:gap-4 ">

          <div className="lg:col-span-3">
            <div className="xsm:w-full sm:w-[213px]">
              <img src={ProfileDetail.img} alt="" className="w-full h-[166px] object-cover" />

              <button className="w-[213px] h-[43px] bg-[#200D98] flex items-center justify-center text-white text-[20px] font-normal mt-[64px]">
                Edit Profile
              </button>

            </div>
          </div>

          <div className="xsm:mt-[50px] sm:mt-0 lg:col-span-9">
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72">
          <h1 className="text-[20px] font-normal text-black w-[200px] ">Name</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
                {ProfileDetail.name}
              </p>
            </div>
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72 mt-[30px]">
              <h1 className="text-[20px] font-normal text-black w-[200px]">Date of Birth</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
              {ProfileDetail.Date_of_Birth}
              </p>
            </div>
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72 mt-[30px]">
              <h1 className="text-[20px] font-normal text-black w-[200px]">Email</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
              {ProfileDetail.Email}
              </p>
            </div>
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72 mt-[30px]">
              <h1 className="text-[20px] font-normal text-black w-[200px]">Phone</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
              {ProfileDetail.Phone}
              </p>
            </div>
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72 mt-[30px]">
              <h1 className="text-[20px] font-normal text-black w-[200px]">Address</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
              {ProfileDetail.Address}
              </p>
            </div>
            <div className="flex xsm:gap-2  sm:gap-10 md:gap-20   xl:gap-72 mt-[30px]">
              <h1 className="text-[20px] font-normal text-black w-[200px]">country</h1>
              <p className="text-[16px] xsm:w-[80%] sm:w-auto font-normal text-[#645E5E]">
              {ProfileDetail.country}
              </p>
            </div>
            
          </div>
        </div>

        <div>
          <h1 className="font-medium text-[32px] text-black">About Me</h1>
          <p className="text-[16px] mt-[60px] font-normal text-black">
            {ProfileDetail.aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
