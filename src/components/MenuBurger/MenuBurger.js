import React from "react";
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

      <nav id="nav-header">
        <ul>
          <li>
            <a href="pages/evenements.html">_Événements</a>
          </li>
          <li>
            <a href="pages/workplace.html">_Workplace</a>
          </li>
          <li>
            <a href="pages/jobs.html">_Jobs</a>
          </li>
          <li>
            <a href="pages/contact.html">_Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;
