import "./accueil.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import HeaderAccueil from "../components/HeaderAccueil/HeaderAccueil";

function Accueil() {
  return (
    <div className="accueil">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />

      {/* ---------------------------------------------------- */}

      {/* Header (image accueil et phrase d'accroche) -------- */}
      <HeaderAccueil />
      {/* ---------------------------------------------------- */}

      {/* Espace cartes texte uniquement --------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Espace cartes textes + images ---------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Footer ---------------------------------------------- */}

      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Accueil;
