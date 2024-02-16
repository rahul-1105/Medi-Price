import React from "react";
import img1 from "../assets/img1.webp";
import Group from "../assets/Group.webp";
import Typewriter from "typewriter-effect";

const Hero = () => {

  return (
    <div className="relative w-full h-[615px] flex items-center">
      <img src={img1} alt="" className="absolute -top-32 -left-10" />
      <img src={Group} alt="" className="absolute right-0 bottom-0 h-[300px]" />
      <div className="ml-60 flex flex-col gap-6">
        <div className="text-3xl flex gap-3">
          Caring for
          <p className="text-yellow-400"><Typewriter
            options={{
              strings: ["Future", "Life", "You", "Health"],
              autoStart: true,
              loop: true,
            }}
          /></p>
        </div>
        <h1 className="text-6xl font-bold leading-tight">
          Paving the Way <br />for Medical Excellence
        </h1>
      </div>
    </div>
  );
};

export default Hero;
