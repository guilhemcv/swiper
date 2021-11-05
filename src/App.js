import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Logo from "./components/Logo/Logo";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import NotFound from "./components/NotFound/NotFound";
import "./components/MenuBurger/MenuBurger.css";

function App() {
  const [isChecked, setIsChecked] = React.useState("");

  function handleIsChecked() {
    if (isChecked === "") {
      setIsChecked("checked");
    } else {
      setIsChecked("");
    }
  }
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <input id="burger" type="checkbox" checked={isChecked} />
          <label id="label-burger" htmlFor="burger" onClick={handleIsChecked}>
            <span id="burger-top"></span>
            <span id="burger-middle"></span>
            <span id="burger-bottom"></span>
          </label>
          <nav id="nav-header">
            <ul>
              <li>
                <Link to="/swipe" className="a" onClick={handleIsChecked}>
                  Swipe
                </Link>
              </li>
              <li>
                <Link to="/map" className="a" onClick={handleIsChecked}>
                  Carte
                </Link>
              </li>
              <li>
                <Link to="/favoris" className="a" onClick={handleIsChecked}>
                  Favoris
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/swipe" component={Swipe} />
          <Route path="/map" component={Map} />
          <Route path="/favoris" component={Favoris} />
          <Route exact path="/" component={Accueil} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
