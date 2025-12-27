"use client";
import { create } from "zustand";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { EducationType } from "@/app/_type/type";
interface EducationWeekCountType {
  weekCount: number;
  selectedEducation: string;
  selectedCompleteDate: Date;
  startDate: Date | null;
  clickedBtnIndexClicked: string;
  isEnrolled: EducationType | null;
  isWithdraw: string;

  // isEnrollContent: HTMLDivElement[];
  isStartClick: boolean | null;
  EducationObj: {
    weekCount: number | null;
    selectedEducation: string;
    selectedCompleteDate: Date | null;
  };
  handleIncre: () => void;
  handleDecre: () => void;
  handleSelectedEducation: (week: string) => void;
  handleSelectedDate: (date: Date) => void;
  handleEducationObj: (router: AppRouterInstance) => void;
  handleStartDate: (id: string) => void;
  // registerEnrollButtons: (elements: HTMLDivElement[]) => void;
  handleIsEnroll: (course: EducationType) => void;
}

const useEducation = create<EducationWeekCountType>((set, get) => {
  const isClient = typeof window !== "undefined";

  const initialWeekCount = Number(
    (isClient && localStorage.getItem("weekCount")) || 0
  );

  const initialSelectedEducation =
    (isClient && localStorage.getItem("selectedEducation")) || "";

  const initialSelectedCompleteDate =
    isClient && localStorage.getItem("selectedCompleteDate")
      ? new Date(localStorage.getItem("selectedCompleteDate")!)
      : new Date();

  const initialStartDate =
    isClient && localStorage.getItem("startDate")
      ? new Date(localStorage.getItem("startDate")!)
      : null;

  const initialClickedBtnIndexClicked =
    (isClient && localStorage.getItem("clickedBtnIndexClicked")) || "";

  const initialIsEnrolled =
    isClient && localStorage.getItem("isEnrolled")
      ? JSON.parse(localStorage.getItem("isEnrolled")!)
      : null;

  const initialEducationObj =
    isClient && localStorage.getItem("EducationObj")
      ? JSON.parse(localStorage.getItem("EducationObj")!)
      : {
          weekCount: null,
          selectedEducation: "",
          selectedCompleteDate: null,
        };

  const initialIsWithdraw =
    isClient && localStorage.getItem("isWithdraw")
      ? JSON.parse(localStorage.getItem("isWithdraw")!)
      : "ENROLL";

  return {
    weekCount: initialWeekCount,
    selectedEducation: initialSelectedEducation,
    selectedCompleteDate: initialSelectedCompleteDate,
    startDate: initialStartDate,
    clickedBtnIndexClicked: initialClickedBtnIndexClicked,
    isEnrolled: initialIsEnrolled,
    isEnrollContent: [],
    isStartClick: null,
    EducationObj: initialEducationObj,
    isWithdraw: initialIsWithdraw,

    handleIncre: () => {
      const newCount = Math.min(10, get().weekCount + 1);
      localStorage.setItem("weekCount", newCount.toString());
      set({ weekCount: newCount });
    },

    handleDecre: () => {
      const newCount = Math.max(0, get().weekCount - 1);
      localStorage.setItem("weekCount", newCount.toString());
      set({ weekCount: newCount });
    },

    handleSelectedEducation: (week: string) => {
      localStorage.setItem("selectedEducation", week);
      set({ selectedEducation: week });
    },

    handleSelectedDate: (date: Date) => {
      localStorage.setItem("selectedCompleteDate", date.toISOString());
      set({ selectedCompleteDate: new Date(date) });
    },

    handleEducationObj: (router) => {
      const state = get();
      if (!state.selectedEducation) {
        toast.error("please, select education type");
        return;
      }
      if (Number(state.weekCount) === 0) {
        toast.error("please, select your completion week");
        return;
      }

      const newObj = {
        weekCount: state.weekCount,
        selectedEducation: state.selectedEducation,
        selectedCompleteDate: state.selectedCompleteDate,
      };

      localStorage.setItem("EducationObj", JSON.stringify(newObj));

      set({
        EducationObj: newObj,
        weekCount: 0,
        selectedEducation: "",
        selectedCompleteDate: new Date(),
      });

      toast.success("Successfully created your course");
      setTimeout(() => {
        router.push("/course");
      }, 5000);
    },

    handleStartDate: (id) => {
      const state = get();

      if (state.isWithdraw === "ENROLL" && !state.isEnrolled) {
        toast.error("Please, Enroll first");
        setTimeout(() => {
          set({ isStartClick: false });
        }, 500);
        set({ startDate: null, clickedBtnIndexClicked: "" });
        return;
      }

      const start = new Date();
      localStorage.setItem("startDate", start.toISOString());
      localStorage.setItem("clickedBtnIndexClicked", id);

      set({
        startDate: start,
        clickedBtnIndexClicked: id,
        isStartClick: true,
      });

      toast.success("Started successfully!");
    },

    // registerEnrollButtons: (elements) => {
    //   set({ isEnrollContent: elements });
    // },

    handleIsEnroll: (course) => {
      const current = get().isWithdraw;
      const next = current === "ENROLL" ? "WITHDRAW" : "ENROLL";

      set({
        isEnrolled: next === "WITHDRAW" ? course : null,
        isWithdraw: next,
      });

      localStorage.setItem(
        "isEnrolled",
        next === "WITHDRAW" ? JSON.stringify(course) : ""
      );
      localStorage.setItem("isWithdraw", JSON.stringify(next));

      toast.success(
        `You have successfully ${
          next === "WITHDRAW" ? "enrolled for" : "withdrawn from"
        } ${course.title}`
      );
    },
  };
});

export default useEducation;
