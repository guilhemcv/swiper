import "./App.css";
// import Accueil from "./container/accueil";
// import Favoris from "./container/favoris";
// import Map from "./container/map";
// import Swipe from "./container/swipe";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import RouteSwitch from "./components/Switch/Switch";

function App() {
  return (
    <div className="App">
      <MenuBurger />
      <RouteSwitch />
    </div>
  );
}

export default App;
