import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./MenuBurger.css";

function MenuBurger() {
  return (
    <div className="header">
      <input id="burger" type="checkbox" />
      <label id="label-burger" for="burger">
        <span id="burger-top"></span>
        <span id="burger-middle"></span>
        <span id="burger-bottom"></span>
      </label>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
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
        </div>
      </Router>
    </div>
  );
}

export default MenuBurger;
