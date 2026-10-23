import React from "react";
import BgSec from "../assets/bg-2.png";
import Oval from "../assets/Oval@2x.png";
import Oval2 from "../assets/Oval Copy 5.png"
import Oval3 from "../assets/Oval Copy 6.png"
import tet from "../assets/“.svg";
export default function SecTwo() {
  return (
    <div
      className="w-full h-dvh bg bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${BgSec})` }}
    >
      <div className="container w-full  flex flex-col ">
        <div className="flex justify-center">
          <h1 className="text-[48px] text-white text-center font-bold leading-12 font-livvic">
            Delivering real results for top <tr></tr> companies. Some of our{" "}
            <span className="text-RaptureBlue">success stories.</span>{" "}
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-7.5 mt-24">
          <div className=" flex flex-col ">
            {/* <div className="absolute z-0 ">
                    <img src={tet} alt="" />
                </div> */}
            <p className=" z-10 text-[15px] text-white leading-6.25 text-center font-semibold">
              {" "}
              “The team perfectly fit the specialized skill set <tr></tr> required. They
              focused on the most essential <tr></tr>features helping us launch the
              platform eight <tr></tr> months faster than planned.”
            </p>
            <div className=" z-10 flex flex-col justify-center mt-6 items-center">
              <h1 className="text-[18px] text-RaptureBlue font-bold leading-7">
                Kady Baker
              </h1>
              <p className="text-[13px] font-medium text-white font-livvic">
                Product Manager at Bookmark
              </p>
              <img className="w-15.5 mt-8" src={Oval} alt="" />
            </div>
          </div>
          <div className=" flex flex-col ">
            {/* <div className="absolute z-0 ">
                    <img src={tet} alt="" />
                </div> */}
            <p className=" z-10 text-[15px] text-white leading-6.25 text-center font-semibold">
              {" "}
              “We needed to automate our entire onboarding <tr></tr> process. The team
              came in and built out the <tr></tr> whole journey. Since going live, user
              retention <tr></tr> has gone through the roof!”
            </p>
            <div className=" z-10 flex flex-col justify-center mt-6 items-center">
              <h1 className="text-[18px] text-RaptureBlue font-bold leading-7">
                Aiysha Reese
              </h1>
              <p className="text-[13px] font-medium text-white font-livvic">
                Founder of Manage
              </p>
              <img className="w-15.5 mt-8" src={Oval2} alt="" />
            </div>
          </div>
          <div className=" flex flex-col ">
            {/* <div className="absolute z-0 ">
                    <img src={tet} alt="" />
                </div> */}
            <p className=" z-10 text-[15px] text-white leading-6.25 text-center font-semibold">
              “Amazing. Our team helped us build an app that <tr></tr> delivered a new
              experience for hiring a physio. <tr></tr> The launch was an instant success
              with 100k <tr></tr> downloads in the first month.”
            </p>
            <div className=" z-10 flex flex-col justify-center mt-6 items-center">
              <h1 className="text-[18px] text-RaptureBlue font-bold leading-7">
                Arthur Clarke
              </h1>
              <p className="text-[13px] font-medium text-white font-livvic">
                Co-founder of MyPhysio
              </p>
              <img className="w-15.5 mt-8" src={Oval3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
