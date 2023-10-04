const FashionHubContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] box-border w-[2259.84px] flex flex-row items-center justify-between py-[31.38671875px] px-[125.546875px] text-left text-[51.47px] text-darkslategray-200 font-inter border-b-[1.6px] border-solid border-whitesmoke-300">
      <div className="flex flex-row items-center justify-start gap-[94.16px]">
        <i className="relative font-extrabold">FashionHub</i>
        <div className="flex flex-row items-start justify-start gap-[78.47px] text-[25.11px] text-darkslategray-100">
          <div className="relative font-medium">Category</div>
          <div className="relative font-medium">Brand</div>
          <div className="relative font-medium">Contact</div>
          <div className="relative font-medium">FAQ’s</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start relative gap-[26.68px] text-[18.83px] text-silver-100">
        <div className="relative w-[78.47px] h-[78.47px] z-[0]">
          <div className="absolute top-[0px] left-[0px] rounded-[39.23px] bg-whitesmoke-200 w-[78.47px] h-[78.47px]" />
          <img
            className="absolute top-[21.97px] left-[23.54px] w-[32.96px] h-[32.96px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="relative w-[78.47px] h-[78.47px] z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-[39.23px] bg-ghostwhite w-[78.47px] h-[78.47px]" />
          <img
            className="absolute top-[23.54px] left-[23.54px] w-[31.39px] h-[31.39px] overflow-hidden"
            alt=""
            src="/frame1.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[21.97px] z-[2]">
          <img
            className="relative rounded-[39.23px] w-[78.47px] h-[78.47px] object-cover"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[10.99px]">
            <div className="relative font-medium">Good Morning!</div>
            <div className="relative text-[25.11px] font-semibold text-darkslategray-100">
              Scarlet Johnson
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[-4.71px] left-[50.22px] rounded-[18.83px] bg-darkslategray-100 box-border w-[31.39px] h-[31.39px] flex flex-col items-center justify-center z-[3] border-[2.4px] border-solid border-white">
          <img
            className="relative w-[9.42px] h-[15.69px]"
            alt=""
            src="/3.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[3.14px] left-[163.21px] rounded-[18.83px] bg-indianred-100 box-border w-[15.69px] h-[15.69px] z-[4] border-[2.4px] border-solid border-white" />
      </div>
    </div>
  );
};

export default FashionHubContainer;
