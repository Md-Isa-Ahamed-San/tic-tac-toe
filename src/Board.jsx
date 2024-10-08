import React, { useState } from "react";
import Square from "./Square";

const Board = ({ history, setHistory, value, setValue }) => {
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
        return value[a];
      }
    }
    return null;
  };

  let winner = checkWinner(value);
  
  let status = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (history.length === 9 && !winner) {
      return "Game Draw!";
    }
    return `Next player: ${isX ? "X" : "O"}`;
  };

  const handleClick = (idx) => {
    if (value[idx] || winner) return;
    const newValues = value.slice();
    isX ? (newValues[idx] = "X") : (newValues[idx] = "O");
    setIsX(!isX);
    setValue(newValues);
    setHistory([...history, newValues]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className={`text-2xl font-bold mb-6 ${
        winner 
          ? 'text-green-600' 
          : history.length === 9 && !winner 
            ? 'text-orange-500' 
            : 'text-gray-700'
      }`}>
        {status()}
      </h1>

      <div className="grid gap-1">
        {[0, 3, 6].map((row, i) => (
          <div key={i} className="flex">
            {[0, 1, 2].map((col) => (
              <Square
                key={row + col}
                value={value[row + col]}
                handleClick={() => handleClick(row + col)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
