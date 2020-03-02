import React from "react";
import Text from "./../../../Ressources/Text";
import RoundedButton from "./../../../Components/usefull/Rounded/RoundedButton";

const MovingMenu = ({ children, smallWidth }) => {
  return (
    <div
      style={{
        top: "30px",
        position: "sticky",

        transform: smallWidth ? "rotate(90deg)" : "",
        display: smallWidth ? "flex" : ""
      }}
    >
      {children}
    </div>
  );
};
const LeftSide = ({ setPage, smallWidth }) => {
  return (
    <div
      className="leftBg"
      style={{
        width: smallWidth ? "30px" : "130px",
        boxShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
        display: "flex",
        background: "rgba(0, 0, 0, 0.1)",
        flexDirection: "column",
        padding: "10px"
      }}
    >
      <MovingMenu smallWidth={smallWidth}>
        <RoundedButton
          onClick={() => {
            setPage(Text.Accueil);
          }}
        >
          {Text.Accueil}
        </RoundedButton>
        <RoundedButton
          onClick={() => {
            setPage(Text.CV);
          }}
        >
          {Text.CV}
        </RoundedButton>
        <RoundedButton
          onClick={() => {
            setPage(Text.Documents);
          }}
        >
          {Text.Documents}
        </RoundedButton>
        <RoundedButton
          onClick={() => {
            setPage(Text.Jeux);
          }}
        >
          {Text.Jeux}
        </RoundedButton>
        <RoundedButton
          onClick={() => {
            setPage(Text.Autre);
          }}
        >
          {Text.Autre}
        </RoundedButton>
      </MovingMenu>
    </div>
  );
};
export default LeftSide;
