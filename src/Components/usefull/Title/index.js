import React from "react";

const Title = ({ text, h1, h2, h3, textAlign, children, ...props }) => {
  let size = "inherit";
  if (h1) size = "50px";
  else if (h2) size = "30px";
  else if (h3) size = "20px";
  const mystyle = {
    textTransform: "uppercase",
    fontSize: size,
    textAlign
  };
  return (
    <div style={mystyle}>
      {text}
      {children}
    </div>
  );
};

export default Title;
