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
        <Icon className="h-5 w-5 text-gray-400 stroke-[1.5]" />{" "}
      </div>

      {/* Text Content */}
      <div className="flex flex-col pt-1">
        <p className="text-sm text-gray-200 font-medium">{title}</p>

        <p className="text-sm font-semibold text-gray-400">{value}</p>
      </div>
    </div>
  );
};

export const EducationProgress = () => {
  const widgetData = [
    {
      title: "Completed nodes",
      value: "3 / 34",
      Icon: Link, 
    },
    {
      title: "Completed sections",
      value: "0 / 136",
      Icon: Activity, 
    },
    {
      title: "Completed lessons",
      value: "3 / 350",
      Icon: BookOpen, 
    },
    {
      title: "Completed exercises",
      value: "3 / 400",
      Icon: Clock, 
    },
  ];

  

  return (
    <div className="p-4  rounded-xl border border-[#2c2c3e] shadow-xl">
      {/* Header: Education progress tag */}
      <span className="px-3 py-1 text-xs font-semibold text-yellow-500 bg-yellow-900/20 rounded-md self-start mb-6">
        Education progress
      </span>

      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
        {widgetData.map((widget, index) => (
          <ProgressWidget key={index} {...widget} />
        ))}
      </div>

     
    </div>
  );
};
