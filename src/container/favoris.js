import "./favoris.css";
import React from "react";
import MenuBurger from "../components/MenuBurger/MenuBurger";
import Footer from "../components/Footer/Footer";
import CarteRestaurant from "../components/CarteRestaurant/CarteRestaurant";
import CarteCinema from "../components/CarteCinema/CarteCinema";

function Favoris() {
  return (
    <div className="favoris">
      {/* Menu et Navigation --------------------------------- */}
      <MenuBurger />
      {/* ---------------------------------------------------- */}

      {/* Corps favoris --------------------------------- */}
      <div className="restaurant">
        <h1>Restaurants</h1>
        <CarteRestaurant />
        <CarteRestaurant />
        <CarteRestaurant />
      </div>
      <div className="cinema">
        <h1>Cinémas</h1>
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
