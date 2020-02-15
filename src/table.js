import React, { Component } from "react";

class Table extends Component {
  addRow = (start, end) => {
    let row = [];
    for (let i = start; i <= end; i++)
      row.push(
        <td>
          <button
            style={{ width: 100, height: 100 }}
            id={i}
            onClick={e => this.props.handler(e)}
          >
            {this.props.value[i - 1]}
          </button>
        </td>
      );
    return <tr>{row}</tr>;
  };

  render() {
    // if make row is in render then everytime we are registering a function:

    return (
      <div align="center">
        <table style={{ marginTop: 50 }}>
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

export default Table;
