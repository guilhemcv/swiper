import "./App.css";
// import Accueil from "./container/accueil";
// import Favoris from "./container/favoris";
// import Map from "./container/map";
// import Swipe from "./container/swipe";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import RouteSwitch from "./components/Switch/Switch";
import ButtonClick from "./components/Bouton/Bouton";

function App() {
  return (
    <div className="App">
      <MenuBurger />
      <RouteSwitch />
      <ButtonClick />
    </div>
  );
}

export default App;
