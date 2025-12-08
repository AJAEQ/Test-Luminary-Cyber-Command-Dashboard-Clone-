import { create } from "zustand";
import { modalType } from "@/app/_type/type";

const useModal = create<modalType>((set) => ({
  isOpen: false,
  isNavOpen: false,
  isDashboardOpen: false,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
  handleDashboardOpen: () => set({  isDashboardOpen: true }),
  handleDashboardClose: () => set({  isDashboardOpen: false }),
  handleIsNavOpen: () => set({ isNavOpen: true }),
  handleIsNavClose: () => set({ isNavOpen: false }),
}));

export default useModal;
