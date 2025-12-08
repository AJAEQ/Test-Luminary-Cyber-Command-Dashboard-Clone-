import React from "react";

const ClusterHeader: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-blue-950/30">
      {/* Background Image Container - hidden on mobile */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url('robot.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-blue-950/60 to-blue-950/20"></div>
      </div>

      {/* Main Content Layer */}
      <div className="absolute left-8 bottom-8 z-10">
        <h1 className="text-6xl font-black tracking-tighter mb-1 hidden md:block">
          <span className="text-gray-100 text-neon-glow">SECURITY</span>
        </h1>
        <p className="text-4xl font-black text-gray-400 hidden md:block">
          <span className="text-neon-glow">ESSENTIALS</span>
          <span className="ml-3 text-xl font-light text-cyan-400/80">
            SES 100
          </span>
        </p>

        {/* Mobile-only content */}
        <div className="block md:hidden">
          <h2 className="text-xl font-bold text-gray-100">
            SECURITY ESSENTIALS
          </h2>
          <p className="text-sm text-cyan-400/80">SES 100</p>
        </div>
      </div>
    </div>
  );
};

export default ClusterHeader;




