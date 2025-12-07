"use client";

import { useState, useMemo } from "react";

interface Skill {
  name: string;
  progress: number;
  color: string;
  description?: string;
}

interface CareerSkillChartProps {
  skills?: Skill[];
}

const DEFAULT_SKILLS: Skill[] = [
  {
    name: "Network Penetration Tester",
    progress: 80,
    color: "#A0A8B0",
    description:
      "Master network reconnaissance and penetration testing techniques.",
  },
  {
    name: "Red Teamer",
    progress: 40,
    color: "#E74C3C",
    description: "Simulate adversarial attacks and threat scenarios.",
  },
  {
    name: "Exploit Developer",
    progress: 6,
    color: "#22C55E",
    description: "Develop custom exploits and vulnerability tools.",
  },
  {
    name: "Application Security Eng.",
    progress: 35,
    color: "#38BDF8",
    description: "Secure application development and code auditing.",
  },
  {
    name: "Cybersecurity Analyst I",
    progress: 20,
    color: "#7C3AED",
    description: "Monitor and analyze security threats and incidents.",
  },
  {
    name: "Specialized Domain (Cloud, IOT, Mobile, SCADA/ICS)",
    progress: 72,
    color: "#EF4444",
    description: "Expertise in specialized security domains and platforms.",
  },
  {
    name: "Vulnerability Researcher",
    progress: 85,
    color: "#3B82F6",
    description:
      "Hunt for flaws in software, hardware, or systems, often discovering zero-days and developing exploits.",
  },
];

// Calculate radar polygon points based on skill count and progress values
const calculateRadarPoints = (skills: Skill[]): string => {
  const numSkills = skills.length;
  const radius = 85;
  const centerX = 150;
  const centerY = 150;

  const points = skills
    .map((skill, index) => {
      const angle = (index / numSkills) * Math.PI * 2 - Math.PI / 2;
      const distance = (skill.progress / 100) * radius;
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  return points;
};

export const CareerSkillChart = ({
  skills = DEFAULT_SKILLS,
}: CareerSkillChartProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const progressionSkills = skills;

  // Memoize calculated values
  const radarPoints = useMemo(
    () => calculateRadarPoints(progressionSkills),
    [progressionSkills]
  );

  return (
    <div className="p-6 rounded-xl border border-[#1a253a] shadow-xl h-full flex flex-col text-gray-100">
      {/* Title */}
      <h4 className="text-[10px] text-[#8282E1] font-medium border border-[#8282E1]/5 px-2 py-1 rounded-full w-35 mb-4">
        Career Skill Progression
      </h4>

      {/* Radar + Ring Container */}
      <div className="flex flex-col items-center justify-center py-6 relative">
        {/* Radar + Ring SVG */}
        <svg width="300" height="300" viewBox="0 0 300 300">
          {/* Gradient ring - using actual skill colors */}
          <defs>
            <linearGradient
              id="ringGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              {progressionSkills.map((skill, index) => (
                <stop
                  key={index}
                  offset={`${(index / (progressionSkills.length - 1)) * 100}%`}
                  stopColor={skill.color}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Background ring */}
          <circle
            cx="150"
            cy="150"
            r="115"
            stroke="#1f2a3c"
            strokeWidth="18"
            fill="none"
          />

          {/* Active gradient ring - full circle showing all skill colors */}
          <circle
            cx="150"
            cy="150"
            r="115"
            stroke="url(#ringGradient)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          {/* Radar polygon - dynamically calculated from skill data */}
          <polygon
            points={radarPoints}
            fill="rgba(6,182,212,0.10)"
            stroke="#06b6d4"
            strokeWidth="2"
          />
        </svg>

        {/* Floating Tooltip - shows hovered skill details */}
        {hoveredSkill && (
          <div className="absolute top-[90px] right-[40px] w-[230px] bg-[#0B1120] border border-cyan-600 rounded-xl p-4 shadow-2xl">
            <h4 className="text-sm font-bold text-white">
              {hoveredSkill.name}{" "}
              <span className="text-cyan-400">{hoveredSkill.progress}%</span>
            </h4>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              {hoveredSkill.description || "Expertise in this domain."}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Skill Bars */}
      <div className="mt-6 space-y-3  border-t border-[#1a253a] pt-6 w-full">
        {progressionSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 cursor-pointer transition-opacity duration-200 hover:opacity-80"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Label */}
            <span className="text-xs font-regular text-[#E2E8FF]/70 w-40 truncate">
              {skill.name}
            </span>

            {/* Progress bar */}
            <div className="flex-1 h-2.5 bg-[#1a253a] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${skill.progress}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>

            {/* Percentage */}
            <span className="text-xs font-medium text-gray-300 w-8 text-right">
              {skill.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
