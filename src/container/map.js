import "./map.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import GoogleMapSelection from "../components/GoogleMapSelection/GoogleMapSelection";
import Footer from "../components/Footer/Footer";

function Map() {
  return (
    <div className="map">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />
      {/* ---------------------------------------------------- */}

      {/* Carte + sélection catégorie --------------------------------- */}
      <div className="selectionAndMap">
        <GoogleMapSelection />
        <GoogleMap />
      </div>
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}
export default Map;
