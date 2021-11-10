import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./components/Logo/Logo";
import Accueil from "./container/accueil";
import Favoris from "./container/favoris";
import Map from "./container/map";
import Swipe from "./container/swipe";
import NotFound from "./components/NotFound/NotFound";
import "./components/MenuBurger/MenuBurger.css";

function App() {
  const [isChecked, setIsChecked] = React.useState("");
  const [markers, setMarkers] = useState([]);

  function handleIsChecked() {
    if (isChecked === "") {
      setIsChecked("checked");
    } else {
      setIsChecked("");
    }
  }
  /* useEffect pour les Fetch des APIS */
  useEffect(() => {
    getParking();
    getParc();
    getMusee();
    getCinema();
    getRestaurant();
    getSpectacle();
    getPiscine();
    getBicloo();
    getMarguerite();
    getSport();
  }, []);

  /* Guilhem */
  /* Fetch pour les parkings */
  const getParking = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_lieux-stationnement-nantes-metropole%40nantesmetropole&q=&rows=100&facet=type_usagers"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataParkingFinal = () => {
          data.records.forEach((record) => {
            const parkingnettoyes = record.fields;
            const parkingTableauVide = [];
            parkingTableauVide.push({
              commune: parkingnettoyes.commune,
              adresse: parkingnettoyes.adresse,
              nom: parkingnettoyes.nom,
              coordonnees: parkingnettoyes.geo_shape.coordinates,
              type: "parking",
              img: "path",
              imgWidth: "35px",
              places: parkingnettoyes.nb_places,
            });
            const newMarkers = [...markers, ...parkingTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataParkingFinal();
      });
  };
  /* Fetch API pour markers parc */
  const getParc = () => {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=100&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataParcFinal = () => {
          data.records.forEach((record) => {
            const parcnettoyes = record.fields;
            const parcTableauVide = [];
            parcTableauVide.push({
              commune: parcnettoyes.commune,
              adresse: parcnettoyes.adresse,
              nom: parcnettoyes.nom_complet,
              coordonnees: parcnettoyes.location,
              type: "parcs",
              img: "path",
              imgWidth: "35px",
              site_web: parcnettoyes.siteweb,
              jeux_enfants: parcnettoyes.jeux_enfants,
              acces: parcnettoyes.acces_transport_commun,
            });
            const newMarkers = [...markers, ...parcTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataParcFinal();
      });
  };
  /* Fetch API pour markers musées */
  const getMusee = () => {
    axios
      .get(
        "https://data.paysdelaloire.fr/api/records/1.0/search/?dataset=234400034_070-012_offre-touristique-patrimoineculturel-rpdl&q=nantes&rows=100&facet=type&facet=commune&facet=animauxacceptes&facet=accueilgroupe&facet=ouverturealannee&facet=resaenligneouinon&facet=tarifgratuit&facet=departement&refine.commune=NANTES"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataMuseeFinal = () => {
          data.records.forEach((record) => {
            const museesnettoyes = record.fields;
            const museesTableauVide = [];
            museesTableauVide.push({
              commune: museesnettoyes.commune,
              adresse: museesnettoyes.adresse1suite,
              nom: museesnettoyes.nomoffre,
              coordonnees: [
                museesnettoyes.gmaplongitude0,
                museesnettoyes.gmaplatitude0,
              ],
              type: "musees",
              img: "path",
              imgWidth: "35px",
              site: museesnettoyes.commweb,
            });
            const newMarkers = [...markers, ...museesTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataMuseeFinal();
      });
  };
  console.log(markers);
  /* Fetch API pour markers salles de spectacles */
  const getSpectacle = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Salle+de+spectacle&refine.commune=Nantes"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataSpectacleFinal = () => {
          data.records.forEach((record) => {
            const spectaclesnettoyes = record.fields;
            const spectaclesTableauVide = [];
            spectaclesTableauVide.push({
              commune: spectaclesnettoyes.commune,
              adresse: spectaclesnettoyes.adresse,
              nom: spectaclesnettoyes.nom,
              coordonnees: spectaclesnettoyes.geo_shape.coordinates,
              type: "spectacle",
              img: "path",
              imgWidth: "35px",
            });
            const newMarkers = [...markers, ...spectaclesTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataSpectacleFinal();
      });
  };
  /* Fetch API pour markers piscines */
  /* Coordonées inversées */
  const getPiscine = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_piscines-nantes-metropole%40nantesmetropole&q=&rows=100&facet=commune&facet=acces_pmr_equipt&facet=bassin_sportif&facet=pataugeoire&facet=toboggan&facet=bassin_apprentissage&facet=plongeoir&facet=solarium&facet=bassin_loisir&facet=accessibilite_handicap&facet=libre_service"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataPiscineFinal = () => {
          data.records.forEach((record) => {
            const piscinesnettoyes = record.fields;
            const piscinesTableauVide = [];
            piscinesTableauVide.push({
              commune: piscinesnettoyes.commune,
              adresse: piscinesnettoyes.adresse,
              nom: piscinesnettoyes.nom_complet,
              coordonnees: piscinesnettoyes.location,
              type: "piscine",
              img: "path",
              imgWidth: "35px",
              site_web: piscinesnettoyes.web,
              descriptif: piscinesnettoyes.infos_complementaires,
            });
            const newMarkers = [...markers, ...piscinesTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataPiscineFinal();
      });
  };
  /*  */

  /* Coralie */

  /*  */

  /* Lucas */

  /*  */

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <input
            id="burger"
            type="checkbox"
            checked={isChecked}
            readOnly={true}
          />
          <label id="label-burger" htmlFor="burger" onClick={handleIsChecked}>
            <span id="burger-top"></span>
            <span id="burger-middle"></span>
            <span id="burger-bottom"></span>
          </label>
          <nav id="nav-header">
            <ul>
              <li>
                <Link to="/swipe" className="a" onClick={handleIsChecked}>
                  Swipe
                </Link>
              </li>
              <li>
                <Link to="/map" className="a" onClick={handleIsChecked}>
                  Carte
                </Link>
              </li>
              <li>
                <Link to="/favoris" className="a" onClick={handleIsChecked}>
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
