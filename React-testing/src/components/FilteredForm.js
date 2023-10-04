const FilteredForm = ({ dimensions, carDimensions, productDimensions }) => {
  return (
    <div className="absolute h-[55%] w-[28.96%] top-[29.66%] right-[13.9%] bottom-[15.34%] left-[57.14%] text-left text-2xs text-white font-poppins">
      <div className="absolute h-[91.6%] w-[95.96%] top-[8.4%] right-[0%] bottom-[0%] left-[4.04%] rounded-11xl [background:linear-gradient(177.23deg,_#423ee0,_#812de2)] [filter:blur(90px)]" />
      <div className="absolute h-[91.75%] w-[95.96%] top-[0%] right-[4.04%] bottom-[8.25%] left-[0%]">
        <div className="absolute h-[99.84%] w-full top-[0.14%] right-[0%] bottom-[0.02%] left-[0%] rounded-11xl [background:linear-gradient(177.23deg,_#9c2cf3,_#3a49f9)]" />
        <img
          className="absolute h-full w-[99.78%] top-[0%] right-[0.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={dimensions}
        />
        <div className="absolute h-[8.63%] w-[28.04%] top-[76.71%] left-[59.81%] leading-[162.7%] font-medium text-right inline-block">
          09/25
        </div>
        <div className="absolute h-[9.01%] w-[19.16%] top-[54.94%] left-[44.86%] text-smi leading-[162.7%] font-medium inline-block">
          1289
        </div>
        <div className="absolute h-[2.25%] w-[2.8%] top-[59.82%] right-[64.95%] bottom-[37.93%] left-[32.25%] rounded-[50%] bg-white" />
        <div className="absolute h-[2.25%] w-[2.8%] top-[59.82%] right-[78.5%] bottom-[37.93%] left-[18.7%] rounded-[50%] bg-white" />
        <div className="absolute h-[2.25%] w-[2.8%] top-[59.82%] right-[71.96%] bottom-[37.93%] left-[25.24%] rounded-[50%] bg-white" />
        <div className="absolute h-[2.25%] w-[2.8%] top-[59.82%] right-[85.51%] bottom-[37.93%] left-[11.69%] rounded-[50%] bg-white" />
        <img
          className="absolute h-[11.97%] w-[22.71%] top-[74.44%] right-[65.59%] bottom-[13.59%] left-[11.7%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={carDimensions}
        />
        <div className="absolute h-[5.63%] w-[47.66%] top-[45.56%] left-[11.69%] text-xs font-medium inline-block opacity-[0.5]">
          Credit Card
        </div>
        <img
          className="absolute h-[15.11%] w-[30.97%] top-[10.87%] right-[57.34%] bottom-[74.02%] left-[11.7%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={productDimensions}
        />
      </div>
    </div>
  );
};

export default FilteredForm;
