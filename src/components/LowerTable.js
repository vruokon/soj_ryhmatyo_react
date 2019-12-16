import React, { Component } from "react";

const TableHeader2 = props => {
    return (
      <thead>
        <tr key={"header"}>
          {props.lowerTableHeader.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
    );
  };

const TableBody2 = props => {
    const rows = props.summary.map((row, i) => {
      return (
        <tr key={i}>
          <td>{row.tasaus}</td>
          <td>{row.laskuMäärä}</td>
          <td>{row.loppuSumma}</td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

class LowerTable extends Component{
    render() {
        const {summary, lowerTableHeader} = this.props;
        return (
          <table>
            <TableBody2 summary= {summary}/>
            <TableHeader2 lowerTableHeader= {lowerTableHeader}/>
          </table>
        );
      }
}

export default LowerTable;