import { useMemo } from "react";
import Button from "./Button";

const LeftSection = ({
  leftSectionPosition,
  leftSectionTop,
  leftSectionLeft,
  buttonCursor,
  buttonBorder,
  buttonBackgroundColor,
  consultationDisplay,
}) => {
  const leftSectionStyle = useMemo(() => {
    return {
      position: leftSectionPosition,
      top: leftSectionTop,
      left: leftSectionLeft,
    };
  }, [leftSectionPosition, leftSectionTop, leftSectionLeft]);

  const buttonStyle = useMemo(() => {
    return {
      cursor: buttonCursor,
      border: buttonBorder,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonCursor, buttonBorder, buttonBackgroundColor]);

  const consultationStyle = useMemo(() => {
    return {
      display: consultationDisplay,
    };
  }, [consultationDisplay]);

  return (
    <div
      className="w-[695px] h-[440px] text-left text-80xl text-white font-poppins"
      style={leftSectionStyle}
    >
      <div className="absolute h-[42.05%] w-full top-[0%] left-[0%] tracking-[-4px] leading-[100%] font-semibold inline-block">
        <p className="m-0">
          <span>
            <span className="[background:linear-gradient(263.24deg,_#9130f4,_#4646f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Scale Fintech
            </span>
          </span>
          <span>
            <span>{` `}</span>
          </span>
        </p>
        <p className="m-0 text-71xl">
          <span>
            <span>Safe And Secure</span>
          </span>
        </p>
      </div>
      <div className="absolute h-[26.59%] w-[98.71%] top-[47.95%] left-[1.29%] text-3xl tracking-[0.04em] leading-[130%] inline-block">
        <span className="font-medium">{`Ship your fintech products to your customers with fast and reliable processes. `}</span>
        <span className="font-semibold">Secure and highly customizable</span>
        <span className="font-medium">
          . Rise Finance is the best partner for you if you want to scale your
          finance products worldwide.
        </span>
      </div>
      <Button
        buttonPosition="absolute"
        buttonHeight="16.82%"
        buttonWidth="39.42%"
        buttonTop="83.18%"
        buttonRight="59.28%"
        buttonBottom="0%"
        buttonLeft="1.29%"
        buttonCursor="unset"
        buttonBorder="unset"
        buttonBackgroundColor="unset"
        consultationDisplay="inline-block"
      />
    </div>
  );
};

export default LeftSection;
