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
            <a href="pages/evenements.html">Swipe</a>
          </li>
          <li>
            <a href="pages/workplace.html">Carte</a>
          </li>
          <li>
            <a href="pages/jobs.html">Favoris</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
