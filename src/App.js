import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import MenuBurger from "./components/MenuBurger/MenuBurger";

function App() {
  return (
    <div className="App">
      <MenuBurger />
      <Router>
        <Switch>
          <Route path="/swipe" component={Swipe} />
          <Route path="/map" component={Map} />
          <Route path="/favoris" component={Favoris} />
          <Route exact path="/" component={Accueil} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
