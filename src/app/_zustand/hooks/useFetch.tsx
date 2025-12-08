import { create } from "zustand";
import { UseFetchType } from "@/app/_type/type";
import { EducationResponse } from "@/app/_type/type";
export const useFetch = create<UseFetchType>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async (data: EducationResponse) => {
    set({ loading: true, error: null });

    try {
      set({ data, loading: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      set({ error: message, loading: false });
    }
  },
}));
