import React from "react";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import Service from "../components/Service";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full  text-white ">
      <Hero />
      <WelcomeSection />
      <Service />
    </div>
  );
};

export default Home;
