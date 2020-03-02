import React from "react";

import Title from "../../usefull/Title";
import Theme from "../../../Ressources/Theme";
const RootHeader = ({ text }) => {
  return (
    <div
      style={{
        background: Theme.Color.Secondary,
        borderRadius: "10px",
        color: "white",
        borderLeft: "solid 2px " + Theme.Color.Third,
        margin: "8px",
        padding: "8px",
        alignContent: "center",
        boxShadow: " 0px 1px 2px 1px rgba(128, 128, 128, 0.4)"
      }}
    >
      <Title text={text} h1 textAlign="center" />
    </div>
  );
};
export default RootHeader;
