import React, { useState } from "react";
import flag1 from "../assets/img/Ellipse 30.png";
import { FaAngleDown } from "react-icons/fa";

const BaMiniMenu = () => {
  let [setCountry, viewCuntryOption] = useState(false);

// function to handle currenct of the select box
  function handleCurency(currency) {
    console.log(currency);
  }

//   function to handle country and country flag of the select box

  function setCountryAndFlag( id )
  {
    console.log(id);
    viewCuntryOption(!setCountry)
    let selectedCountry = document.getElementById(`${id}`)
    selectedCountry.classList.add("hidden")
    console.log(selectedCountry.classList);
  }
 

  return (
    <div className="pt-[83Px] flex justify-between items-center ">

      <div className="text-white font-bold text-base flex justify-center items-center pl-[315px]">

            <div className="mr-[21px]">
            <h1>Support</h1>
            </div>

            <div className="flex  mr-[25px]">
            <select
                name=""
                id=""
                className="bg-transparent border-none"
                onChange={(e) => handleCurency(e.target.value)}
            >
                <option value="EUR" className="text-black">
                EURO
                </option>
                <option value="GBP" className="text-black">
                GBP
                </option>
                <option value="RUB" className="text-black">
                RUB
                </option>
            </select>
            </div>

            <div className="relative">
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-4"
                    onClick={() => viewCuntryOption(!setCountry)}
                    >
                    <div className="h-14px w-15px rounded-full">
                        <img
                        src={flag1}
                        className="object-cover overflow-hidden"
                        alt=""
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-white">EN</h1>
                        <FaAngleDown />
                    </div>
                    </div>
                </div>

                <div className={`${setCountry ? 'block bg-yellow-300 text-black absolute top-5 h-[89px] w-[79px] ' : 'hidden'}`}>
            
                    <div className="flex justify-center items-center gap-4" id="c1" onClick={(e)=>setCountryAndFlag(e.currentTarget.id)}>
                        <div className="h-14px w-15px rounded-full">
                            <img
                            src={flag1}
                            className="object-cover overflow-hidden"
                            alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-[15px] font-normal">BAN</h1>
                        
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4" id="c2" onClick={(e)=>setCountryAndFlag(e.currentTarget.id)}>
                        <div className="h-14px w-15px rounded-full">
                            <img
                            src={flag1}
                            className="object-cover overflow-hidden"
                            alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-[15px] font-normal">ENG</h1>
                        
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4" id="c3" onClick={(e)=>setCountryAndFlag(e.currentTarget.id)}>
                        <div className="h-14px w-15px rounded-full">
                            <img
                            src={flag1}
                            className="object-cover overflow-hidden"
                            alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-[15px] font-normal">CHI</h1>
                            
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4" id='c4' onClick={(e)=>setCountryAndFlag(e.currentTarget.id)}>
                        <div className="h-14px w-15px rounded-full">
                            <img
                            src={flag1}
                            className="object-cover overflow-hidden"
                            alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-[15px] font-normal">ITai</h1>
                            
                        </div>
                    </div>
                </div>
            </div>

      </div>

      

      <div className="text-white font-bold text-base flex gap-1 pr-[108px]">
        <button>
          <h1>Sign Up</h1>
        </button>
        <h1>/</h1>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default BaMiniMenu;
