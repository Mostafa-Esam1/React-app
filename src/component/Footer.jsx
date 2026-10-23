import Logo from "../assets/logoWeb.png";
import facBook from"../assets/faceBooksvg.svg"
import pintrest from"../assets/Pintrest.svg"
import twitter from"../assets/twitter.svg"
export default function Footer() {
  let Links = `text-[18px] text-white font-semibold leading-7 font-livvic`;
  return (
    <div className="w-full py-12 bg-DarkGreen flex justify-center">
      <div className="container w-full   flex flex-row justify-between">
        <div className="flex flex-col gap-6.25">
          <img className="w-39.75" src={Logo} alt="" />
          <div className="flex gap-10">
            <a href="#" className={Links}>
              home
            </a>
            <a href="#" className={Links}>
              about
            </a>
          </div>
        </div>
        <div className="w-45">
          <p className="text-center text-[15px] font-semibold leading-6.25 text-white">
            1987 Hillcrest Lane LaneIrvine, CACalifornia 92714 Call Us :
            949-833-7432
          </p>
        </div>
        <div className=" w-6 flex gap-3">
            <img src={facBook} alt="" />
            <img src={pintrest} alt="" />
            <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}
