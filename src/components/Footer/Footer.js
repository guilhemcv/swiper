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
          <br />
          <a href="https://www.guithub.com/guilhemcv" target="_blank">
            <p>Guilhem</p>
          </a>
          <a href="https://github.com/Coucoralie" target="_blank">
            <p>Coralie</p>
          </a>
          <a href="https://github.com/lucas-rossolini" target="_blank">
            <p>Lucas</p>
          </a>
          <a href="https://github.com/maxime-baillon" target="_blank">
            <p>Maxime</p>
          </a>
        </div>
        <div className="footer-reseaux">
          <a href="https://www.facebook.com" target="_blank">
            <img className="footer-logo" src={facebook} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img className="footer-logo" src={instagram} alt="logo instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
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
