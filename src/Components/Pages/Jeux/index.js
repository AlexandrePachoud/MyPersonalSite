import React from "react";
import RoundedBox from "../../usefull/Rounded/RoundedBox";
import Title from "../../../Components/usefull/Title";
import TicTacToe from "./TicTacToe";
import PhineLoops from "./PhineLoops";
import MasterMind from "./MasterMind";
import MachineASous from "./MachineASous";

const Jeux = () => {
  return (
    <>
      <RoundedBox>
        <Title text="Machine à sous" h2 textAlign="center"></Title>
        <MachineASous />
      </RoundedBox>
      <RoundedBox>
        <Title text="TicTacToe" h2 textAlign="center"></Title>
        <TicTacToe />
      </RoundedBox>
      <RoundedBox>
        <Title text="MasterMind" h2 textAlign="center"></Title>
        <MasterMind />
      </RoundedBox>
    </>
  );
};

export default Jeux;
