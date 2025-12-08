const SecondNavBar = () => {
  const menuList: string[] = ["Cyber Command", "overview", "Nodes", "Reviews"];
  const list = menuList.map((list, index) => {
    return (
      <li
        key={index}
        className={`text-[#E2E8FF99] font-600 text-xs text-center ${
          list === "Cyber Command" &&
          "w-[143px] h-[34px] border-[0.8px] py-[8px] px-[4px] flex items-center justify-center gap-[10px] rounded-[10px] border-[#E2E8FF0D] bg-gradient-to-t from-[#040E16] to-[#174F7C]"
        }`}
      >
        {list}
      </li>
    );
  });
  return (
    <ul className=" h-[41px] border-b-[0.5px] p-5 flex items-center gap-[10px] radius-[14px] border-[#E2E8FF1A] list-none pt-[30px]">
      {list}
    </ul>
  );
};

export default SecondNavBar;
