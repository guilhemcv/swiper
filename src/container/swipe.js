/* eslint-disable import/no-cycle */
import "./swipe.css";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import SwipeCard from "../components/Swipe-card/SwipeCard";
import LogoContext from "../contexts/LogoContext";

function Swipe() {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { logoColor, setLogoColor } = useContext(LogoContext);

  useEffect(() => {
    setLogoColor("logo-black");
    console.log(logoColor);
  });
  return (
    <div className="swipe-page">
      {/* Menu et Navigation --------------------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Carte swipe + boutons --------------------------------- */}
      <SwipeCard />
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Swipe;
