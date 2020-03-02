import React from "react";
const RightSideContener = ({ elements, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px"
      }}
    >
      {/*<div style={{ width: window.innerWidth - 100 }}></div>*/}
      {children}
    </div>
  );
};

export default RightSideContener;
