import React from "react";
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

      <nav id="nav-header">
        <ul>
          <li>
            <a href="pages/evenements.html">
              <h3>Swipe</h3>
            </a>
          </li>
          <li>
            <a href="pages/workplace.html">
              <h3>Carte</h3>
            </a>
          </li>
          <li>
            <a href="pages/jobs.html">
              <h3>Favoris</h3>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
