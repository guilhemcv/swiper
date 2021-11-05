import "./App.css";
import Logo from "./components/Logo/Logo";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import Login from "./components/FormulaireConnect/FormulaireConnect";

function App() {
  return (
    <div className="App">
      <Logo />
      <MenuBurger />
      <Accueil />
      <Swipe />
      <Map />
      <Favoris />
      <Login />
    </div>
  );
}

export default App;
