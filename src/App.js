import "./App.css";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Completer from "./components/Completer";
import arrayData from './data/arrayq.json';
import greedyData from './data/greedyq.json';
import dpData from './data/dpq.json';
import BsqData from './data/bsq.json';
import HeapqData from './data/heapq.json';
import RecursionqData from './data/recursionq.json';
import LlqData from './data/llq.json';
import BtqData from './data/btq.json';
import BstqData from './data/bstq.json';
import SqtqData from './data/sqtq.json';
import BacktrackingqData from './data/backtrackingq.json';
import GraphqData from './data/graphq.json';

function App() {
  const [mode, setmode] = useState("light"); // Light mode by default
  const [Checked, setChecked] = useState(Array(12).fill([]));
  const [progress, setprogress] = useState(0);
  const [count, setcount] = useState(0);

  const questionData = [
    { path: "/Array and string", data: arrayData, no: 12, name: "Array" },
    { path: "/Greedy", data: greedyData, no: 1, name: "Greedy" },
    { path: "/Dp", data: dpData, no: 2, name: "Dp" },
    { path: "/Binary search", data: BsqData, no: 3, name: "Binary Search" },
    { path: "/Heaps", data: HeapqData, no: 4, name: "Heap" },
    { path: "/Recursion", data: RecursionqData, no: 5, name: "Recursion" },
    { path: "/Linked list", data: LlqData, no: 6, name: "Linked List" },
    { path: "/Binary Tree", data: BtqData, no: 7, name: "Binary Tree" },
    { path: "/Binary Search Tree", data: BstqData, no: 8, name: "Binary Search Tree" },
    { path: "/Stack and Queue", data: SqtqData, no: 9, name: "Stack and Queue" },
    { path: "/Backtracking", data: BacktrackingqData, no: 10, name: "Backtracking" },
    { path: "/Graphs", data: GraphqData, no: 11, name: "Graphs" }
  ];

  // useEffect to set mode on initial load (you can persist mode in localStorage)
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setmode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
    document.body.className = mode === "light" ? "bg-white text-black" : "bg-gray-900 text-white"; // Adjust body styles
  }, [mode]);

  return (
    <div className={mode === 'light' ? 'bg-white' : 'bg-gray-900'}>
      <Router>
        <Navbar mode={mode} setmode={setmode} />
        <Routes>
          <Route
            exact
            path=""
            element={
              count <= 99 ? (
                <Lister
                  setprogress={setprogress}
                  progress={progress}
                  Checked12={Checked[11]}
                  Checked1={Checked[0]}
                  Checked2={Checked[1]}
                  Checked3={Checked[2]}
                  Checked4={Checked[3]}
                  Checked5={Checked[4]}
                  Checked6={Checked[5]}
                  Checked7={Checked[6]}
                  Checked8={Checked[7]}
                  Checked9={Checked[8]}
                  Checked10={Checked[9]}
                  Checked11={Checked[10]}
                  count={count}
                  setcount={setcount}
                  name="Array"
                  mode={mode}
                />
              ) : (
                <Completer />
              )
            }
          ></Route>

          {questionData.map((item, index) => (
            <Route
              exact
              key={item.no}
              path={item.path}
              element={
                <Questions
                  Checked={Checked[index]}
                  no={item.no}
                  setChecked={(newState) => {
                    const updatedChecked = [...Checked];
                    updatedChecked[index] = newState;
                    setChecked(updatedChecked);
                  }}
                  mode={mode}
                  qlist={item.data}
                  name={item.name}
                />
              }
            ></Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
