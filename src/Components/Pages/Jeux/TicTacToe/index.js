import React, { useState } from "react";
import RoundedBox from "../../../usefull/Rounded/RoundedBox";

function Square({ value, onClick }) {
  return (
    <RoundedBox onClick={onClick} cursor="pointer">
      <div style={{ width: "20px", height: "15px", textAlign: "center" }}>
        {value}
      </div>
    </RoundedBox>
  );
}

function Restart({ onClick }) {
  return (
    <RoundedBox onClick={onClick} cursor="pointer">
      Rejouer
    </RoundedBox>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);

  function getStatus() {
    if (winner) {
      return "Gagnant: " + winner;
    } else if (isBoardFull(squares)) {
      return "Egalité";
    } else {
      return "Joueur: " + nextSymbol;
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);

          setIsXNext(!isXNext); // toggle turns
        }}
      />
    );
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div style={{ display: "flex" }}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div style={{ display: "flex" }}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div style={{ display: "flex" }}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <RoundedBox>{getStatus()}</RoundedBox>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

export default TicTacToe;
