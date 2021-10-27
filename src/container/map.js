import "./map.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import GoogleMap from "../components/GoogleMap/GoogleMap";

function Map() {
  return (
    <div className="map">
      {/* Menu et Navigation --------------------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Carte + sélection catégorie --------------------------------- */}
      <GoogleMap />
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}

      {/* ---------------------------------------------------- */}
    </div>
  );
}
export default Map;
