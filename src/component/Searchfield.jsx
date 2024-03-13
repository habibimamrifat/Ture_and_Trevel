import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const Searchfield = ({handleSearchClicked, setHandleSerchClicked}) => {
    const [input, setinput]= useState("")
   const handleSearchInput =(event)=>
   {
    let input = event.target.value;
    setinput(input)
    }
   const handelSubmitSearch = (event)=>{
    event.preventDefault();
    event.target.reset();
    const alertMessage = input+ " is being looked for"
    alert(alertMessage)
    setHandleSerchClicked(!handleSearchClicked)
   console.log(input);
   
   }

  return (
    <div
          className={`fixed  flex justify-between shadow-xl shadow-[#466B85] z-[100] bg-[#344C68] px-5 ${
            handleSearchClicked
              ? "top-0 left-0 w-full min-h-[60px]"
              : "top-[99999px] left-[99999px] w-0 h-0"
          }`}
        >
          <form action="" onSubmit={(event)=>handelSubmitSearch(event)} className='flex justify-between items-center gap-5 flex-1'>
          <button type='submit' >
            <FaSearch className="text-xl text-white" />
          </button>

          <input
            type="text"
            placeholder="Search Here"
            className="w-full h-[50%] rounded-xl bg-transparent outline-none text-white p-5 border-2 border-white"
            name='search'
            onChange={(event)=>handleSearchInput(event)}
          />
          </form>
          
          <button>
            <ImCross
              className="text-lg text-white ml-5"
              onClick={() => setHandleSerchClicked(!handleSearchClicked)}
            />
          </button>
        </div>
  )
}

export default Searchfield
