import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <div className="header">
      <input id="burger" type="checkbox" />
      <label id="label-burger" htmlFor="burger">
        <span id="burger-top"></span>
        <span id="burger-middle"></span>
        <span id="burger-bottom"></span>
      </label>
      <Router>
        <nav id="nav-header">
          <ul>
            <li>
              <Link to="/" className="a">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/swipe">Swipe</Link>
            </li>
            <li>
              <Link to="/carte">Carte</Link>
            </li>
            <li>
              <Link to="/favoris">Favoris</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </div>
  );
}

export default MenuBurger;
