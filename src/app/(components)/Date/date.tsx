"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useEducation from "@/app/_zustand/hooks/useEducation";

export function Calendar22() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const eduInfo = useEducation();
  const { handleSelectedDate } = eduInfo;

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-[102px] justify-between font-normal text-white text-[10px] py-[8px] px-[10px] bg-[#0D171F] border-1 border-[#0D171F] text-center"
          >
            {date ? date.toLocaleDateString() : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0 bg-white"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              handleSelectedDate(date as unknown as Date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
