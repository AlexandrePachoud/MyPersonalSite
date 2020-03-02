import React, { useState } from "react";

import RoundedBox from "../../usefull/Rounded/RoundedBox";
import Theme from "../../../Ressources/Theme";
const Autre = ({ setPolygonColor }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
  const [red, setRed] = useState("00");
  const [green, setGreen] = useState("00");
  const [blue, setBlue] = useState("00");
  setPolygonColor(red + green + blue);
  return (
    <>
      <RoundedBox>
        <div
          onClick={() => {
            setRed(rgbToHex(getRandomInt(256)));
            setGreen(rgbToHex(getRandomInt(256)));
            setBlue(rgbToHex(getRandomInt(256)));
            setPolygonColor(red + green + blue);
          }}
          className="roundedBox"
          style={{
            cursor: "pointer",
            boxShadow: "1px 1px 2px 1px rgba(128, 128, 128, 0.4)",
            border: "solid 3px " + Theme.Color.Secondary
          }}
        >
          Randomize Background Color
        </div>

        <div
          style={{
            width: "100%",
            borderRadius: "10px",
            textAlign: "center",
            background: Theme.Color.Secondary,
            textTransform: "uppercase",

            color:
              Number.parseInt(red, 16) +
                Number.parseInt(green, 16) +
                Number.parseInt(blue, 16) <
              (256 * 3) / 2
                ? "white"
                : "black"
          }}
        >
          <div>#{red + green + blue}</div>
        </div>
      </RoundedBox>
    </>
  );
};
export default Autre;
