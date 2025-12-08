"use client";

import { useState, useMemo } from "react";

export const StudyTimeChart = () => {
  const [selectedDate, setSelectedDate] = useState("Jun 14, 2025");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const studyData = useMemo(
    () => [
      { day: 0, hours: 2 },
      { day: 1, hours: 3 },
      { day: 2, hours: 2.5 },
      { day: 3, hours: 4 },
      { day: 4, hours: 3.5 },
      { day: 5, hours: 5 },
      { day: 6, hours: 4.5 },
      { day: 7, hours: 6 },
      { day: 8, hours: 5.5 },
      { day: 9, hours: 6.5 },
      { day: 10, hours: 6 },
      { day: 11, hours: 7 },
      { day: 12, hours: 6.5 },
      { day: 13, hours: 7.5 },
      { day: 14, hours: 6 },
      { day: 15, hours: 5.5 },
      { day: 16, hours: 4 },
      { day: 17, hours: 3.5 },
      { day: 18, hours: 3 },
      { day: 19, hours: 2.5 },
      { day: 20, hours: 2 },
      { day: 21, hours: 1.5 },
      { day: 22, hours: 1 },
      { day: 23, hours: 0.5 },
      { day: 24, hours: 1 },
      { day: 25, hours: 1.5 },
      { day: 26, hours: 2 },
      { day: 27, hours: 2.5 },
      { day: 28, hours: 3 },
      { day: 29, hours: 3.5 },
      { day: 30, hours: 4 },
      { day: 31, hours: 4.5 },
    ],
    []
  );

  const maxHours = Math.max(...studyData.map((d) => d.hours));
  const width = 1200;
  const height = 180;
  const padding = 30;

  const points = useMemo(
    () =>
      studyData.map((data) => {
        const x =
          (data.day / (studyData.length - 1)) * (width - padding * 2) + padding;
        const y =
          height - (data.hours / maxHours) * (height - padding * 1.5) - padding;
        return { x, y };
      }),
    [studyData, maxHours]
  );

  // Smooth path
  const pathData = useMemo(() => {
    let path = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const controlX = (prev.x + curr.x) / 2;
      const controlY = (prev.y + curr.y) / 2;
      path += ` Q ${controlX},${controlY} ${curr.x},${curr.y}`;
    }
    return path;
  }, [points]);

  const fillPath = `${pathData} L ${width - padding},${
    height - padding
  } L ${padding},${height - padding} Z`;

  return (
    <div className="p-4 sm:p-6 rounded-xl border border-[#1a253a] shadow-xl flex flex-col text-gray-100 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm font-semibold">Study Time</span>
          <input
            type="text"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-xs sm:text-sm bg-transparent border-b border-gray-600 focus:border-cyan-400 outline-none py-1 px-2 w-28 sm:w-32"
          />
        </div>
        <button className="text-xs sm:text-sm px-3 py-1 bg-[#1a253a] rounded hover:bg-[#2d3b52] transition w-full sm:w-auto">
          Reset
        </button>
      </div>

      {/* Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          width="100%"
          height="180"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="studyGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.01)" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`grid-${i}`}
              x1={padding}
              y1={padding + (i * (height - padding * 2)) / 4}
              x2={width - padding}
              y2={padding + (i * (height - padding * 2)) / 4}
              stroke="#1f2a3c"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}

          {/* Fill area */}
          <path d={fillPath} fill="url(#studyGradient)" />

          {/* Wave line */}
          <path
            d={pathData}
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {studyData.map((data, index) => {
            const x =
              (data.day / (studyData.length - 1)) * (width - padding * 2) +
              padding;
            const y =
              height -
              (data.hours / maxHours) * (height - padding * 1.5) -
              padding;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3.5"
                fill={hoveredPoint === index ? "#38BDF8" : "transparent"}
                stroke={hoveredPoint === index ? "#06b6d4" : "transparent"}
                strokeWidth="2"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer"
              />
            );
          })}

          {/* X-axis labels */}
          {studyData.map((_, day) => {
            const x =
              (day / (studyData.length - 1)) * (width - padding * 2) + padding;
            return (
              <text
                key={`label-${day}`}
                x={x}
                y={height - padding + 20}
                textAnchor="middle"
                className="text-[8px] sm:text-xs"
                fill="#6b7280"
              >
                {day}
              </text>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredPoint !== null && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 bg-[#0B1120] border border-cyan-600 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-xl text-center z-10 text-xs sm:text-sm">
            <div className="w-0.5 h-6 bg-cyan-600 mx-auto mb-1"></div>
            <p className="text-gray-300 mb-0.5">
              {`${10 + hoveredPoint} Jan 2025`}
            </p>
            <p className="font-bold text-white">
              {studyData[hoveredPoint].hours}{" "}
              <span className="text-xs">hrs</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
