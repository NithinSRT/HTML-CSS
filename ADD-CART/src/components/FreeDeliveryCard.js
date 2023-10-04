const FreeDeliveryCard = () => {
  return (
    <div className="absolute top-[1283.72px] left-[1220.94px] rounded-[21.97px] box-border w-[913.35px] flex flex-col items-start justify-start p-[26.6787109375px] gap-[32.96px] text-left text-[26.68px] text-darkslategray-100 font-inter border-[1.6px] border-solid border-gainsboro">
      <div className="self-stretch flex flex-row items-start justify-start gap-[21.97px]">
        <img
          className="relative w-[37.66px] h-[37.66px] overflow-hidden shrink-0"
          alt=""
          src="/frame15.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10.99px]">
          <b className="self-stretch relative">Free Delivery</b>
          <div className="self-stretch relative text-[21.97px] [text-decoration:underline] text-dimgray">
            Enter your Postal code for Delivery Availability
          </div>
        </div>
      </div>
      <div className="self-stretch relative box-border h-[1.57px] border-t-[1.6px] border-solid border-gainsboro" />
      <div className="self-stretch flex flex-row items-start justify-start gap-[21.97px]">
        <img
          className="relative w-[37.66px] h-[37.66px] overflow-hidden shrink-0"
          alt=""
          src="/frame16.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[10.99px]">
          <b className="self-stretch relative">Return Delivery</b>
          <div className="self-stretch relative text-[21.97px] text-dimgray">
            {`Free 30 days Delivery Return. `}
            <span className="[text-decoration:underline]">Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryCard;
