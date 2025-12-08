import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  progress: number;
  isEnrolled: boolean;
  totalDays: number;
  totalNodes: number;
  rating: number;
  difficulty: number;
}

const ProgressSection: React.FC<Props> = ({
  progress,
  isEnrolled,
  totalDays,
  totalNodes,
  rating,
}) => {
  const buttonText = isEnrolled ? "WITHDRAW" : "ENROLL";
  const buttonColor = isEnrolled
    ? "bg-gradient-to-r from-[#F6743E] to-[#D42525]"
    : "bg-white/10";

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 w-full">
      {/* Left Section: SCOUT + Days + Nodes + Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="border border-red-500 px-3 py-1 bg-[#990082] rounded text-[17px] font-bold text-red-500 whitespace-nowrap">
              SCOUT
            </div>
            <span className="text-[17px] text-[#21B9E8] font-mono">
              {totalDays} DAYS
            </span>
            <span className="text-[17px] text-[#21B9E8] font-mono">
              | {totalNodes} NODES
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3 w-full sm:flex-1 mt-2 sm:mt-0">
            <div className="flex-grow h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-bold text-cyan-400 min-w-[30px]">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Middle Section: Rating + Difficulty + Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex gap-0.5">{renderStars(Math.round(rating))}</div>
          <span className="text-gray-600 hidden sm:inline">●</span>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>

        <button
          className={`px-6 py-2 text-[12px] font-semibold rounded uppercase whitespace-nowrap transition-colors mt-2 sm:mt-0 sm:ml-4 ${buttonColor}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProgressSection;
