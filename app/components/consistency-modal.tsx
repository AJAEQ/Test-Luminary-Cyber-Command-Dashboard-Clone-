"use client";

import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

export default function ConsistencyModal({ open, onClose }: ConsistencyModalProps) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [selectedEducationType, setSelectedEducationType] = useState(educationOptions[0]);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [weeklyTarget, setWeeklyTarget] = useState(1);
  const [startDate, setStartDate] = useState("");
  const educationDropdownRef = useRef<HTMLDivElement>(null);
  const educationButtonRef = useRef<HTMLButtonElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
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

  const formattedDate = startDate ? dateFormatter.format(new Date(startDate)) : "— —, 2025";
  const isConfirmDisabled = !isEnrolled || !startDate || weeklyTarget <= 0;

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

  const handleEducationKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setEducationDropdownOpen(true);
    }

    if (event.key === "Escape") {
      setEducationDropdownOpen(false);
    }
  };

  const handleOpenDatePicker = () => {
    if (!isEnrolled || !dateInputRef.current) return;

    if (typeof dateInputRef.current.showPicker === "function") {
      dateInputRef.current.showPicker();
      return;
    }

    dateInputRef.current.focus();
    dateInputRef.current.click();
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
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-[20px] text-[#E2E8FF] font-semibold">Consistency chain</h3>
            <p className="mt-1 text-[16px] text-[#E2E8FF80]">Setup your consistency chain</p>
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
            <p className="text-[16px] text-[#E2E8FFCC] font-semibold">Enroll in a cluster</p>
            <button
              className="mt-2 text-[16px] font-medium text-[#12CCFC] underline decoration-dotted underline-offset-4"
              onClick={handleEnrollClick}
            >
              Enroll to setup consistency chain
            </button>
          </div>

          <div className="space-y-6 rounded-[14px] bg-[#050f1f] p-4 border border-[#E2E8FF1A] sm:p-5">
            <div>
              <p className="text-[16px] font-semibold text-[#E2E8FFCC]">Education type</p>
              <p className="text-[16px] text-[#E2E8FF99]">
                Select the education type and number you can complete weekly
              </p>
              <div
                className={`mt-4 flex flex-wrap items-center gap-4 text-white/20 ${
                  isEnrolled ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="relative w-full sm:w-[230px]" ref={educationDropdownRef}>
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
                    <span className="text-[10px] text-[#E2E8FF] uppercase tracking-[0.2em]">
                      Education type
                    </span>
                    <div className="mt-2 flex items-center justify-between text-[14px] text-[#E2E8FF] font-semibold">
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
                            option === selectedEducationType ? "text-[#12CCFC]" : ""
                          }`}
                          onClick={() => handleSelectEducation(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center ml-0 sm:ml-5 gap-5">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xl text-white/60 disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={!isEnrolled || weeklyTarget <= 1}
                    onClick={() => adjustWeeklyTarget(-1)}
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-white">{weeklyTarget}</span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xl text-white disabled:cursor-not-allowed disabled:opacity-40"
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
                <p className="text-[16px] font-semibold text-[#E2E8FFCC]">Select date</p>
                <p className="text-[16px] text-[#E2E8FF99]">Pick a date you want to start</p>
              </div>
              <div className="flex xs:flex-row items-start xs:items-center gap-3 w-full sm:w-auto">
                <label className="flex w-full flex-col gap-4 rounded-2xl border border-[#E2E8FF1A] px-4 py-3 text-sm text-white/80 xs:flex-row xs:items-center xs:justify-between xs:gap-3">
                  <button
                    type="button"
                    onClick={handleOpenDatePicker}
                    disabled={!isEnrolled}
                    className="flex items-center gap-2 rounded-lg px-1 py-0.5 text-left text-[#B3B3B3] text-base transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#12CCFC] disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap"
                  >
                    <CalendarIcon className="w-[15px] h-[15px]" />
                    <span className="text-[#B3B3B3] text-[10px]">{startDate ? formattedDate : "--- --,2025"}</span>
                  </button>
                  
                </label>
              </div>
            </div>

            <p className="text-[16px] font-medium text-[#E2E8FF99]">
              Estimated time of completion: <span className="font-medium text-[#E2E8FF]">10 weeks</span>
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
