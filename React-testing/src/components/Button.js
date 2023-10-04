import { useMemo } from "react";

const Button = ({
  buttonPosition,
  buttonHeight,
  buttonWidth,
  buttonTop,
  buttonRight,
  buttonBottom,
  buttonLeft,
  buttonCursor,
  buttonBorder,
  buttonBackgroundColor,
  consultationDisplay,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      height: buttonHeight,
      width: buttonWidth,
      top: buttonTop,
      right: buttonRight,
      bottom: buttonBottom,
      left: buttonLeft,
      cursor: buttonCursor,
      border: buttonBorder,
      backgroundColor: buttonBackgroundColor,
    };
  }, [
    buttonPosition,
    buttonHeight,
    buttonWidth,
    buttonTop,
    buttonRight,
    buttonBottom,
    buttonLeft,
    buttonCursor,
    buttonBorder,
    buttonBackgroundColor,
  ]);

  const consultationStyle = useMemo(() => {
    return {
      display: consultationDisplay,
    };
  }, [consultationDisplay]);

  return (
    <div
      className="flex flex-row items-center justify-center py-7 px-[67px] text-left text-lg text-white font-poppins"
      style={buttonStyle}
    >
      <div
        className="relative leading-[100%] uppercase font-semibold"
        style={consultationStyle}
      >
        consultation
      </div>
    </div>
  );
};

export default Button;
