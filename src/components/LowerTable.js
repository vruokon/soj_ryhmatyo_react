import React, { Component } from "react";

const TableHeader2 = props => {
  return (
    <thead>
      <tr key={"header"}>
        {props.lowerTableHeader.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

// funktio joka käy läpi taulun kohdan "Summa" ja muuttaa sen INT tyypiksi ja laskee ne yhteen
const endSum = (array) => {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + parseFloat(array[i].summa);
  }
  return count;
};

// funktio joka käy läpi taulun kohdan maksaja, jos maksaja sisältää STRING tyypin "Maija" pushaa se arrayn muuttujaan hlö1, jos ei sisällä "Maija" työntää hlö2 muuttujaan.
const laskeErotus = (array) => {
  var hlö1 = [];
  var hlö2 = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i].maksaja === "Maija") {
      hlö1.push(array[i]);
    } else {
      hlö2.push(array[i]);
    }
  }

// Tässä kohdassa luodaan muuttujiin henkilöiden kokonais summat, käyttäen  aikaisemmin luotua endSum funktiota
  var hlö1KokonaisSumma = endSum(hlö1);
  var hlö2KokonaisSumma = endSum(hlö2);
//Luodaan ehto jolla luodaan Tasaukseen tarvittava erotus
  if (hlö1KokonaisSumma > hlö2KokonaisSumma) {
    return hlö1KokonaisSumma - hlö2KokonaisSumma + "€ Maijalle";
  } else if(hlö1KokonaisSumma < hlö2KokonaisSumma) {
    return hlö2KokonaisSumma - hlö1KokonaisSumma + "€ Matille";
  } else {
    return "Maksut tasan";
  }
}

//Rakennetaan tablen ulkomuoto ja tulokset oikeille paikoilleen
const TableBody2 = props => {
  const maksuInfo = props.maksuInfo;
  var loppusumma = endSum(maksuInfo);
  var laskumäärä = maksuInfo.length;
  var Tasaus = laskeErotus(maksuInfo);
  return (
    <tbody>
      <tr>
        <td>{Tasaus}</td>
        <td>{laskumäärä}</td>
        <td>{loppusumma}</td>
      </tr>
    </tbody>);
};

class LowerTable extends Component {
  render() {
    const { maksuInfo, lowerTableHeader } = this.props;
    return (
      <table>
        <TableHeader2 lowerTableHeader={lowerTableHeader} />
        <TableBody2 maksuInfo={maksuInfo} />
      </table>
    );
  }
}

export default LowerTable;