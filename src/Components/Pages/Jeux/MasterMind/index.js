import React, { useState } from "react";
import RoundedBox from "../../../usefull/Rounded/RoundedBox";

const Ligne = ({ data, setData, result, fixed, hide, onSubmit, variation }) => {
  const style = {
    width: "20px",
    height: "20px",
    margin: "5px",
    borderRadius: "100%",
    textAlign: "center"
  };
  const colors4 = ["blue", "green", "yellow", "red"];
  const colors6 = ["blue", "green", "yellow", "orange", "red", "darkviolet"];
  const colors10 = [
    "blue",
    "rgb(27, 133, 255)",
    "green",
    "yellowgreen",
    "yellow",
    "orange",
    "orangered ",
    "red",
    "darkred ",
    "darkviolet"
  ];
  let colors;
  switch (variation) {
    case 4:
      colors = colors4;
      break;
    case 6:
      colors = colors6;
      break;
    case 10:
      colors = colors10;
      break;
    default:
      break;
  }

  return (
    <RoundedBox>
      <div style={{ display: "flex" }}>
        {data.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                ...style,
                background: hide ? "#222222" : colors[ele],
                color: "white",
                cursor: fixed ? "auto" : "pointer"
              }}
              onClick={() => {
                if (!fixed) {
                  let copy = Array.from(data);
                  copy[index] = (ele + 1) % variation;

                  setData(copy);
                }
              }}
            >
              {hide ? "?" : ""}
            </div>
          );
        })}
        {result ? (
          <>
            <div
              style={{
                ...style,
                background: "red"
              }}
            >
              {result[0]}
            </div>
            <div
              style={{
                ...style,
                background: "orange"
              }}
            >
              {result[1]}
            </div>
            <div
              style={{
                ...style,
                background: "green"
              }}
            >
              {result[2]}
            </div>
          </>
        ) : (
          <div
            onClick={() => onSubmit(data)}
            style={{
              ...style,
              width: "80px",
              borderRadius: "10px",
              backgroundColor: "#222222",
              color: "white",
              cursor: "pointer"
            }}
          >
            submit
          </div>
        )}
      </div>
    </RoundedBox>
  );
};

const MasterMind = () => {
  const taille = 4;
  const variation = 6;
  let tmp = [];
  for (let index = 0; index < taille; index++) {
    tmp.push(Math.floor(Math.random() * variation));
  }
  const [solution, setSolution] = useState(tmp);
  const reset = () => {
    let tmp = [];
    for (let index = 0; index < taille; index++) {
      tmp.push(Math.floor(Math.random() * variation));
    }
    setSolution(tmp);
    return tmp;
  };
  return (
    <>
      <UnderMasterMind
        solution={solution}
        reset={reset}
        variation={variation}
        taille={taille}
      />
    </>
  );
};
const UnderMasterMind = ({ solution, taille, reset, variation }) => {
  let prop = [];
  solution.forEach(element => {
    prop.push(0);
  });
  const [data, setData] = useState([]);
  const [newLigne, SetNewLigne] = useState(prop);
  const [won, setWon] = useState(false);
  const getResult = data => {
    let green = 0;
    let orange = 0;
    let red = 0;
    let visitedDataIndex = [];
    let visitedSolutionIndex = [];
    data.forEach((element, index) => {
      if (solution[index] === element) {
        green += 1;
        visitedDataIndex.push(index);
        visitedSolutionIndex.push(index);
      }
    });
    data.forEach((element, index) => {
      solution.forEach((element2, index2) => {
        if (element === element2 && index !== index2) {
          let vu = false;
          visitedDataIndex.forEach(index3 => {
            if (index3 === index) {
              vu = true;
            }
          });
          visitedSolutionIndex.forEach(index3 => {
            if (index3 === index2) {
              vu = true;
            }
          });

          if (!vu) {
            orange += 1;
            visitedDataIndex.push(index);
            visitedSolutionIndex.push(index2);
          }
        }
      });
    });
    red = data.length - orange - green;
    return [red, orange, green];
  };
  return (
    <>
      {won ? (
        <Ligne
          fixed
          data={solution}
          variation={variation}
          result={getResult(solution)}
        />
      ) : (
        <Ligne
          fixed
          hide
          data={solution}
          variation={variation}
          result={getResult(solution)}
        />
      )}
      {data.map((ele, index) => {
        return (
          <Ligne
            key={index}
            fixed
            data={ele}
            variation={variation}
            result={getResult(ele)}
          />
        );
      })}

      {won ? (
        <RoundedBox>
          <div style={{ display: "flex" }}></div>
          <div style={{ textAlign: "center" }}>
            Gagné en {data.length} coup{data.length === 1 ? "" : "s"}
          </div>
        </RoundedBox>
      ) : (
        <Ligne
          variation={variation}
          data={newLigne}
          setData={SetNewLigne}
          onSubmit={submission => {
            let copy = Array.from(data);
            copy.push(submission);
            setData(copy);
            if (
              getResult(submission)[1] === 0 &&
              getResult(submission)[0] === 0
            ) {
              setWon(true);
            }
          }}
        />
      )}
      <div
        style={{
          minWidth: "20px",
          height: "20px",
          margin: "5px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "1px 1px 2px 1px rgba(128, 128, 128, 0.4)",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        }}
        onClick={() => {
          let prop2 = [];
          for (let index = 0; index < taille; index++) {
            prop2.push(0);
          }
          setData([]);
          SetNewLigne(prop2);
          setWon(false);
          reset();
        }}
      >
        Reset
      </div>
      <div></div>
    </>
  );
};

export default MasterMind;
