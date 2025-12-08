"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetch } from "@/app/_zustand/hooks/useFetch";
import datas from "@/app/datas/data.json";
import useEducation from "@/app/_zustand/hooks/useEducation";

export function SelectDemo() {
  const fetchDetail = useFetch();
  const eduInfo = useEducation();

  const { data, fetchData } = fetchDetail;
  const { handleSelectedEducation, selectedEducation } = eduInfo;
  React.useEffect(() => {
    fetchData(datas);
  }, []);

  console.log(selectedEducation);
  const educationTypeMapping = data?.educationTypes.map((education, index) => {
    return (
      <SelectItem
        value={education.title}
        key={index}
        className="cursor-pointer"
      >
        {education.title}
      </SelectItem>
    );
  });

  return (
    <Select onValueChange={handleSelectedEducation}>
      <SelectTrigger className=" w-[230px] h-[78px] rounded-[10px] border-1 border-[#E2E8FF1A] bg-gradient-to-b fom-[#7692FF00] to-[#7A96FF0A] text-[#E2E8FF] cursor-pointer">
        <SelectValue placeholder="Select a Education type" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>{educationTypeMapping}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
