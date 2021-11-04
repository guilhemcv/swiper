import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <div>
      <input id="burger" type="checkbox" />
      <label id="label-burger" htmlFor="burger">
        <span id="burger-top"></span>
        <span id="burger-middle"></span>
        <span id="burger-bottom"></span>
      </label>
      <nav id="nav-header">
        <ul>
          <li>
            <Link to="/" className="a">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/swipe" className="a" htmlFor="burger">
              Swipe
            </Link>
          </li>
          <li>
            <Link to="/map" className="a">
              Carte
            </Link>
          </li>
          <li>
            <Link to="/favoris" className="a">
              Favoris
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
