import React from "react";

const RoundedButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="roundedLink">
      {children}
    </div>
  );
};
export default RoundedButton;
