import React, { Component } from "react";
import "./App.css";



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
  
    
    return (
      <div className="container">
        <Table maksuInfo={maksuInfo} headerInfo={headerInfo} poistaMaksu={this.poistaMaksu} />
        <Form lisaaMaksu={this.lisaaMaksu} /> 
      </div>
      
    
     
    );
  }
}

export default App;


/*state = {
        value: "Some text here",
        isInEditMode: false
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
        
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.theTextInput.value
        })
    }

    renderEditView = () => {
        return <div>
        <input
        type="text"
        defaultValue={this.state.value}
        ref="theTextInput"
        />
        <button onClick={this.changeEditMode}>Edit</button>
        <button onClick={this.updateComponentValue}>OK</button>
        </div>
    }

    renderDefaultView = () => {
        return <div onDoubleClick={this.changeEditMode}>
        {this.state.value}
    </div>
    }

    render() {
        return this.state.isInEditMode ?
        this.renderEditView() :
        this.renderDefaultView()
    }
}*/