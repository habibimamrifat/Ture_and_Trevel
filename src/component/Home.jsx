import React from "react";
import Bannar from "./Bannar";
import MostPopulerTures from "./MostPopulerTures";
import TopDestination from "./TopDestination";
import TopStories from "./TopStories";
import OurPartners from "./OurPartners";
import Review from "./Review";


const Home = () => {
  return (
<div className="overflow-hidden">
    <Bannar />
    <MostPopulerTures/>
    <TopDestination/>
    <TopStories/>
    <OurPartners/>
    <Review/>
</div>
  );
};

export default Home;
