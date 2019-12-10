import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      maksaja: "",
      paiva: "",
      yritys: "",
      summa: ""
    };

    this.state = this.initialState;
  }

  kasitteleMuutos = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

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
        <input type="text" name="maksaja" value={maksaja} onChange={this.kasitteleMuutos} />
        <label>Paiva</label>
        <input type="text" name="paiva" value={paiva} onChange={this.kasitteleMuutos} />
        <label>Yritys</label>
        <input type="text" name="yritys" value={yritys} onChange={this.kasitteleMuutos} />
        <label>Summa</label>
        <input type="text" name="summa" value={summa} onChange={this.kasitteleMuutos} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
