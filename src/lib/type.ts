export type NodeState = "COMPLETED" | "CONTINUE" | "START";

export interface CourseNode {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  total: number;
  state: NodeState;
  color: "red" | "blue" | "purple" | "green"; 
  icon: string; 
}

export interface ClusterData {
  title: string;
  code: string;
  rating: number;
  difficulty: number;
  isEnrolled: boolean;
  totalDays: number;
  totalNodes: number;
  currentProgressPercent: number;
  nodes: CourseNode[];
}
