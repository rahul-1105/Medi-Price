import React from "react";
import signup from "../assets/signup.webp";

const FeatureCard = () => {
  return (
    <div className="">
      <div className="h-[300px] w-[400px] overflow-hidden">
        <img src={signup} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default FeatureCard;
