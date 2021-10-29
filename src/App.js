import "./App.css";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import MenuBurger from "./components/MenuBurger/MenuBurger";

function App() {
  return (
    <div className="App">
      <Accueil />
      <Swipe />
      <Map />
      <Favoris />
      <MenuBurger />
    </div>
  );
}

export default App;
