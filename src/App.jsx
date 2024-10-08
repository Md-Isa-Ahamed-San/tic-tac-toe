import "./App.css";
import Board from "./Board";
import React, { useState } from "react";
import History from "./History";
const App = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState(Array(9).fill(null));
  const datas = { history, setHistory, value, setValue };
  
  const historySet = (idx) => {
    setValue(history[idx]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          <Board {...datas} />
          <History history={history} historySet={historySet} />
        </div>
      </div>
    </div>
  );
};

export default App;
