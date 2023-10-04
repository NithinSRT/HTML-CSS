import { useCallback } from "react";

const RiseFinanceCard = () => {
  const onVectorIconClick = useCallback(() => {
    window.open("https://www.locofy.ai/docs/");
  }, []);

  return (
    <div className="absolute top-[30px] left-[90px] w-[378px] h-10 text-left text-3xl text-white font-poppins">
      <div className="absolute h-full w-[10.58%] top-[0%] right-[89.42%] bottom-[0%] left-[0%] overflow-hidden">
        <img
          className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/vector.svg"
          onClick={onVectorIconClick}
        />
      </div>
      <div className="absolute h-4/5 w-[86.24%] top-[15%] left-[13.76%] tracking-[0.5px] inline-block">
        <span className="font-medium">Rise</span>
        <b>Finance</b>
      </div>
    </div>
  );
};

export default RiseFinanceCard;
