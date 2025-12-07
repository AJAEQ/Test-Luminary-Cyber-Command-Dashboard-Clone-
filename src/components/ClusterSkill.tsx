import React from "react";
import Link from "next/link";

interface SkillItemProps {
  name: string;
  progress: number; 
  color: string; 
}

export const SkillItem: React.FC<SkillItemProps> = ({
  name,
  progress,
  
}) => {
  const barFillColor = "linear-gradient(270deg, rgba(33, 185, 232, 0.2) 0%, rgba(18, 104, 130, 0.2) 100%)";

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex-1 rounded-lg h-8 relative overflow-hidden flex items-center ">
        {/* Progress Bar Fill */}
        <div
          className={`h-full absolute left-0 top-0 rounded-lg`}
          style={{
            width: `${progress}%`,
            background: barFillColor,
          }}
        />
        <div className="absolute inset-0 flex justify-between items-center px-3 z-10">
          {/* Percentage Text (Left) */}
          <span className="text-sm font-medium text-white">{progress}%</span>

          {/* Skill Name (Right, smaller font size as per your input) */}
          <span className="text-[9px] text-regular text-[#E2E8FF]/80">{name}</span>
        </div>
      </div>
    </div>
  );
};

export const ClusterSkillMatrix = () => {
  // Mock data for the left column (Cluster skill matrix)
  const clusterSkills = [
    {
      name: "Windows Administration",
      progress: 50,
      color: "rgb(25, 120, 150)",
    },
    { name: "Linux Administration", progress: 100, color: "rgb(25, 120, 150)" },
    { name: "Cryptography", progress: 25, color: "rgb(25, 120, 150)" },
    { name: "System Optimisation", progress: 80, color: "rgb(25, 120, 150)" },
    { name: "Defense In Depth", progress: 60, color: "rgb(25, 120, 150)" },
    { name: "Client-Side Attack", progress: 20, color: "rgb(25, 120, 150)" },
    { name: "Active Directory", progress: 90, color: "rgb(25, 120, 150)" },
    { name: "Server-Side Attack", progress: 30, color: "rgb(25, 120, 150)" },
  ];

  // Mock data for the right column (Security essentials)
  const essentialSkills = [
    {
      name: "Windows Administration",
      progress: 50,
      color: "rgb(25, 120, 150)",
    },
    { name: "Linux Administration", progress: 100, color: "rgb(25, 120, 150)" },
    { name: "Cryptography", progress: 25, color: "rgb(25, 120, 150)" },
    { name: "System Optimisation", progress: 80, color: "rgb(25, 120, 150)" },
    { name: "Defense In Depth", progress: 60, color: "rgb(25, 120, 150)" },
    { name: "Client-Side Attack", progress: 20, color: "rgb(25, 120, 150)" },
    { name: "Active Directory", progress: 90, color: "rgb(25, 120, 150)" },
    { name: "Server-Side Attack", progress: 30, color: "rgb(25, 120, 150)" },
  ];

  return (
    <div className="p-4 bg-[linear-gradient(180deg,rgba(4,14,22,0.5)_0%,rgba(23,79,124,0.5)_395.83%)] rounded-xl border border-[#2c2c3e] shadow-xl">
      {/* Column Titles Area */}
      <div className="flex justify-between items-center mb-4  pb-3 mx-4">
        <h4 className="text-[10px] font-medium text-[#B3B3B3] border border-[#E2E8FF]/5 px-3 py-2 rounded-full">
          Cluster skill matrix
        </h4>
        <Link href="/cluster" passHref>
          <h4 className="text-[10px] font-medium text-[#21B9E8] border border-[#21B9E8]/5 px-3 py-2 rounded-full cursor-pointer hover:text-cyan-300 transition-colors">
            Security essentials
          </h4>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-8 relative">
        {/* Vertical Divider Line */}
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#2c2c3e] transform -translate-x-1/2"></div>

        {/* LEFT COLUMN */}
        <div className="space-y-4 pr-4">
          {clusterSkills.map((skill, index) => (
            <SkillItem key={`cluster-${index}`} {...skill} />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-4 pl-4">
          {essentialSkills.map((skill, index) => (
            <SkillItem key={`essential-${index}`} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
