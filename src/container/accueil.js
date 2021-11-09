/* eslint-disable import/no-cycle */
import "./accueil.css";
import React, { useContext, useEffect } from "react";
import HeaderAccueil from "../components/HeaderAccueil/HeaderAccueil";
import Footer from "../components/Footer/Footer";
import Avis from "../components/Avis/Avis";
import Carte from "../components/Carte/Carte";
import LogoContext from "../contexts/LogoContext";

function Accueil() {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { setLogoColor } = useContext(LogoContext);

  useEffect(() => {
    setLogoColor("logo-white");
  });
  return (
    <div className="accueil">
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
