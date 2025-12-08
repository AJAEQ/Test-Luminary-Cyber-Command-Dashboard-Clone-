"use client";
import Image from "next/image";
import { BsToggles2 } from "react-icons/bs";
import useModal from "@/app/_zustand/hooks/useModal";
import useEducation from "@/app/_zustand/hooks/useEducation";
import { FaArrowRight } from "react-icons/fa";
import { LuArrowDownLeft } from "react-icons/lu";
const ConsistencyChain = () => {
  const openModal = useModal();
  const { handleOpen } = openModal;

  const eduInfo = useEducation();
  const { isEnrolled } = eduInfo;

  return (
    <div className="w-full  grid  md:gap-[10px] gap-7 md:p-5 p-2 md:grid-cols-5  grid-cols-1 ">
      <div className="border-1 border-[#E2E8FF0A] col-span-1 rounded-[14px] md:h-full h-[400px]  relative md:col-span-3  ">
        <Image
          src="/images/consisitency.jpg"
          alt="consistencyChain-image"
          className="rounded-[14px] object-center object-cover"
          fill
        />

        <button
          className="
    w-[93px] h-[31px] absolute top-[226px] left-[277px]
    rounded-[80px] px-[10px]
    border border-[#21B9E8]/20
    text-[10px] font-semibold leading-[22px]
    bg-[#21B9E866] shadow
    text-white
  "
        >
          Upgrade Now
        </button>
      </div>

      <div className=" rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient-to-b from-[#040E16] to-[#174F7C] md:p-5 p-2 md:col-span-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <button
              className=" rounded w-[108px] h-[31px] border-1 border-[#E2E8FF0D] font-500 text-[10px] leading-[150%] tracking-0 text-[#E18682] cursor-pointer"
              onClick={handleOpen}
            >
              Consistency chain
            </button>
            <div className="border-1 border-[#E2E8FF0D] cursor-pointer rounded-xl p-1 flex items-center gap-2">
              <h1 className="text-white text-[10px]">1</h1>
              <div
                className={`w-[18px] h-[18px] relative ${
                  isEnrolled ? "block" : "hidden"
                }`}
              >
                <Image
                  src="/images/fire.gif"
                  alt="fire-gif"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-[35px] h-[31px] rounded-[10px] py-[8px] px-[10px] bg-[#0D171F] border border-[#E2E8FF1A] text-[#E2E8FF1A]">
            <BsToggles2 />
          </div>
        </div>

        <div className="my-5 flex flex-col gap-2">
          <h1 className="font-400 text-[12px] leading-[100%] tracking-0 text-[#E2E8FF80]">
            Cluster Name
          </h1>
          <h1 className="font-500 text-[14px] leading-[100%] tracking-0 text-[#E2E8FF]">
            {isEnrolled?.title ?? "N/A"}
          </h1>
        </div>

        <div className="my-5 flex flex-col gap-2">
          <h1 className="font-400 text-xs tracking-0 text-[#E2E8FF80]">
            Clauster ID
          </h1>
          <div
            className="w-[39px] h-[21px] p-[6px] text-center rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-gradient-to-b from-[#E2E8FF0A] to-[#21B9E80A] 
          font-500 text-[10px] leading-[100%] tracking-0 text-[#E0E4E7]"
          >
            {isEnrolled?.id ?? "N/A"}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[153px] h-[5px] rounded-[5px] bg-[#2AE0DB1A]"></div>
          <h1 className="font-500 text-[8px] leading-[150%] tracking-[-2%]  text-center text-[#E2E8FF80]">
            N/A
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-400 text-xs tracking-0 text-[#E2E8FF80] py-5">
            consistency chain
          </h1>
          <div className="flex flex-col gap-1 text-center">
            <div
              className={`w-[18px] h-[18px] relative ${
                isEnrolled ? "block" : "hidden"
              }`}
            >
              <Image
                src="/images/bomb.gif"
                alt="bomb-gif"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <h1 className="text-[10px] text-white">Ongoing</h1>
          </div>
        </div>

        <div className="">
          {isEnrolled?.courses.map((course, index) => {
            return (
              <div className="eachWeek flex justify-between" key={index}>
                <div className="flex flex-col gap-2">
                  <h1 className="font-500 text-[10px] leading-[100%] tracking-0 text-[#E2E8FF]">
                    Week {index + 1}
                  </h1>
                  {!isEnrolled && (
                    <div className="w-[39px] h-[13px] py-[2px] px-[8px] rounded-[4px] border-[0.5px] bg-[#C6C6C61A] font-400 text-[8px] leading-[130%] tracking-0 text-[#D4C6C680]">
                      -N/A
                    </div>
                  )}

                  <div>
                    {course.progress === 100 && (
                      <div className="bg-[#05F60B1A] text-[#05F60B80] font-400 text-[8px] leading-[130%] tracking-0 rounded-2xl flex items-center justify-center gap-2 p-2">
                        <div className="text-[10px]">
                          <FaArrowRight />
                        </div>
                        <h1>Accomplished</h1>
                      </div>
                    )}
                    {course.progress < 100 && (
                      <div className="bg-[#DF30331A] text-[#DF303399] font-400 text-[8px] leading-[130%] tracking-0 rounded-2xl flex items-center justify-center gap-2 p-2">
                        <div className="text-[10px]">
                          <LuArrowDownLeft />
                        </div>
                        <h1>UnAccomplished</h1>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={{ width: `${course.progress}%` }}
                  className="h-[37px] rounded-[4px] border-[1px] border-[#E2E8FF1A]
             bg-gradient-to-b from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] p-[13.5px] text-left"
                >
                  {course.progress}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient-to-b from-[#040E16] to-[#174F7C] md:p-5 p-2 md:col-span-1">
        <div className="w-[99px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#92E182] text-center">
          Join cyberspace
        </div>
        <h1 className="font-400 text-md leading-[150%] tracking-0 text-[#E2E8FF80] text-center pt-[55px]">
          Join a team, learn from top minds, and contribute to the growth of the
          cyberspace and squad. Choose an existing cyberspace that aligns with
          your goals or create your own and build your dream team
        </h1>

        <div className="text-[#E2E8FFCC] w-[83px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-center mx-auto my-7 ">
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default ConsistencyChain;
