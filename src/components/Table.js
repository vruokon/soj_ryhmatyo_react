import React, { Component } from "react";
//import Button from '@material-ui/core/Button';
//import EditIcon from 'material-ui/svg-icons/image/edit';
//import EditButton from 'react-edit-button'

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
  const rows = props.maksuInfo.map((row, i,) => {
    return (
      <tr key={i}>
        <td>{row.maksaja}</td>
        <td>{row.paiva}</td>
        <td>{row.yritys}</td>
        <td>{row.summa}</td>
        <td className="buttonSarake">
        <button onClick={() => props.poistaMaksu(i)}>Poista</button>     
        </td>
          <td className="Editbutton">
          <button onDoubleClick>Edit</button> 
        </td>
         </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { maksuInfo, headerInfo, poistaMaksu } = this.props;

  

    return (
      <table>
        <TableHeader headerInfo={headerInfo} />
        <TableBody maksuInfo={maksuInfo} poistaMaksu={poistaMaksu} />  
      </table>
      
    );
  }
}

export default Table;
