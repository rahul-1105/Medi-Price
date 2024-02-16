import React from "react";

const WelcomeSection = () => {
  return (
    <div className="w-full h-[615px] flex flex-col items-center gap-8 pt-16">
      <div className="flex flex-col items-center  gap-6">
        <h2 className="text-4xl font-semibold tracking-widest">
          Welcome to MediPrice
        </h2>
        <p className="text-3xl font-semibold text-yellow-400">
          Your One-Stop Solution for Healthcare Pricing Transparency
        </p>
      </div>
      <div>
        <p className="px-24 m-14 py-4 text-center text-lg text-gray-400">
          We are dedicated to bringing transparency to healthcare pricing,
          helping you make informed decisions about your medical expenses. Our
          platform provides up-to-date information on the cost of various
          medical services across different providers. Whether you’re planning a
          medical procedure, comparing pharmacy prices, or just exploring
          options, MediPrice is here to help. Navigate through our user-friendly
          interface and take control of your healthcare costs today. Welcome to
          a new era of empowered healthcare consumption
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
