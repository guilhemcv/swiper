/* eslint-disable import/no-cycle */
import "./swipe.css";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import SwipeCard from "../components/Swipe-card/SwipeCard";
import LogoContext from "../contexts/LogoContext";
import InputSelect from "../components/InputSelect/InputSelect";

function Swipe({ markers }) {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { logoColor, setLogoColor } = useContext(LogoContext);
  const [value, setValue] = React.useState("all");

  /**
   * Fonction qui permet de filtrer les favoris par catégorie
   * @param {*} event
   */

  function handleChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    setLogoColor("logo-black");
  });
  return (
    <div className="swipe-page">
      {/* Menu et Navigation --------------------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Carte swipe + boutons --------------------------------- */}
      <InputSelect value={value} handleChange={handleChange} />
      <SwipeCard markers={markers} value={value} />
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Swipe;
