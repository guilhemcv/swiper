import "./accueil.css";
import React from "react";
import HeaderAccueil from "../components/HeaderAccueil/HeaderAccueil";
import Footer from "../components/Footer/Footer";
import Avis from "../components/Avis/Avis";
import Carte from "../components/Carte/Carte";

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
