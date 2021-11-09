import "./favoris.css";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import CarteRestaurant from "../components/CarteRestaurant/CarteRestaurant";
import CarteCinema from "../components/CarteCinema/CarteCinema";
import LogoContext from "../contexts/LogoContext";

function Favoris() {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { setLogoColor } = useContext(LogoContext);

  useEffect(() => {
    setLogoColor("logo-black");
  });
  return (
    <div className="favoris">
      {/* Corps favoris --------------------------------- */}
      <div className="restaurant">
        <h1 className="titre-favoris">Restaurants</h1>
        <CarteRestaurant />
        <CarteRestaurant />
        <CarteRestaurant />
      </div>
      <div className="cinema">
        <h1 className="titre-favoris">Cinémas</h1>
        <CarteCinema />
        <CarteCinema />
        <CarteCinema />
      </div>
      {/* ---------------------------------------------------- */}

      {/* Footer --------------------------------- */}
      <div className="footer-favoris">
        <Footer />
      </div>
      {/* ---------------------------------------------------- */}
    </div>
  );
}

export default Favoris;
