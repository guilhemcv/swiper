import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import NotFound from "./components/NotFound/NotFound";
import "./components/MenuBurger/MenuBurger.css";

function App() {
  return (
    <div className="App">
      <Router>
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
