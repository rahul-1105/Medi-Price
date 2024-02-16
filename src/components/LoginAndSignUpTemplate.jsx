import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const LoginAndSignUpTemplate = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="flex justify-evenly items-center min-h-[calc(100vh-80px)] text-white">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl mx-4"> {title} </h1>
        {/* <p>
          <span> {desc1} </span>
          <span> {desc2} </span>
        </p> */}

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

      </div>
      <div className="h-[450px] w-[450px] relative ">
        <img
          className="relative z-[5]"
          src={image}
          alt="students"
          width={450}
          height={450}
          loading="lazy"
        />
        <img
          className="absolute top-6 right-[-25px] z-[1]"
          src={frame}
          alt="frame"
          width={450}
          height={450}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LoginAndSignUpTemplate;
