import "./App.css";
import Accueil from "./container/accueil";
// import Favoris from "./container/favoris";
// import Map from "./container/map";
// import Swipe from "./container/swipe";
import SwipeCard from "./components/Swipe-card/SwipeCard";

function App() {
  return (
    <div className="App">
      <Accueil />
      <SwipeCard />
      {/* <Swipe />
      <Map />
      <Favoris /> */}
    </div>
  );
}

export default App;
