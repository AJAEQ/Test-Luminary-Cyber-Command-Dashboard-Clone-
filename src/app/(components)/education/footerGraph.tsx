import { Calendar22 } from "@/app/(components)/Date/date";
import Image from "next/image";

const FooterGraph = () => {
  const footerArr = Array.from({ length: 30 }, (_, ind) => {
    return (
      <div
        key={ind}
        className="flex flex-col gap-3 items-center justify-center"
      >
        <div className="w-[0.5px] h-[150px] bg-[#E2E8FF1A]" key={ind}></div>
        <div className="text-[12px] font-500 text-[#E2E8FF8C] text-center">
          {ind + 1}
        </div>
      </div>
    );
  });
  return (
    <footer className="w-full h-[349px] md:p-0 p-2 ">
      <div className="rounded-[14px] border border-[#E2E8FF0D] bg-[#21B9E800] mt-[10px]  md:p-5 p-2  flex flex-col gap-[90px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="w-[72px] h-[31px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800]  font-500 text-[10px] leading-[150%] tracking-0 text-[#c7b975] flex justify-center items-center">
              Study time
            </div>
            {/* <div> */}
            <Calendar22 />
            {/* </div> */}
          </div>
          <div className="w-[102px] h-[31px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-white  text-center my-1 flex gap-2 items-center justify-center">
            <Image src="/images/reset.png" alt="reset" width={11} height={14} />
            <p>Reset</p>
          </div>
        </div>
        {/* <div className="w-full h-[300px]">
        <BarChart />
      </div> */}

        <div className="relative">
          <div className="flex md:justify-between w-full md:overflow-hidden  md:gap-0 gap-[40px] overflow-auto">{footerArr}</div>
          <div className="absolute w-full h-[36px]  bg-gradient-to-t from-[#21B9E800] to-[#21B9E861] bottom-[30px] opacity-65"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterGraph;
