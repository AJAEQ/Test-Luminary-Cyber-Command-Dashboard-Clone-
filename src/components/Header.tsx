"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  User,
  Wifi,
  LayoutDashboard,
  Download,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({ breadcrumb }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#11111a] border-b border-[#1a1a1a] px-4 sm:px-6 py-4">
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        <div className="flex items-center flex-wrap gap-2">
          {breadcrumb?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
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
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded hover:bg-[#1a1a25] transition"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-300" />
          )}
        </button>

        {/* Desktop Menu (always visible on md+) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center border border-white/20 rounded-md px-2 space-x-3 w-64">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Summary"
              className="bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none w-full"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Download className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <User className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <Bell className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <LayoutDashboard className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />

            {/* VPN */}
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#DF3033]/5 rounded-lg text-[#DF3033]/50 text-sm font-medium hover:bg-red-700 hover:text-white transition">
              <Wifi className="h-4 w-4 transform -rotate-45" />
              <span>Connect to VPN</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-4 p-4 bg-[#14141f] rounded-lg border border-[#1f1f2b] space-y-4">
          {/* Search */}
          <div className="flex items-center border border-white/20 rounded-md px-2 space-x-3 w-full">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Summary"
              className="bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none w-full"
            />
          </div>

          {/* Icons Row */}
          <div className="flex items-center justify-between">
            <Download className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <User className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <Bell className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
            <LayoutDashboard className="h-5 w-5 text-gray-400 hover:text-cyan-500 cursor-pointer" />
          </div>

          {/* VPN Button */}
          <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-[#DF3033]/10 rounded-lg text-[#DF3033]/60 text-sm font-medium hover:bg-red-700 hover:text-white transition">
            <Wifi className="h-4 w-4 transform -rotate-45" />
            <span>Connect to VPN</span>
          </button>
        </div>
      )}
    </header>
  );
};
