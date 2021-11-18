import React from "react";

function Descriptif(props) {
  console.log(props.data);
  return (
    <div>
      <h1>{props.data.nom}</h1>
      <h2>{props.data.type}</h2>
      <h2>{props.data.adresse}</h2>
    </div>
  );
}

export default Descriptif;
