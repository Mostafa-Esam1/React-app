import React from "react";
import Header from "./Header";
import heroBg from "../assets/Group 7.png";

export default function HeroSec() {
  return (
    <div
      className=" w-full h-dvh flex flex-col   items-center  bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />
      <div className="container w-full h-dvh flex  ">
        <div className="w-full flex  items-center ">
          <div className="w-1/2">
            <p className="w-[70%] text-[100px] font-bold text-white">
              Find the best <span className="text-LightCoral">talent</span>
            </p>
          </div>

          <div className="w-1/2 flex flex-col items-end">
            <div className="w-[60%] flex flex-col  ">
              <div className="w-12.5 h-1 mb-20.75 bg-RaptureBlue"></div>
              <p className="text-[18px] text-white font-semibold ">
                Finding the right people and building high <tr></tr> performing
                teams can be hard. Most companies <tr></tr> aren’t tapping into
                the abundance of global talent. <tr></tr> We’re about to change
                that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
