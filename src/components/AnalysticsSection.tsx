"use client";
import { ClusterSkillMatrix } from "./ClusterSkill";
import { CareerSkillChart } from "./CareerSkill";
import { EducationProgress } from "./EducationProgress";
import { SkillChainProgress } from "./SkillChain";

// Placeholder Tabs/Navigation
const AnalyticsTabs = () => {
  const tabs = [
    "Completed nodes",
    "Completed clusters",
    "To Do List",
    "Recently added",
  ];
  const activeTab = "Completed nodes";

  

  return (
    <div className="flex space-x-6 border-b border-[#2c2c3e] pb-3 mb-6">
      <h3 className="text-lg font-semibold text-gray-100 mr-4">Analytics</h3>
      {tabs.map((tab) => (
        <span
          key={tab}
          className={`text-sm font-medium cursor-pointer transition-colors ${
            tab === activeTab
              ? "text-cyan-500 border-b-2 border-cyan-500 -mb-3 pt-3" // Active tab style
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export const AnalyticsSection = () => {
  return (
    <section className="bg-transparent pt-4">
      {/* Tabbed Navigation */}
      <AnalyticsTabs />

      {/* Main Grid: Skills and Charts (Two-column layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN: Skill Matrix and Education Progress */}
        <div className="space-y-6">
          {/* Cluster Skill Matrix (Top half) */}
          <ClusterSkillMatrix />

          {/* Education Progress Widgets (Bottom half) */}
          <EducationProgress />
          <SkillChainProgress
            progress={45}
            chainName="Offensive operations"
            completedTasks="0/1"
          />
        </div>

        {/* RIGHT COLUMN: Career Skill Progression Chart */}
        <div className="space-y-6">
          <CareerSkillChart />
        </div>
      </div>
    </section>
  );
};
