import React, { Component } from "react";
import "./board.css";

class Board extends Component {
  animateBlock = val => {
    let element = document.getElementById(val);
    element.classList.add("block-animation");
    setInterval(() => {
      element.classList.remove("block-animation");
    }, 500);
  };

  addRow = (start, end) => {
    let row = [];
    for (let i = start; i <= end; i++)
      row.push(
        <td>
          <button
            className="block"
            style={{ width: 100, height: 100 }}
            id={i}
            onClick={e => {
              this.props.handler(e);
              this.animateBlock(e.target.id);
            }}
          >
            {this.props.value[i - 1]}
          </button>
        </td>
      );
    return <tr>{row}</tr>;
  };

  render() {
    return (
      <div id="container">
        <table className="board">
          <tbody>
            {this.addRow(1, 3)}
            {this.addRow(4, 6)}
            {this.addRow(7, 9)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
