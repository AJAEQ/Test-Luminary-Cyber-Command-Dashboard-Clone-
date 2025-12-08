"use client";
import React from "react";
import Link from "next/link";

interface SkillItemProps {
  name: string;
  progress: number;
  color: string;
}

export const SkillItem: React.FC<SkillItemProps> = ({ name, progress }) => {
  const barFillColor =
    "linear-gradient(270deg, rgba(33, 185, 232, 0.2) 0%, rgba(18, 104, 130, 0.2) 100%)";

  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 rounded-lg h-8 relative overflow-hidden">
        {/* Progress Fill */}
        <div
          className="h-full absolute left-0 top-0 rounded-lg"
          style={{ width: `${progress}%`, background: barFillColor }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex justify-between items-center px-3 z-10">
          <span className="text-sm font-medium text-white">{progress}%</span>
          <span className="text-[9px] text-[#E2E8FF]/80">{name}</span>
        </div>
      </div>
    </div>
  );
};

export const ClusterSkillMatrix = () => {
  const clusterSkills = [
    { name: "Windows Administration", progress: 50, color: "" },
    { name: "Linux Administration", progress: 100, color: "" },
    { name: "Cryptography", progress: 25, color: "" },
    { name: "System Optimisation", progress: 80, color: "" },
    { name: "Defense In Depth", progress: 60, color: "" },
    { name: "Client-Side Attack", progress: 20, color: "" },
    { name: "Active Directory", progress: 90, color: "" },
    { name: "Server-Side Attack", progress: 30, color: "" },
  ];

  const essentialSkills = [...clusterSkills];

  return (
    <div className="p-4 rounded-xl border border-[#2c2c3e] shadow-xl bg-[linear-gradient(180deg,rgba(4,14,22,0.5)_0%,rgba(23,79,124,0.5)_395.83%)]">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-4 pb-3 gap-3 mx-1">
        <h4 className="text-[10px] font-medium text-[#B3B3B3] border border-[#E2E8FF]/5 px-3 py-2 rounded-full">
          Cluster skill matrix
        </h4>

        <Link href="/cluster">
          <h4 className="text-[10px] font-medium text-[#21B9E8] border border-[#21B9E8]/5 px-3 py-2 rounded-full cursor-pointer hover:text-cyan-300 transition-colors">
            Security essentials
          </h4>
        </Link>
      </div>

      {/* Grid: responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-[#2c2c3e] transform -translate-x-1/2" />

        {/* Left Column */}
        <div className="space-y-4 md:pr-4">
          {clusterSkills.map((skill, i) => (
            <SkillItem key={`cluster-${i}`} {...skill} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:pl-4">
          {essentialSkills.map((skill, i) => (
            <SkillItem key={`essential-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
