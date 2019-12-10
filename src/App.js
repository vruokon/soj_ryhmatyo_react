import React, { Component } from "react";
import "./App.css";

//component imports:
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
  state = {
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

//testataan toimivuutta - Perttu
