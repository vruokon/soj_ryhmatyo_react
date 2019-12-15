import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      maksaja: "Matti",
      paiva: "",
      yritys: "",
      summa: ""
    };

    this.state = this.initialState;
  }

  //Tarvitaan inputtien kanssa, mahdollista käyttää inputtien arvojen validointiin
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  //Lahettaa formin app.js:lle
  onFormSubmit = event => {
    event.preventDefault();

    this.props.lisaaMaksu(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { maksaja, paiva, yritys, summa } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Maksaja</label>
          <select name="maksaja" value={maksaja} onChange={this.handleChange}>
            <option value="Matti">Matti</option>
            <option value="Maija">Maija</option>
          </select>

        <label>Paiva</label>
        <input type="text" name="paiva" value={paiva} onChange={this.handleChange} />
        <label>Yritys</label>
        <input type="text" name="yritys" value={yritys} onChange={this.handleChange} />
        <label>Summa</label>
        <input type="text" name="summa" value={summa} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
