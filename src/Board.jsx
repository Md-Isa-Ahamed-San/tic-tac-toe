import React, { useState } from "react";
import Square from "./Square";

const Board = ({ history, setHistory, value, setValue }) => {
  // console.log('arr:',arr);

  const [isX, setIsX] = useState(true);

  const checkWinner = (value) => {
    const winConditionLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditionLines.length; i++) {
      const [a, b, c] = winConditionLines[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        console.log("winner is ", value[a]);
        return value[a];
      }
    }
    return null;
  };
  let winner = checkWinner(value);
  let status = () => {
    if (winner) {
      return `Winner is: ${winner}`;
    } else if (history.length === 9 && !winner) {
      return "Match is Draw";
    } else return `Next player: ` + (isX ? "X" : "O");
  };

  const handleClick = (idx) => {
    console.log(history);
    if (value[idx] || winner) return;
    const newValues = value.slice();
    isX ? (newValues[idx] = "X") : (newValues[idx] = "O");
    setIsX(!isX);
    setValue(newValues);
    console.log("newValues:", newValues);
    if (history === null) {
      setHistory([newValues]);
    } else {
      setHistory([...history, newValues]);
    }
  };

  return (
    <>
      <h1>{status()}</h1>

      <div>
        <div className="flex">
          <Square value={value[0]} handleClick={() => handleClick(0)}></Square>
          <Square value={value[1]} handleClick={() => handleClick(1)}></Square>
          <Square value={value[2]} handleClick={() => handleClick(2)}></Square>
        </div>
        <div className="flex">
          <Square value={value[3]} handleClick={() => handleClick(3)}></Square>
          <Square value={value[4]} handleClick={() => handleClick(4)}></Square>
          <Square value={value[5]} handleClick={() => handleClick(5)}></Square>
        </div>
        <div className="flex">
          <Square value={value[6]} handleClick={() => handleClick(6)}></Square>
          <Square value={value[7]} handleClick={() => handleClick(7)}></Square>
          <Square value={value[8]} handleClick={() => handleClick(8)}></Square>
        </div>
      </div>
    </>
  );
};

export default Board;
