import { PageHeader } from "@/components/page-header";
import { DashboardHeader } from "../components/dashboard-header";


export function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
     <div className="relative space-y-8 p-4 lg:p-16">
         <DashboardHeader/>
     </div>
      </div>
  );
};