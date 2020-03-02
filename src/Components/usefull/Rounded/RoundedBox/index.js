import React from "react";

const RoundedBox = ({
  leftbar,
  children,
  shadowColor,
  background,
  onClick,
  cursor,
  flexDirection
}) => {
  let boxShadow = "1px 1px 2px 1px rgba(128, 128, 128, 0.4)";
  if (shadowColor) boxShadow = " 2px 1px 0px 1px " + shadowColor;
  let border = "";
  if (shadowColor) border = "solid 0.5px " + shadowColor;
  if (!flexDirection) flexDirection = "column";
  let lfb = "";
  if (leftbar) lfb = "solid 5px " + leftbar;
  return (
    <div
      onClick={onClick}
      style={{
        cursor,
        boxShadow,
        border,
        background,
        alignContent: "center",
        transition: "800ms",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        borderLeft: lfb
      }}
      className="roundedBox"
    >
      {children}
    </div>
  );
};

export default RoundedBox;
