"use client";
import { RxCaretRight } from "react-icons/rx";
import { TbArrowBigUpLines } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { SiQuantconnect } from "react-icons/si";
import { FaSearch, FaTimes } from "react-icons/fa";
import useModal from "@/app/_zustand/hooks/useModal";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const modal = useModal();
  const { isNavOpen, handleIsNavOpen, handleIsNavClose, handleDashboardOpen } =
    modal;
  // <GiHamburgerMenu />
  return (
    <header
      className={`flex  w-full justify-between  items-center md:p-5 p-1  `}
    >
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
        className={`md:flex md:flex-row flex-col justify-between md:items-center md:gap-5 
    md:bg-transparent bg-[#0a1420] absolute md:static top-0 z-10 
    md:w-auto w-full p-5
    ${isNavOpen ? "block" : "hidden"}
  `}
      >
        <div
          className=" text-white text-3xl md:hidden block"
          onClick={handleIsNavClose}
        >
          <FaTimes />
        </div>
        <div className="search border-[0.5px] border-[#E2E8FF1A] rounded-[10px] flex gap-3 items-center p-3 md:my-0 my-5">
          <div className="text-[#E2E8FF1A] text-xl">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="search luminary"
            className="placeholder:text-[#E2E8FF1A]"
          />
        </div>
        <div className="text-white flex md:flex-row flex-col justify-between items-center md:gap-10 gap-16">
          <div className="text-2xl">
            <TbArrowBigUpLines />
          </div>
          <div className="text-2xl">
            <IoIosPeople />
          </div>
          <div className="text-2xl">
            <IoMdNotifications />
          </div>
          <div className="text-2xl">
            <MdDashboardCustomize />
          </div>
          <button className=" rounded w-[169px] h-[40px] border-1 border-[#E2E8FF0D] text-red-600 text-center text-sm flex items-center justify-center gap-2 font-semibold">
            <SiQuantconnect />
            <h3>Connect to VPN</h3>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
