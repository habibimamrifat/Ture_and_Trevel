import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const CustomPrevArrow = ({ onClick }) => (
    <button className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "  onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
  
  export const CustomNextArrow = ({ onClick }) => (
    <button className="w-[42px] h-[41px] rounded-full bg-white/20 flex justify-center items-center text-white "  onClick={onClick}>
      <FaArrowRight />
    </button>
  );