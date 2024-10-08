import "./App.css";
import Board from "./Board";
import React, { useState } from "react";
import History from "./History";
function App() {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState(Array(9).fill(null));
  const datas = {history, setHistory, value, setValue}
  const historySet = (idx) => {
    setValue(history[idx]);
  };
  // console.log("history: ", history);
  return (
    <div className="flex gap-8">
      <Board {...datas}></Board>
      <History history={history} historySet={historySet}></History>
    </div>
  );
}

export default App;
