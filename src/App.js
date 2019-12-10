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

  render() {
    const { maksuInfo, headerInfo } = this.state;

    return (
      <div className="container">
        <Table maksuInfo={maksuInfo} headerInfo={headerInfo} />
      </div>
    );
  }
}

export default App;

//testataan toimivuutta - Perttu
