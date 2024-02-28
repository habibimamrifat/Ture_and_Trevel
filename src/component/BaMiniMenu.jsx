import React, { useState } from "react";
import flag1 from "../assets/img/Ellipse 30.png";
import { FaAngleDown } from "react-icons/fa";

const BaMiniMenu = () => {

  let [setCountry, viewCuntryOption] = useState(false);
  let [destination, setDestination]= useState('BAN')
  let [flag, setFlag] = useState(flag1)
  

  let countryAndFlagArr =[
    {
        id:"c1",
        country:"Ban",
        flag:flag1
    },
    {
        id:"c2",
        country:"ENG",
        flag:flag1
    },
    {
        id:"c3",
        country:"CHI",
        flag:flag1
    },
    {
        id:"c4",
        country:"ITAI",
        flag:flag1
    }
  ]
  let InitialOptionCountry = countryAndFlagArr.filter((countryandflag)=>countryandflag.id != "c1")
  let [ViewOptionCountry, setViewOPtionCountry]=useState(InitialOptionCountry)


// function to handle currenct of the select box
  function handleCurency(currency) {
    console.log(currency);
  }

//   function to handle country and country flag of the select box

  function setCountryAndFlag( id )
  {

    let CountryAndFlagSearch = countryAndFlagArr.find((countryandflag) => countryandflag.id == id)
    setDestination(destination = CountryAndFlagSearch.country);
    setFlag(flag = CountryAndFlagSearch.flag);

    let OptionCountry = countryAndFlagArr.filter((countryandflag)=>countryandflag.id != id)
    console.log(OptionCountry);
    setViewOPtionCountry(ViewOptionCountry = OptionCountry)
    viewCuntryOption(!setCountry)

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
                    <div className="flex justify-center items-center gap-5"
                    onClick={() => viewCuntryOption(!setCountry)}
                    >
                        <div className="h-14px w-15px rounded-full">
                            <img
                            src={flag}
                            className="object-cover overflow-hidden"
                            alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-white">{destination}</h1>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>

                <div className={`${setCountry ? 'block  text-black absolute right-1 top-5 h-[73px] w-[90px] bg-white rounded-md' : 'hidden'}`}>

                    {
                        ViewOptionCountry.map((option)=>(
                            <div className="flex justify-center items-center gap-5" id={option.id} onClick={(e)=>setCountryAndFlag(e.currentTarget.id)} key={option.id}>
                            <div className="h-14px w-15px rounded-full">
                                <img
                                src={option.flag}
                                className="object-cover overflow-hidden"
                                alt=""
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className=" text-[15px] font-normal">{option.country}</h1>
                            
                            </div>
                        </div> 
                       ))
                    }
                    
                </div>
            </div>

      </div>

      

      <div className="text-white font-bold text-base flex gap-1 pr-[108px]">
        <button>
          <h1>Sign Up</h1>
        </button>

        <h1>/</h1>

        <button>
          <h1>
          Sign In
          </h1>
          </button>

          <div className=" bg-white/20 absolute top-0 bottom-0 left-0 right-0">
            <div className="h-[600px] w-96 bg-red-950 absolute right-0">

            </div>

          </div>
      </div>
    </div>
  );
};

export default BaMiniMenu;
