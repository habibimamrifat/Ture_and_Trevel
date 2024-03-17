import React, { useEffect, useState } from "react";
import Bannar from "./Bannar";
import MostPopulerTures from "./MostPopulerTures";
import TopDestination from "./TopDestination";
import TopStories from "./TopStories";
import OurPartners from "./OurPartners";
import Review from "./Review";
import RecentBlogPOst from "./RecentBlogPOst";
import Newsteller from "./Newsteller";
import Prefooter from "./Prefooter";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position and toggle visibility
    const checkScroll = () => {
      // Define the scroll threshold when the element should become visible
      const scrollThreshold = 700; // Adjust this value as needed

      // Get the scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Update visibility state based on scroll position
      if (scrollPosition > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the checkScroll function to the scroll event
    window.addEventListener('scroll', checkScroll);

    // Call checkScroll initially in case the element is already visible on page load
    checkScroll();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []); 

  return (
    <div className="overflow-hidden full">
      <Bannar />

      <div className="mx-[5%]">
      <MostPopulerTures />
      <TopDestination />
      <TopStories />
      </div>

      <OurPartners />

      <div className="mx-[5%]">
      <Review />
      <RecentBlogPOst />
      <Newsteller />
      </div>

      <Prefooter />
      <Footer />

      <a href="#bannar" className={`${isVisible ? `block` : `hidden`}`} >
        <div className="fixed  xsm:bottom-0 xsm:right-1 lg:right-[25px] lg:w-[50px] h-[50px] rounded-full bg-black/20 flex justify-center items-center">
          <FaArrowUp className="text-white text-3xl font-semibold" />
        </div>
      </a>

    </div>
  );
};

export default Home;
