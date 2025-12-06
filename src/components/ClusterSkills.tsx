interface SkillItemProps {
  name: string;
  progress: number; // 0-100
  color: string; // Tailwind color class e.g., 'bg-cyan-600'
}

const SkillItem: React.FC<SkillItemProps> = ({ name, progress, color }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <span className="text-sm text-gray-300 w-1/3 min-w-[100px]">{name}</span>
      <div className="flex-1 bg-[#1a1a25] rounded-full h-2.5 relative">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
        {/* Progress text inside or outside the bar as seen in the screenshot */}
      </div>
      <span className="text-sm font-medium text-gray-300 w-10 text-right">
        {progress}%
      </span>
    </div>
  );
};

export const ClusterSkillMatrix = () => {
  const securityEssentialsSkills = [
    { name: "Linux Administration", progress: 50, color: "bg-green-500" },
    { name: "Windows Administration", progress: 100, color: "bg-cyan-500" },
    { name: "Cryptography", progress: 25, color: "bg-yellow-500" },
    // ... add more skills here
  ];

  // Note: The screenshot shows two columns of skill bars.
  // You would wrap two lists of SkillItem components in a grid or flex container.

  return (
    <div className="p-4 bg-[#1e1e2d] rounded-xl border border-[#2c2c3e] shadow-xl">
      <h3 className="text-lg font-semibold text-gray-100 mb-4">
        Cluster Skill Matrix
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {securityEssentialsSkills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
        {/* Placeholder for second column of skills for layout replication */}
        <SkillItem name="Secure Network" progress={30} color="bg-red-500" />
        <SkillItem
          name="Digital Forensics"
          progress={90}
          color="bg-purple-500"
        />
      </div>
    </div>
  );
};
