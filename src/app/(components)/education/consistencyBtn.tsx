const ConsistencyBtn = () => {
  const btnList = [
    "Analytics",
    "Completed nodes",
    "Completed clusters",
    "To do list",
    "Recently added",
  ];

  const btn = btnList.map((btn, index) => {
    return (
      <button
        key={index}
        className={` px-6 py-2 md:px-5 md:py-2 ${
          index === 0
            ? "rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-[#1B211A80]"
            : ""
        }`}
      >
        {btn}
      </button>
    );
  });

  return (
    <div className="w-full md:overflow-hidden overflow-auto flex items-center md:gap-0 gap-20  font-600 md:text-xs text-[10px] tracking-0 text-[#E2E8FF99] text-center md:p-5 p-2 md:my-0 my-5">
      {btn}
    </div>
  );
};

export default ConsistencyBtn;
