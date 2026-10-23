import Icon1 from "../assets/icon1svg.svg";
import Icon2 from "../assets/icon-2.svg";
import Icon3 from "../assets/icon-3.svg";
export default function () {
  return (
            <div className="w-1/2 flex flex-col items-end gap-8 ">
          <div className="flex gap-5.75">
            <div className="w-18">
              <img src={Icon1} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-LightCoral text-[18px] font-bold font-livvic">Experienced Individuals</h1>
              <p className="text-white text-[15px] font-semibold">
                Our network is made up of highly experienced professionals <tr></tr> who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="flex gap-5.75">
            <div className="w-18">
              <img src={Icon2} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-LightCoral text-[18px] font-bold font-livvic">Easy to Implement</h1>
              <p className="text-white text-[15px] font-semibold">
                Our network is made up of highly experienced professionals <tr></tr> who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="flex gap-5.75">
            <div className="w-18">
              <img src={Icon3} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-LightCoral text-[18px] font-bold font-livvic">Enhanced Productivity</h1>
              <p className="text-white text-[15px] font-semibold">
                Our network is made up of highly experienced professionals <tr></tr> who
                are passionate about what they do.
              </p>
            </div>
          </div>


        </div>
  )
}
