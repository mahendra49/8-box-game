import React, { Component } from "react";
import Table from "./table";

const START = 1;
const END = 9;

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      message: " ",
      grid: []
    };
    // No need since arrow function don't need binding
  }

  componentWillMount() {
    let grid = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    grid = shuffle(grid);
    this.setState({ grid, arr: grid });
  }

  handler1 = e => {
    var sam = e.target.id;
    sam = parseInt(sam, 10);
    const neightbours = getNeighbours(sam);
    let emptyBox = neightbours.find(neightbour => isElementEmpty(neightbour));
    if (emptyBox) {
      swapElements(emptyBox, sam);
    }
    this.winChecker();
  };

  /* handler = e => {
    var sam = e.target.id;
    sam = parseInt(sam, 10);

    if (sam === 1 || sam === 3) {
      if (document.getElementById(2).innerHTML === "") {
        document.getElementById(2).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(3 + sam).innerHTML === "") {
        document.getElementById(3 + sam).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
    }

    if (sam === 7 || sam === 9) {
      if (document.getElementById(8).innerHTML === "") {
        document.getElementById(8).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam - 3).innerHTML === "") {
        document.getElementById(sam - 3).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
    }

    if (sam === 5) {
      if (document.getElementById(sam - 1).innerHTML === "") {
        document.getElementById(sam - 1).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam + 1).innerHTML === "") {
        document.getElementById(sam + 1).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam - 3).innerHTML === "") {
        document.getElementById(sam - 3).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam + 3).innerHTML === "") {
        document.getElementById(sam + 3).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
    }

    if (sam === 2 || sam === 8) {
      if (document.getElementById(sam - 1).innerHTML === "") {
        document.getElementById(sam - 1).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam + 1).innerHTML === "") {
        document.getElementById(sam + 1).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (sam === 8) {
        if (document.getElementById(sam - 3).innerHTML === "") {
          document.getElementById(sam - 3).innerHTML = e.target.innerHTML;
          e.target.innerHTML = "";
        }
      } else {
        if (document.getElementById(sam + 3).innerHTML === "") {
          document.getElementById(sam + 3).innerHTML = e.target.innerHTML;
          e.target.innerHTML = "";
        }
      }
    }

    if (sam === 4 || sam === 6) {
      if (document.getElementById(sam - 3).innerHTML === "") {
        document.getElementById(sam - 3).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (document.getElementById(sam + 3).innerHTML === "") {
        document.getElementById(sam + 3).innerHTML = e.target.innerHTML;
        e.target.innerHTML = "";
      }
      if (sam === 4) {
        if (document.getElementById(sam + 1).innerHTML === "") {
          document.getElementById(sam + 1).innerHTML = e.target.innerHTML;
          e.target.innerHTML = "";
        }
      } else {
        if (document.getElementById(sam - 1).innerHTML === "") {
          document.getElementById(sam - 1).innerHTML = e.target.innerHTML;
          e.target.innerHTML = "";
        }
      }
    }

    this.winChecker();
  }; */

  winChecker = () => {
    let count = 0;
    for (let i = 1; i <= 8; i++) {
      if (i == document.getElementById(i).innerHTML) count++;
      else break;
    }
    if (count === 8) this.setState({ message: "Winner!!!" });
  };

  render() {
    return (
      <div>
        <Table value={this.state.grid} handler={this.handler1} />
        <h1 className="text-center">{this.state.message}</h1>
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
