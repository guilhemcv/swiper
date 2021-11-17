import React from "react";
import "./Footer.css";
import OpenWeather from "../OpenWeather/OpenWeather";
import facebook from "../../Assets/Images/facebook.png";
import instagram from "../../Assets/Images/instagram.png";
import twitter from "../../Assets/Images/twitter.png";

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
        <OpenWeather />
      </div>
      <div className="footer-bas">
        <a href="mentions.html" target="_blank">
          <p className="mentions">
            Mentions légales / Politiques de confidentialité
          </p>
        </a>
        <p className="footer-copyright">Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
