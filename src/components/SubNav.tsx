export const SubNav: React.FC = () => {
  const navItems = ["Overview", "Nodes", "Reviews"];
  const activeItem = "Overview";

  return (
    <nav className="flex items-center px-6 py-3 bg-[#11111a] border-b border-[#1a1a1a]">
      {/* Main Title (Cyber Command) */}
      <h1 className="hidden md:block text-xl font-bold text-gray-100 mr-8">
        Cyber Command
      </h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <div
            key={item}
            className={`cursor-pointer pb-2 text-sm font-medium transition-colors ${
              item === activeItem
                ? "text-white border-b-2 border-cyan-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};
