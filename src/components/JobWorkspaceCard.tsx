export const JobWorkspaceCard = () => {
  const gradientClass =
    "bg-[linear-gradient(180deg,rgba(4,14,22,0.5)_0%,rgba(23,79,124,0.5)_395.83%)]";

  return (
    <div className="w-full sm:w-[280px] flex-shrink-0">
      <div
        className={`p-4 ${gradientClass} rounded-xl border border-[#2c2c3e] min-h-[451px] flex flex-col`}
      >
        {/* Top Button */}
        <button className="px-3 py-1 text-[10px] font-medium text-[#92E182] bg-[#1B211A] rounded-lg self-start mb-4 hover:bg-green-600/60 transition-colors">
          Join cyberspace
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
            Join a team, learn from top minds, and contribute to the growth of
            the cyberspace and squad. Choose an existing cyberspace that aligns
            with your goals or create your own and build your dream team.
          </p>

          {/* Bottom Button */}
          <button className="mt-6 px-6 py-2 text-sm sm:text-base font-medium text-white bg-[#0a0a0a] rounded-lg hover:bg-[#1a1a1a] border border-[#2c2c3e] transition-colors">
            Coming soon
          </button>
        </div>
      </div>
    </div>
  );
};
