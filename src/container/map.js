import "./map.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import Footer from "../components/Footer/Footer";

function Map() {
  return (
    <div className="map">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />

      {/* ---------------------------------------------------- */}

      {/* Carte + sélection catégorie --------------------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}
export default Map;
