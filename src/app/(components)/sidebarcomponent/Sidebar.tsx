"use client";
import { sidebarType } from "@/app/_type/type";
import { BiSolidZap } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { MdWorkspacesFilled } from "react-icons/md";
import { LuChartLine } from "react-icons/lu";
import { FaGift, FaTimes } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import Image from "next/image";
import useModal from "@/app/_zustand/hooks/useModal";
const SideBar = () => {
  const sideBarDetail: sidebarType[] = [
    {
      icon: BiSolidZap,
    },

    {
      icon: MdDashboard,
    },

    {
      icon: GiTrophyCup,
    },
    {
      icon: MdWorkspacesFilled,
    },
    {
      icon: LuChartLine,
    },
    {
      icon: FaGift,
    },
    {
      icon: FaPlusCircle,
    },
  ];

  const icon = sideBarDetail.map((item, index) => {
    const Icon = item.icon;
    return (
      <li
        key={index}
        className={`text-2xl    ${
          index === 0
            ? "text-[#22B8E8]"
            : index === 1
            ? "text-[#e2e8ff]"
            : "text-[#3e4653]"
        }`}
      >
        <Icon />
      </li>
    );
  });

  const modal = useModal();
  const { isDashboardOpen, handleDashboardClose } = modal;
  return (
    <aside
      className={`md:w-[62px] w-[150px]  h-full px-[10px] pt-[12px] pb-[4px] bg-[#08121B] md:flex justify-between flex-col absolute md:static top-0 z-20 ${
        isDashboardOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="text-red-500 text-2xl flex justify-end py-5 md:hidden "
        onClick={handleDashboardClose}
      >
        <FaTimes />
      </div>
      <div>
        <div className="flex flex-col items-center gap-5 py-5">
          <div className="w-[50px] h-[50px] relative">
            <Image src="/images/logo.png" alt="logo-image" fill />
          </div>
          <ul className="list-none flex flex-col gap-[20px]">{icon}</ul>
        </div>

        <div className="flex gap-2.5 flex-col items-center">
          <div className="text-2xl text-[#3e4653]">
            <IoMdContact />
          </div>
          <div className="avata w-[30px] h-[30px] bg-amber-200 rounded-full"></div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
