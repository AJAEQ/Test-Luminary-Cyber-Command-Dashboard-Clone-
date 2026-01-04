"use client";
import Image from "next/image";
import useModal from "@/app/_zustand/hooks/useModal";
import useEducation from "@/app/_zustand/hooks/useEducation";
import { FaArrowRight } from "react-icons/fa";
import { LuArrowDownLeft } from "react-icons/lu";
import SecondNavBar from "../secondnavbarcomponent/secondNav";
const ConsistencyChain = () => {
  const openModal = useModal();
  const { handleOpen } = openModal;

  const eduInfo = useEducation();
  const { isEnrolled } = eduInfo;

  return (
    <div className="flex flex-col gap-[20px]">
      <SecondNavBar />

      <div className="w-full flex md:flex-row flex-col items-start md:gap-[20px] gap-7 md:p-0 p-2 ">
        <div className="border-1 border-[#E2E8FF0A]  rounded-[14px] md:w-[50%] w-full md:h-[539px] h-[400px]  relative   ">
          <Image
            src="/images/hero.png"
            alt="consistencyChain-image"
            className="rounded-[14px] md:object-left-bottom object-center object-cover"
            fill
          />
        </div>

        <div className="md:w-[50%] w-full md:h-[539px] h-auto flex md:flex-row flex-col gap-[15px] ">
          <div className=" md:w-[50%]  rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] backdrop-blur-sm md:p-5 p-2 ">
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <button
                  className=" rounded w-[108px] h-[31px] border-1 border-[#E2E8FF0D] font-500 text-[10px] leading-[150%] tracking-0 text-[#E18682] cursor-pointer"
                  onClick={handleOpen}
                >
                  Consistency chain
                </button>
                <div className="border-1 border-[#E2E8FF0D] cursor-pointer rounded-xl p-1 flex items-center gap-2">
                  {isEnrolled && <h1 className="text-white text-[10px]">1</h1>}
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
              <div
                className="border-1 border-[#E2E8FF0A]  rounded-[14px] w-[35px] h-[31px]  relative  cursor-pointer "
                onClick={handleOpen}
              >
                <Image
                  src="/images/consistency.png"
                  alt="consistencyChain-image"
                  className="rounded-[14px] object-center object-cover"
                  fill
                />
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
                className="p-[6px] w-[100px] text-center rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-gradient-to-b from-[#E2E8FF0A] to-[#21B9E80A] 
          font-500 text-[10px] leading-[100%] tracking-0 text-[#E0E4E7]"
              >
                {isEnrolled?.id ?? "N/A"}
              </div>
            </div>
            {!isEnrolled ? (
              <div className="flex items-center gap-2">
                <div className="w-[153px] h-[5px] rounded-[5px] bg-[#2AE0DB1A]"></div>
                <h1 className="font-500 text-[8px] leading-[150%] tracking-[-2%]  text-center text-[#E2E8FF80]">
                  N/A
                </h1>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-full h-[5px] rounded-[5px] bg-[#2AE0DB1A]">
                  <div className="bg-[#5C82EA] w-[100px] h-[5px]"></div>
                </div>
                <h1 className="font-500 text-[8px] leading-[150%] tracking-[-2%]  text-center text-[#E2E8FF80]">
                  15wks
                </h1>
              </div>
            )}

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
                {isEnrolled && (
                  <h1 className="text-[10px] text-white">Ongoing</h1>
                )}
              </div>
            </div>

         {isEnrolled &&    <div className="w-full md:h-[260px] md:overflow-auto course-progress flex flex-col gap-5 ">
              {isEnrolled?.courses.map((course, index) => {
                return (
                  <div
                    className="eachWeek flex md:justify-start justify-between gap-15"
                    key={index}
                  >
                    <div className="flex flex-col gap-1">
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
                          <div className="bg-[#05F60B1A] text-[#05F60B80] font-400 text-[8px] leading-[130%] tracking-0 rounded-2xl flex items-center justify-center gap-2 p-1">
                            <div className="text-[10px]">
                              <FaArrowRight />
                            </div>
                            <h1>Accomplished</h1>
                          </div>
                        )}
                        {course.progress < 100 && (
                          <div className="bg-[#DF30331A] text-[#DF303399] font-400 text-[8px] leading-[130%] tracking-0 rounded-2xl flex items-center justify-center gap-2 p-1">
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
                      className="h-[10px] rounded-[4px] border-[1px] border-[#E2E8FF1A]
             bg-gradient-to-b from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] py-[13.5px] px-2 text-left"
                    >
                      {course.progress}%
                    </div>
                  </div>
                );
              })}
            </div>}

            {!isEnrolled && (
              <div className="flex flex-col gap-1 ">
                <div className="eachWeek flex md:gap-[54px] md:justify-start justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-[10px] leading-[100%] tracking-0 text-[#E2E8FF]">
                      Week 1
                    </h1>

                    <div className="w-[39px] h-[13px] py-[2px] px-[8px] rounded-[4px] border-[0.5px] bg-[#C6C6C61A] font-400 text-[8px] leading-[130%] tracking-0 text-[#D4C6C680]">
                      -N/A
                    </div>
                  </div>
                  <div
                    className="h-[37px] rounded-[4px] shadow 
             bg-gradient-to-l from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] p-[11.5px] text-left"
                  >
                    0%
                  </div>
                </div>
                <div className="eachWeek flex md:gap-[54px] md:justify-start justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-[10px] leading-[100%] tracking-0 text-[#E2E8FF]">
                      Week 1
                    </h1>

                    <div className="w-[39px] h-[13px] py-[2px] px-[8px] rounded-[4px] border-[0.5px] bg-[#C6C6C61A] font-400 text-[8px] leading-[130%] tracking-0 text-[#D4C6C680]">
                      -N/A
                    </div>
                  </div>
                  <div
                    className="h-[37px] rounded-[4px] shadow 
             bg-gradient-to-l from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] p-[11.5px] text-left"
                  >
                    0%
                  </div>
                </div>
                <div className="eachWeek flex md:gap-[54px] md:justify-start justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-[10px] leading-[100%] tracking-0 text-[#E2E8FF]">
                      Week 1
                    </h1>

                    <div className="w-[39px] h-[13px] py-[2px] px-[8px] rounded-[4px] border-[0.5px] bg-[#C6C6C61A] font-400 text-[8px] leading-[130%] tracking-0 text-[#D4C6C680]">
                      -N/A
                    </div>
                  </div>
                  <div
                    className="h-[37px] rounded-[4px] shadow 
             bg-gradient-to-l from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] p-[11.5px] text-left"
                  >
                    0%
                  </div>
                </div>
                <div className="eachWeek flex md:gap-[54px] md:justify-start justify-between">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-500 text-[10px] leading-[100%] tracking-0 text-[#E2E8FF]">
                      Week 1
                    </h1>

                    <div className="w-[39px] h-[13px] py-[2px] px-[8px] rounded-[4px] border-[0.5px] bg-[#C6C6C61A] font-400 text-[8px] leading-[130%] tracking-0 text-[#D4C6C680]">
                      -N/A
                    </div>
                  </div>
                  <div
                    className="h-[37px] rounded-[4px] shadow 
             bg-gradient-to-l from-[#21B9E8CC] to-[#12688200]
             font-[400] text-[12px] leading-[130%] tracking-[0] text-[#21B9E8] p-[11.5px] text-left"
                  >
                    0%
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:w-[50%] rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] backdrop-blur-sm md:p-5 p-2 ">
            <div className="w-[99px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#92E182] text-center">
              Join cyberspace
            </div>
            <h1 className="font-400  md:text-sm text-base leading-[150%] tracking-0 text-[#E2E8FF80] text-center pt-[125px]">
              Join a team, learn from top minds, and contribute to the growth of
              the cyberspace and squad. Choose an existing cyberspace that
              aligns with your goals or create your own and build your dream
              team
            </h1>

            <div className="text-[#E2E8FFCC] w-[83px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-center mx-auto my-7 ">
              Coming soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyChain;
