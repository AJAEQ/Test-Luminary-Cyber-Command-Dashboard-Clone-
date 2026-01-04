"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  //   CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { SelectDemo } from "../select/select";
import { Calendar22 } from "@/app/(components)/Date/date";
import useModal from "@/app/_zustand/hooks/useModal";

import useEducation from "@/app/_zustand/hooks/useEducation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CardDemo() {
  const closeModal = useModal();
  const eduInfo = useEducation();
  const { handleClose } = closeModal;
  const { weekCount, handleIncre, handleDecre, handleEducationObj } = eduInfo;
  const router = useRouter();
  const handleSubmit = () => {
    handleEducationObj(router);
    handleClose();
  };

  const [enrollLink, setEnrollLink] = useState<boolean>(false);

  const handleErollLinkClick = () => {
    setEnrollLink(true);
  };
  return (
    <Card className="  ">
      <CardHeader className="md:p-5 p-2">
        <CardTitle className="flex justify-between items-start ">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold leading-[120%] text-[20px] text-[#E2E8FF]">
              Consistency chain
            </h1>
            <h3 className="font-semibold leading-[120%] text-[16px] text-[#E2E8FF80]">
              Setup your consistency chain
            </h3>
          </div>

          <button
            className="text-[#E2E8FFCC] text-[25px] cursor-pointer"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 md:p-5  p-2">
        <div className="md:w-[652px] md:h-[88px] w-full  bg-[#0D1C28B2] rounded-[14px] border border-[#ffffff20] md:p-5 p-2">
          <h1 className="font-semibold text-[20px] text-[#E2E8FF]">
            Enroll in a cluster
          </h1>

          <p className="font-medium text-[16px] text-[#12CCFC] underline py-2 cursor-pointer" onClick={handleErollLinkClick}>
            Enroll to setup consistency chain
          </p>
        </div>
        

        <div className={`md:w-[652px] md:h-[325px] w-full bg-[#0D1C28B2] rounded-[14px] border border-[#ffffff20] p-5 flex flex-col gap-5 ${enrollLink ? "pointer-events-auto" :"pointer-events-none"}`}>
          <div>
            <h1 className="font-semibold text-[20px] text-[#E2E8FF80]">
              Education type
            </h1>
            <p className="font-medium text-[16px] text-[#12CCFC] underline py-2">
              Select the education type and number you can complete weekly
            </p>
          </div>

          <div className="flex gap-[10px] items-center">
            <SelectDemo />

            <div className="w-[134px] h-[53px] flex justify-between items-center p-4 text-[#E2E8FF]  rounded-[10px]">
              <button
                className="w-[25px] h-[25px] flex items-center justify-center border border-[#E2E8FF1A] bg-gradient-to-b from-[#7692FF00] to-[#7A96FF0A] rounded-full opacity-50 cursor-pointer"
                onClick={handleDecre}
              >
                <FaMinus />
              </button>

              <div className="text-[16px]">{weekCount}</div>

              <button
                className="w-[25px] h-[25px] flex items-center justify-center border border-[#E2E8FF1A] bg-gradient-to-b from-[#7692FF00] to-[#7A96FF0A] rounded-full opacity-50 cursor-pointer"
                onClick={handleIncre}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-start pt-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[20px] text-[#E2E8FF]">
                Select date
              </h1>
              <h3 className="font-semibold text-[16px] text-[#E2E8FF80]">
                Pick a date you want to start
              </h3>
            </div>

            <Calendar22 />
          </div>

          <p className="text-[#E2E8FF80] pt-2">
            Estimated time of completion: 10 weeks
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            className="w-[174px] h-[40px] rounded-[5px] py-[11px] px-[44px] bg-[#B3B3B30D] text-[#B3B3B399] font-600  leading-[120%] text-xs tracking-0 text-center cursor-pointer "
            onClick={handleSubmit}
          >
            CONFIRM
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
