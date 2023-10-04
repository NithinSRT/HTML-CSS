import RiseFinanceCard from "../components/RiseFinanceCard";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";

const HeroSection = () => {
  return (
    <div className="relative bg-midnightblue-100 w-full h-[1117px] overflow-hidden">
      <RiseFinanceCard />
      <RightSection
        card1Mask="/card-1-mask.svg"
        mastercardLogo="/mastercard-logo.svg"
        card2Mask="/card-2-mask.svg"
        group="/group.svg"
        logo="/logo.svg"
        rightSectionPosition="absolute"
        rightSectionTop="305px"
        rightSectionLeft="938px"
      />
      <div className="absolute h-[78.87%] w-[50.98%] top-[59.89%] right-[74.48%] bottom-[-38.76%] left-[-25.46%] rounded-881xl [background:linear-gradient(177.23deg,_rgba(66,_62,_224,_0.4),_rgba(129,_45,_226,_0.4))] [filter:blur(300px)]" />
      <div className="absolute h-[45.57%] w-[29.46%] top-[-17.1%] right-[-9.72%] bottom-[71.53%] left-[80.27%] rounded-881xl [background:linear-gradient(177.23deg,_rgba(66,_62,_224,_0.4),_rgba(129,_45,_226,_0.4))] [filter:blur(371px)]" />
      <div className="absolute top-[43px] left-[1594px] w-11 h-[17px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-11 h-[3px]" />
        <div className="absolute top-[7px] left-[0px] bg-white w-11 h-[3px]" />
        <div className="absolute top-[14px] left-[0px] bg-white w-11 h-[3px]" />
      </div>
      <LeftSection
        leftSectionPosition="absolute"
        leftSectionTop="318px"
        leftSectionLeft="90px"
        buttonCursor="pointer"
        buttonBorder="none"
        buttonBackgroundColor="rgba(18, 17, 57, 0.2)"
        consultationDisplay="inline-block"
      />
      <img
        className="absolute top-[925px] left-[300px] w-[1128px] h-[60px]"
        alt=""
        src="/group-9.svg"
      />
    </div>
  );
};

export default HeroSection;
