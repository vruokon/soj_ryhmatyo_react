import React, { Component } from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr key={"header"}>
        {props.headerInfo.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.maksuInfo.map((row, i) => {
    return (
      <tr key={i}>
        <td>{row.maksaja}</td>
        <td>{row.paiva}</td>
        <td>{row.yritys}</td>
        <td>{row.summa}</td>
        <td>
          <button onClick={() => props.removeCharacter(i)}>X</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { maksuInfo, headerInfo, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader headerInfo={headerInfo} />
        <TableBody maksuInfo={maksuInfo} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
