import React, { Component } from "react";
import Board from "./board";

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      message: ""
    };
  }

  componentWillMount() {
    let grid = shuffle([1, 2, 3, 4, 5, 6, 7, 8, ""]);
    this.setState({ grid });
  }

  handler1 = e => {
    const sam = parseInt(e.target.id, 10);
    const neightbours = getNeighbours(sam);
    let emptyBox = neightbours.find(neightbour => isElementEmpty(neightbour));
    if (emptyBox) {
      swapElements(emptyBox, sam);
    }
    this.winChecker();
  };

  winChecker = () => {
    let count = 0;
    for (let i = 1; i <= 8; i++) {
      if (i == document.getElementById(i).innerHTML) count++;
      else break;
    }
    if (count === 8) this.setState({ message: "Winner!!!" });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Board grid={this.state.grid} handler={this.handler1} />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

const getNeighbours = val => {
  let neightbours = [];
  switch (val) {
    case 1:
      neightbours = [2, 4];
      break;
    case 2:
      neightbours = [1, 3, 5];
      break;
    case 3:
      neightbours = [2, 6];
      break;
    case 4:
      neightbours = [1, 5, 7];
      break;
    case 5:
      neightbours = [2, 4, 6, 8];
      break;
    case 6:
      neightbours = [3, 5, 9];
      break;
    case 7:
      neightbours = [4, 8];
      break;
    case 8:
      neightbours = [7, 9, 5];
      break;
    case 9:
      neightbours = [8, 6];
      break;
    default:
      break;
  }
  return neightbours;
};

// Helper functions
const swapElements = (arg1, arg2) => {
  const arg1Value = document.getElementById(arg1).innerHTML;
  const arg2Value = document.getElementById(arg2).innerHTML;
  document.getElementById(arg1).innerHTML = arg2Value;
  document.getElementById(arg2).innerHTML = arg1Value;
};

const isElementEmpty = val => {
  //console.log(document.getElementById(val).innerHTML === "");
  if (document.getElementById(val).innerHTML === "") return true;
  return false;
};

// this will also be useful to reset the game
const shuffle = array => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export default App;
