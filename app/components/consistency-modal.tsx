"use client";

import {
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type ConsistencyModalProps = {
  open: boolean;
  onClose: () => void;
};

const educationOptions = ["Nodes", "Sections", "Lessons", "Exercises"];
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function ConsistencyModal({
  open,
  onClose,
}: ConsistencyModalProps) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedEducationType, setSelectedEducationType] = useState(
    educationOptions[0]
  );
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [weeklyTarget, setWeeklyTarget] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const educationDropdownRef = useRef<HTMLDivElement>(null);
  const educationButtonRef = useRef<HTMLButtonElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleEnrollClick = () => {
    setIsEnrolled(true);
  };

  const handleConfirm = () => {
    if (!isEnrolled || !startDate || weeklyTarget <= 0) return;

    router.push("/cyber");
    onClose();
  };

  const handleSelectEducation = (option: string) => {
    setSelectedEducationType(option);
    setEducationDropdownOpen(false);
    educationButtonRef.current?.focus();
  };

  const adjustWeeklyTarget = (delta: number) => {
    setWeeklyTarget((prev) => Math.max(1, prev + delta));
  };

  const formattedDate = startDate
    ? dateFormatter.format(new Date(`${startDate}T00:00:00`))
    : "— —, 2025";
  const isConfirmDisabled = !isEnrolled || !startDate || weeklyTarget <= 0;
  const weekdayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const formatDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayKey = formatDateKey(new Date());

  const calendarDays = useMemo(() => {
    const monthStart = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth(),
      1
    );
    const monthEnd = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() + 1,
      0
    );
    const leadingEmpty = monthStart.getDay();
    const totalCells =
      Math.ceil((leadingEmpty + monthEnd.getDate()) / 7) * 7;

    return Array.from({ length: totalCells }, (_, index) => {
      const dayNumber = index - leadingEmpty + 1;
      if (dayNumber < 1 || dayNumber > monthEnd.getDate()) {
        return null;
      }
      return new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth(),
        dayNumber
      );
    });
  }, [visibleMonth]);

  useEffect(() => {
    if (!educationDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        educationDropdownRef.current &&
        !educationDropdownRef.current.contains(event.target as Node)
      ) {
        setEducationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [educationDropdownOpen]);

  useEffect(() => {
    if (!isDatePickerOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setIsDatePickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDatePickerOpen]);

  const handleEducationKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (
      event.key === "ArrowDown" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setEducationDropdownOpen(true);
    }

    if (event.key === "Escape") {
      setEducationDropdownOpen(false);
    }
  };

  const handleOpenDatePicker = () => {
    if (!isEnrolled) return;

    setIsDatePickerOpen((prev) => {
      if (!prev) {
        setVisibleMonth(
          startDate ? new Date(`${startDate}T00:00:00`) : new Date()
        );
      }
      return !prev;
    });
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    setVisibleMonth((prev) => {
      const updated = new Date(prev);
      updated.setMonth(
        prev.getMonth() + (direction === "next" ? 1 : -1)
      );
      return updated;
    });
  };

  const handleDaySelect = (date: Date) => {
    const selectedKey = formatDateKey(date);
    setStartDate(selectedKey);
    setIsDatePickerOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040E16]/30 px-4 py-8 sm:py-10 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[731px] max-h-[90vh] overflow-y-auto rounded-[30px] border border-[#FFFFFF14] bg-[#040b14] p-6 sm:p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div>
            <h3 className="text-[16px] sm:text-[20px] text-[#E2E8FF] font-semibold">
              Consistency chain
            </h3>
            <p className="mt-1 text-sm sm:text-[16px] text-[#E2E8FF80]">
              Setup your consistency chain
            </p>
          </div>
          <button
            aria-label="Close modal"
            className="rounded-full p-2 text-lg text-white/60 transition hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-[14px] bg-[#071325] p-4 sm:p-5">
            <p className="text-sm sm:text-[16px] text-[#E2E8FFCC] font-semibold">
              Enroll in a cluster
            </p>
            <button
              className="mt-2 text-sm sm:text-[16px] font-medium text-[#12CCFC] underline decoration-dotted underline-offset-4"
              onClick={handleEnrollClick}
            >
              Enroll to setup consistency chain
            </button>
          </div>

          <div className="space-y-6 rounded-[14px] bg-[#050f1f] p-4 border border-[#E2E8FF1A] sm:p-5">
            <div>
              <p className="text-sm sm:text-[16px] font-semibold text-[#E2E8FFCC]">
                Education type
              </p>
              <p className="text-xs sm:text-[16px] text-[#E2E8FF99]">
                Select the education type and number you can complete weekly
              </p>
              <div
                className={`mt-4 flex flex-wrap items-center gap-4 text-white/20 ${
                  isEnrolled ? "opacity-100" : "opacity-40"
                }`}
              >
                <div
                  className="relative w-full sm:w-[230px]"
                  ref={educationDropdownRef}
                >
                  <button
                    type="button"
                    disabled={!isEnrolled}
                    ref={educationButtonRef}
                    aria-expanded={educationDropdownOpen}
                    aria-haspopup="listbox"
                    aria-controls="education-type-dropdown"
                    className="flex w-full flex-col rounded-[10px] border border-[#E2E8FF1A] bg-[#071528] p-3 text-left focus-visible:ring-2 focus-visible:ring-[#12CCFC]"
                    onClick={() => setEducationDropdownOpen((prev) => !prev)}
                    onKeyDown={handleEducationKeyDown}
                  >
                    <span className="text-[9px] sm:text-[10px] text-[#E2E8FF] uppercase tracking-[0.2em]">
                      Education type
                    </span>
                    <div className="mt-2 flex items-center justify-between text-[12px] sm:text-[14px] text-[#E2E8FF] font-semibold">
                      {selectedEducationType}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          educationDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {educationDropdownOpen && isEnrolled && (
                    <div
                      id="education-type-dropdown"
                      role="listbox"
                      aria-label="Select education type"
                      className="absolute z-10 mt-2 w-full rounded-lg border border-[#E2E8FF1A] bg-[#0A182B] shadow-lg"
                    >
                      {educationOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          role="option"
                          aria-selected={option === selectedEducationType}
                          className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 ${
                            option === selectedEducationType
                              ? "text-[#12CCFC]"
                              : ""
                          }`}
                          onClick={() => handleSelectEducation(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center ml-0 sm:ml-5 gap-4 sm:gap-5">
                  <button
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 text-lg sm:text-xl text-white/60 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!isEnrolled || weeklyTarget <= 1}
                    onClick={() => adjustWeeklyTarget(-1)}
                  >
                    −
                  </button>
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {weeklyTarget}
                  </span>
                  <button
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 text-lg sm:text-xl text-white disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!isEnrolled}
                    onClick={() => adjustWeeklyTarget(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-sm sm:text-[16px] font-semibold text-[#E2E8FFCC]">
                  Select date
                </p>
                <p className="text-xs sm:text-[16px] text-[#E2E8FF99]">
                  Pick a date you want to start
                </p>
              </div>
              <div className="flex xs:flex-row items-start xs:items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <label className="flex w-full flex-col gap-4 rounded-2xl border border-[#E2E8FF1A] px-4 py-3 text-sm text-white/80 xs:flex-row xs:items-center xs:justify-between xs:gap-3">
                    <button
                      type="button"
                      onClick={handleOpenDatePicker}
                      disabled={!isEnrolled}
                      className="flex items-center gap-2 rounded-lg px-1 py-0.5 text-left text-[#B3B3B3] text-sm sm:text-base transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#12CCFC] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap"
                    >
                      <CalendarIcon className="w-[15px] h-[15px]" />
                      <span className="text-[#B3B3B3] text-[10px] sm:text-xs">
                        {startDate ? formattedDate : "--- --,2025"}
                      </span>
                    </button>
                  </label>

                  {isDatePickerOpen && (
                    <div
                      ref={datePickerRef}
                      className="absolute right-0 z-20 mt-3 w-72 rounded-2xl border border-[#E2E8FF1A] bg-[#050f1f] p-4 shadow-2xl"
                    >
                      <div className="flex items-center justify-between text-sm font-semibold text-white/80">
                        <button
                          type="button"
                          onClick={() => handleMonthChange("prev")}
                          className="rounded-full border border-white/10 p-1 text-white/70 transition hover:bg-white/10"
                          aria-label="Previous month"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="text-white">
                          {visibleMonth.toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleMonthChange("next")}
                          className="rounded-full border border-white/10 p-1 text-white/70 transition hover:bg-white/10"
                          aria-label="Next month"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wide text-white/40">
                        {weekdayLabels.map((weekday) => (
                          <span key={weekday}>{weekday}</span>
                        ))}
                      </div>

                      <div className="mt-2 grid grid-cols-7 gap-1 text-sm">
                        {calendarDays.map((date, index) => {
                          if (!date) {
                            return <span key={`empty-${index}`} />;
                          }

                          const dateKey = formatDateKey(date);
                          const isSelected = dateKey === startDate;
                          const isToday = dateKey === todayKey;

                          return (
                            <button
                              key={dateKey}
                              type="button"
                              onClick={() => handleDaySelect(date)}
                              className={`h-8 w-8 rounded-full text-center transition ${
                                isSelected
                                  ? "bg-[#12CCFC] text-[#040b14]"
                                  : isToday
                                  ? "border border-[#12CCFC] text-white"
                                  : "text-white/80 hover:bg-white/10"
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-[16px] font-medium text-[#E2E8FF99]">
              Estimated time of completion:{" "}
              <span className="font-medium text-[#E2E8FF]">10 weeks</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="rounded-[5px] border border-white/10 bg-[#B3B3B30D] px-10 py-3 text-xs font-semibold text-[#B3B3B399] shadow-[0_10px_30px_rgba(17,28,46,0.6)] transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isConfirmDisabled}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
