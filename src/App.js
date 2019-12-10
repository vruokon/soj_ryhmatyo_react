import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

//component imports:

class App extends Component {
  state = {
    maksuInfo: [
      {
        maksaja: "Martti",
        paiva: "19.8.2019",
        yritys: "Fortum",
        summa: 20.0
        // the rest of the data
      }
    ],
    headerInfo: ["Maksaja", "Paiva", "Yritys", "Summa"]
  };

  removeCharacter = index => {
    const { maksuInfo } = this.state;

    this.setState({
      maksuInfo: maksuInfo.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { maksuInfo, headerInfo } = this.state;

    return (
      <div className="container">
        <Table maksuInfo={maksuInfo} headerInfo={headerInfo} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;

//testataan toimivuutta - Perttu
