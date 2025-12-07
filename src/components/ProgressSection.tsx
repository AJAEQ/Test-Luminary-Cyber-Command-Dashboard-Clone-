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

  // Helper for Rating Stars
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <div className="flex justify-between items-center gap-6 px-8 py-4  ">
      {/* Left Section: SCOUT Label with Border and Progress Bar */}
      <div className="flex flex-col gap-3 flex-1">
        {/* SCOUT Label with Border */}
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-3">
          <div className="flex-grow h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-bold text-cyan-400 min-w-1/2">
            {progress}%
          </span>
        </div>
      </div>

      {/* Middle Section: Rating Stars and Single Difficulty Dot */}
      <div className="flex items-center gap-4">
        <div className="flex gap-0.5">{renderStars(Math.round(rating))}</div>
        <span className="text-gray-600">●</span>
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      </div>

      {/* Right Section: Action Button */}
      <button
        className={`px-6 py-2 text-[12px] font-semibold rounded uppercase whitespace-nowrap transition-colors ${buttonColor}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProgressSection;
