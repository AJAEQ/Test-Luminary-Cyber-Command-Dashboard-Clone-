const SecondNavBar = () => {
  const menuList: string[] = ["Cyber Command", "overview", "Nodes", "Reviews"];
  const list = menuList.map((list, index) => {
    return (
      <li
        key={index}
        className={`text-[#E2E8FF99] font-600 text-xs text-center w-[143px] h-[34px]  py-[8px] px-[4px]${
          list === "Cyber Command" &&
          " border-[0.8px]  flex items-center justify-center  rounded-[10px] border-[#E2E8FF0D] bg-[#040E16] "
        }`}
      >
        <span> {list}</span>
      </li>
    );
  });
  return (
    <ul className=" h-[41px] border-b-[0.5px] p-0 flex items-center gap-[10px] radius-[14px] border-[#E2E8FF1A] list-none ">
      {list}
    </ul>
  );
};

export default SecondNavBar;
