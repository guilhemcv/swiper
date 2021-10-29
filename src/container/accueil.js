/* eslint-disable import/no-cycle */
import "./accueil.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";

function Accueil() {
  return (
    <div className="accueil">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />
      <h1>page accueil</h1>
      {/* ---------------------------------------------------- */}

      {/* Header (image accueil et phrase d'accroche) -------- */}

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
