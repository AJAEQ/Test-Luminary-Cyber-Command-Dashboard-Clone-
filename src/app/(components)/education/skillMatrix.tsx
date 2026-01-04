import { FaGraduationCap } from "react-icons/fa6";
import { educationType } from "@/app/_type/type";
import DoughnutChart from "@/app/_chart/DoughnutChart";
import useEducation from "@/app/_zustand/hooks/useEducation";
import Image from "next/image";
const SkillMatrix = () => {
  const educationList: educationType[] = [
    {
      icon: FaGraduationCap,
      name: "completed nodes",
    },
    {
      icon: FaGraduationCap,
      name: "completed section",
    },
    {
      icon: FaGraduationCap,
      name: "completed lessons",
    },
    {
      icon: FaGraduationCap,
      name: "completed excerscise",
    },
  ];

  const arr = Array.from({ length: 8 }, (curr, index) => {
    return (
      <div
        className="w-[47px] h-[37px] bg-[#0a2f3f] rounded-[4px] text-center text-[#21B9E8] font-400 text-xs p-[10px] "
        key={index}
      >
        0%
      </div>
    );
  });
  const arr2 = Array.from({ length: 8 }, (curr, index) => {
    return (
      <div
        className="w-[47px] h-[37px] bg-[#0a2f3f] rounded-[4px] text-center text-[#21B9E8] font-400 text-xs p-[10px] "
        key={index}
      >
        0%
      </div>
    );
  });

  const eduInfo = useEducation();
  const { isEnrolled } = eduInfo;
  const completedCount =
    isEnrolled?.courses.filter((course) => Number(course.progress) >= 100)
      .length ?? 0;
  const courseLength = isEnrolled?.courses.length;

  const educationMapping = educationList.map((education, index) => {
    return (
      <div className="flex gap-[14px] items-center " key={index}>
        <div className="icon w-[50px] h-[50px]  flex justify-center items-center relative">
          <Image src="/images/cap.png" alt="cap" fill className="" />
        </div>
        <div>
          <h1 className="font-400 text-xs tracking-0 text-[#A7A7A7] ">
            {education.name}
          </h1>
          <div className="w-[42px] h-[21px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#101A21] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-white text-center my-1">
            0/0
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex md:flex-row flex-col gap-10 w-full">
      <div className="  md:p-0 p-2 flex flex-col md:gap-[10px] gap-7  md:w-[50%] h-[880px]">
        <div className="  rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] py-2 px-1 flex flex-col gap-5  h-[446px]">
          <div className="w-[109px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[5px] font-500 text-[10px] leading-[150%] tracking-0 text-[#B3B3B3] text-center">
            Cluster skill matrix
          </div>
          <div className="md:p-5 p-1 grid md:grid-cols-2 grid-col-1 gap-4 items-center">
            {isEnrolled ? (
              isEnrolled?.courses.map((course) => (
                <div key={course.title} className="w-full">
                  <div className="relative w-full h-[37px] rounded-[4px] border-[1px] border-[#E2E8FF1A] overflow-hiden">
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-[#21B9E8CC] to-[#12688200] px-3"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                    <h1 className="flex items-center justify-between md:p-3 md:text-[12px] text-[8px] p-1">
                      <span className="text-[12px] font-[400] text-[#21B9E8]">
                        {course.progress}%
                      </span>
                      <span className="text-[12px] font-[400] text-[#21B9E8]">
                        {course.title}
                      </span>
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex  items-center justify-between ">
                <div className="flex flex-col gap-[4px]">{arr}</div>
                <div className="h-[260px] border-l border-[#FFFFFF0D]"></div>

                <div className="flex flex-col gap-[4px]">{arr2}</div>
              </div>
            )}
          </div>
        </div>
        <div className=" rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] md:p-5 p-1 h-[294px]">
          <div className="w-[113px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#c7b975] text-center">
            Education progress
          </div>
          <div className="grid grid-cols-2 gap-[15px] my-10">
            {educationMapping}
          </div>
        </div>
        <div className="rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] p-5 flex items-center gap-5 h-[122px]">
          <div className="relative">
            <div className="icon w-[50px] h-[50px]  flex justify-center items-center relative">
              <Image src="/images/circleDown.png" alt="cap" fill className="" />
            </div>
            <div className="absolute top-4 left-4 text-white text-[10px]">
              0%
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-400 text-xs tracking-0 text-[#A7A7A7] ">
              Skill Chain
            </h1>
            <h1 className="font-500 text-md tracking-0 text-[#E2E8FF] ">
              {isEnrolled?.title ?? "Offensive operations"}
            </h1>
            <div className="w-[42px] h-[21px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-white text-center my-1">
              {completedCount != null && courseLength != null
                ? `${completedCount} / ${courseLength}`
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] p-2">
        <div className=" w-full md:h-[878px] h-auto md:p-5 p-2  rounded-[14px] border-1 border-[#E2E8FF0A] bg-[#040E16] ">
          <div className="flex justify-between">
            <div className="w-[133px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#8282E1] text-center">
              Career skill progression
            </div>
            <div className="icon w-[50px] h-[50px]  flex justify-center items-center relative">
              <Image src="/images/headset.png" alt="cap" fill className="" />
            </div>
          </div>
          {/* <div> */}
            <DoughnutChart />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SkillMatrix;
