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
import LogoContext from "./contexts/LogoContext";

function App() {
  const [isChecked, setIsChecked] = React.useState("");
  const [logoColor, setLogoColor] = React.useState("logo-white");

  const [markers, setMarkers] = useState([]);

  // On utilise une fonction sur l'état du menu burger pour le fermer lorsqu'on clique sur un lien
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
  /* Fetch API pour markers cinémas */
  const getCinema = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=cinema&facet=theme&facet=categorie&facet=type&facet=commune&refine.commune=Nantes"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataCinemasFinal = () => {
          const cinemastableauvide = [];
          const cinemasNettoyes = data.records.map((record) => record.fields);
          cinemasNettoyes.forEach((cinemasnettoye) => {
            cinemastableauvide.push({
              site: cinemasnettoye.site_web,
              commune: cinemasnettoye.commune,
              nom: cinemasnettoye.nom,
              adresse: cinemasnettoye.adresse,
              telephone: cinemasnettoye.telephone,
              coordonnees: cinemasnettoye.geo_shape.coordinates,
            });
          });
          console.log(cinemastableauvide);
        };

        dataCinemasFinal();
      });
  };
  /* Fetch API pour markers restaurant */
  const getRestaurant = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=793866443_restaurants-en-loire-atlantique%40loireatlantique&q=&rows=300&facet=type&facet=categorie&facet=commune&facet=modepaiement&facet=departement&refine.commune=NANTES"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataRestaurantsFinal = () => {
          const restaurantstableauvide = [];
          const restaurantNettoyes = data.records.map(
            (record) => record.fields
          );
          restaurantNettoyes.forEach((restaurantnettoye) => {
            restaurantstableauvide.push({
              site: restaurantnettoye.commweb,
              commune: restaurantnettoye.commune,
              nom: restaurantnettoye.nomoffre,
              adresse: restaurantnettoye.adresse2,
              telephone: restaurantnettoye.commtel,
              coordonnees: [
                restaurantnettoye.longitude,
                restaurantnettoye.latitude,
              ],
            });
          });
          console.log(restaurantstableauvide);
        };

        dataRestaurantsFinal();
      });
  };
  /* Fetch API pour markers salles de spectacles */
  const getSpectacle = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Salle+de+spectacle&refine.commune=Nantes"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataSpectacleFinal = () => {
          const spectacletableauvide = [];
          const spectacleNettoyes = data.records.map((record) => record.fields);
          spectacleNettoyes.forEach((spectaclenettoye) => {
            spectacletableauvide.push({
              commune: spectaclenettoye.commune,
              nom: spectaclenettoye.nom,
              adresse: spectaclenettoye.adresse,
              coordonnees: spectaclenettoye.geo_shape.coordinates,
            });
          });
          console.log(spectacletableauvide);
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
          const piscinetableauvide = [];
          const piscineNettoyes = data.records.map((record) => record.fields);
          piscineNettoyes.forEach((piscinenettoye) => {
            piscinetableauvide.push({
              commune: piscinenettoye.commune,
              nom: piscinenettoye.nom_complet,
              adresse: piscinenettoye.adresse,
              coordonnees: piscinenettoye.location,
              site_web: piscinenettoye.web,
              descriptif: piscinenettoye.infos_complementaires,
            });
          });
          console.log(piscinetableauvide);
        };
        dataPiscineFinal();
      });
  };
  /*  */

  /* Coralie */

  /*  */

  /* Lucas */

  /* Fetch API pour markers bicloo */
  const getBicloo = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole%40nantesmetropole&q=&rows=200&facet=commune&facet=descriptif"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataBiclooFinal = () => {
          data.records.forEach((record) => {
            const biclooNettoye = record.fields;
            const biclooTableauVide = [];
            biclooTableauVide.push({
              commune: biclooNettoye.commune,
              nom: biclooNettoye.nom,
              adresse: biclooNettoye.adresse,
              coordonnees: biclooNettoye.geo_shape.coordinates,
              type: "bicloo",
              img: "path",
              imgWidth: "35px",
              capacite: biclooNettoye.capacite,
            });
            const newMarkers = [...markers, ...biclooTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataBiclooFinal();
      });
  };

  /* Fetch API pour markers Sport */
  const getSport = () => {
    axios
      .get(
        "https://data.opendatasoft.com/api/records/1.0/search/?dataset=244400404_equipements-publics-nantes-metropole%40nantesmetropole&q=&rows=100&facet=theme&facet=categorie&facet=type&facet=commune&refine.categorie=Pratique+libre"
      )
      .then((response) => response.data)
      .then((data) => {
        const dataSportFinal = () => {
          data.records.forEach((record) => {
            const sportNettoyes = record.fields;
            const sportTableauVide = [];
            sportTableauVide.push({
              commune: sportNettoyes.commune,
              nom: sportNettoyes.nom_complet,
              adresse: sportNettoyes.adresse,
              coordonnees: sportNettoyes.geo_shape.coordinates,
              type: "sport",
              img: "path",
              imgWidth: "35px",
              categorie: sportNettoyes.categorie,
              site_web: sportNettoyes.url_nantesfr,
            });
            const newMarkers = [...markers, ...sportTableauVide];
            setMarkers(newMarkers);
          });
        };
        dataSportFinal();
      });
  };

  /*  */

  return (
    <LogoContext.Provider value={{ logoColor, setLogoColor }}>
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
    </LogoContext.Provider>
  );
}

export default App;
