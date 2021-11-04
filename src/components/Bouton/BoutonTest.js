import React from "react";
import "./BoutonTest.css";

function buttonOnClick() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="bouton">
      <button onClick={handleClick}>Se connecter</button>
    </div>
  );
}

export default buttonOnClick;