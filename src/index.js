import React, { useState } from "react";
import ReactDOM from "react-dom";
// import store from "./redux/store.js";
import "./index.css";

// console.log("Initial state: ", store.getState());

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setxIsNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "x" : "o";
    setSquares(newSquares);
    setxIsNext(!xIsNext);
  };
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };

  const status = `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div
      style={{
        backgroundColor: "darkred",
        margin: 10,
        padding: 20,
      }}
    >
      <div className="status">
        <span className="flex-item">{status}</span>
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Game = () => {
  return (
    <div className="game">
      <span class="flex-item">Tic-Tac-Toe</span>
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));
