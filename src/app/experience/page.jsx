import BJIT from "./bjit/bjit-overview";
import Dmoney from "./dmoney/dmoney-overview";
import GrowthDay from "./growthday/growthday-overview";
import TigerIT from "./tigerit/tigerit-overview";
import Toptal from "./toptal/toptal-overview";

export default function ExperiencePage() {
  return (
    <>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        <Toptal />
        <GrowthDay />
        <TigerIT />
        <Dmoney />
        <BJIT />
      </div>
    </>
  );
}
