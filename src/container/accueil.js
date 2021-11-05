/* eslint-disable import/no-cycle */
import "./accueil.css";
import React from "react";
// import MenuBurger from "../components/MenuBurger/MenuBurger";
import HeaderAccueil from "../components/HeaderAccueil/HeaderAccueil";
import Footer from "../components/Footer/Footer";
import Avis from "../components/Avis/Avis";
import Carte from "../components/Carte/Carte";
// import Logo from "../components/Logo/Logo";

function Accueil() {
  return (
    <div className="accueil">
      {/* Menu et Navigation --------------------------------- */}

      {/* ---------------------------------------------------- */}

      {/* Header (image accueil et phrase d'accroche) -------- */}
      <HeaderAccueil />
      {/* ---------------------------------------------------- */}

      {/* Espace cartes texte uniquement --------------------- */}
      <Carte />

      {/* ---------------------------------------------------- */}

      {/* Espace cartes textes + images ---------------------- */}
      <Avis />

      {/* ---------------------------------------------------- */}

      {/* Footer ---------------------------------------------- */}
      <Footer />
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Accueil;
