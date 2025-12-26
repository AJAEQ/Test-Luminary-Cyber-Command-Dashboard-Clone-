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
        className={` md:w-[143px] md:h-[34px] ${
          index === 0
            ? "rounded-[10px] border-[0.5px] border-[#E2E8FF0D] bg-slate-900/50"
            : ""
        }`}
      >
        {btn}
      </button>
    );
  });

  return (
    <div className="w-full md:overflow-hidden overflow-auto flex items-center md:gap-[10px] md:justify-start justify-between  font-600 md:text-xs text-[10px]  border-b-[0.5px] border-[#E2E8FF1A]  tracking-0 text-[#E2E8FF99] text-center md:p-[5px] p-2 md:my-0 my-5">
      {btn}
    </div>
  );
};

export default ConsistencyBtn;
