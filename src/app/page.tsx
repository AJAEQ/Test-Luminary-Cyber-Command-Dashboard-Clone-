// app/page.tsx (Final Structure)

import { Sidebar } from "@/components/SideBar";
import { Header } from "@/components/Header"; // <-- New
import { SubNav } from "@/components/SubNav"; // <-- New
import { HeroSection } from "@/components/HeroSection";
import { ConsistencyChain } from "@/components/ConsistencyChain";
import { JobWorkspaceCard } from "@/components/JobWorkspaceCard";
import { AnalyticsSection } from "@/components/AnalysticsSection";
import { StudyTimeChart } from "@/components/StudyTimeChart";

// Main content structure container
const MainContent = () => (
  <div className="flex-1 flex flex-col overflow-y-auto">
    <Header />

    <SubNav />

    <div className="p-6 space-y-6 overflow-y-auto">
      <div className="flex gap-2 justify-start items-start">
        <div className="w-[632px] flex-shrink-0">
          <HeroSection />
        </div>

        {/*  ConsistencyChain  */}
        <div className="w-[320px]  flex-shrink-0">
          <ConsistencyChain />
        </div>

        {/*  Job Workspace  */}
       <JobWorkspaceCard/>
      </div>

      {/* Middle Section: Analytics */}
      <AnalyticsSection />

      {/* Bottom Section: Study Timeline */}
      <StudyTimeChart />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[linear-gradient(180deg,rgba(4,14,22,0.5)_0%,rgba(23,79,124,0.5)_395.83%)] overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
}
