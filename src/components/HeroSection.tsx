// components/Dashboard/HeroSection.tsx

export const HeroSection = () => {
  return (
    <div className="relative h-[451px] rounded-xl overflow-hidden shadow-lg border border-[#2c2c3e]">
      {/* Background Image: Note: In a real app, use the Next.js <Image> component */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content over the image */}
      <div className="relative p-6 h-full flex flex-col justify-center items-center">
        {/* Floating Upgrade Button */}
        <button className="px-2 py-2 bg-gradient-to-r from-[#21B9E8 40% ] to-[#21B9E8] text-[#E2E8FF] text-[10px] font-semibold rounded-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};
