import React from "react";

const ClusterHeader: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-blue-950/30">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('robot.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-blue-950/60 to-blue-950/20"></div>
      </div>

      {/* Main Content Layer */}
      <div className="absolute left-8 bottom-8 z-10">
        <h1 className="text-6xl font-black tracking-tighter mb-1">
          <span className="text-gray-100 text-neon-glow">SECURITY</span>
        </h1>
        <p className="text-4xl font-black text-gray-400">
          <span className="text-neon-glow">ESSENTIALS</span>
          <span className="ml-3 text-xl font-light text-cyan-400/80">
            SES 100
          </span>
        </p>
      </div>
    </div>
  );
};

export default ClusterHeader;
