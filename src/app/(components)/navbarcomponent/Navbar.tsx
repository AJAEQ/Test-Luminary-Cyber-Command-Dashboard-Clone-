"use client";
import { RxCaretRight } from "react-icons/rx";

import { MdDashboard } from "react-icons/md";
import Image from "next/image";
import useModal from "@/app/_zustand/hooks/useModal";
import { GiHamburgerMenu } from "react-icons/gi";
import SeconDashBoard from "@/svg/secondDashBoard";
import Notification from "@/svg/Notification";
import { sidebarType } from "@/app/_type/type";
import Contact from "@/svg/ContactTwo";
import Vpn from "@/svg/Vpn";
import Up from "@/svg/Up";
import { FaTimes } from "react-icons/fa";
const NavBar = () => {
  const modal = useModal();
  const { isNavOpen, handleIsNavOpen, handleIsNavClose, handleDashboardOpen } =
    modal;
  // <GiHamburgerMenu />

  const navIcon: sidebarType[] = [
    {
      icon: <Up />,
    },
    {
      icon: <Contact />,
    },
    {
      icon: <Notification />,
    },
    {
      icon: <SeconDashBoard />,
    },
  ];

  const navMapping = navIcon.map((icon, index) => {
    return <li key={index}>{icon.icon}</li>;
  });
  return (
    <header className={`flex w-full justify-between items-center  p-0  `}>
      <div
        className=" text-[#22B8E8] text-2xl md:hidden block"
        onClick={handleDashboardOpen}
      >
        <MdDashboard />
      </div>
      <div className="flex  items-center gap-3 ">
        <h1 className="font-600 text-xs text-[#E2E8FF80]">Education</h1>
        <div className="text-[#3e4653] ">
          <RxCaretRight />
        </div>
        <h1 className="text-white font-semibold text-xs">Cyber command</h1>
      </div>
      <div
        className="md:hidden block text-white text-2xl"
        onClick={handleIsNavOpen}
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`md:flex md:flex-row flex-col md:justify-between md:items-center md:gap-5 gap-[30px]
    md:bg-transparent bg-[#0a1420] absolute md:static top-0 z-10 
    md:w-auto w-full 
    ${isNavOpen ? "block" : "hidden"}
  `}
      >
        <div
          className=" text-white text-3xl md:hidden block"
          onClick={handleIsNavClose}
        >
          <FaTimes />
        </div>
        <div className="search border-[0.5px] border-[#E2E8FF1A] rounded-[10px] flex gap-3 items-center md:w-[313px] md:[40px] p-1">
          <div className="relative w-[20px] h-[20px]">
            <Image src="/images/search.png" alt="image" fill />
          </div>
          <input
            type="text"
            placeholder="search luminary"
            className="placeholder:text-[#E2E8FF1A] placeholder:text-[10px] outline-none text-white"
          />
        </div>

        <ul className="flex md:flex-row flex-col items-center md:gap-[20px] gap-[40px]">
          {navMapping}
        </ul>
        <button className=" rounded md:w-[169px] w-full h-[40px] md:my-0 my-3  border-1 border-[#E2E8FF0D] text-red-600 text-center text-sm flex items-center justify-center gap-2 font-600">
          <Vpn />
          <p>Connect to VPN</p>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
