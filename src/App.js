import "./App.css";
import Logo from "./components/Logo/Logo";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import Accueil from "./container/accueil";
// import Favoris from "./container/favoris";
// import Map from "./container/map";
// import Swipe from "./container/swipe";
import SwipeCard from "./components/Swipe-card/SwipeCard";

function App() {
  return (
    <div className="App">
      <Logo />
      <MenuBurger />
      <Accueil />
      <SwipeCard />
      {/* <Swipe />
      <Map />
      <Favoris /> */}
    </div>
  );
}

export default App;
