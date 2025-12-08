import ClusterHeader from "../../components/ClusterHeader";
import CourseNodeCard from "../../components/CourseNode";
import ProgressSection from "../../components/ProgressSection";
import { Sidebar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { ClusterData } from "../../lib/type";
import Link from "next/link";

// Mock Data to match the image
const MOCK_DATA: ClusterData = {
  title: "SECURITY ESSENTIALS",
  code: "SES 100",
  rating: 4.5,
  difficulty: 4,
  isEnrolled: true,
  totalDays: 21,
  totalNodes: 34,
  currentProgressPercent: 40,
  nodes: [
    {
      id: "1",
      title: "UNDERSTANDING KALI LINUX",
      subtitle: "TANOS",
      progress: 25,
      total: 25,
      state: "COMPLETED",
      color: "green",
      icon: "/kali-icon.png",
    },
    {
      id: "2",
      title: "EXPLORING DIFFERENT SER...",
      subtitle: "ARGONAUT",
      progress: 25,
      total: 25,
      state: "COMPLETED",
      color: "blue",
      icon: "/server-icon.png",
    },
    {
      id: "3",
      title: "MACOS SECURITY FUNDAM...",
      subtitle: "THE COVENANT",
      progress: 20,
      total: 20,
      state: "COMPLETED",
      color: "purple",
      icon: "/macos-icon.png",
    },
    {
      id: "4",
      title: "WEB ATTACK FUNDAMENT...",
      subtitle: "TANOS",
      progress: 0,
      total: 9,
      state: "START",
      color: "red",
      icon: "/web-icon.png",
    },
    {
      id: "5",
      title: "INTRODUCTION TO WIRELE...",
      subtitle: "OMNIA ARMADA",
      progress: 7,
      total: 13,
      state: "CONTINUE",
      color: "red",
      icon: "/wireless-icon.png",
    },
    {
      id: "6",
      title: "LINUX NETWORKING & SER...",
      subtitle: "THE PILGRIM",
      progress: 0,
      total: 33,
      state: "CONTINUE",
      color: "blue",
      icon: "/linux-icon.png",
    },
  ],
};

export default function ClusterDetailPage() {
  const {
    nodes,
    currentProgressPercent,
    isEnrolled,
    totalDays,
    totalNodes,
    rating,
    difficulty,
  } = MOCK_DATA;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          breadcrumb={[
            { label: "Education", href: "/" },
            { label: "Clusters" },
          ]}
        />

        {/* Back Navigation */}
        <div className="bg-[#11111a] px-4 md:px-10 py-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            <span className="text-xl">←</span>
            <span className="text-sm font-light">Cyber command</span>
          </Link>
        </div>

        {/* Cluster Details & Nodes */}
        <div className="bg-gradient-to-l from-[rgb(23,79,124)] to-[#62D2F9]/0 flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Column */}
          <div className="w-full md:w-1/2 overflow-auto">
            <ClusterHeader />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 overflow-auto px-4 md:px-8 py-4 md:py-8 relative">
            <div className="flex justify-end mb-6 md:mb-10">
              <h2 className="flex text-sm md:text-[17px] font-light items-center gap-2 text-cyan-400 tracking-wider">
                AJAEQ{" "}
                <span>
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-7 h-7 md:w-9 md:h-9"
                  />
                </span>{" "}
                LUMINARY
              </h2>
            </div>

            {/* Course Nodes */}
            <div className="space-y-4 pr-2 md:pr-4">
              {nodes.map((node) => (
                <CourseNodeCard key={node.id} node={node} />
              ))}
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-full z-20">
          <ProgressSection
            progress={currentProgressPercent}
            isEnrolled={isEnrolled}
            totalDays={totalDays}
            totalNodes={totalNodes}
            rating={rating}
            difficulty={difficulty}
          />
        </div>
      </div>
    </div>
  );
}

