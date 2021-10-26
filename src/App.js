import "./App.css";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";

function App() {
  return (
    <div className="App">
      <Accueil />
      <Swipe />
      <Map />
      <Favoris />
    </div>
  );
}

export default App;
