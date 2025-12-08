"use client";
import { ClusterSkillMatrix } from "./ClusterSkill";
import { CareerSkillChart } from "./CareerSkill";
import { EducationProgress } from "./EducationProgress";
import { SkillChainProgress } from "./SkillChain";

// Responsive Tabs
const AnalyticsTabs = () => {
  const tabs = [
    "Completed nodes",
    "Completed clusters",
    "To Do List",
    "Recently added",
  ];
  const activeTab = "Completed nodes";

  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-[#2c2c3e] pb-3 mb-6">
      <h3 className="text-lg font-semibold text-gray-100 w-full sm:w-auto">
        Analytics
      </h3>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`text-sm whitespace-nowrap font-medium cursor-pointer transition-colors ${
              tab === activeTab
                ? "text-cyan-500 border-b-2 border-cyan-500 pb-1"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AnalyticsSection = () => {
  return (
    <section className="bg-transparent pt-4">
      {/* Tabs */}
      <AnalyticsTabs />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <ClusterSkillMatrix />

          <EducationProgress />

          <SkillChainProgress
            progress={45}
            chainName="Offensive operations"
            completedTasks="0/1"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <CareerSkillChart />
        </div>
      </div>
    </section>
  );
};
