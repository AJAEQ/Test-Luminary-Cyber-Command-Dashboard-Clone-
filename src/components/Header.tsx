import { Search, Bell, User, Wifi } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#11111a] border-b border-[#1a1a1a]">
      {/* Search Input */}
      <div className="flex items-center space-x-3 w-1/3">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Summary"
          className="bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none w-full"
        />
      </div>

      {/* Right Side Icons and Button */}
      <div className="flex items-center space-x-6">
        <Bell className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />
        <User className="h-5 w-5 text-gray-400 cursor-pointer hover:text-cyan-500" />

        {/* VPN Button (Cyan with WiFi icon) */}
        <button className="flex items-center space-x-2 px-3 py-1.5 bg-red-600 rounded-lg text-white text-sm font-medium hover:bg-red-700 transition duration-150">
          <Wifi className="h-4 w-4 transform -rotate-45" />
          <span>Connect to VPN</span>
        </button>
      </div>
    </header>
  );
};
