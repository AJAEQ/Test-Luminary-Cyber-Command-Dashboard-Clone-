import React from "react";
import { PieChart } from "react-minimal-pie-chart";

interface SkillChainProgressProps {
  progress: number;
  chainName: string;
  completedTasks: string;
}

export const SkillChainProgress: React.FC<SkillChainProgressProps> = ({
  progress,
  chainName,
  completedTasks,
}) => {
  const safeProgress =
    typeof progress === "number" && !isNaN(progress) ? progress : 0;

  const progressColor = "#06b6d4"; 
  const trackColor = "#1a1f2e"; 

  return (
    <div className="flex items-center gap-4  border border-[#1c2333] rounded-xl p-4 shadow-md">
      {/* Circular Progress */}
      <div className="relative w-20 h-20 flex-shrink-0">
        {/* Background Track */}
        <PieChart
          data={[{ value: 100, color: trackColor }]}
          lineWidth={18}
          startAngle={-90}
          radius={50}
          style={{ position: "absolute", inset: 0 }}
        />

        {/* Actual Progress */}
        <PieChart
          data={[{ value: safeProgress, color: progressColor }]}
          lineWidth={18}
          startAngle={-90}
          totalValue={100}
          radius={50}
          style={{ position: "absolute", inset: 0 }}
        />

        {/* Inner Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[10px] text-gray-400">Skill chain</span>
            <span className="text-lg font-semibold text-cyan-400">
              {safeProgress}%
            </span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-gray-200 text-base font-semibold">
          {chainName}
        </span>

        <span className="inline-block mt-2 px-3 py-1 text-sm text-gray-400 bg-[#1c2333] rounded-md w-fit">
          {completedTasks}
        </span>
      </div>
    </div>
  );
};
