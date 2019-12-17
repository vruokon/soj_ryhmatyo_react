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
<<<<<<< HEAD
        <button onClick={() => props.poistaMaksu(i)}>Poista</button>     
          <tr key={e}>
          <td className="Editbutton">
          <button onDoubleClick={() => props.EditButton()}>Edit</button>
          </td>
          </tr>
=======
        <button onClick={() => props.poistaMaksu(i)}>Poista</button> 
        </td>    
          
        <td className="Editbutton">
        <button>Muokkaa</button>
>>>>>>> c78d27c08946cf9c43549656ce5a82394e51bbd2
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
