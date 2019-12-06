import React, { Component } from "react";

const TableHeader = props => {
  return (
    <tr key={"header"}>
      {props.headerInfo.map((header, i) => (
        <th key={i}>{header}</th>
      ))}
    </tr>
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
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { maksuInfo, headerInfo } = this.props;
    return (
      <div>
        <TableHeader headerInfo={headerInfo} />
        <TableBody maksuInfo={maksuInfo} />
      </div>
    );
  }
}

export default Table;
