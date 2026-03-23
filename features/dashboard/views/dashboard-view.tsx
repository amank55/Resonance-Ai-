import { PageHeader } from "@/components/page-header";
import { DashboardHeader } from "../components/dashboard-header";
import { HeroPattern } from "../components/hero-pattern";


export function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern/>
     <div className="relative space-y-8 p-4 lg:p-16">
         <DashboardHeader/>
     </div>
      </div>
  );
};