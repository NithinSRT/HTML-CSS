import { useMemo } from "react";
import FilteredFormContainer from "./FilteredFormContainer";
import FilteredForm from "./FilteredForm";

const RightSection = ({
  card1Mask,
  mastercardLogo,
  card2Mask,
  group,
  logo,
  rightSectionPosition,
  rightSectionTop,
  rightSectionLeft,
}) => {
  const rightSectionStyle = useMemo(() => {
    return {
      position: rightSectionPosition,
      top: rightSectionTop,
      left: rightSectionLeft,
    };
  }, [rightSectionPosition, rightSectionTop, rightSectionLeft]);

  return (
    <div className="w-[770px] h-[528px]" style={rightSectionStyle}>
      <FilteredFormContainer
        dimensionCode="/card-1-mask1.svg"
        carDimensions="/mastercard-logo1.svg"
      />
      <FilteredForm
        dimensions="/card-2-mask1.svg"
        carDimensions="/group1.svg"
        productDimensions="/logo1.svg"
      />
    </div>
  );
};

export default RightSection;
