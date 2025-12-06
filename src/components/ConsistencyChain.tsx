
"use client";

import { useState } from "react";
import { Settings2, X } from "lucide-react";

interface ChainItemProps {
  week: number;
  progress: number;
  accomplished: boolean;
}

const ChainItem: React.FC<ChainItemProps> = ({
  week,
  progress,
  accomplished,
}) => {
  return (
    <div className="flex items-center space-x-2 py-1">
      {/* Week Number and Status (Left Column) */}
      <div className="w-1/3 space-y-0.5">
        <span className="text-[10px] text-gray-300 block">Week {week}</span>
        <span
          className={`text-[8px] font-medium px-2 rounded-full leading-relaxed ${
            accomplished
              ? "bg-green-600/20 text-green-400"
              : "bg-red-600/20 text-red-400"
          }`}
        >
          {accomplished ? "Accomplished" : "Unaccomplished"}
        </span>
      </div>

      {/* Progress Bar and Percentage (Right Column) */}
      <div className="w-2/3 relative h-8 rounded-lg overflow-hidden  group hover:bg-[#1a1a25] transition-colors duration-200">
        <div
          className="absolute inset-y-0 left-0 rounded-lg"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(270deg, rgba(33, 185, 232, 0.8) 0%, rgba(18, 104, 130, 0) 100%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-between px-3 text-sm font-semibold text-white">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

const ConsistencyChainModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [educationType, setEducationType] = useState("Nodes");
  const [weeklyCount, setWeeklyCount] = useState(1);
  const [startDate, setStartDate] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#0a1420] to-[#0f1b2e] border border-[#2c3e50] rounded-lg p-6  shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-100">
              Consistency chain
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Setup your consistency chain
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className=" space-y-6">
          {/* Enroll Section */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-100">
              Enroll in a cluster
            </p>
            <a
              href="#"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition"
            >
              Enroll to setup consistency chain
            </a>
          </div>

          {/* Education Type Section */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-100 mb-1">
                Education type
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Select the education type and number you can complete weekly
              </p>
            </div>

            <div className="flex gap-3 items-center">
              {/* Dropdown */}
              <div className="flex-1">
                <label className="text-xs text-gray-400 block mb-1">
                  Education type
                </label>
                <select
                  value={educationType}
                  onChange={(e) => setEducationType(e.target.value)}
                  className="w-full bg-[#1a2f45] border border-[#3a5a7a] rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-400"
                >
                  <option>Nodes</option>
                  <option>Courses</option>
                  <option>Projects</option>
                </select>
              </div>

              {/* +/- Controls */}
              <div className="flex  gap-1 pt-6">
                <button
                  onClick={() => setWeeklyCount(Math.max(1, weeklyCount + 1))}
                  className="bg-[#1a2f45] hover:bg-[#2a3f55] border border-[#3a5a7a] rounded px-2 py-1 text-gray-300 text-sm transition"
                >
                  +
                </button>
                <input
                  type="number"
                  value={weeklyCount}
                  onChange={(e) =>
                    setWeeklyCount(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 bg-[#1a2f45] border border-[#3a5a7a] rounded px-2 py-1 text-sm text-gray-200 text-center focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={() => setWeeklyCount(Math.max(1, weeklyCount - 1))}
                  className="bg-[#1a2f45] hover:bg-[#2a3f55] border border-[#3a5a7a] rounded px-2 py-1 text-gray-300 text-sm transition"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          {/* Select Date Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-100 block">
                  Select date
                </label>
                <p className="text-xs text-gray-400">
                  Pick a date you want to start
                </p>
              </div>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-[#1a2f45] border border-[#3a5a7a] rounded-md px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-400 flex-shrink-0"
              />
            </div>
          </div>

          {/* Estimated Time */}
          <div className="bg-[#1a2f45]/50 rounded-md px-4 py-3">
            <p className="text-xs text-gray-400">
              Estimated time of completion:{" "}
              <span className="text-gray-200 font-semibold">10 weeks</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#2c3e50]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#2a3f55] hover:bg-[#3a5f75] border border-[#3a5a7a] rounded-md text-sm font-medium text-gray-200 transition"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export const ConsistencyChain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chainData = [
    { week: 1, progress: 100, accomplished: true },
    { week: 2, progress: 100, accomplished: true },
    { week: 3, progress: 50, accomplished: false },
    { week: 4, progress: 50, accomplished: false },
  ];

  return (
    <div
      className="w-[320px] h-[451px] flex flex-col bg-[linear-gradient(180deg,rgba(4,14,22,0.5)_0%,rgba(23,79,124,0.5)_395.83%)]
 rounded-xl border border-[#2c2c3e] shadow-xl p-4 space-y-2"
    >
      {/* 1. Top Bar: Title, Count, and Settings Icon */}
      <div className="flex justify-between items-center border-b border-[#2c2c3e] pb-3">
        <div className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded-full text-xs font-normal text-gray-100">
          <span>Consistency chain</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-normal text-orange-500 flex items-center">
            1 <span className="ml-1 text-lg">🔥</span>
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-400 h-5 w-5 cursor-pointer hover:text-cyan-500 transition"
          >
            <Settings2 />
          </button>
        </div>
      </div>

      {/* 2. Cluster Details */}
      <div className="space-y-2">
        <p className="text-xs text-gray-400 font-medium">Cluster name</p>
        <h3 className="text-sm font-bold text-gray-100">Security essentials</h3>

        <div className="flex flex-col gap-2 space-x-4 pt-2">
          {/* Cluster ID Tag */}
          <div className="flex flex-col">
            <p className="text-xs">Cluster ID</p>
            <span className="px-1 py-1 text-xs w-[62px] font-medium bg-[#2c2c3e] rounded-md text-gray-300">
              SES-100
            </span>
          </div>

          {/* Duration Progress Bar (Static mock-up) */}
          <div className="flex-1 flex items-center space-x-2">
            <div className="w-full bg-[#1a1a25] rounded-full h-1.5 relative">
              <div
                className="h-full rounded-full w-[40%]"
                style={{ background: "#00BCD4" }}
              ></div>
            </div>
            <span className="text-xs text-gray-400">15wks</span>
          </div>
        </div>
      </div>

      {/* 3. Consistency Chain Progress Header */}
      <div className="flex justify-between items-center pt-3 border-t border-[#2c2c3e]">
        <h4 className="text-xs font-semibold text-gray-100">
          Consistency chain
        </h4>
        <div className="flex items-center space-x-1 text-yellow-500">
          <span className="text-lg">☀️</span>
          <span className="text-[8px] font-medium">Ongoing</span>
        </div>
      </div>

      {/* 4. Weekly Progress Bars */}
      <div className="flex-1 ">
        {chainData.map((item) => (
          <ChainItem key={item.week} {...item} />
        ))}
      </div>

      {/* Modal */}
      <ConsistencyChainModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
