import {
  Search,
  Bell,
  User,
  Wifi,
  LayoutDashboard,
  Download,
} from "lucide-react";

interface HeaderProps {
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ breadcrumb }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#11111a] border-b border-[#1a1a1a]">
      {/* Left Side: Breadcrumb */}
      <div className="flex items-center space-x-2">
        {breadcrumb ? (
          <>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index > 0 && <span className="text-gray-500">/</span>}
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">{item.label}</span>
                )}
              </div>
            ))}
          </>
        ) : null}
      </div>
      <div className="flex gap-5">
        {" "}
        <div className="flex items-center border border-white rounded-md px-2 space-x-3 w-1/3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Summary"
            className="bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Download className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />
          <User className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />
          <Bell className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />
          <LayoutDashboard className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#DF3033]/5 rounded-lg text-[#DF3033]/50 text-sm font-medium hover:bg-red-700 hover:text-white transition duration-150">
            <Wifi className="h-4 w-4 transform -rotate-45" />
            <span>Connect to VPN</span>
          </button>
        </div>
      </div>
    </header>
  );
};
