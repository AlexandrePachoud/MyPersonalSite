import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Theme from "./Ressources/Theme";
import Text from "./Ressources/Text";
import LeftSide from "./Components/Pages/LeftSide";
import RootHeader from "./Components/Pages/RootHeader";
import RightSideContener from "./Components/Pages/RightSideContainer";
import Accueil from "./Components/Pages/Accueil";
import CV from "./Components/Pages/CV";
import Jeux from "./Components/Pages/Jeux";
import Autre from "./Components/Pages/Autre";
import Document from "./Components/Pages/Document";

const MetaDiv = ({ children }) => {
  const height = window.innerHeight;
  return (
    <div
      id="metadiv"
      style={{
        width: "100%",
        minWidth: "min-content",
        minHeight: height,
        margin: "0px",
        font: "16px Roboto",
        background: Theme.Color.Primary,
        display: "flex",
        flexDirection: "row",
        backgroundColor: Theme.Color.Primary,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(360,683,347)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23" +
          Theme.Color.Polygon +
          "'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      {children}
    </div>
  );
};
const FlexContainer = ({ children, flexibility }) => {
  return (
    <div
      style={{
        flexGrow: flexibility,
        flexShrink: flexibility
      }}
    >
      {children}
    </div>
  );
};
const Root = () => {
  const [page, setPage] = useState(Text.Jeux);
  const [polygonColor, setPolygonColor] = useState("000000");
  switch (page) {
    case Text.Accueil:
      Theme.Color.Secondary = "red";
      Theme.Color.Third = "darkred";
      Theme.Color.Polygon = "cc0000";
      break;
    case Text.Autre:
      Theme.Color.Secondary = "#" + polygonColor;
      Theme.Color.Third = "#" + polygonColor;
      Theme.Color.Polygon = polygonColor;
      break;
    case Text.CV:
      Theme.Color.Secondary = "RoyalBlue";
      Theme.Color.Third = "darkblue";
      Theme.Color.Polygon = "2020ff";
      break;
    case Text.Documents:
      Theme.Color.Secondary = "Green";
      Theme.Color.Third = "darkgreen";
      Theme.Color.Polygon = "008000";
      break;
    case Text.Jeux:
      Theme.Color.Secondary = "violet";
      Theme.Color.Third = "darkviolet";
      Theme.Color.Polygon = "9400d3";
      break;
    default:
      Theme.Color.Secondary = "black";
      Theme.Color.Third = "black";
      Theme.Color.Polygon = "000000";
  }
  const width = window.innerWidth;
  let smallWidth = false;
  if (width < 500) smallWidth = true;
  return (
    <MetaDiv>
      <FlexContainer flexibility={0}>
        <LeftSide setPage={setPage} smallWidth={smallWidth} />
      </FlexContainer>
      <FlexContainer flexibility={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <RightSideContener>
            <RootHeader text={page} />
            {page === Text.Accueil ? (
              <Accueil></Accueil>
            ) : page === Text.CV ? (
              <CV></CV>
            ) : page === Text.Jeux ? (
              <Jeux></Jeux>
            ) : page === Text.Autre ? (
              <Autre setPolygonColor={setPolygonColor}></Autre>
            ) : page === Text.Documents ? (
              <Document></Document>
            ) : (
              Text.Error
            )}
          </RightSideContener>
        </div>
      </FlexContainer>
    </MetaDiv>
  );
};

// ========================================

ReactDOM.render(<Root />, document.getElementById("root"));
