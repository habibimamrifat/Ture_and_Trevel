import React from "react";
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
  return (
    <div className="overflow-hidden w-full">
      <Bannar />
      <MostPopulerTures />
      <TopDestination />
      <TopStories />
      <OurPartners />
      <Review />
      <RecentBlogPOst />
      <Newsteller />
      <Prefooter />
      <Footer />

      <a href="#bannar" >
        <div className="fixed top-[50%] right-[120px] w-[50px] h-[50px] rounded-full bg-black/20 flex justify-center items-center">
          <FaArrowUp className="text-white text-3xl font-semibold" />
        </div>
      </a>

    </div>
  );
};

export default Home;
