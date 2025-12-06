// app/page.tsx (Final Structure)

import { Sidebar } from "@/components/SideBar";
import { Header } from "@/components/Header"; // <-- New
import { SubNav } from "@/components/SubNav"; // <-- New
import { HeroSection } from "@/components/HeroSection";
import { ConsistencyChain } from "@/components/ConsistencyChain";
import { JobWorkspaceCard } from "@/components/JobWorkspaceCard";
import { AnalyticsSection } from "@/components/AnalysticsSection";
import { StudyTimeChart } from "@/components/StudyTimeChart";
// import { StudyTimeline } from "@/components/Dashboard/StudyTimeline";

// Main content structure container
const MainContent = () => (
  <div className="flex-1 flex flex-col overflow-y-auto">
    {/* 1. Navbar */}
    <Header />

    {/* 2. Sub-Navigation (Cyber Command, Overview, Nodes, Reviews) */}
    <SubNav />

    {/* 3. Scrollable Dashboard Body */}
    <div className="p-6 space-y-6 overflow-y-auto">
      {/* Top Row: Fixed Width Layout (1322px total content width + 3x 24px gaps) */}
      <div className="flex gap-2 justify-start items-start">
        {/* 1. HeroSection (632px wide) */}
        <div className="w-[632px] flex-shrink-0">
          <HeroSection />
        </div>

        {/* 2. ConsistencyChain (320px wide) */}
        <div className="w-[320px]  flex-shrink-0">
          <ConsistencyChain />
        </div>

        {/* 3. Job Workspace (370px wide) */}
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
      {/* Fixed Left Sidebar */}
      <Sidebar />
      {/* Right Content Column (Header, SubNav, and Scrollable Body) */}
      <MainContent />
    </div>
  );
}
