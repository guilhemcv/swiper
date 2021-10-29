import "./accueil.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import Avis from "../components/Avis/Avis";
import Carte from "../components/Carte/Carte";

function Accueil() {
  return (
    <div className="accueil">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />

      {/* ---------------------------------------------------- */}

      {/* Header (image accueil et phrase d'accroche) -------- */}

      {/* ---------------------------------------------------- */}

      {/* Espace cartes texte uniquement --------------------- */}
      <Carte />

      {/* ---------------------------------------------------- */}

      {/* Espace cartes textes + images ---------------------- */}
      <Avis />

      {/* ---------------------------------------------------- */}

      {/* Footer ---------------------------------------------- */}

      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Accueil;
