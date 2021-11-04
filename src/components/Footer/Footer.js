import React from "react";
import "./Footer.css";
import facebook from "../../Assets/Images/facebook.png";
import instagram from "../../Assets/Images/instagram.png";
import twitter from "../../Assets/Images/twitter.png";
import nuage from "../../Assets/Images/icone-de-nuage.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-haut">
        <div className="footer-contact">
          <h2>Nous contacter</h2>
          <p>02 02 02 02 02</p>
          <p>contact@swiper.fr</p>
          <br />
          <p>9 rue des Olivettes, 44000 Nantes</p>
        </div>
        <div className="footer-reseaux">
          <a href="https://www.facebook.com">
            <img className="footer-logo" src={facebook} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img className="footer-logo" src={instagram} alt="logo instagram" />
          </a>
          <a href="https://www.twitter.com">
            <img className="footer-logo" src={twitter} alt="logo twitter" />
          </a>
        </div>
        <div className="footer-meteo">
          <div className="footer-meteo-titre">
            <h3>Nantes</h3>
            <h3>22°</h3>
          </div>
          <img className="footer-image-meteo" src={nuage} alt="logo nuage" />
        </div>
      </div>
      <div className="footer-bas">
        <div className="footer-mention">
          <a href="politique.html">
            <p>Mentions légales / Politiques de confidentialité</p>
          </a>
        </div>
        <p className="footer-copyright">Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
