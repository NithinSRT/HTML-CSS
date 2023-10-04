import { useMemo } from "react";

const TypeSafariThemeLight = ({
  button,
  button1,
  button2,
  button3,
  lock,
  text,
  refresh,
  button4,
  button5,
  button6,
  button7,
  typeSafariThemeLightBorderRadius,
  typeSafariThemeLightWidth,
  typeSafariThemeLightHeight,
  typeSafariThemeLightPosition,
  typeSafariThemeLightTop,
  typeSafariThemeLightLeft,
  controlsTop,
  controlsLeft,
  controlsGap,
  closeBoxShadow,
  closeBorder,
  closeWidth,
  closeHeight,
  maximiseBoxShadow,
  maximiseBorder,
  maximiseWidth,
  maximiseHeight,
  minimiseBoxShadow,
  minimiseBorder,
  minimiseWidth,
  minimiseHeight,
  actionsTop,
  actionsLeft,
  buttonIconWidth,
  buttonIconHeight,
  buttonIconWidth1,
  buttonIconHeight1,
  buttonIconTop,
  buttonIconLeft,
  buttonIconWidth2,
  buttonIconHeight2,
  buttonIconTop1,
  buttonIconLeft1,
  buttonIconWidth3,
  buttonIconHeight3,
  searchInputTop,
  searchInputLeft,
  searchInputBorder,
  searchInputWidth,
  searchInputHeight,
  textAndLockIconTop,
  textAndLockIconLeft,
  lockIconWidth,
  lockIconHeight,
  textFontSize,
  refreshIconLeft,
  refreshIconWidth,
  refreshIconHeight,
  rightActionsTop,
  rightActionsRight,
  rightActionsGap,
  buttonIconWidth4,
  buttonIconHeight4,
  buttonIconWidth5,
  buttonIconHeight5,
  buttonIconWidth6,
  buttonIconHeight6,
  buttonIconWidth7,
  buttonIconHeight7,
}) => {
  const typeSafariThemeLightStyle = useMemo(() => {
    return {
      borderRadius: typeSafariThemeLightBorderRadius,
      width: typeSafariThemeLightWidth,
      height: typeSafariThemeLightHeight,
      position: typeSafariThemeLightPosition,
      top: typeSafariThemeLightTop,
      left: typeSafariThemeLightLeft,
    };
  }, [
    typeSafariThemeLightBorderRadius,
    typeSafariThemeLightWidth,
    typeSafariThemeLightHeight,
    typeSafariThemeLightPosition,
    typeSafariThemeLightTop,
    typeSafariThemeLightLeft,
  ]);

  const controlsStyle = useMemo(() => {
    return {
      top: controlsTop,
      left: controlsLeft,
      gap: controlsGap,
    };
  }, [controlsTop, controlsLeft, controlsGap]);

  const closeStyle = useMemo(() => {
    return {
      boxShadow: closeBoxShadow,
      border: closeBorder,
      width: closeWidth,
      height: closeHeight,
    };
  }, [closeBoxShadow, closeBorder, closeWidth, closeHeight]);

  const maximiseStyle = useMemo(() => {
    return {
      boxShadow: maximiseBoxShadow,
      border: maximiseBorder,
      width: maximiseWidth,
      height: maximiseHeight,
    };
  }, [maximiseBoxShadow, maximiseBorder, maximiseWidth, maximiseHeight]);

  const minimiseStyle = useMemo(() => {
    return {
      boxShadow: minimiseBoxShadow,
      border: minimiseBorder,
      width: minimiseWidth,
      height: minimiseHeight,
    };
  }, [minimiseBoxShadow, minimiseBorder, minimiseWidth, minimiseHeight]);

  const actionsStyle = useMemo(() => {
    return {
      top: actionsTop,
      left: actionsLeft,
    };
  }, [actionsTop, actionsLeft]);

  const buttonIconStyle = useMemo(() => {
    return {
      width: buttonIconWidth,
      height: buttonIconHeight,
    };
  }, [buttonIconWidth, buttonIconHeight]);

  const buttonIcon1Style = useMemo(() => {
    return {
      width: buttonIconWidth1,
      height: buttonIconHeight1,
    };
  }, [buttonIconWidth1, buttonIconHeight1]);

  const buttonIcon2Style = useMemo(() => {
    return {
      top: buttonIconTop,
      left: buttonIconLeft,
      width: buttonIconWidth2,
      height: buttonIconHeight2,
    };
  }, [buttonIconTop, buttonIconLeft, buttonIconWidth2, buttonIconHeight2]);

  const buttonIcon3Style = useMemo(() => {
    return {
      top: buttonIconTop1,
      left: buttonIconLeft1,
      width: buttonIconWidth3,
      height: buttonIconHeight3,
    };
  }, [buttonIconTop1, buttonIconLeft1, buttonIconWidth3, buttonIconHeight3]);

  const searchInputStyle = useMemo(() => {
    return {
      top: searchInputTop,
      left: searchInputLeft,
      border: searchInputBorder,
      width: searchInputWidth,
      height: searchInputHeight,
    };
  }, [
    searchInputTop,
    searchInputLeft,
    searchInputBorder,
    searchInputWidth,
    searchInputHeight,
  ]);

  const textAndLockIconStyle = useMemo(() => {
    return {
      top: textAndLockIconTop,
      left: textAndLockIconLeft,
    };
  }, [textAndLockIconTop, textAndLockIconLeft]);

  const lockIconStyle = useMemo(() => {
    return {
      width: lockIconWidth,
      height: lockIconHeight,
    };
  }, [lockIconWidth, lockIconHeight]);

  const textStyle = useMemo(() => {
    return {
      fontSize: textFontSize,
    };
  }, [textFontSize]);

  const refreshIconStyle = useMemo(() => {
    return {
      left: refreshIconLeft,
      width: refreshIconWidth,
      height: refreshIconHeight,
    };
  }, [refreshIconLeft, refreshIconWidth, refreshIconHeight]);

  const rightActionsStyle = useMemo(() => {
    return {
      top: rightActionsTop,
      right: rightActionsRight,
      gap: rightActionsGap,
    };
  }, [rightActionsTop, rightActionsRight, rightActionsGap]);

  const buttonIcon4Style = useMemo(() => {
    return {
      width: buttonIconWidth4,
      height: buttonIconHeight4,
    };
  }, [buttonIconWidth4, buttonIconHeight4]);

  const buttonIcon5Style = useMemo(() => {
    return {
      width: buttonIconWidth5,
      height: buttonIconHeight5,
    };
  }, [buttonIconWidth5, buttonIconHeight5]);

  const buttonIcon6Style = useMemo(() => {
    return {
      width: buttonIconWidth6,
      height: buttonIconHeight6,
    };
  }, [buttonIconWidth6, buttonIconHeight6]);

  const buttonIcon7Style = useMemo(() => {
    return {
      width: buttonIconWidth7,
      height: buttonIconHeight7,
    };
  }, [buttonIconWidth7, buttonIconHeight7]);

  return (
    <div
      className="rounded-t-xl rounded-b-none bg-white w-[1600px] h-[52px] text-left text-[13px] text-gray-100 font-inter"
      style={typeSafariThemeLightStyle}
    >
      <div
        className="absolute top-[calc(50%_-_6px)] left-[20px] flex flex-row items-start justify-start gap-[8px]"
        style={controlsStyle}
      >
        <div
          className="relative rounded-[50%] bg-salmon shadow-[0px_0px_6px_#ec6d62_inset] box-border w-3 h-3 border-[0.5px] border-solid border-indianred-200"
          style={closeStyle}
        />
        <div
          className="relative rounded-[50%] bg-goldenrod shadow-[0px_0px_6px_#f5c451_inset] box-border w-3 h-3 border-[0.5px] border-solid border-darkgoldenrod"
          style={maximiseStyle}
        />
        <div
          className="relative rounded-[50%] bg-lightgreen shadow-[0px_0px_6px_#68cc58_inset] box-border w-3 h-3 border-[0.5px] border-solid border-forestgreen-100"
          style={minimiseStyle}
        />
      </div>
      <div
        className="absolute top-[calc(50%_-_14px)] left-[130px] overflow-hidden flex flex-row items-center justify-start"
        style={actionsStyle}
      >
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button}
          style={buttonIconStyle}
        />
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button1}
          style={buttonIcon1Style}
        />
      </div>
      <img
        className="absolute top-[12px] left-[87.5px] rounded-md w-[33px] h-7"
        alt=""
        src={button2}
        style={buttonIcon2Style}
      />
      <img
        className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_300px)] rounded-md w-8 h-7"
        alt=""
        src={button3}
        style={buttonIcon3Style}
      />
      <div
        className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_258px)] rounded-md bg-white box-border w-[516px] h-7 border-[1px] border-solid border-silver-200"
        style={searchInputStyle}
      >
        <div
          className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_73.5px)] overflow-hidden flex flex-row items-center justify-start gap-[6px]"
          style={textAndLockIconStyle}
        >
          <img
            className="relative w-4 h-4"
            alt=""
            src={lock}
            style={lockIconStyle}
          />
          <div className="relative" style={textStyle}>
            {text}
          </div>
        </div>
        <img
          className="absolute top-[6px] left-[494px] w-4 h-4"
          alt=""
          src={refresh}
          style={refreshIconStyle}
        />
      </div>
      <div
        className="absolute top-[12px] right-[16px] overflow-hidden flex flex-row items-center justify-start gap-[8px]"
        style={rightActionsStyle}
      >
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button4}
          style={buttonIcon4Style}
        />
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button5}
          style={buttonIcon5Style}
        />
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button6}
          style={buttonIcon6Style}
        />
        <img
          className="relative rounded-md w-8 h-7"
          alt=""
          src={button7}
          style={buttonIcon7Style}
        />
      </div>
    </div>
  );
};

export default TypeSafariThemeLight;
