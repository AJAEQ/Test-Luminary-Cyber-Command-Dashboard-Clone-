import { Calendar22 } from "@/app/(components)/Date/date";
import { MdResetTv } from "react-icons/md";
import BarChart from "@/app/_chart/BarChart";

const FooterGraph = () => {
  return (
    <footer className="w-full rounded-[14px] border-1 bg-gradient-to-b from-[#040E16] to-[#174F7C] p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="w-[72px] h-[31px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-[#c7b975] text-center my-1">
            Study time
          </div>
          <div>
            <Calendar22 />
          </div>
        </div>
        <div className="w-[102px] h-[31px] rounded-[4px] border-[0.5px] border-[#E2E8FF0D] bg-[#21B9E800] p-[2px] font-500 text-[10px] leading-[150%] tracking-0 text-white  text-center my-1 flex gap-2 items-center justify-center">
          <MdResetTv />
          <p>Reset</p>
        </div>
      </div>
      <div className="w-full h-[300px]">
        <BarChart />
      </div>
    </footer>
  );
};

export default FooterGraph;
