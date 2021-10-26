import "./App.css";
import Accueil from "./container/Accueil";
import Favoris from "./container/Favoris";
import Map from "./container/Map";
import Swipe from "./container/Swipe";

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
