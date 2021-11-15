import "./favoris.css";
import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import CarteFavoris from "../components/CarteFavoris/CarteFavoris";
import LogoContext from "../contexts/LogoContext";

function Favoris({ markers }) {
  // Utilisation du LogoContext pour gérer la couleur du logo en fonction de la page où on est
  const { setLogoColor } = useContext(LogoContext);

  useEffect(() => {
    setLogoColor("logo-black");
  });
  return (
    <div className="favoris">
      {/* Corps favoris --------------------------------- */}
      <div className="container-favoris">
        <div className="flex-favoris">
          {markers.map((marker) => {
            console.log(marker);
            return <CarteFavoris data={marker} />;
          })}
        </div>
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
