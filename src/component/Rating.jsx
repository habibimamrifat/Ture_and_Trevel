import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({retting}) => {

  let countingSter = new Array(5);
  let rettingInt = Number(retting);
  let x = rettingInt % 1;

  if (x === 0) {
    // console.log("intzer");
    for (let a = 0; a < countingSter.length; a++) {
      if (a < retting) {
        countingSter[a] = "fullster";
      } else {
        countingSter[a] = "emptyster";
      }
    }
    // console.log(countingSter);
  } else {
    // console.log("fractional");
    let retingFloor = Math.floor(retting);
    // console.log(retingFloor);

    for (let a = 0; a < countingSter.length; a++) {
      if (a < retingFloor) {
        countingSter[a] = "fullster";
      } else if (a == retingFloor) {
        countingSter[a] = "halflster";
      } else {
        countingSter[a] = "emptyster";
      }
    }
    // console.log(countingSter);
  }

  return (
    <div className="h-7 mb-2 flex justify-center items-center gap-1 bg-transparent rounded-3xl px-2 ">
      {countingSter.map((ster, index) => {
        if (ster === "fullster") {
          return <FaStar key={index} className="text-[#FF3B00] " />;
        } else if (ster === "halflster") {
          return <FaRegStarHalfStroke key={index} className="text-[#FF3B00]" />;
        } else if (ster === "emptyster") {
          return <FaStar key={index} />;
        }
        return null;
      })}
    </div>
  );
};

export default Rating;
