import React, { useState } from "react";
import RoundedBox from "../../../usefull/Rounded/RoundedBox";
const animationSettings = [
  { duree: 4, distance: 50 },
  { duree: 5, distance: 70 },
  { duree: 7, distance: 100 }
];
const nbObjects =
  Math.max(
    animationSettings[0].distance,
    animationSettings[1].distance,
    animationSettings[2].distance
  ) + 5;

const obj = [0, 1, 2, 3, 4];
const CaseWidth = 100;
const CaseHeight = 70;
const Myease = "cubic-bezier(.52,.19,0,1)";
const MyeaseSmallBackTrack = "cubic-bezier(.87,.28,0,1.07)";
const positions = [
  {
    coordonnees: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2]
    ],
    multiplier: 100
  },
  {
    coordonnees: [
      [0, 1],
      [1, 1],
      [2, 1]
    ],
    multiplier: 10
  },
  {
    coordonnees: [
      [0, 0],
      [1, 1],
      [2, 2]
    ],
    multiplier: 5
  },
  {
    coordonnees: [
      [0, 2],
      [1, 1],
      [2, 0]
    ],
    multiplier: 5
  },

  {
    coordonnees: [
      [0, 0],
      [1, 0],
      [2, 0]
    ],
    multiplier: 3
  },

  {
    coordonnees: [
      [0, 2],
      [1, 2],
      [2, 2]
    ],
    multiplier: 3
  }
];

const LaunchButton = ({ reset }) => {
  const activateAnim = (id, secondes, distance) => {
    document.getElementById(id).animate(
      [
        // keyframes
        { transform: "translate(0px,0px)" },
        { transform: "translate(0px,-" + distance * CaseHeight + "px)" }
      ],
      {
        // timing options
        duration: secondes * 700,
        easing: Myease
      }
    );
    document.getElementById(id).style.transform =
      "translate(0px,-" + distance * CaseHeight + "px)";
  };
  return (
    <RoundedBox
      onClick={() => {
        reset();
        activateAnim(
          "slot1",
          animationSettings[0].duree,
          animationSettings[0].distance
        );
        activateAnim(
          "slot2",
          animationSettings[1].duree,
          animationSettings[1].distance
        );
        activateAnim(
          "slot3",
          animationSettings[2].duree,
          animationSettings[2].distance
        );
      }}
      cursor="pointer"
    >
      <div style={{ textAlign: "center" }}>launch</div>
    </RoundedBox>
  );
};

const ScoreDiv = ({ score }) => {
  return (
    <RoundedBox>
      <div style={{ textAlign: "center" }}>{score}</div>
    </RoundedBox>
  );
};

const generate = initial => {
  let superList = initial;
  for (let index = 3; index < nbObjects; index++) {
    superList.push(obj[Math.floor(Math.random() * obj.length)]);
  }
  return superList;
};

const MachineASous = () => {
  let [score, setScore] = useState(0);
  let [bet, setBet] = useState(1);
  let [current33, setCurrent] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  let [superLists, setSuperLists] = useState(current33);
  const reset = () => {
    let tmp = [];
    tmp.push(generate(current33[0]));
    tmp.push(generate(current33[1]));
    tmp.push(generate(current33[2]));

    setSuperLists(tmp);
    const newCurrent33 = [
      [
        tmp[0][animationSettings[0].distance],
        tmp[0][animationSettings[0].distance + 1],
        tmp[0][animationSettings[0].distance + 2]
      ],
      [
        tmp[1][animationSettings[1].distance],
        tmp[1][animationSettings[1].distance + 1],
        tmp[1][animationSettings[1].distance + 2]
      ],
      [
        tmp[2][animationSettings[2].distance],
        tmp[2][animationSettings[2].distance + 1],
        tmp[2][animationSettings[2].distance + 2]
      ]
    ];
    current33 = newCurrent33;
    setCurrent(newCurrent33);
  };
  const checkWin = current33 => {
    //check win
    var Winningpossibility = [];
    positions.forEach(possibility => {
      var win = true;
      let WinningValue =
        current33[possibility.coordonnees[0][0]][possibility.coordonnees[0][1]];
      possibility.coordonnees.forEach(coordonnee => {
        if (
          win === false ||
          current33[coordonnee[0]][coordonnee[1]] !== WinningValue
        ) {
          win = false;
        }
      });
      if (win) {
        Winningpossibility.push(possibility);
      }
    });
    //changing score
    if (Winningpossibility.length > 0) {
      let gain = 0;
      Winningpossibility.forEach(winposs => {
        gain += bet * winposs.multiplier;
      });
      setScore(score + gain);
    }
  };
  return (
    <>
      <Slots superLists={superLists}></Slots>
      <LaunchButton
        reset={() => {
          reset();
          checkWin(current33);
        }}
      ></LaunchButton>
      <ScoreDiv score={score}></ScoreDiv>
    </>
  );
};
const Slots = ({ superLists }) => {
  return (
    <>
      <div>
        <WinningHightLight />
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Slot superList={superLists[0]} number={1} objets={obj} />
          <Slot superList={superLists[1]} number={2} objets={obj} />
          <Slot superList={superLists[2]} number={3} objets={obj} />
        </div>
      </div>
    </>
  );
};

//const RawColor = ["red", "blue", "yellow", "green", "violet"];
//const RainBowDash = ["#ee4035", "#f37736", "#fdf498 ", "#7bc043", "#0392cf"];
const MetroUIColors = ["#d11141", "#00b159", "#00aedb", "#f37735", "#ffc425"];
const colors = MetroUIColors;
const Slot = ({ number, superList }) => {
  return (
    <div
      style={{
        margin: "5px",
        borderRadius: "10px",
        width: CaseWidth + "px",
        height: CaseHeight * 3 + "px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        scrollBehavior: "smooth"
      }}
      className="slot"
    >
      <div style={{ width: "100%" }} id={"slot" + number}>
        {superList.map((value, index) => {
          let id = "object" + number + "." + index;
          return (
            <div
              key={"" + number + index}
              style={{
                width: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                minHeight: CaseHeight + "px",
                maxHeight: CaseHeight + "px",
                backgroundColor: colors[value]
              }}
              id={id}
            >
              {/*{index}:{value}*/}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MachineASous;

const WinningHightLight = () => {
  const HightLight = ({ id }) => {
    return (
      <div
        id={id}
        style={{
          border: "5px solid black",
          width: CaseWidth * 3 + 25 + "px",
          //height: CaseHeight - 5 + "px",
          height: CaseHeight - 2 + "px",
          marginBottom: "-5px"
        }}
      >
        {id}
      </div>
    );
  };
  return (
    <>
      {/*
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          alignContent: "stretch",
          flexFlow: "column nowrap"
        }}
      >
        <HightLight id="upperWinningHightLight" />
        <HightLight id="middleWinningHightLight" />
        <HightLight id="bottomWinningHightLight" />
      </div>
       <div
        style={{
          position: "absolute",

          transform: "rotate(30deg)"
        }}
      >
        <HightLight id="diagWinningHightLight"></HightLight>
      </div>*/}
    </>
  );
};
