import React from "react";
import { CourseNode, NodeState } from "../lib/type";
import {
  PlayIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

interface Props {
  node: CourseNode;
}

const CourseNodeCard: React.FC<Props> = ({ node }) => {
  const stateClasses: Record<NodeState, string> = {
    COMPLETED: "bg-cyan-500/20 border-cyan-500 text-cyan-400",
    CONTINUE: "bg-red-600/20 border-red-500 text-red-400",
    START:
      "bg-gray-600/20 border-gray-500 text-gray-400 opacity-60 pointer-events-none",
  };

  const StateIcon =
    node.state === "COMPLETED"
      ? CheckCircleIcon
      : node.state === "CONTINUE"
      ? PlayIcon
      : LockClosedIcon;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border-l-4 transition-all ${
        stateClasses[node.state]
      }`}
    >
      {/* Icon with state background */}
      <div
        className={`p-3 rounded-lg flex-shrink-0 ${stateClasses[node.state]
          .split(" ")
          .slice(0, 2)
          .join(" ")}`}
      >
        <StateIcon className="w-5 h-5" />
      </div>

      {/* Title and Subtitle */}
      <div className="flex-grow min-w-0">
        <h3 className="text-sm font-semibold text-gray-100 truncate">
          {node.title}
        </h3>
        <p className="text-xs text-gray-500 uppercase">{node.subtitle}</p>
      </div>

      {/* Progress */}
      <span className="text-xs font-medium text-gray-400 flex-shrink-0 mt-2 sm:mt-0">
        {node.progress}/{node.total}
      </span>

      {/* Action Button */}
      <button
        className={`px-4 py-1 text-xs font-bold uppercase rounded-full flex-shrink-0 mt-2 sm:mt-0 transition-all ${
          stateClasses[node.state]
        }`}
        disabled={node.state === "START"}
      >
        {node.state === "COMPLETED"
          ? "COMPLETED"
          : node.state === "CONTINUE"
          ? "CONTINUE"
          : "START"}
      </button>
    </div>
  );
};

export default CourseNodeCard;
