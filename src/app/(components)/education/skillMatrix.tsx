import { FaGraduationCap } from "react-icons/fa6";
import { educationType } from "@/app/_type/type";
import { FaCircleNotch } from "react-icons/fa";
import { SiHeadphonezone } from "react-icons/si";
import DoughnutChart from "@/app/_chart/DoughnutChart";
import useEducation from "@/app/_zustand/hooks/useEducation";
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

  const eduInfo = useEducation();
  const { isEnrolled } = eduInfo;
  const completedCount =
    isEnrolled?.courses.filter((course) => Number(course.progress) >= 100)
      .length ?? 0;
  const courseLength = isEnrolled?.courses.length;

  console.log(completedCount);
  console.log(courseLength);
  const educationMapping = educationList.map((education, index) => {
    const Icon = education.icon;
    return (
      <div className="flex gap-[14px] items-center " key={index}>
        <div className="icon w-[50px] h-[50px] rounded-[30px] p-[10px] border-1 border-[#E2E8FF0D] bg-[#101A21] text-[#E2E8FF] flex justify-center items-center">
          <Icon />
        </div>
        <div>
          <h1 className="font-400 text-xs tracking-0 text-[#A7A7A7] ">
            {education.name}
          </h1>
          <div className="w-[42px] h-[21px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#c7b975] text-center my-1">
            0/0
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[25px] gap-10  ">
      <div className="  md:p-5 p-2 flex flex-col md:gap-[10px] gap-7">
        <div className="  rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient-to-b from-[#040E16] to-[#174F7C] md:p-5 p-1">
          <div className="w-[99px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#B3B3B3] text-center">
            Cluster skill matrix
          </div>
          <div className="md:p-5 p-1 grid grid-cols-2 gap-4 items-center">
            {isEnrolled?.courses.map((course) => (
              <div key={course.title} className="w-full">
                <div className="relative w-full h-[37px] rounded-[4px] border-[1px] border-[#E2E8FF1A] overflow-hiden">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-[#21B9E8CC] to-[#12688200] px-3"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                  <h1 className="flex items-center justify-between md:p-3 md:text-[12px] text-[8px] p-0">
                    <span className="text-[12px] font-[400] text-[#21B9E8]">
                      {course.progress}%
                    </span>
                    <span className="text-[12px] font-[400] text-[#21B9E8]">
                      {course.title}
                    </span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient-to-b from-[#040E16] to-[#174F7C] p-5">
          <div className="w-[113px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#c7b975] text-center">
            Education progress
          </div>
          <div className="grid grid-cols-2 gap-[15px] my-10">
            {educationMapping}
          </div>
        </div>
        <div className="rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient-to-b from-[#040E16] to-[#174F7C] p-5 flex items-center gap-5">
          <div className="relative">
            <div className="w-[50px] h-[50px] bg-gradient to-b from[#101A21] to-[#21B9E800]  text-[55px] text-white">
              <FaCircleNotch />
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
              {isEnrolled?.title}
            </h1>
            <div className="w-[42px] h-[21px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-white text-center my-1">
              {completedCount != null && courseLength != null
                ? `${completedCount} / ${courseLength}`
                : "N/A"}
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5  rounded-[14px] border-1 border-[#E2E8FF0A] bg-gradient to-b from[#040E16] to-[#174F7C]">
        <div className="flex justify-between">
          <div className="w-[133px] h-[31px] rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80] py-[8px] px-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#8282E1] text-center">
            Career skill progression
          </div>
          <div className="text-[#21B9E8] text-[20px] w-[51px] h-[51px] rounded-[1000000px] border-1 border-[#E2E8FF1A] bg-[#040E16] p-[12px]">
            <SiHeadphonezone />
          </div>
        </div>
        <div className="w-[350px] mx-auto">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default SkillMatrix;
