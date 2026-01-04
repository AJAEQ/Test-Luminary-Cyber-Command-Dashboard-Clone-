import ConsistencyChain from "./consisitencyChain";
import ConsistencyBtn from "./consistencyBtn";
import SkillMatrix from "./skillMatrix";
import FooterGraph from "./footerGraph";
const ConsistencyChainRoot = () => {
  return (
    <div>
      <div className="flex flex-col md:gap-[20px] gap-[0px]">
        <ConsistencyChain />
        <ConsistencyBtn />
        <SkillMatrix />
      </div>

      <FooterGraph />
    </div>
  );
};

export default ConsistencyChainRoot;
