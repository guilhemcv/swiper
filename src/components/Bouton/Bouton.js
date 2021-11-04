import React from "react";
import "./Bouton.css";

function ButtonClick() {
  return (
    <div className="buttonclick">
      <div className="buttonCompte">
        <button onClick>Créer un compte</button>
      </div>
      <div className="buttonConnection">
        <button onClick={ButtonClick}>Se connecter</button>
      </div>
    </div>
  );
}

export default ButtonClick;
