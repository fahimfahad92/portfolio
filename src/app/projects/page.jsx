import ActionTracker from "./action-tracker/action-tracker-overview";
import DmoneyCoreFinancialEngine from "./dmoney-core-financial-engine/dmoney-core-financial-engine-overview";
import GrowthDayCoreService from "./growthday-core-service/growthday-core-service-overview";
import HRMS from "./hrms/hrms-overview";
import IAudit from "./iaudit/iaudit-overview";

export const metadata = {
  title: "Projects",
  description: "Fahim Fahad",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-4 gap-5 p-5">
        <GrowthDayCoreService />
        <ActionTracker />
        <HRMS />
        <DmoneyCoreFinancialEngine />
        <IAudit />
      </div>
    </>
  );
}
