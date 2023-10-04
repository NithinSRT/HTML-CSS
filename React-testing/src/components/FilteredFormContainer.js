const FilteredFormContainer = ({ dimensionCode, carDimensions }) => {
  return (
    <div className="absolute h-[67.99%] w-[80.39%] top-[0%] right-[19.61%] bottom-[32.01%] left-[0%] text-left text-sm text-white font-poppins">
      <div className="absolute h-[97.49%] w-[98.55%] top-[2.51%] right-[0%] bottom-[0%] left-[1.45%] rounded-11xl [background:linear-gradient(177.23deg,_#423ee0,_#812de2)] [filter:blur(90px)]" />
      <div className="absolute h-[97.53%] w-[98.55%] top-[0%] right-[1.45%] bottom-[2.47%] left-[0%]">
        <div className="absolute h-[99.97%] w-full top-[0%] right-[0%] bottom-[0.03%] left-[0%] rounded-11xl [background:linear-gradient(177.23deg,_#9c2cf3,_#3a49f9)]" />
        <img
          className="absolute h-full w-[99.94%] top-[0%] right-[0.06%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={dimensionCode}
        />
        <div className="absolute h-[7.14%] w-[13.77%] top-[79.4%] left-[76.72%] tracking-[0.5px] font-medium text-right inline-block">
          09/25
        </div>
        <div className="absolute h-[7.14%] w-[52.3%] top-[79.4%] left-[9.51%] tracking-[0.5px] font-medium inline-block opacity-[0.9]">
          5282 3456 7890 1289
        </div>
        <img
          className="absolute h-[19.52%] w-[14.28%] top-[13.59%] right-[9.58%] bottom-[66.89%] left-[76.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={carDimensions}
        />
        <div className="absolute h-[14%] w-[46.07%] top-[28.28%] left-[9.51%] text-9xl font-medium inline-block">
          $5,750,20
        </div>
        <div className="absolute h-[7.14%] w-2/5 top-[16.28%] left-[9.51%] font-medium inline-block opacity-[0.54]">
          Current Balance
        </div>
      </div>
    </div>
  );
};

export default FilteredFormContainer;
