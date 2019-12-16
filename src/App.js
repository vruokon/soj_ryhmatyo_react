import React, { Component } from "react";
import "./App.css";
//import EditButton from 'react-edit-button'

//component imports:
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
  state = {
    editMode:false,
    maksuInfo: [
      {
        maksaja: "Esimerkki",
        paiva: "19.8.2019",
        yritys: "Fortum",
        summa: 20.0
        // the rest of the data
      }
    ],
    headerInfo: ["Maksaja", "Paiva", "Yritys", "Summa"]
  };

  
  /*onInputChange = (e) => {
    this.setState({ text: e.target.value})
  }

  handleEditButtonClick = () => {
    this.setState({ editMode: true})
  }
  
  handleOnContainerClick = () => {
    console.log('app element click')
    this.setState({ editMode: true})
  }
  
  onAccept = (text) => {
    this.setState({ text })
  }

  onReject = (text) => {
    console.log('do nothing')
    this.setState({ text, editMode: false})
  }
 */

  poistaMaksu = index => {
    const { maksuInfo } = this.state;

    this.setState({
      maksuInfo: maksuInfo.filter((maksaja, i) => {
        return i !== index;
      })
    });
  };

  lisaaMaksu = maksu => {
    this.setState({ maksuInfo: [...this.state.maksuInfo, maksu] });
  };

  

  render() {
    const { maksuInfo, headerInfo } = this.state;
    /*const EditButtonProps = {
      // inputProps = {
      //   value: this.state.text,
      //   placeholder: 'Enter text',
      //   onChange: this.handleInputChange,
      // },
      // editButtonProps = {
      //   text: 'Edit',
      //   icon: undefined,
      // },
      // containerProps = {
      //   // any properties you want to add to the container div element
      // },
      // onContainerClick: this.handleOnContainerClick,
      // onEditButtonClick: this.handleEditButtonClick,
      // hideEditButton: true,
      // editMode: this.state.editMode,
      onAccept: this.onAccept,
      // onReject: this.onReject,
      //hoverToShowEditButton: true,
    }

    <EditButton { ...EditButtonProps }>
        <span>{ this.state.text }</span>
      </EditButton>
*/
    return (
      <div className="container">
        <Table maksuInfo={maksuInfo} headerInfo={headerInfo} poistaMaksu={this.poistaMaksu} />
        <Form lisaaMaksu={this.lisaaMaksu} /> 
      </div>
      
      
    
    
    
     
    );
  }
}

export default App;


