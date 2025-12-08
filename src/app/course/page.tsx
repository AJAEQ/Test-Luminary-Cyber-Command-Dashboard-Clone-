"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { GiCycle } from "react-icons/gi";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdFiberManualRecord } from "react-icons/md";
import { useFetch } from "../_zustand/hooks/useFetch";
import { useEffect } from "react";
import datas from "@/app/datas/data.json";
import useEducation from "../_zustand/hooks/useEducation";
import { Bounce, ToastContainer } from "react-toastify";

const CoursePage = () => {
  const fetchingDetail = useFetch();
  const eduInfo = useEducation();
  const { fetchData, data } = fetchingDetail;
  const {
    EducationObj,
    handleStartDate,
    startDate,
    clickedBtnIndexClicked,
    handleIsEnroll,
    registerEnrollButtons,
  } = eduInfo;
  useEffect(() => {
    fetchData(datas);
  }, []);

  const date = startDate?.toISOString().split("T")[0];

  const educationFilter =
    EducationObj && EducationObj.selectedEducation
      ? data?.educationTypes.filter(
          (courses) =>
            courses.title.toLowerCase() ===
            EducationObj.selectedEducation.toLowerCase()
        )
      : data?.educationTypes;

  const coursesMapping = educationFilter?.map((education, index) => {
    const totalProgress: number =
      education.courses.reduce((acc, curr) => acc + Number(curr.progress), 0) /
      education.courses.length;

    return (
      <div key={index}>
        <div className="w-full md:h-[1000px] bg-gradient-to-br from-[#1d78a7] to-[#061222] relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-2 text-white font-medium md:text-[17px] text-[13px] tracking-widest">
            <h1>AJAEQ</h1>
            <div className="relative w-[35px] h-[36px]">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                className="object-cover object-left"
              />
            </div>
            <h1>LUMINARY</h1>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="whitespace-nowrap font-black text-[12vw] leading-none tracking-[2vw] text-[#2b829c]/30 pointer-events-none select-none">
              {education.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-5 w-full h-full relative items-center">
            <div className="md:col-span-3 relative w-full h-full">
              <div className="md:absolute static top-[220px] -left-32 md:w-[500px] md:h-[500px] w-[300px] h-[300px]">
                <Image
                  src="/images/padlock.png"
                  alt="Padlock"
                  fill
                  className="object-cover object-center opacity-70"
                />
              </div>

              <div className="md:absolute static top-[80px] left-[190px] md:w-[750px] md:h-[750px] w-[400px] h-[400px]">
                <Image
                  src={education.thumbnail}
                  alt="AI"
                  fill
                  className="object-cover object-center opacity-70 z-20"
                />
              </div>

              <div className="absolute bottom-0 left-56 z-30 font-black uppercase tracking-tighter">
                <h1 className="p-0 text-[3.5vw] bg-gradient-to-b from-[#A4E1F8] to-[#0C5062] bg-clip-text text-transparent drop-shadow-lg">
                  {education.title}
                </h1>
                <h1 className="flex items-center gap-4">
                  <span className="text-[2vw] bg-gradient-to-b from-[#A4E1F8] to-[#0C5062] bg-clip-text text-transparent drop-shadow-lg">
                    Essentials
                  </span>
                  <span className="text-[1.8vw] font-black bg-gradient-to-b from-[#FFAC33] to-[#C18D40] bg-clip-text text-transparent px-2 py-1">
                    {education.id}
                  </span>
                </h1>
              </div>
            </div>

            <div className="md:col-span-2 md:pr-20 flex flex-col gap-4 ">
              {education.courses.map((course, index) => {
                return (
                  <div
                    className="flex items-center justify-between bg-gradient-to-b from-[#060E1B] to-[#5CC8F1] px-3 py-2 rounded"
                    key={index}
                  >
                    <div className="relative w-[66px] h-[66px]">
                      <Image
                        src={course.image}
                        alt="List Image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex-1 px-2">
                      <h1 className="font-semibold text-[#62D2F9] text-[14px] leading-[100%]">
                        {course.title}
                      </h1>
                      <h3 className="font-normal text-[8px] text-[#2BAED5] tracking-widest pt-1">
                        {course.difficulty}
                      </h3>
                    </div>

                    <div className="flex  items-center gap-1">
                      <span className="text-[#63FDFD] font-bold text-[11px]">
                        {course.estimatedTime}
                      </span>
                      <button
                        className={`w-[138px] text-[#63FDFD] font-bold text-[11px] px-4 py-1 rounded cursor-pointer ${
                          date && index === Number(clickedBtnIndexClicked)
                            ? "bg-gradient-to-l from-[#174F7C00] to-[#62D2F9]"
                            : "bg-gradient-to-l from-[#62D2F9] to-[#174F7C00] opacity-25"
                        } `}
                        onClick={() => handleStartDate(index.toString())}
                      >
                        {date && index === Number(clickedBtnIndexClicked)
                          ? "COMPLETED"
                          : "START"}
                      </button>
                    </div>
                  </div>
                );
              })}
              {/*  */}
            </div>
          </div>
        </div>
        <div className="ending bg-gradient-to-b from-[#040E1633] to-[#174F7C33] w-full border-t-0 border-r-[1.06px] border-b-[1.06px] border-l-[1.06px] border-solid border-[#CBD3E70D] md:p-5 p-2 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-7">
          <div className="flex flex-col md:gap-3 gap-7 md:w-auto w-full">
            <div className="flex gap-5 items-center">
              <button className="bg-[#990082] font-400  leading-[100%] text-[17.99px] tracking-[0%] text-[#8f6789] p-2 rounded">
                SCOUT
              </button>
              <h1 className="font-400  leading-[100%] text-[17.99px] tracking-[0%] text-[#21B9E8]">
                <span>21 DAYS </span>
                <span>|</span>
                <span> {education.courses.length} NODES</span>
              </h1>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-[100%] rounded-xl bg-[#2AE0DB1A]">
                <div
                  className="bg-gradient-to-b from-[#2AE0DB] to-[#3D6CEB] rounded-xl h-[16px]"
                  style={{ width: `${Math.round(totalProgress)}%` }}
                ></div>
              </div>
              <h1 className="text-white">
                {parseInt(totalProgress.toString())}%
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <div className="text-[#21B9E8] text-2xl">
              <GiCycle />
            </div>

            <div className="flex items-center gap-2 md:w-[184px] md:h-[44.5px] w-full border-[1.06px] border-[#FFFFFF0D] bg-gradient to-b from-[#040E1699] to-[#174F7C99] py-[11.66px] px-[46.62px] text-[25px] text-[#FFAC33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="bg-[#040E16] rounded-full p-3 text-[#DF1010]">
              <MdFiberManualRecord />
            </div>
          </div>
          <div
            className="isEnroll bg-gradient-to-b from-[#F6743E] to-[#D42525] font-600  leading-[19.07px] text-[12.72px] tracking-[0%]  text-[#E2E8FF] text-center px-5 py-2 rounded cursor-pointer w-full md:w-[200px]"
            onClick={() => handleIsEnroll(education)}
          >
            ENROLL
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    if (!educationFilter) return;
    const els = Array.from(
      document.querySelectorAll(".isEnroll")
    ) as HTMLDivElement[];
    registerEnrollButtons(els);
  }, []);
  return (
    <div className="w-full md:px-10 px-2">
      <div className="flex items-center gap-5 text-white p-4">
        <button className="text-2xl">
          <IoMdArrowRoundBack />
        </button>
        <span className="font-semibold text-sm leading-[120%] tracking-normal">
          Cyber Command
        </span>
      </div>
      <div className="flex flex-col md:gap-10 gap-28">{coursesMapping}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default CoursePage;
