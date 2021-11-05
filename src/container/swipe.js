/* eslint-disable import/no-cycle */
import "./swipe.css";
import React from "react";
import Footer from "../components/Footer/Footer";
import SwipeCard from "../components/Swipe-card/SwipeCard";

function Swipe() {
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
