import Footer from "./component/Footer";
import HeroSec from "./component/HeroSec";
import MidSec from "./component/MidSec";
import SecTwo from "./component/SecTwo";
import TreSec from "./component/TreSec";
export default function App() {
  return (
   <div className='w-full flex flex-col'>
    <HeroSec/>
    <MidSec/>
    <SecTwo/>
    <TreSec/>
    <Footer/>
   </div>
  );
}
