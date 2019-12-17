import React, { Component } from "react";
import "./App.css";



//component imports:
import Table from "./components/Table";
import Form from "./components/Form";
import LowerTable from "./components/LowerTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      maksuInfo: [],
      headerInfo: ["Maksaja", "Paiva", "Yritys", "Summa"],
      
      lowerTableHeader: ["Tasaus", "Laskumäärä", "Kokonais summa"]
    };
  }
  
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
    const { maksuInfo, headerInfo, lowerTableHeader } = this.state;
    //Tässä vähän yritettiin tehdä edit nappia.
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
        <LowerTable lowerTableHeader={lowerTableHeader} maksuInfo={maksuInfo} />
        <Form lisaaMaksu={this.lisaaMaksu} />
      </div>
    );
  }
}

export default App;

//Toinen edit nappulan malli
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