import { Link, BookOpen, Activity, Clock } from "lucide-react";

interface ProgressWidgetProps {
  title: string;
  value: string;
  Icon: React.ElementType;
}

const ProgressWidget: React.FC<ProgressWidgetProps> = ({
  title,
  value,
  Icon,
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="p-2 border border-gray-700/50 rounded-full">
        <Icon className="h-5 w-5 text-gray-400 stroke-[1.5]" />
      </div>

      <div className="flex flex-col pt-1">
        <p className="text-xs text-[#A7A7A7] font-regular">{title}</p>
        <p className="text-[10px] font-medium text-[#E0E4E7]">{value}</p>
      </div>
    </div>
  );
};

export const EducationProgress = () => {
  const widgetData = [
    { title: "Completed nodes", value: "3 / 34", Icon: Link },
    { title: "Completed sections", value: "0 / 136", Icon: Activity },
    { title: "Completed lessons", value: "3 / 350", Icon: BookOpen },
    { title: "Completed exercises", value: "3 / 400", Icon: Clock },
  ];

  return (
    <div className="p-5 rounded-xl border border-[#2c2c3e] shadow-xl">
      {/* Header */}
      <span className="px-3 py-1 text-xs font-semibold text-yellow-500 bg-yellow-900/20 rounded-md">
        Education progress
      </span>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mt-6">
        {widgetData.map((widget, index) => (
          <ProgressWidget key={index} {...widget} />
        ))}
      </div>
    </div>
  );
};
