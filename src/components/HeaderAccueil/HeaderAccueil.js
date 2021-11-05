import React from "react";
import "./HeaderAccueil.css";

function HeaderAccueil() {
  return (
    <div>
      <div className="header-photo"></div>
      <div className="header-text-mobile">
        <h1 className="header-titre">
          On fait quoi
          <br />
          ce weekend ?
        </h1>
      </div>
      <div className="header-text-desktop">
        <h1 className="titre-bureau"> On fait quoi ce weekend ?</h1>
      </div>
    </div>
  );
}

export default HeaderAccueil;
