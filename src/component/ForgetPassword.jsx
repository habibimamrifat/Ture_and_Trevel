import React from 'react'

const SignIn = () => {
  return (
    <div>
     <div>
      
      
      <h1 className="font-medium text-[36px] text-black">
      Forgot password?
      </h1>
    
      <p className="font-normal text-[15px] text-[#B6A7A7] mt-[20px]">Use the e-mail and password that you specified when registering on the site</p>

      <div className="mt-[40px]">
        <h1 className="text-[15px] font-normal text-black">Username or email address</h1>
        <input type="text" className="h-[65px] rounded-[10px] bg-[#F1EAEA] mt-[12px] w-[390px]" />
        <p className="font-normal text-[15px] text-[#B6A7A7] mt-[20px]">Password reset instructions will be sent to your registered email address.</p>

        <button className="h-[65px] rounded-[10px] bg-[#FF3B00] mt-[12px] w-[390px] text-white flex justify-center items-center">
          <h1 className="text-[20px] font-semibold">Submit</h1>
        </button>

      </div>

      
</div>
    </div>
  )
}

export default SignIn;
