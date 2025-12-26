import React from "react";
import { JSX } from "react";

export interface sidebarType {
  icon: JSX.Element | string;
}
export interface educationType {
  icon: React.ElementType;
  name: string;
}

export interface modalType {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  isNavOpen: boolean;
  handleIsNavOpen: () => void;
  handleIsNavClose: () => void;
  isDashboardOpen: boolean;
  handleDashboardOpen: () => void;
  handleDashboardClose: () => void;
}

export interface Course {
  id: string;
  title: string;
  progress: number;
  difficulty: string;
  estimatedTime: string;
  image: string;
}

export interface EducationType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  courses: Course[];
}

export interface EducationData {
  educationTypes: EducationType[];
}

// Optional: If you want to use it as a full object type
export type EducationResponse = {
  educationTypes: EducationType[];
};

export interface UseFetchType {
  data: EducationResponse | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: EducationResponse) => Promise<void>;
}
