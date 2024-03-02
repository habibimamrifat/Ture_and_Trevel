import React from 'react'

const SignIn = ({isSignupClosed , setIsSignUpClosed}) => {
  console.log("from sign In", isSignupClosed)
  return (
    <div>
      
                <div className="flex justify-between">
                <h1 className="font-medium text-[36px] text-black">
                Sign In
                </h1>
                <button>
                <h1 className="font-normal text-[15px] text-[#FF3B00]" onClick={()=>setIsSignUpClosed("Signup")}>Sign Up</h1>
                </button>
                </div>
              
                <p className="font-normal text-[15px] text-[#B6A7A7] mt-[20px]">Fill in the registration form and save your favorite tours, synchronize them on all devices</p>

                <div className="mt-[40px]">
                  <h1 className="text-[15px] font-normal text-black">Email address</h1>
                  <input type="text" className="h-[65px] rounded-[10px] bg-[#F1EAEA] mt-[12px] w-[390px]" />
                  <h1 className="text-[15px] font-normal text-black mt-[25px]">Email address</h1>
                  <input type="text" className="h-[65px] rounded-[10px] bg-[#F1EAEA] mt-[12px] w-[390px]" />

                  <a href="http:/dashboard">
                    <button className="h-[65px] rounded-[10px] bg-[#FF3B00] mt-[12px] w-[390px] text-white flex justify-center items-center">
                    <h1 className="text-[20px] font-semibold">Log In</h1>
                  </button>
                  </a>

                </div>

                <div className='mt-[10px]'>
                  
                  <button>
                  <p className='text-[20px] font-normal text-[#FF3B00]' onClick={()=>setIsSignUpClosed("Signup")}>
                  Create new Account</p>
                  </button>
                    <br />
                  <button>
                  <p className='text-[20px] font-normal text-[#FF3B00] mt-[5px]' onClick={()=>setIsSignUpClosed("Forgetpassword")}>
                  Reset your passwod</p>
                  </button>
                  
                </div>

                
    </div>
  )
}

export default SignIn;
