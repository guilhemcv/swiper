/* eslint-disable import/no-cycle */
import React from "react";
import "./MenuBurger.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accueil from "../../container/accueil";
import Map from "../../container/map";
import Swipe from "../../container/swipe";
import NotFound from "../NotFound/NotFound";

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
          <nav id="nav-header">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/swipe">Swipe</Link>
              </li>
              <li>
                <Link to="/map">Carte interactive</Link>
              </li>
            </ul>
          </nav>
          {/*   <Switch>
            <Route path="/swipe">
              <Swipe />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
            <Route component={NotFound} />
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default MenuBurger;
