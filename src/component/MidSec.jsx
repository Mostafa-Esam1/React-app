import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
export default function MidSec() {
  return (
    <div className="w-full flex  justify-center bg-SacramentoStateGreen ">
      <div className="container  w-full flex my-35 ">
        <LeftSec />
        <RightSec />
      </div>
    </div>
  );
}
