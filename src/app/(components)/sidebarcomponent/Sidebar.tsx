"use client";
import { sidebarType } from "@/app/_type/type";
// import { BiSolidZap } from "react-icons/bi";
// import { MdDashboard } from "react-icons/md";
// import { GiTrophyCup } from "react-icons/gi";
// import { MdWorkspacesFilled } from "react-icons/md";
// import { LuChartLine } from "react-icons/lu";
// import { FaGift, FaTimes } from "react-icons/fa";
// import { FaPlusCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import useModal from "@/app/_zustand/hooks/useModal";
import Zap from "@/svg/Zap";
import Cup from "@/svg/Cup";
import Cycle from "@/svg/Cycle";
import Demand from "@/svg/Demand";
import Gift from "@/svg/Gift";
import Plus from "@/svg/Plus";
import Contact from "@/svg/Contact";
import { JSX } from "react";
const SideBar = () => {
  const sideBarDetail: sidebarType[] = [
    {
      icon: <Zap />,
    },

    {
      icon: "/images/image.png",
    },

    {
      icon: <Cup />,
    },
    {
      icon: <Cycle />,
    },
    {
      icon: <Demand />,
    },
    {
      icon: <Gift />,
    },
    {
      icon: <Plus />,
    },
  ];
  const contact: JSX.Element = <Contact />;
  const icon = sideBarDetail.map((item, index) => {
    return (
      <li
        key={index}
        className={`text-2xl text-[34.48px]   ${
          index === 0 ? "text-[#22B8E8]" : "text-[#3e4653]"
        }`}
      >
        {typeof item.icon === "string" ? (
          <div className="relative w-[36px] h-[36px]">
            <Image src={item.icon as string} alt="image" fill />
          </div>
        ) : (
          <div>{item.icon}</div>
        )}
      </li>
    );
  });
  // flex flex-row items-start justify-start w-auto h-[38px] pt-[7px] pr-2 pb-[7px] pl-2 gap-[10px] bg-gradient-to-br from-[#040E16] to-[#2A93E8] border border-[#F2E8FF] rounded-[10px]

  const modal = useModal();
  const { isDashboardOpen, handleDashboardClose } = modal;
  return (
    <aside
      className={`md:w-[62px] w-[150px] h-[952px] px-[10px] pt-[12px] pb-[4px] bg-[#08121B] md:flex justify-between flex-col absolute md:static top-0 z-20 ${
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
          <div className="w-[35px] h-[36px] relative">
            <Image src="/images/logo.png" alt="logo-image" fill />
          </div>
          <ul className="list-none flex flex-col items-center gap-[20px]">
            {icon}
          </ul>
        </div>
      </div>

      <div className="flex gap-2.5 flex-col items-center">
        <div className="text-2xl text-[#3e4653]">{contact}</div>
        <div className="avata w-[36px] h-[36px] relative">
          <Image src="/images/avatar.png" alt="avtar" fill />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
