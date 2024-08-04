import React from "react";
import HeroSection from "./hero/HeroSection";
import BestDeals from "./bestdeals/BestDeals";
import RecDeals from "./recommended/RecDeals";
import GentlyUsed from "./gentlyUsed/GentlyUsed";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BestDeals />
      <RecDeals />
      <GentlyUsed />
    </div>
  );
};

export default Home;
