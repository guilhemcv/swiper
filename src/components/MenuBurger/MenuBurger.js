import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Accueil from "../../container/accueil";
import Swipe from "../../container/swipe";
import Carte from "../../container/map";
import Favoris from "../../container/favoris";
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

          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route exact path="/swipe">
              <Swipe />
            </Route>
            <Route exact path="/carte">
              <Carte />
            </Route>
            <Route exact path="/favoris">
              <Favoris />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default MenuBurger;
