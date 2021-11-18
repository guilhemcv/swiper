/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
import "./favoris.css";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import CarteFavoris from "../components/CarteFavoris/CarteFavoris";
import LogoContext from "../contexts/LogoContext";
import InputSelectFavoris from "../components/InputSelectFavoris/InputSelectFavoris";

function Favoris(props) {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { setLogoColor } = useContext(LogoContext);
  // State pour filtrer les favoris par catégories
  const [value, setValue] = React.useState("all");

  // Récupération du SessionStorage pour affichage
  const favFiltres = JSON.parse(sessionStorage.getItem("Favoris"));

  /**
   * Fonction qui permet de filtrer les favoris par catégorie
   * @param {*} event
   */

  function handleChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    setLogoColor("logo-black");
  });
  return (
    <div className="favoris">
      <div className="container-favoris">
        <InputSelectFavoris value={value} handleChange={handleChange} />
        <div className="flex-favoris">
          {favFiltres != null
            ? favFiltres.map((fav) => {
                if (value === "all") {
                  return (
                    <CarteFavoris data={fav} EcouteInfo={props.EcouteInfo} />
                  );
                }
                if (fav.type === value) {
                  return (
                    <CarteFavoris data={fav} EcouteInfo={props.EcouteInfo} />
                  );
                }
              })
            : ""}
        </div>
      </div>
      <div className="footer-favoris">
        <Footer />
      </div>
    </div>
  );
}

export default Favoris;
