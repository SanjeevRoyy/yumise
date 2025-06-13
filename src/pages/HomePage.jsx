import React from "react";
import Welcome from "../components/ui/Welcome";
import Brand from "../components/ui/Brand";
import Objective from "../components/ui/Objective";
import Communication from "../components/ui/Communication";
import GetToLearn from "../components/ui/GetToLearn";

const HomePage = () => {
  return (
    <div className="relative inline-block">
      <img src="assets/images/home.png" alt="home" />

      <img
        src="assets/images/flower 1.png"
        alt="flower"
        className="absolute top-20 left-0 z-10 w-50"
      />

      <div className="absolute  top-4 left-40 z-20 text-white font-pacifico text-lg drop-shadow-lg">
        study and work in <br />
        <div className="flex items-center gap-2">
          <span className="text-red-700 text-4xl font-normal s">JAPAN</span>
          <img src="assets/images/flag.png" alt="flag" className="w-20" />
        </div>
      </div>

      {/* Center text */}
      <div className="absolute top-50 left-60 z-20">
        <h1 className="text-[80px] leading-[10px] tracking-[6.4px] text-[#951B81] text-center font-normal font-poetsenone drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-stroke-3">
          YUMISE
        </h1>
      </div>

      <div className="absolute text-2xl  top-60 left-80 z-20 text-white  drop-shadow-lg">
        <h1>CONSULTANCY</h1>
      </div>

      <Welcome />
      <Brand />
      <Objective />
      <Communication />
      <GetToLearn />
    </div>
  );
};

export default HomePage;
