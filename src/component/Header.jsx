import Logo from "../assets/logoWeb.png";
export default function Header() {
    let FontText = 'text-white text-[16px] font-livvic font-bold';
  return (
    <div className=" bg-MidnightGreen container w-full flex justify-between pt-18.25 items-center">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-4">
        <a className={FontText} href="#">Home</a>
        <a className={FontText} href="#">Aboute</a>
        <a className={FontText} href="#">Contacte</a>
      </div>
      <div>
        <button className="border-2 border-white px-8 py-2.75 rounded-4xl text-white font-bold hover:bg-white hover:text-DarkGreen transition">contact us</button>
      </div>
    </div>
  );
}
