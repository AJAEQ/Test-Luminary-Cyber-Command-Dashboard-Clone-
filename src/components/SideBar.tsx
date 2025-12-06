import {
  Briefcase,
  GitPullRequest,
  BookOpen,
  Settings,
  Shield,
  Zap,
  LayoutDashboard,
  Bell,
  HardHat, // Using HardHat for 'Build' or a wrench icon
} from "lucide-react";

// Define the structure for a sidebar item
interface SidebarItemProps {
  Icon: React.ElementType; // To pass the lucide-react component
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, active = false }) => {
  const baseClasses = "h-6 w-6 cursor-pointer transition-colors";
  const colorClasses = active
    ? "text-cyan-500 hover:text-cyan-400"
    : "text-gray-400 hover:text-cyan-500";

  return (
    <div className="relative group p-2 rounded-lg">
      <Icon className={`${baseClasses} ${colorClasses}`} />
      {/* Optional: Add a subtle cyan indicator for the active item */}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 rounded-r-lg"></div>
      )}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="w-16 flex flex-col items-center py-6 space-y-8 bg-[#0a0a0a] border-r border-[#1a1a1a] shadow-2xl">
      {/* Top Logo / Main Icon */}
      <Zap className="text-cyan-500 h-7 w-7" />

      {/* Primary Navigation Icons */}
      <div className="space-y-6">
        <SidebarItem Icon={Shield} active={true} />{" "}
        {/* Active item matches the screenshot context */}
        <SidebarItem Icon={LayoutDashboard} />
        <SidebarItem Icon={BookOpen} />
        <SidebarItem Icon={Briefcase} />
        <SidebarItem Icon={HardHat} />{" "}
        {/* Used for the wrench/hammer icon group */}
        <SidebarItem Icon={Bell} />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Icons (Settings/System) */}
      <div className="space-y-6">
        <SidebarItem Icon={Settings} />
        <SidebarItem Icon={GitPullRequest} />
      </div>
    </div>
  );
};
